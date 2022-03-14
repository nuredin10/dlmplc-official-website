$(function() {

$("#fpsubmit").click(function() {
var submit = $("#fpsubmit").val();
var name = $("#fpname").val();
var option = $('#fpradio:checked').val();
var email = $("#fpemail").val();
var msg = $("#fpmsg").val();
var pattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 if(name =='')
{
			$("#quotes").show();
			$("#quotes").html("<p class='quotes'>*Enter Your Name</p>"); 
			

}
else if(email =='')
{
			$("#quotes").show();
			$("#quotes").html("<p class='quotes'>*Enter Your Email-ID</p>"); 
			

}

else if(!pattern.test(email))
{
			$("#quotes").show();
			$("#quotes").html("<p class='quotes'>*Enter Valid Email-ID</p>");
}
else if(option =='none')
{
			$("#quotes").show();
			$("#quotes").html("<p class='quotes'>*Choose the category</p>"); 
			

}
else if(msg =='')
{
			$("#quotes").show();
			$("#quotes").html("<p class='quotes'>*Complete your msg message</p>"); 
			

}
else
{
$("#quotes").hide();
$('#ajax-loading-image').show();
$.ajax({
type: "POST",
dataType: 'json',
url: "mail/enq_contact.php",
data:{ email: email, name: name, option: option, msg: msg, submit: submit},
cache: true,
success: function(data){
if(data == 0)
		{
			
			$("#quotes").show();
			$('#ajax-loading-image').hide();
			$("#quotes").html("<p class='quotes'>Message Send error.</p>");
			
        }
 else 
		{
			$("#quotes").hide();
			$('#ajax-loading-image').hide();
			$("#quote_msg").html("<p class='quote_msg'>Your message has been sent, Thank you.</p>");
			 $(".form_clear").trigger("reset");
        }
 
}  
});
}
return false;
});


});