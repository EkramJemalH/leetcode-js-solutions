/*Email Extractor:
Given:

let email = "myname@gmail.com";


Extract only the username ("myname")

Extract only the domain ("gmail.com")*/

let email = "ekramjemal@gmail.com";
let index=email.indexOf("@");
if(email.includes("@gmail.com")){
  let username=email.slice(0,index);
  console.log(username);
  let hashtage=email.slice(index);
  console.log(hashtage);
}