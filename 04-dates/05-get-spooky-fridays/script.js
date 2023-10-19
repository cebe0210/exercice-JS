/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let run = document.getElementById("run");
    let yearin = document.getElementById("year");

    run.addEventListener("click", calcul);

    function calcul (){
        let year = parseInt(yearin.value);
        let result = [];
        for(month = 0; month < 12; month++){
        let date = new Date(year, month, 13);
        if(date.getDay() === 5){
            result.push(date);
        }
        }
        if (result.length > 0){
            let resultat = result.map(date => date.toLocaleDateString('fr-FR')).join(", ");
            alert("il y a " + result.length + " vendredi 13 en " + year + " : " + resultat);
        }
        else {
            alert("Il n'y à aucun vendredi 13 en " + year);
        }
    }
    
})();
