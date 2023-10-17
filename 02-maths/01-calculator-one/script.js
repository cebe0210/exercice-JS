/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    let opone = document.getElementById("op-one");
    let optwo = document.getElementById("op-two");
    let result = document.getElementById("resultat");

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let valeur1 = parseFloat(opone.value) ;
        let valeur2 = parseFloat(optwo.value) ;
        let somme = valeur1 + valeur2;
        result.textContent = `Résultat = ${somme}`
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let valeur1 = parseFloat(opone.value) ;
        let valeur2 = parseFloat(optwo.value) ;
        let soustraction = valeur1 - valeur2;
        result.textContent = `Résultat = ${soustraction}`
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let valeur1 = parseFloat(opone.value) ;
        let valeur2 = parseFloat(optwo.value) ;
        let multiplication = valeur1 * valeur2;
        result.textContent = `Résultat = ${multiplication}`
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let valeur1 = parseFloat(opone.value) ;
        let valeur2 = parseFloat(optwo.value) ;
        let division = valeur1 / valeur2;
        result.textContent = `Résultat = ${division}`
    });
})();
