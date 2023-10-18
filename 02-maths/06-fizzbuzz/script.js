/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {
    let end = 100
    function fb(){
        for(let i = 0; i <= end; i++){


            if (i % 3 === 0 && i % 5 === 0){
                console.log("frizzbuee");
            }
            else if(i % 3 === 0){
                console.log("friz");
            }    
            else if (i % 5 === 0){
                console.log("buzz");
            }
            else {
                console.log(i);
            }
        }       
    }
    fb();
  }  
)();
