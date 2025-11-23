const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click", (event) => {
  console.log(nameInput.value);
});
