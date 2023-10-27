/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name(){
            return `${this._firstname} ${this._lastname}`;
        }
        set name(fullname){
            const parts = fullname.split(' ');
            this._firstname = parts[0];
            this._lastname = parts[1];
        }
    }
    const person = new Person("Satochi", "Nakamoto");
    console.log(person.name);

    person.name = "Vitalik Buterin";

    console.log(person.name);

})();
