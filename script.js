const feedbackButtons = Array.from(document.getElementsByClassName("feedback_button"))
const feedbackForm = document.getElementById("feedback_form")
const userRating = document.getElementById("user-rating")
const customAlert = document.getElementById("custom-Alert")

let buttonValue

feedbackButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    feedbackButtons.forEach((btn) => {
      btn.classList.remove("feedback_button--active")
    })
    e.target.classList.add("feedback_button--active")
    buttonValue = e.target.innerText
  })
})

feedbackForm.addEventListener("submit", (e) => {
  if (!buttonValue) {
    e.preventDefault()
  }
  else {
    e.preventDefault()
    feedbackForm.classList.add("feedback--inactive")
    customAlert.classList.remove("alert--inactive")
    userRating.innerText = buttonValue
  }
})