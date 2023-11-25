const btn = document.querySelector("button");
const divMessage = document.querySelector(".alert");

const msg = "Formulário enviado!";

function ativar(msg) {
  const message = document.createElement("div");
  message.classList.add("message");
  message.innerText = msg;
  divMessage.appendChild(message);

  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}

btn.addEventListener("click", () => {
  ativar(msg);
});