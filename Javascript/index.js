//Declaring needed variables
const menuButton = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const login = document.querySelector('.login');
const mainDashboard = window.document.querySelector(".main-dashboard");
const sideDashboard = document.querySelector('.dashboard');
let switchOn = true;

// //Logic starts here


// // displays the sidebar
// menuButton.onClick = () => {
//   if (switchOn == true) {
//     sidebar.style.display = "block";
//     switchOn = false;
//   } else {
//     sidebar.style.display = "none";
//     switchOn = true;
//   }

// };




try{

const button = document.querySelector('.jswe');
const inputValue  = document.querySelector('.test');
function workClick(){
    console.log("its back");
}

button.addEventListener("click", workClick());

}
catch(e){
    alert(e.message);
}

// //change the pages
// sideDashboard.onClicick = () => {
// sideDashboard.style.border = "2px solid red";
// }

