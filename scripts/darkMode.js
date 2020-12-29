const theme = document.getElementById('theme');
const body = document.querySelector('body');
const title = document.querySelector('.inputBox h2');
const btn = document.querySelector('.inputBox #btn');
const password = document.querySelector('.inputBox input#password');

function darkMode(){
  console.log('click.');
  body.classList.add('dark');
  body.style.backgroundColor = "#2c2c2c";
  title.style.color = "#fff";
  btn.style.color = "#000";
  btn.style.backgroundColor = "#8a8a8a";
  password.style.color = "#fff";
  password.style.border = "2px solid rgba(0,0,0,0.4)";
  password.style.boxShadow = "none";



  //body.classList.remove('dark');
}
