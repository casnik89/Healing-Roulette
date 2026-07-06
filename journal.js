const date = document.querySelector("#entry-date");
const title = document.querySelector("#entry-title");
const text = document.querySelector("#journal-entry");
const saveB = document.querySelector(".save");
const deleteB = document.querySelector(".delete");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const users = JSON.parse(localStorage.getItem("users")) || [];
const saveMessage = document.querySelector("#savemessage");

function message(text) {
    saveMessage.textContent = text;
}

/*Event to save journal entry to login account via current user or massage to the user that entry cannot be saved because they are not logged in.*/ 
saveB.addEventListener('click', function(event) {
     event.preventDefault();
if(!users) {
    message("Not currently signed in.");
    return;
     };

    const newEntry = {
        date: date.value,
        title: title.value,
        text: text.value
};

currentUser.entries.push(newEntry);
localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("currentUser", JSON.stringify(currentUser));
message("Writing saved!");
});


/*Rant and delete event*/


deleteB.addEventListener("click", function(event) {
    event.preventDefault();
    date.value = "";
    title.value = "";
    text.value = "";
    message("Rant erased!")
});

/*Button for selecting and viewing previous journal entries.*/

const prevButton = document.querySelector(".previous");
const prevEntries = document.querySelector(".entries");
const select = document.querySelector('.display');
const space = document.querySelector("#journal-space");

prevButton.addEventListener("click", function(event) {
    event.preventDefault();
    prevEntries.style.display = "block";
    console.log(currentUser.entries);

currentUser.entries.forEach((entry, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${entry.date} - ${entry.title}`;
    prevEntries.appendChild(option);

});
});


select.addEventListener('change', function(event) {
    const selectedIndex = event.target.value;
    const selectedEntry = currentUser.entries[selectedIndex];
    space.textContent = `${selectedEntry.date} - ${selectedEntry.title} ${selectedEntry.text}`;
    space.style.display = "block";
});