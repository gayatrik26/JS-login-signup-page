const title = document.getElementById('title');
const namefeild = document.getElementById('namefeild');
const signinbtn = document.getElementById('signinbtn');
const  signupbtn = document.getElementById('signupbtn');

signupbtn.onclick = function(){
    title.innerHTML = "Sign Up";
    namefeild.style.display = "block";
}
signinbtn.onclick = function(){
    title.innerHTML = "Login";
    namefeild.style.display = "none";
}