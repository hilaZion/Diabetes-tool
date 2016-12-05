window.onload = function()
{
	total();
}

function total()
{
	document.getElementById ("myform").onsubmit = function()
	{
		var age = checkRadio(document.getElementsByName('age'));
		var bmi = checkRadio(document.getElementsByName('bmi'));
		var diabetes = checkRadio(document.getElementsByName('diabetes'));
		var diat = checkRadio(document.getElementsByName('diat'));
	//show 'your result' message
		var sum = age + bmi + diabetes + diat;
		if (sum<25)
		{
			if (sum<16)
			{
			  document.getElementById('hidemsg').innerHTML = "<h3>your result</h3><p>Your results show that you currently have a low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.</p>";
			}
			else
			{
				document.getElementById('hidemsg').innerHTML = "<h3>your result</h3><p>Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at<a href=http://www.zha.org.zd> http://www.zha.org.zd</a></p>";
			}
		}
		else
		{
			document.getElementById('hidemsg').innerHTML = "<h3>your result</h3><p>Your results show that you currently have a HIGH risk of developing diabetes.<p>[Your main risk factors are your BMI and your diet.]</p> We advise that you contact the Health Authority to discuss your risk factors as soon as you can. Please fill in our <a href=contactform.html> contact form</a> and a member of the Health Authority Diabetes Team will be in contact with you.</p>";
		}
		
	return false;
	}
}

//checking witch radio button checked and return the value
function checkRadio(radio)
{
	var result;
	var len = radio.length;
	var i;
	for (i=0; i<len; i++)
	{
		if (radio[i].checked)
		{
			result = parseInt(radio[i].value);
			break;
		}
	}
	return result;
}



