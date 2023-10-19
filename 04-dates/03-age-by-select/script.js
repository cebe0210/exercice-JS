/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let dobday = document.getElementById("dob-day");
    let dobmonth = document.getElementById("dob-month");
    let dobyear = document.getElementById("dob-year");
    let run = document.getElementById("run");

    function calculage (){
        let day = parseInt(dobday.value);
        let month = parseInt(dobmonth.value);
        let year = parseInt(dobyear.value);
        let dateactu= new Date();
        let anniv = new Date(year, month -1, day); //month -1 car l'indexation commence à zero.
        let age = dateactu - anniv;
        let agean = Math.floor(age / (365.25 * 24 * 60 * 60 * 1000));
        let agemois = Math.floor((age % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
        let agejour = Math.floor((age % (365.25 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

            alert("Vous avez actuellement " + agean + " ans, " + agemois + " mois et " + agejour + " jours." );
    }
    run.addEventListener("click", calculage)
})();
