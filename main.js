document.getElementById("meuForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores dos campos A e B
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    const sucessoMensagem = document.getElementById("sucess-mensagem");
    const erroMensagem = document.getElementById("error-message");

    // Verificar se B é maior que A
    if (campoB > campoA) {
        sucessoMensagem.textContent = "Formulário válido! B é maior que A.";
        sucessoMensagem.style.display = "block"; // Exibe a mensagem de sucesso
        erroMensagem.style.display = "none"; // Oculta a mensagem de erro
    } else {
        erroMensagem.textContent = "Formulário inválido. B deve ser maior que A.";
        erroMensagem.style.display = "block"; // Exibe a mensagem de erro
        sucessoMensagem.style.display = "none"; // Oculta a mensagem de sucesso
    }
});
