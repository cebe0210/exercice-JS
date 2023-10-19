/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian", 
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    let run = document.getElementById("run");

    function arrays(){
        fruits.sort();
       let unique = [];

       for (let i = 0; i < fruits.length; i++){
        if(i === 0 || fruits[i] !== fruits[i -1]){
            unique.push(fruits[i])
        }
       }
       console.table(unique);
    }

    run.addEventListener("click", arrays);
})();
