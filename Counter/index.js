//document.getElementById("count-el").innerHTML = 5
// let count = 0
// count = count + 1
// console.log(count)
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
 function increment() {
    count += 1
   countEl.textContent = count
 }

 function save() {
   let countStr = count + " - " 
 saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
 }


// let welcomeEl = document.getElementById("welcome-el")
//  let namee = "Abeer"
//  let greeting = "Welcome back "
// let greetingName = greeting + namee
//  welcomeEl.innerText = greetingName
 
//  let emojy = "👋"
//  welcomeEl.innerText +=  emojy