let pennies = 1;

// function handleClick() {
//   console.log("I'm just to prove it's working!");
  // 🔺 Remember, this function is already hooked up to the button. You'll learn how to do this yourself soon! Your task is just to write the code inside this function itself.



// ## Task 1 - selecting and changing text

// Let's start out by changing the quote under the successful person to something more interesting.

//1. select the element
//2. change the content
//3. update?

// 👉 Use JavaScript to select the element with a class of `.quote` and store in a variable.

// 👉 Change its `textContent` to a quote of your choosing.

let qoute = document.querySelector('.quote')

qoute.textContent = "It didn't work for me!"

// ## Task 2 - selecting and changing style

// 👉 Select the `h1` tag using querySelector and store in variable.

// 👉 Change its `text-decoration` property to the value of `underline`.

let h1 = document.querySelector('h1')
h1.style.textDecoration = "underline";

// ## Task 3 - change the title

// Not all aspects of the page need to accessed with `querySelector`. Some have shortcuts on the `document` object.

// 👉 Use the correct property on the `document` object to change the `title` property of the `document` to a new value of your choosing. 

// Check the browser tab to make sure that it worked.

document.title = "MLM Scheme";

// ## Task 4 - getting the penny doubler working

// Now it's time to get those pennies piling up! The DOUBLE EM! button is already hooked up to the `handleClick` function behind the scenes - you'll learn how to do this yourself soon! 

// For now, your job is to write the code inside the function itself that manipulates the DOM to show a doubled amount of pennies on the page with each click.

// The function `handleClick` currently looks like this...

function handleClick() {

  pennies = pennies * 2;
  console.log(pennies);

  let output = document.querySelector('output')
  output.textContent = `${pennies} pennies`

}

// Within the function...

// 👉 Double the the value of the the pennies variable (already defined - look for it in the file!).

// 👉 Use the pennies variable to update the `textContent` of the output tag to be `${pennies} pennies`.

// ### 5.1 - add more proof

// 👉 Use JavaScript to create a paragraph element using the DOM.

// 👉 Inside this new paragraph, add some text with another sentence talking about how great our penny doubler is.

// 👉 Append your new paragraph as a child of the section element with the id `"proof-section"`.

let newPara = document.createElement('p')
newPara.textContent = "This scheme really is great. You can generate free money in jut a few clicks!"
let section = document.querySelector('#proof-section')
section.appendChild(newPara)

// ### 5.2 - add more tips

// We have some more top tips for financial success in the JavaScript file that we'd like to add to the current tips on the page. 
// These are in the `additionalTips` array. Your job now is to add them to the unordered list with the id of `#tips-list` on the DOM.

// 👉 Use a for loop to loop through the array of additional tips.

// 👉 For each tip...

// - create an `li` element
// - set the `textContent` of the `li` element to be the current tip
// - append the newly created element as a child of the `ul`

let additionalTips = [
  "Keep your pennies is a glass jar",
  "Pick up every penny you find on the ground!",
  "Don't let your partner know...",
];

for(i=0;i<additionalTips.length;i++) {

let newLi = document.createElement('li')
newLi.textContent = additionalTips[i]
let ul = document.querySelector('#tips-list')
ul.appendChild(newLi)


}

// ### Bonus 1 - remove that last tip

// Hmm... On second thought, maybe that last additional tip isn't so great.

// 👉 Use the DOM to select the last tip in hte tips list and remove it from the page.

// let removeTips = document.querySelectorAll('#tips-list');

// removeTips.removeChild()
const parentElement = document.querySelector('#tips-list')
const childElement = document.querySelector('li:nth-Child(6)')

parentElement.removeChild(childElement)

// ### Bonus 2 - show the current pennies in the title

// 👉 Put the code from task 3 in a function.

// 👉 Can you figure out how to have that function be called each time the DOUBLE EM! button is clicked?

function moneyTitle() {
  document.title = "MLM Scheme: Pennies " + pennies;
}
