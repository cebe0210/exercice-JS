/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female"];
    // your code here
    let run = document.getElementById("run");

    function object(){
       if(keys.length === values.length){
        let object = {};

        for(i = 0; i < keys.length; i++){
            object[keys[i]]= [values[i]];
        }
        console.table(object);
       }
       else{
        console.log("les deux tableaux ne contiennent pas le meme nombre de valeur");
       }

    }

    run.addEventListener("click", object);
})();
