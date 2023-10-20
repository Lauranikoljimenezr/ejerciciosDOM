document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const successMessage = document.getElementById("success-message");
      const requiredInputs = document.querySelectorAll(".required");
      const commentCounter = document.getElementById("counter");
      const commentInput = document.getElementById("password");

    function validateInput(input, errorElement, validationFunction, errorMessage) {
        input.addEventListener("input", function() {
            errorElement.textContent = "";
            const value = input.value;
            if (!validationFunction(value)) {
                errorElement.textContent = errorMessage;
            }
        });
    }
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let hasErrors = false;

        requiredInputs.forEach(function(input) {
            const value = input.value.trim();
            if (value === "") {
                input.nextElementSibling.textContent = "Este campo es obligatorio.";
                hasErrors = true;
            }
        });

    function isAgeValid(value) {
        const age = parseInt(value, 10);
        return age > 0 && age <= 100 && age % 1 === 0;
    }
    function isEmailValid(value) {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(value);
    }

    function isPasswordValid(value) {
        return value.length >= 8 && /^[a-zA-Z0-9]+$/.test(value);
    }

    validateInput(
        document.getElementById("name"),
        document.getElementById("name-error"),
        value => value.trim() === value,
        "El nombre no debe contener espacios al principio o al final."
    );

    validateInput(
        document.getElementById("age"),
        document.getElementById("age-error"),
        isAgeValid,
        "La edad debe ser un número positivo y menor o igual a 100."
    );

    validateInput(
        document.getElementById("email"),
        document.getElementById("email-error"),
        isEmailValid,
        "La dirección de correo electrónico no es válida."
    );

    validateInput(
        document.getElementById("password"),
        document.getElementById("password-error"),
        value => value.length >= 8 && /^[a-zA-Z0-9]+$/.test(value),
        "La contraseña debe tener al menos 8 caracteres y contener letras y números sin símbolos."
    );

    commentInput.addEventListener("input", function() {
                const password = commentInput.value;
               const passwordLength = password.length;
                commentCounter.innerText = 10 - passwordLength;
        
        
                 if (passwordLength > 10) {
                    commentInput.value = password.substr(0, 10);
                    commentCounter.innerText = 0;
                }
             });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const errorElements = document.querySelectorAll(".error-message");
        let hasErrors = false;

        errorElements.forEach(function(element) {
            if (element.textContent) {
                hasErrors = true;
            }
        });

        if (!hasErrors) {
            form.style.display = "none";
            successMessage.style.display = "block";
        }
    });
});
});
