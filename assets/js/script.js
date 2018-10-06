$(function(){
	
	var note = $('#note'),
		ts = new Date("October 07,2018 21:00:00"),
		newYear = true;
	
	if((new Date()) > ts){
	
		ts = (new Date()).getTime();
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the event!";
			}
			else {
				message += "Time to Upcoming Event";
			}
			
			note.html(message);
		}
	});
	
});
