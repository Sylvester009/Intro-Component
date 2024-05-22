const button = document.getElementById("button");
const errMsg = document.getElementsByClassName("err-msg");
const labels = document.getElementsByTagName("label");
const errImg = document.getElementsByClassName("err-img");

const firstName = document.getElementById("f-name");
const lastName = document.getElementById("l-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

button.addEventListener("click", function (event) {
  // Prevent the default button click behavior
  event.preventDefault();

  // Get the inputs value
  var firstNameValue = firstName.value;
  var lastNameValue = lastName.value;
  var passwordValue = password.value;
  var emailValue = email.value;

  // Regular expression for inputs validation
  var firstNameRegex = /^[a-zA-Z]+$/;
  var lastNameRegex = /^[a-zA-Z]+$/;
  var passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the inputs are valid
  const inputsValue = [
    firstNameValue,
    lastNameValue,
    emailValue,
    passwordValue,
  ];
  const inputsRegex = [
    firstNameRegex,
    lastNameRegex,
    emailRegex,
    passwordRegex,
  ];

  let allValid = true;

  for (let i = 0; i < inputsRegex.length; i++) {
    if (!inputsRegex[i].test(inputsValue[i])) {
      errMsg[i].textContent = "Input is incorrect/empty";
      labels[i].style.borderColor = "hsl(0, 93%, 68%)";
      errImg[i].style.display = "block";
      allValid = false;
      return;
    } else {
      errMsg[i].textContent = "valid Input"; // Clear the error message if input is valid
      errMsg[i].style.color = "green";
      errImg[i].style.display = "none"; // Hide the error image if input is valid
      labels[i].style.borderColor = ""; // Reset label border color if input is valid
    }
  }

  if (allValid) {
    button.value = "Form Submitted";
  }
});
