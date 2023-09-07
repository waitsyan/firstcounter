let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0

function increment() {
    count += 1
    total += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalEl.textContent = "Total kudos: " + total
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0
    total = 0
    countStr = " "
    saveEl.textContent = "Previous entries: "
    totalEl.textContent = "Total kudos: " + total
    countEl.textContent = 0
}