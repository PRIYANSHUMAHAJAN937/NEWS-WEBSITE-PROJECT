function login()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if (username==null || username==""){
alert("E-mail Address can't be blank");
return false;
}
else if(password.length<8){
alert("Password must be atleast 8 characters long.");
return false;
}}
