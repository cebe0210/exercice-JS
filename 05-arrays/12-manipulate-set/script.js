/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ]);
     // your code here

    let run = document.getElementById("run");

    function arrays(){
        const tabfruits = Array.from(fruits);


        const modif = tabfruits.map(fruit => {
            if (fruit === "pomme"){
                return "banane";
            }
            else if (fruit === "cerise"){
                return "kiwi";
            }
            else {
                return fruit;
            }
        })
        const modifruits = new Set(modif);
        console.table(Array.from(modifruits))
    }
    run.addEventListener("click", arrays);
})();
