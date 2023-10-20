/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let infos = [
        { 
        lastname: "Berthet", 
        firstname: "Cédric",
        age: 38, 
        city: "Koekelberg",
        country: "Belgique",
        }
    ];


    let run = document.getElementById("run");
    let info = infos[0];
    run.addEventListener("click", () => {
        console.log(`Je m'appel ${info.firstname} ${info.lastname} et j'ai ${info.age}. \n Je vis à ${info.city} en ${info.country}.`);
    });
       
})();
