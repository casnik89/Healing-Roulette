const date = document.querySelector("#entry-date");
const title = document.querySelector("#entry-title");
const text = document.querySelector("#journal-entry");
const saveB = document.querySelector(".save");
const deleteB = document.querySelector(".delete");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));