const generateRandomPassword = (lengthOfPassword = 30) => {
  const lettersArr = "abcdefghijklmnopqrstuvwxyz".split("");
  const password = [];
  let i = lengthOfPassword;
  while (i !== 0) {
    i--;
    let randomCharacter = "";
    const randomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);
    const randomLetter = lettersArr[randomNumber(lettersArr.length)];
    if (randomNumber(2) === 1) {
      password.push(randomLetter.toUpperCase());
    } else {
      password.push(randomLetter.toLowerCase());
    }
  }
  return password.join("");
};

//Output of password
const createdPassword = document.getElementsByClassName("password")[0];

//Creating button
const generateButton = document.createElement("button");
generateButton.innerHTML = "Create password";
generateButton.addEventListener("click", () => {
  createdPassword.innerHTML = generateRandomPassword();
});

//Inserting button into DOM
const introSection = document.getElementsByClassName("intro")[0];
introSection.after(generateButton);
