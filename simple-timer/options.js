const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click", (event) => {
    chrome.storage.sync.set({name: nameInput.value}, () => console.log(`Name set to ${nameInput.value}`))
});
