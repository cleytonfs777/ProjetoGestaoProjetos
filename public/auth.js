// ==========================================================================
// PortalAuth — módulo de autenticação/sessão do PROTÓTIPO.
// Client-side apenas. Em produção, a validação de credenciais e a emissão
// de sessão devem ocorrer no servidor (ex.: SSO institucional / Guardião).
// ==========================================================================
(function (global) {
  const CHAVE = "cbmmg.portal.sessao";

  // Base de usuários de exemplo do protótipo.
  const USUARIOS = [
    {
      login: "admin",
      senha: "admin",
      nome: "Administrador do Portal",
      posto: "Gestor da Metodologia",
      unidade: "SDTS / DLF",
      perfil: "Administrador",
      iniciais: "AP"
    }
  ];

  // storage escolhido conforme "manter conectado":
  //  - true  -> localStorage (persiste entre sessões do navegador)
  //  - false -> sessionStorage (some ao fechar a aba)
  function storages() {
    return [global.localStorage, global.sessionStorage];
  }

  function autenticar(login, senha) {
    const u = USUARIOS.find(
      (x) => x.login.toLowerCase() === String(login).toLowerCase() && x.senha === senha
    );
    if (!u) return null;
    // nunca devolve a senha para a sessão
    const { senha: _omit, ...perfil } = u;
    return perfil;
  }

  function iniciarSessao(perfil, lembrar) {
    const alvo = lembrar ? global.localStorage : global.sessionStorage;
    const outro = lembrar ? global.sessionStorage : global.localStorage;
    try {
      outro.removeItem(CHAVE);
      alvo.setItem(CHAVE, JSON.stringify({ ...perfil, em: Date.now() }));
    } catch (e) {
      // storage indisponível (modo restrito): mantém em memória
      global.__sessaoMemoria = { ...perfil, em: Date.now() };
    }
  }

  function getUsuario() {
    for (const s of storages()) {
      try {
        const raw = s.getItem(CHAVE);
        if (raw) return JSON.parse(raw);
      } catch (e) { /* ignora */ }
    }
    return global.__sessaoMemoria || null;
  }

  function encerrarSessao() {
    for (const s of storages()) {
      try { s.removeItem(CHAVE); } catch (e) { /* ignora */ }
    }
    global.__sessaoMemoria = null;
  }

  global.PortalAuth = { autenticar, iniciarSessao, getUsuario, encerrarSessao };
})(window);
