const countdownEl = document.getElementById("countdown")
const countdownInput = document.getElementById("countdownAmount")
const countdownBtn = document.getElementById("countdownBtn")
const countdownLook = document.querySelector(".countdownLook")

let count = 0
let isRunning = false;

const startCountdown = () => {
    const timer = setInterval(() => {
        count--

        countdownEl.textContent = count

        if (count <= 0) {
            clearInterval(timer)
            isRunning = false
            countdownEl.style.fontSize = "15rem"
            countdownEl.textContent = "BLAST OFF!"
        }
    }, 1000)
}

countdownBtn.addEventListener("click", () => {
    count = Number(countdownInput.value)

    countdownInput.style.display = "none"
    countdownBtn.style.display = "none"

    countdownEl.textContent = count
    startCountdown()
})

countdownInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !isRunning) {
        count = Number(countdownInput.value)

        if (count <= 0) return

        isRunning = true

        countdownInput.style.display = "none"
        countdownBtn.style.display = "none"

        countdownEl.textContent = count
        startCountdown()
    } 
})