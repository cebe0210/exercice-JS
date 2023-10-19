/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    function datedujour(){
        let target = document.getElementById("target");
        let date = new Date();
        let jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        let nomjour = jours[date.getDay()];
        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            };
        let format = date.toLocaleString('fr-FR', options);
        format = format.replace(":", "h")

        target.innerHTML = "Nous sommes le " + nomjour + " " + format;
    }
    datedujour();
})();
