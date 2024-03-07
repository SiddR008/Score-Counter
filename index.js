let addOne = document.getElementById("score-home")

let count = 0


function increment1() {
    count += 1
    addOne.textContent = count
}

function increment3() {
    count += 3
    addOne.textContent = count
}

function increment5() {
    count += 5
    addOne.textContent = count
}

let addGuest = document.getElementById("score-guest")
let add = 0

function increment1guest() {
    add += 1
    addGuest.textContent = add
}

function increment3guest() {
    add += 3
    addGuest.textContent = add
}

function increment5guest() {
    add += 5
    addGuest.textContent = add
}

function Zero() {
    add = 0
    count = 0
    addOne.textContent=count 
addGuest.textContent=add
}
