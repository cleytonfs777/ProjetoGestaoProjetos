const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for Basic Auth for the /download route
function basicAuth(req, res, next) {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    // Valida usuário e senha "admin"
    if (login === 'admin' && password === 'admin') {
        return next();
    }
    
    // Caso contrário, solicita autenticação
    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Autenticação necessária para realizar o download.');
}

// Rota protegida para download do arquivo PDF
app.get('/download', basicAuth, (req, res) => {
    const file = path.join(__dirname, 'Receipt-2710-6286.pdf');
    res.download(file, 'Receipt-2710-6286.pdf', (err) => {
        if (err) {
            console.error("Erro ao baixar o arquivo:", err);
            if (!res.headersSent) {
                res.status(500).send("Erro ao baixar o arquivo.");
            }
        }
    });
});

// Serve os arquivos estáticos (o site) da pasta public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
