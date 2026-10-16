require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const AUTH_USER = process.env.AUTH_USER || 'admin';
const AUTH_PASSWORD = process.env.AUTH_PASSWORD || 'admin123';

app.use(express.json());

function credenciaisValidas(login, password) {
    return login === AUTH_USER && password === AUTH_PASSWORD;
}

function perfilDoUsuario(login) {
    return {
        login,
        nome: 'Administrador do Portal',
        posto: 'Gestor da Metodologia',
        unidade: 'SDTS / DLF',
        perfil: 'Administrador',
        iniciais: 'AP'
    };
}

// Middleware for Basic Auth for the /download route
function basicAuth(req, res, next) {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (credenciaisValidas(login, password)) {
        return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Autenticação necessária para realizar o download.');
}

app.post('/api/login', (req, res) => {
    const login = String(req.body?.usuario || req.body?.login || '').trim();
    const password = String(req.body?.senha || req.body?.password || '');

    if (!login || !password) {
        return res.status(400).json({ ok: false, erro: 'Preencha usuário e senha.' });
    }

    if (!credenciaisValidas(login, password)) {
        return res.status(401).json({ ok: false, erro: 'Usuário ou senha inválidos.' });
    }

    return res.json({ ok: true, perfil: perfilDoUsuario(login) });
});

// Rota protegida para download do arquivo PDF
app.get('/download', basicAuth, (req, res) => {
    const file = path.join(__dirname, 'Receipt-2710-6286.pdf');
    res.download(file, 'Receipt-2710-6286.pdf', (err) => {
        if (err) {
            console.error('Erro ao baixar o arquivo:', err);
            if (!res.headersSent) {
                res.status(500).send('Erro ao baixar o arquivo.');
            }
        }
    });
});

// Serve os arquivos estáticos (o site) da pasta public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
