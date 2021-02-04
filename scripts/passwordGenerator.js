var alertBox = document.querySelector('.alertBox');

function getPassword(){
	var chars = "0123456789abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ!@#$%*()_{}[]£¢§";
	var passwordLength = 20;
	var password = "";

	for (var i=0; i<passwordLength; i++){
		var randomNumber = Math.floor(Math.random() * chars.length);
		password += chars.substring(randomNumber, randomNumber+1);
		}

        document.getElementById("password").value = password;
		alertBox.innerHTML = "New Password Copied: <br>" + password;
	}

function copyPassword(){
	var copyPassText = document.getElementById("password");
	copyPassText.select();
	copyPassText.setSelectionRange(0,9999);
	document.execCommand("copy");
	alert('Password copied to clipboard.');
/*alertBox.classList.toggle('active');
	setTimeout(function(){
	    //alertBox.classList.toggle('active');
		},2000)*/
    console.log('password copied.');
}
