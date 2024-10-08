// Seleciona o botão que vai ativar a ação
const triggerButton = document.getElementById("triggerButton");

// Seleciona o container onde o botão vai aparecer
const buttonContainer = document.getElementById("buttonContainer");

// Adiciona um ouvinte de evento para o botão
triggerButton.addEventListener("click", function() {
    // Criar um novo botão
    const newButton = document.createElement("button");

    // Adiciona texto ao botão
    newButton.innerHTML = "Botão Dinâmico";

    // Adiciona um evento ao botão novo
    newButton.addEventListener("click", function() {
        alert("Novo botão clicado!");
    });

    // Adiciona o botão ao container no DOM
    buttonContainer.appendChild(newButton);
});
