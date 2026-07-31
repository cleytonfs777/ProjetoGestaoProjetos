// ==========================================================================
// Login do protótipo — autenticação client-side (NÃO usar em produção).
// Credenciais de exemplo definidas em auth.js: admin / admin123
// ==========================================================================

const form   = document.getElementById("loginForm");
const alertEl = document.getElementById("loginAlert");
const toggle = document.getElementById("toggleSenha");
const senha  = document.getElementById("senha");

// Se já estiver autenticado, vai direto para o portal.
if (window.PortalAuth && PortalAuth.getUsuario()) {
  window.location.replace("index.html");
}

// Mostrar / ocultar senha
toggle.addEventListener("click", () => {
  const mostrando = senha.type === "text";
  senha.type = mostrando ? "password" : "text";
  toggle.textContent = mostrando ? "👁" : "🙈";
  toggle.setAttribute("aria-label", mostrando ? "Mostrar senha" : "Ocultar senha");
});

function mostrarErro(msg) {
  alertEl.textContent = msg;
  alertEl.classList.remove("hidden");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alertEl.classList.add("hidden");

  const usuario  = document.getElementById("usuario").value.trim();
  const password = senha.value;
  const lembrar  = document.getElementById("lembrar").checked;

  if (!usuario || !password) {
    mostrarErro("Preencha usuário e senha.");
    return;
  }

  const perfil = PortalAuth.autenticar(usuario, password);
  if (!perfil) {
    mostrarErro("Usuário ou senha inválidos.");
    senha.value = "";
    senha.focus();
    return;
  }

  PortalAuth.iniciarSessao(perfil, lembrar);
  window.location.href = "index.html";
});
