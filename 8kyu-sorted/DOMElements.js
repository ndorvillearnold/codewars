//getting info from the DOM  tree
//adding to GIT


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/*

1. get DOM out the page
2. dev tools  and inspect what contains the whole page.
3. click over the section pages in category page
4. class mw-category
5. in console type in const category = document.querySelector(".mw-category");
6. then category


*/

//copy this code below to the console
const category = document.querySelector(".mw-category");
//then enter and type in "category" in the console see what is being shown

//copy this code below to the console
const links = category.querySelectorAll("a");
//then enter and type in "links" in the console see what is being shown. it shows all the LINKS on the page

const de = links.map(link.textcontent); //gives an error because map in not listed as a function in the DOM element

const links = links.map(link.textcontent);


//  the three dots is a SPREAD - it takes every element out of something  in this case the nodeList
const lilinksnksOne = [...category.querySelectorAll("a")]; //put brackets to make it an array

//However below is more readable
const links = Array.from(category.querySelectorAll("a"));

/* so to get what we need take what we wrote above
refresh browser history
 We will get undefined but then type in de and hit enter */

//need to find out why this didnt work
const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a"));
const de = links
    .map(link => link.textcontent)
    .filter(streetName => streetName.includes("de"));
