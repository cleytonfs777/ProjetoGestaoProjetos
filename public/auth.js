// ==========================================================================
// PortalAuth — módulo de autenticação/sessão do PROTÓTIPO.
// Validação de credenciais ocorre no servidor (variáveis AUTH_USER / AUTH_PASSWORD).
// ==========================================================================
(function (global) {
  const CHAVE = "cbmmg.portal.sessao";

  // storage escolhido conforme "manter conectado":
  //  - true  -> localStorage (persiste entre sessões do navegador)
  //  - false -> sessionStorage (some ao fechar a aba)
  function storages() {
    return [global.localStorage, global.sessionStorage];
  }

  async function autenticar(login, senha) {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario: login, senha })
    });

    let data = null;
    try {
      data = await res.json();
    } catch (e) {
      return null;
    }

    if (!res.ok || !data?.ok || !data.perfil) return null;
    return data.perfil;
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
