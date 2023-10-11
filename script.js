document.addEventListener("DOMContentLoaded", function () {
    const nomeInput = document.getElementById("nome-contato");
    const telefoneInput = document.getElementById("telefone-contato");
    const adicionarContatoButton = document.getElementById("adicionar-contato");
    const tabelaContatos = document.getElementById("tabela-contatos");
    const numerosCadastrados = new Set();

    adicionarContatoButton.addEventListener("click", function () {
        const nome = nomeInput.value;
        const telefone = telefoneInput.value;

        if (nome && telefone) {
            if (numerosCadastrados.has(telefone)) {
                alert("Este número de telefone já foi cadastrado.");
                return;
            }

            const novaLinha = tabelaContatos.insertRow(-1);
            const nomeCelula = novaLinha.insertCell(0);
            const telefoneCelula = novaLinha.insertCell(1);
            nomeCelula.textContent = nome;
            telefoneCelula.textContent = telefone;

            numerosCadastrados.add(telefone);

            nomeInput.value = "";
            telefoneInput.value = "";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});