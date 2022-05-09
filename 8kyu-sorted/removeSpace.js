

function noSpace(x) {
    return x.replace(/\s/g, '')
}

/*
1. always check whats there first
console.log(x) 8 j 8   mBliB8g  imjB8B8  jl  B
 
sometimes you have to
2. in order to do this you musy SPLIT it to create an array
3. you  re join the charachters
4. then remove the space with (/\s/g,'')

this would of worked also
function noSpace(x){return x.split(' ').join('')}

OR 
const noSpace = x => x.replace(/ /g, "");


GIT
commands to push this to main repository
git init
git status
git add . 
git commit -m "message"
git push origin main
files were added! 

*/

