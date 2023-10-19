/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   
    let run = document.getElementById("run");
    let table = [];

    function arrays (){

    for (let i = 0; i < 10; i++){
        let random = Math.floor(Math.random() * 100) +1;
        table.push(random);
        let nombres = document.getElementById("n-" + (i+1));
        nombres.textContent = random;
    }
        let minimum = table[0];
    for (let i = 1; i < table.length; i++){
        if(table[i] < minimum){
            minimum = table[i];
        }
        let min = document.getElementById("min");
        min.textContent = minimum;
    }
    let maximum = table[0];
    for (let i = 1; i < table.length; i++){
        if(table[i] > maximum){
            maximum = table[i];
        }
        let max = document.getElementById("max");
        max.textContent = maximum;
    }
    let somme = 0;
    for (let i = 0; i < table.length; i++){
        somme += table[i];
        sum = document.getElementById("sum");
        sum.textContent = somme;
    }
    average = document.getElementById("average");
    average.textContent = somme/table.length;
    }
    run.addEventListener("click", arrays )
})();
