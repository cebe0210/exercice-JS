/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here
    let run = document.getElementById("run");

    function inst(){

    let cat1 = new Cat("Skitty", 9);
    let cat2 = new Cat("Pixel", 6);

    cat1.newcat =() => {
        console.log(`Nom :${cat1.name}, Age : ${cat1.age} ans`);
    };
    cat2.newcat =() => {
        console.log(`Nom :${cat2.name}, Age : ${cat2.age} ans`);
    };
    cat1.newcat();
    cat2.newcat();
    };
    run.addEventListener("click", inst)

})();
