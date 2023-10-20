let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios "

// 1. ¿Qué método utiliza para saber la cantidad de caracteres?
// Imprima el resultado
// console.log(msg.length);
// 2. Convierta la cadena de texto entregada a minúsculas e imprima por consola la salida.
 // console.log(msg.toLowerCase())
// 3. Si la cadena contiene la palabra filtro en algú lado imprima un mensaje por consola con el valor true.
// console.log(msg.includes('entregando'))
// 4. Extrae la palabra "ejercicios" del mensaje entregado.
// imprime por consola
//console.log(msg.substring(112,122));
// 5. Reemplaza los espacio por el caracter "-" e imprime el resultado final.
//console.log(msg.replace('','-'))
// 6. Realiza en el DOM un software que compare si dos campos de password son iguales.

// 7. Crea una función que valide cuántas vocales tiene el msg entregado.
// function validar(msg) {
//    msg=msg.toLowerCase();
// const vocales='aeiouáéíóú';
// let contador=0;
// for (let index = 0; index < msg.length; index++) {
//   if (vocales.indexOf(msg[index])!==-1) {
//     contador++
//   }
    
// }
// return contador;
// }

// const cantidadDevocales=validar(msg);
// console.log(`la cadena tiene ${cantidadDevocales} vocales.`);

// 8. Realiza un programa basado en el mockup entregado, que guarde los comentarios agregados por el usuario, teniendo en cuenta lo siguiente:

// document.addEventListener("DOMContentLoaded", function() {
//     const commentTextarea = document.getElementById("comment");
//     const commentCounter = document.getElementById("counter");
//     const submitButton = document.getElementById("submit-comment");
//     const toUppercaseButton = document.getElementById("to-uppercase");
//     const toLowercaseButton = document.getElementById("to-lowercase");
//     const capitalizeButton = document.getElementById("capitalize");
//     const textArea = document.getElementById('comment');
// const mistakeMessage = document.getElementById('mistakeMessage')

// // * debe tener un contador que va disminuyendo conforme van terminándose el límite de caracteres que este será de 255.
//     commentTextarea.addEventListener("input", function() {
//         const comment = commentTextarea.value;
//         const commentLength = comment.length;
//         commentCounter.innerText = 255 - commentLength;


//         if (commentLength > 255) {
//             commentTextarea.value = comment.substr(0, 255);
//             commentCounter.innerText = 0;
//         }
//     });

//     textArea.addEventListener('input',validateText);

//     function validateText() {
//         const text = textArea.value;
    
//         if (text.trim() !== text) {
//             mistakeMessage.textContent = 'El mensaje no puede tener espacios';
//             mistakeMessage.style.color = 'red';
//         }else{
//             mistakeMessage.textContent = 'Ok';
//             mistakeMessage.style.color = 'green';
//         }
//     }
//     submitButton.addEventListener("click", function() {
//         const comment = commentTextarea.value.trim();
//         if (comment !== "") {
//             const commentBox = document.querySelector(".comment-box ul");
//             const li = document.createElement("li");
            
//            // * Los comentarios deberán salir en color verde y negrilla.
//             const commentText = document.createElement("p");
//             commentText.innerHTML = `<strong style="color: green">${comment}</strong>`;
//             li.appendChild(commentText);
            
//             commentBox.appendChild(li);
    
           
//             commentTextarea.value = "";
//             commentCounter.innerText = 255;
//         }
//     });
// // * Debe poder convertirlos a mayúscula o a minúscula.
//     toUppercaseButton.addEventListener("click", function() {
//         commentTextarea.value = commentTextarea.value.toUpperCase();
//     });

//     toLowercaseButton.addEventListener("click", function() {
//         commentTextarea.value = commentTextarea.value.toLowerCase();
//     });

//     capitalizeButton.addEventListener("click", function() {
//         const comment = commentTextarea.value;
//         commentTextarea.value = comment.charAt(0).toUpperCase() + comment.slice(1).toLowerCase();
//     });
// });

// Fecha de entrega(por parejas) --> Jueves 19 de octubre de 2023 a las 11.30 pm -> Link del repositorio.
// Nombre completo de los integrantes