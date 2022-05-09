//sheepCounting in codewars
/*
GIT
commands to push this to main repository
git init
git status
git add . 
git commit -m "message"
git push origin main
files were added! 

*/


function countSheeps(arr) {
    return arr.filter(Boolean).length;
}

//OR

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce(function (result, current) {
        if (current) result++;
        return result;
    }, 0);
}

//OR

function countSheeps(arrayOfSheep) {
    var count = 0;

    arrayOfSheep.forEach(function (sheep) {
        if (sheep)
            count++;
    });

    return count;
}

//or
function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(sheep => sheep ? count++ : count)
    return count
}