/**
 * 이메일 보내기 
 */

function sendEmailCheck() {
	var from_nameStr = document.emailForm.from_name.value;
	var from_messageStr = document.emailForm.from_message.value;
	var reply_emailStr = document.emailForm.reply_email.value;
	var result = grecaptcha.getResponse();
	var service_id = 'gmail';
	var template_id = 'template_vmaqxyqf';
	var template_params = {
			from_name: from_nameStr,
			reply_email: reply_emailStr,
			from_message: from_messageStr
	};
	if(result.length != 0){
		emailjs.send(service_id,template_id,template_params);
		document.getElementById('emailModal').style.display='block';
		var frm = document.getElementsByName('emailForm')[0];
		frm.reset();
	}else{
		document.getElementById('capchaModal').style.display='block';
	}
}