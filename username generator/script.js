/*Username Generator:
Ask the user for their first and last name, then generate a username by:

Taking the first 3 letters of their first name

Adding the last 3 letters of their last name

Converting everything to lowercase */

let btn=document.getElementById("getusername");
btn.addEventListener("click",()=>{
  let firstName=document.getElementById("firstname").value.trim();
  let lastName=document.getElementById("secondname").value.trim();
  let username=firstName.slice(0,3)+lastName.slice(-3);
  username=username.toLowerCase();
  let userNameDisplay=document.getElementById("username");
  userNameDisplay.textContent=username;
})