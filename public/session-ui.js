// ==========================================================================
// session-ui.js — roda no portal (index.html).
// Exige login e ajusta o bloco .top-actions: dados do usuário + botão Sair.
// ==========================================================================
(function () {
  const usuario = window.PortalAuth ? PortalAuth.getUsuario() : null;

  // Protótipo protegido: sem sessão, volta para o login.
  if (!usuario) {
    window.location.replace("login.html");
    return;
  }

  function montarHeader() {
    const acoes = document.querySelector(".top-actions");
    if (!acoes) return;

    acoes.innerHTML = `
      <button onclick="setView('mine')">☆ <span>Favoritos</span></button>
      <button>♧ <span>Avisos</span></button>
      <div class="user-chip" id="userChip" title="${usuario.nome} — ${usuario.perfil}">
        <span class="user-avatar">${usuario.iniciais || "US"}</span>
        <span class="user-meta">
          <strong>${usuario.nome}</strong>
          <small>${usuario.posto} · ${usuario.unidade}</small>
        </span>
      </div>
      <button class="btn-sair" id="btnSair">⭏ <span>Sair</span></button>
    `;

    document.getElementById("btnSair").addEventListener("click", () => {
      PortalAuth.encerrarSessao();
      window.location.href = "login.html";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montarHeader);
  } else {
    montarHeader();
  }
})();
