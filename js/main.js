$('document').ready(function(){
	$('#lblOutputs').hide();
	$('#colo').hide();
	var iSec=0;
	var iMin=0;

	var timerId; // current timer if started

	$('#btnStart').click(function(){
		iSec=00;
	 	iMin=25; 
		clockStart();
		});

	$('#btnReset').click(function(){
		clockStop();
	});


	function clockStart() { 
	 $('#lblOutputs').show();
	 $('#colo').show();
	 timerId = setInterval(update, 1000);
	  //update();  // (*)
	}

	function clockStop() {
	  clearInterval(timerId);
	  timerId = null;
	  $('#lblMin').text("00");
	 	 $('#lblSec').text("00");
	 $('#lblOutputs').hide();
	 $('#colo').hide();
	}

	function update() {
		//Decrement Seconds Always
		console.log(iSec);
		iSec--;

		//If Minute is 0 and sec is 0 end the clock
		if(parseInt(iMin) === 0 && parseInt(iSec) === 0 ){
			console.log('Its Over');
			clockStop();
		}

		//Reset seconds to Count Down from 59
		if(parseInt(iSec) === -1){
			iMin = iMin-1;
			iSec = 59;
		}

		//Append Leading Zeroes
	 	 if (iSec < 10) iSec = '0'+parseInt(iSec);
	 	 if (iMin < 10) iMin = '0'+parseInt(iMin);

	 	 //Show the time in UI
	 	 $('#lblMin').text(iMin);
	 	 $('#lblSec').text(iSec);
	 	  $('#colo').text(':');

	  	}
});

