/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    let run = document.getElementById("run");

    function arrays(){
        const peoples = Array.from(people);
        const somme = peoples.length;
        let search = "Alexandre";

        if(peoples.includes(search)){
           console.log(`Le nombre de personne est de : ${somme} et ${search} est present dans le tableau`);  
        }
        else{
            console.log(`Le nombre de personne est de : ${somme} et ${search} n'est pas present dans le tableau`);
        }
        
       
    }

    run.addEventListener("click", arrays);

})();
