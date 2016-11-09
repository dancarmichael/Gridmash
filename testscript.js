
var motp = new Audio("taudio/motpintro.mp3")
var audio = new Audio("taudio/skyfall.mp3");
var count = 1
var alsoacount = 1
var butcount = 1
var wakara = document.getElementById("mate");
var bitcount = 1
var brickcount = 1
var loopcount = 1
var loopColorCount = 1;
var speed = document.getElementById("mate2");
var speedcount = 1;


$(document).ready(function(){

	console.log(count);

	$("#jstest").fadeIn(2000);
	console.log("Faded in");

	$("#push").click(function(){
		console.log("clicked");

		alsoacount = alsoacount + 1;

		if(alsoacount % 2 == 0){

			motp.play();
		}
		else{
			motp.pause();
		}
		


	});

	


	$("#pull").click(function(){
		console.log("Clicked");
		

		count = count + 1;

		if(count % 2 == 0){
			console.log("Even");
			playFile(this);
		}
		else{
			console.log("Odd");
			audio.pause();
		}


	});
	
	$("#hm").click(function(){
		audioplay();
	});


	$("#hit").click(function(){

		console.log("Clicked");

		butcount = butcount + 1

		if (butcount % 2 == 0){
			console.log("Even")
			button();
		}
		else{
			console.log("Odd")
			button2();
		}
		

	});

	$("#hit2").click(function(){

		bitcount = bitcount + 1;

		if(bitcount % 2 == 0){
			button3();
		}
		else{
			button4();
		}
	});

	$("#hit3").click(function(){

		brickcount = brickcount + 1;

		if(brickcount % 2 == 0){
			button5();
		}
		else{
			button6();
		}
	});

	$("#loop").click(function(){

		
		loopcount = loopcount + 1;

		if(loopcount % 2 == 0){
			loop();
			setColor();

		}
		else{
			setColor2();
		}
		console.log("Clicked")

	});

	$("#speed").click(function(){
		speedcount = speedcount + 1;

		if(speedcount % 2 == 0){
			setPlaySpeed();
		}
		else{
			correctPlaySpeed();
		}
	});
	
	

	$("#slider").slider({
	value  : 75,
    step   : 1,
    range  : 'min',
    min    : 0,
    max    : 100,
    change : function(){
        var value = $("#slider").slider("value");
        document.getElementById("mate").volume = (value / 100);
    }

});
		
	$("#slider2").slider({
	value  : 75,
    step   : 1,
    range  : 'min',
    min    : 0,
    max    : 100,
    change : function(){
        var value = $("#slider2").slider("value");
        document.getElementById("mate2").volume = (value / 100);
    }

});

	$("#slider3").slider({
	value  : 75,
    step   : 1,
    range  : 'min',
    min    : 0,
    max    : 100,
    change : function(){
        var value = $("#slider3").slider("value");
        document.getElementById("mate3").volume = (value / 100);
    }

});


});

	



function playFile(obj) {
		var sound = document.getElementById("sound");
		var reader = new FileReader();
		reader.onload = (function(audio) {return function(e) {audio.src = e.target.result;};})(sound);
		reader.addEventListener("load" , function(){
			document.getElementById("sound").play();

		});

		reader.readAsDataURL(obj.files[0]);

	
	}

	function playFile2(obj) {
		var music = document.getElementById("music");
		var reader = new FileReader();
		reader.onload = (function(audio) {return function(e) {audio.src = e.target.result;};})(music);
		reader.addEventListener("load" , function(){
			document.getElementById("music").play();

		});

		reader.readAsDataURL(obj.files[0]);

	
	}

function playFile3(obj) {
		var music = document.getElementById("sound3");
		var reader = new FileReader();
		reader.onload = (function(audio) {return function(e) {audio.src = e.target.result;};})(music);
		reader.addEventListener("load" , function(){
			document.getElementById("sound3").play();

		});

		reader.readAsDataURL(obj.files[0]);

	
	}

function ttt(obj){
	var p = prompt("What would you like to do now?");
}



function playFile4(obj) {
		var music = document.getElementById("mate");
		var reader = new FileReader();
		reader.onload = (function(audio) {return function(e) {audio.src = e.target.result;};})(music);
		reader.addEventListener("load" , function(){
			document.getElementById("mate").pause();

		});

		reader.readAsDataURL(obj.files[0]);
	}

function playFile5(obj) {
		var music = document.getElementById("mate2");
		var reader = new FileReader();
		reader.onload = (function(audio) {return function(e) {audio.src = e.target.result;};})(music);
		reader.addEventListener("load" , function(){
			document.getElementById("mate2").pause();

		});

		reader.readAsDataURL(obj.files[0]);

	}

function playFile6(obj) {
		var music = document.getElementById("mate3");
		var reader = new FileReader();
		reader.onload = (function(audio) {return function(e) {audio.src = e.target.result;};})(music);
		reader.addEventListener("load" , function(){
			document.getElementById("mate3").pause();

		});

		reader.readAsDataURL(obj.files[0]);

	}

function button(obj){
	var count = 0
	var play = document.getElementById("mate");
	play.play();
	
	
	$("#hit").click(function(){
		
	});
	
		
		
		console.log(count);
	

	
	
}

function button2(obj){
	var pause = document.getElementById("mate");
	pause.pause();
}

function button3(obj){
	var play2 = document.getElementById("mate2");
	play2.play();
}

function button4(obj){
	var pause2 = document.getElementById("mate2");
	pause2.pause();
}

function button5(obj){
	var play3 = document.getElementById("mate3");
	play3.play();
}

function button6(obj){
	var pause3 = document.getElementById("mate3");
	pause3.pause();
}


function vol(obj){
	var x = document.getElementById("mate");
	x.volume = volume.value/10;


}

function loop(obj){
	var l = document.getElementById("mate");
	
	l.onended = function(){
		console.log("The audio has ended");
		l.play();
	}
}


function setColor(obj){
	document.getElementById("loop").style.background="#000000";

}

function setColor2(obj){
	document.getElementById("loop").style.background="#48ca3b";

}

function myFunction(){
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
	if(!event.target.matches('.dropbtn')){
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i=0; i < dropdowns.length; i++){
			var openDropDown = dropdowns[i];
			if (openDropDown.classList.contains('show')){
				openDropDown.classList.remove('show');
			}
		}
	}
}



function setPlaySpeed(){
	var val = prompt("What would you like the speed to be?")
	speed.playbackRate = val;
}

function correctPlaySpeed(){
	speed.playbackRate = 1.0;
}
/*

function vol2(obj){
	var y = document.getElementById("mate2");
	y.volume = volume.value/10;
}

*/