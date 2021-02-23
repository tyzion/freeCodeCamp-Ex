$( '#all-the-above' ).click( function () {
    $( '.container input[type="checkbox"]' ).attr('checked', this.checked)
})

var start = document.getElementById('start')
var startForm = document.getElementById('start-form')
var surveyForm = document.getElementById('survey-form')
var header = document.querySelector('.header')
var submit = document.getElementById('submit')
var finalScreen = document.getElementById('final-screen')

start.classList.add('start-btn')

start.addEventListener('click', () => {
    if (startForm.name.value == "") {
        alert('please insert a name')
    } else if (!startForm.email.checkValidity() ) {
        alert('please insert a mail (even a fake one)')
    } else {
        header.style.display = "none";
        startForm.style.display = "none";
        surveyForm.style.display = "flex";
        surveyForm.style.marginTop = '100px';
    }
})

submit.addEventListener('click', () => {
    if ( 10 < surveyForm.age.value && surveyForm.age.value < 100) {
        surveyForm.style.display = "none";
        startForm.style.display = "none";
        finalScreen.style.display = "flex"
    } else  {
        alert('age must be a number between 10 and 100')
    }
})
