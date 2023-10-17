/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let age, sexe, ville, confirmation;
    do {
    age = prompt("Quel âge avez-vous?");
    sexe = prompt("Quel est votre sexe?");
    ville = prompt("De quelle ville venez-vous?");
    confirmation = confirm("Est-ce que ces informations sont exactes?");

    if (!confirmation) {
        alert(`Veuillez à nouveau entrer les informations.`);
    }
    } while (!confirmation);

        alert(`Félicitation, vous avez ${age} ans, vous etes ${sexe}, vous vivez ${ville} et etes à prensent fichier à la CIA 🤪`);

})();
