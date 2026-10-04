const feedbackButtons = Array.from(document.getElementsByClassName("feedback_button"));
const feedbackForm = document.getElementById("feedback_form");
const userRating = document.getElementById("user-rating");
const customAlert = document.getElementById("custom-Alert");
let buttonValue;
feedbackButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        feedbackButtons.forEach((btn) => {
            btn.classList.remove('feedback_button--active');
        });
        const btnTarget = e.target;
        ;
        btnTarget.classList.add('feedback_button--active');
        buttonValue = btnTarget.textContent;
    });
});
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (buttonValue) {
        feedbackForm.classList.add("feedback--inactive");
        customAlert.classList.remove('alert--inactive');
        userRating.textContent = buttonValue;
    }
});
export {};
//# sourceMappingURL=script.js.map