document.addEventListener("DOMContentLoaded", function () {
    const message = document.getElementById("message");
    const objects = document.querySelectorAll(".object");
    const input = document.getElementById("codeInput");

    let selectedObject = null;

    // Selecionar objeto ao clicar
    objects.forEach(object => {
        object.addEventListener("click", function () {
            selectedObject = this;
            message.textContent = `Digite o código para desbloquear: ${selectedObject.textContent}`;
            input.value = "";
            input.focus();
        });
    });

    // Verificar código
    window.checkCode = function () {
        if (selectedObject) {
            const correctCode = selectedObject.getAttribute("data-code");
            if (input.value === correctCode) {
                selectedObject.style.backgroundColor = "#32CD32"; // Verde
                selectedObject.style.color = "white";
                selectedObject.textContent += " ✅";
                message.textContent = "Código correto! Objeto desbloqueado!";
            } else {
                message.textContent = "Código incorreto. Tente novamente.";
            }
        } else {
            message.textContent = "Seleciona um objeto primeiro.";
        }
    };
    input.addEventListener("input", function () {
        checkCode();
        checkAllCodes();
    });
});

function checkAllCodes() {
    const allObjects = document.querySelectorAll(".object");
    let allCorrect = true;

    allObjects.forEach(object => {
        if (!object.textContent.includes("✅")) {
            allCorrect = false;
        }
    });

    if (allCorrect) {
        message.textContent = "Parabéns todos os códigos estão corretos! A próxima pista pedes a mim!";
    }
}