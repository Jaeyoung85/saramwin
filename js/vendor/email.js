/**
 * 이메일 보내기 
 */

function sendEmailCheck() {
	
	var from_nameStr = document.emailForm.from_name.value;
	var from_messageStr = document.emailForm.from_message.value;
	var reply_emailStr = document.emailForm.reply_email.value;
	
	var service_id = 'gmail';
	var template_id = 'template_vmaqxyqf';
	var template_params = {
		from_name: from_nameStr,
		reply_email: reply_emailStr,
		from_message: from_messageStr
	};
	console.log(document.getElementById("html_element"));
	console.log(grecaptcha.getResponse());
	/*if(from_nameStr != null){
		if(from_messageStr != null){
			if(reply_emailStr != null){
				emailjs.send(service_id,template_id,template_params);
				document.getElementById('emailModal').style.display='block';
				var frm = document.getElementsByName('emailForm')[0];
				frm.reset();
			}
		}
	}*/
}