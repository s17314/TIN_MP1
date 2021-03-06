function validateForm() {
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const indexInput = document.getElementById('index');
  const courseInput = document.getElementById('course');
  const errorFirstName = document.getElementById('errorFirstName');
  const errorLastName = document.getElementById('errorLastName');
  const errorIndex = document.getElementById('errorIndex');
  const errorCourse = document.getElementById('errorCourse');
  const errorsSummary = document.getElementById('errorsSummary');

  resetErrors([firstNameInput, lastNameInput, indexInput, courseInput], [errorFirstName, errorLastName, errorIndex, errorCourse], errorsSummary);

  let valid = true;

  if (!checkRequired(firstNameInput.value)) {
    valid = false;
    firstNameInput.classList.add("error-input");
    errorFirstName.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
    valid = false;
    firstNameInput.classList.add("error-input");
    errorFirstName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!checkRequired(lastNameInput.value)) {
    valid = false;
    lastNameInput.classList.add("error-input");
    errorLastName.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
    valid = false;
    lastNameInput.classList.add("error-input");
    errorLastName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
  }

  if (!checkRequired(indexInput.value)) {
    valid = false;
    indexInput.classList.add("error-input");
    errorIndex.innerText = "Pole jest wymagane";
  } else if (!checkTextLengthRange(indexInput.value, 1, 3)) {
    valid = false;
    indexInput.classList.add("error-input");
    errorIndex.innerText = "Pole powinno zawierać od 1 do 3 cyfr";
  }

  if (!checkRequired(courseInput.value)) {
    valid = false;
    courseInput.classList.add("error-input");
    errorCourse.innerText = "Wybierz kierunek z listy";
  }

  if (!valid) {
    errorsSummary.innerText = "Formularz zawiera błędy";
  }

  return valid;

}