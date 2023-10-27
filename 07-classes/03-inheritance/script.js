/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Cat extends Animal {
        constructor(name){
            super();
            this.name = name;
        }
        static greeting = "Miaou";
    }

    class Dog extends Animal {
        constructor(name){
            super();
            this.name = name;
        }
        static greeting = "Woof";
    }
    const cat = new Cat("Athéna");
    const dog = new Dog("Robbie");

    console.log(cat.sayHello());
    console.log(dog.sayHello());
})();
