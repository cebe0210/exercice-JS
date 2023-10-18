/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let opone = document.getElementById("op-one");
    let optwo = document.getElementById("op-two");
    const performOperation = operation => {

        let result;
        // perform the operation
        switch (operation) {
            case "addition":
                result = parseFloat(opone.value) + parseFloat(optwo.value);
           
            break;
            case "substraction":
                result = parseFloat(opone.value) - parseFloat(optwo.value);
            break ;
            case "division":
                result = parseFloat(opone.value) / parseFloat(optwo.value);
            break;
            case "multiplication":
                result = parseFloat(opone.value) * parseFloat(optwo.value);
            break;
            default:
                result = "invalid operation"
        }
        console.log(result);
        alert(result); 
        };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
       
    );
})();
