// Generate a random addition problem for the CAPTCHA
function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const result = num1 + num2;
    return { question: `${num1} + ${num2} = ?`, answer: result };
}

captchabc = document.getElementById("captchabc");

// Initialize CAPTCHA
const captcha = generateCaptcha();
document.getElementById('captcha-text').textContent = captcha.question;

// Check the CAPTCHA
document.getElementById('check-captcha').addEventListener('click', function() {
    const userAnswer = parseInt(document.getElementById('captcha-input').value, 10);
    if (userAnswer === captcha.answer) {
        document.getElementById('captcha-result').textContent = "CAPTCHA solved!";
        captchabc.style.display = "block";
    } else {
        document.getElementById('captcha-result').textContent = "CAPTCHA incorrect. Try again.";
    }
});


const captchabutton = document.getElementById("captchabutton");

captchabutton.addEventListener("click", function(){
    window.location.href="booking.html";
});
