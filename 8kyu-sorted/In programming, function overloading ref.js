/*In programming, function overloading refers to the concept where multiple functions with the same names can have different implementations.However, in JavaScript, if there are multiple functions with the same name, the function that is defined at the last gets executed.
//github
The function overloading feature can be implemented in some other ways.
*/


// program to perform function overloading
//adding to github for

function sum() {

    // if no argument        
    if (arguments.length == 0) {
        console.log('You have not passed any argument');
    }

    // if only one argument 
    else if (arguments.length == 1) {
        console.log('Pass at least two arguments');
    }

    // multiple arguments
    else {
        let result = 0;
        let length = arguments.length;

        for (i = 0; i < length; i++) {
            result = result + arguments[i];
        }
        console.log(result);
    }
}

sum();
sum(5);
sum(5, 9);
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);



//============OUTPUT========================//
//result for the first log = You have not passed any argument
//result for the second log =  Pass at least two arguments
//14
//45