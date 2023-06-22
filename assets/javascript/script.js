const form = document.querySelector("#form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (nome.value === '') {
        nome.setCustomValidity('Por favor, preencha o campo "Nome".');
      } else {
        nome.setCustomValidity('');
      }
      
      if (email.value === '') {
        email.setCustomValidity('Por favor, preencha o campo "Email".');
      } else {
        email.setCustomValidity('');
      }

      isEmaiilValid();
      
      if (assunto.value === '') {
        assunto.setCustomValidity('Por favor, preencha o campo "Assunto".');
      } else {
        assunto.setCustomValidity('');
      }
      
      if (mensagem.value === '') {
        mensagem.setCustomValidity('Por favor, preencha o campo "Mensagem".');
      } else {
        mensagem.setCustomValidity('');
      }

    form.submit();
})

function isEmaiilValid(email) {
    const emailRegex = new RegExp(
        /ˆ[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$ˆ/
    );

    if(emailRegex.test(email)) {
        return true;
    }
    return false;
}