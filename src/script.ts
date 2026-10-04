const feedbackButtons = Array.from(document.getElementsByClassName("feedback_button")) as HTMLButtonElement[];
const feedbackForm = document.getElementById("feedback_form") as HTMLFormElement;
const userRating = document.getElementById("user-rating") as HTMLSpanElement;
const customAlert = document.getElementById("custom-Alert") as HTMLElement;

let buttonValue: string;

feedbackButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        feedbackButtons.forEach((btn) => {
            btn.classList.remove('feedback_button--active')
        });
        const btnTarget = e.target as HTMLButtonElement;;
        btnTarget.classList.add('feedback_button--active');
        buttonValue = btnTarget.textContent;
    });
});

feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(buttonValue) {
        feedbackForm.classList.add("feedback--inactive");
        customAlert.classList.remove('alert--inactive');
        userRating.textContent = buttonValue;
    }
})
