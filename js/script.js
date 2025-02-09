document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado com sucesso!"); // Verifique se isso aparece no console

    document.querySelector(".formLogin").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário

        let nome = document.querySelector("#nome").value;
        let password = document.querySelector("#password").value;

        // Verifica se o nome e a senha não estão vazios
        if (nome && password) {
            alert("Login realizado com sucesso!");
            window.location.href = "jogo/page1.html"
        } else {
            alert("Por favor, insira um nome e uma senha.");
        }
    });
});
