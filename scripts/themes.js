const theme = document.querySelector('button#theme');
const body = document.querySelector('body');
const title = document.querySelector('.inputBox h2');
const btn = document.querySelector('.inputBox #btn');
const password = document.querySelector('.inputBox input#password');
const themesImg = document.querySelector('footer img .themes');

function themes(){
  console.log('click.');
  if(body.classList==''){
    dark();
  } else{
    light();
  }
}

function dark(){
  body.classList.toggle('dark');
  body.style.backgroundColor = "#2c2c2c";
  title.style.color = "#fff";
  btn.style.color = "#000";
  btn.style.backgroundColor = "#8a8a8a";
  password.style.color = "#fff";
  password.style.border = "2px solid rgba(0,0,0,0.4)";
  password.style.boxShadow = "none";
  body.style.transitionDelay = "0.3s";
  body.style.transitionDuration = "1s";
  console.log('dark mode successfully applied.');
}

function light(){
  body.removeAttribute('class')
  body.removeAttribute('style');
  title.removeAttribute('style');
  btn.removeAttribute('style');
  password.removeAttribute('style');
  body.style.transitionDelay = "0.3s";
  body.style.transitionDuration = "1s"
  console.log('light mode sucefully applied.');
}
