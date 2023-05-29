
let docTitle = document.title;
window.addEventListener('blur',() =>
{
  document.title= 'Come back ;('
});
window.addEventListener('focus' , () =>
{
  document.title= docTitle;  
});
// 
const form = document.querySelector("form");
const inputField = document.getElementById("inputText");
const addButton = document.getElementById("addButton"); 
const sortButton = document.getElementById("sort-button");
const list = document.getElementById("list"); 

sortButton.style.display = "none"; 

form.addEventListener("submit", function(event) {  
  event.preventDefault();
  const inputValue = inputField.value; 
  const listItem = document.createElement("li");
  const trashIcon = document.createElement("span"); 
  const checkmark = document.createElement("span");
  trashIcon.innerHTML = "&#128465";
  trashIcon.classList.add("trash-icon");
  checkmark.innerHTML = "✓";    
  checkmark.classList.add("checkmark"); 
  listItem.textContent = `■ ${inputValue}`; 
  listItem.appendChild(checkmark); 
  listItem.appendChild(trashIcon);
  list.appendChild(listItem); 
  inputField.value = ""; 
  sortButton.style.display = "block"; 

  trashIcon.addEventListener("click", function() 
  {
    listItem.classList.add("fade-out");
    setTimeout(function() 
    {  
      listItem.remove("fade-out");
    },500);
  });  

  checkmark.addEventListener("click", function() {
    listItem.classList.toggle("completed"); 
  });
});

sortButton.addEventListener("click", function() {
  const completed = document.querySelectorAll(".completed");
  for (const item of completed) {
    list.appendChild(item);
  }
});