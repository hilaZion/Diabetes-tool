window.onload = function() 
{	
	document.getElementById('fname').focus();
	textHint();
	validateData();
	switchToolTip();
}

function validateData()
{
	document.getElementById ("mycontactform").onsubmit = function()
	{
	var allowsubmit = true;
	//first name validate (reference for RegEx : http://stackoverflow.com/questions/6067592/regular-expression-to-match-only-alphabetic-characters
		var fnameRegEx = /^[a-zA-Z]+$/;
		var fname = document.getElementById("fname").value;
		if (!(fname == ""))
		{
			if (fname.length > 1)
			{
				if(fnameRegEx.test(fname))
				{
					document.getElementById('fname_error').innerHTML = "";
					 
				}
				else
				{
					document.getElementById('fname_error').innerHTML = "* Please enter letters only";
					allowsubmit = false;
				}
			}
			else
			{
				document.getElementById('fname_error').innerHTML = "* Please enter more than one letter";
				allowsubmit = false;
			}
			
		}
		else
		{
			document.getElementById('fname_error').innerHTML = "* Please enter your first name";
			allowsubmit = false;
		}
	//last name validate (reference for RegEx : http://stackoverflow.com/questions/1413118/javascript-regex-string-should-include-only-alpha-space-hyphen)
	    var lnameRegEx = /^[-\a-zA-Z]+$/;
		var lname = document.getElementById("lname").value;
		if (!(lname == ""))
		{
			if (lname.length > 1)
			{
				if(lnameRegEx.test(lname))
				{
					document.getElementById('lname_error').innerHTML = "";
				}
				else
				{
					document.getElementById('lname_error').innerHTML = "* Please enter letters and hyphen only";
					allowsubmit = false;
				}
			}
			else
			{
				document.getElementById('lname_error').innerHTML = "* Please enter more than one letter";
				allowsubmit = false;
			}
		}
		else
		{
			document.getElementById('lname_error').innerHTML = "* Please enter your last name";
			allowsubmit = false;
		}
	
	//Health Authority Number (reference for RegEx : https://regex101.com/r/hP6vZ9/1 and http://www.w3schools.com/jsref/jsref_obj_regexp.asp)
		var heRegEx1 = /\bZHA\d{6}\b/i;
		var health = document.getElementById("health").value;
		if (!(health == "Enter ZHA NUmber"))
		{
			if ((heRegEx1.test(health)))
			{
				document.getElementById('health_error').innerHTML = "";
			}
			else
			{
				document.getElementById('health_error').innerHTML = "* The number is not valid. Please enter in the right format";
				allowsubmit = false;
			}
		}
		else
		{
		
			document.getElementById('health_error').innerHTML = "* Please provide your Health Authority Number";
			allowsubmit = false;
		}
	
	//email validate (for the regular expression I used the one from the the class presentation)
		var emailRegEx = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,9}/;
		var email = document.getElementById("email").value;
	
		if (!(email == ""))
		{
			if (emailRegEx.test(email))
			{
				document.getElementById('email_error').innerHTML = "";
			}
			else
			{
				document.getElementById('email_error').innerHTML = "* Please enter valid email address";
				allowsubmit = false;
			}
		}
		else
		{
			document.getElementById('email_error').innerHTML = "* Please enter email address";
			allowsubmit = false;
		}
	//Telephone Number validate (reference for RegEx : http://stackoverflow.com/questions/21203729/regular-expression-in-javascript-allow-only-numbers-optional-2-decimals
		var phoneRegEx = /^[0-9\b]+$/;
		var phone = document.getElementById("phone").value;
		if (phone)
		{
			if (phoneRegEx.test(phone))
			{
				document.getElementById('phone_error').innerHTML = "";
			}
			else
			{
				document.getElementById('phone_error').innerHTML = "* Please enter numbers only";
				allowsubmit = false;
			}
		}
		else
		{
			document.getElementById('phone_error').innerHTML = "";
		}
		return allowsubmit; 
	}
}

// Setting default text function
function textHint()
{
	var defaultText = "Enter ZHA NUmber"; 
	var txtElem = document.getElementById("health"); 
	txtElem.value = defaultText;
	txtElem.style.color = "#A8A8A8"; 
	txtElem.style.fontStyle = "italic";
	txtElem.onfocus = function() 
	{
		if (this.value === defaultText) 
		{
			this.value = "";
			this.style.color = "#000";
		}
	}
	txtElem.onblur = function() 
	{
		if (this.value === "")
		{
			this.value = defaultText;
			this.style.color = "#A8A8A8";
		}
	}
}

// Setting tooltip function
function switchToolTip()
{           
	document.getElementById('qmark').onmouseover = function()
	{
		var toolTip = document.getElementById('ttip');
		toolTip.style.display = 'block';
	} 	    
	document.getElementById('qmark').onmouseout = function()
	{
		var toolTip = document.getElementById('ttip');
		toolTip.style.display = 'none';
	} 	
}	

	

