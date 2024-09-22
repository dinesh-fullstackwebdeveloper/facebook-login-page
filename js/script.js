var checkbox = document.getElementById("show");
var password = document.getElementById("pass");

checkbox.addEventListener('click',()=>{
    var val = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type",val);
});