let numbers = document.querySelectorAll(".stats .number")
let stats = document.querySelector(".stats")
let started = false



function startCount (num) {
    let goal = num.dataset.goal
    let count = setInterval(() => {
        num.textContent++
        if (num.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}

window.onscroll = function () {
    if (window.scrollY >= stats.offsetTop - 200) {
        if (!started) {
            numbers.forEach ((num) => startCount(num))
        }
        started = true
    }
}