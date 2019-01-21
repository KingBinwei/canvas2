var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');
document.addEventListener('DOMContentLoaded', function() {
 	var v = document.querySelector('#v');
 	var canvas = document.querySelector('#drawing');
 	var ctx = canvas.getContext("2d");

 	v.addEventListener('loadedmetadata', function() {
 		canvas.width = this.videoWidth;
 		canvas.height = this.VideoHeight;
 	});
 	var draw = function() {
 		canvas.getContext("2d").drawImage(v, 0, 0);
 	}
 	v.addEventListener('play', function() {
 		if (v.paused || v.ended) return;
 		draw();
 	});
 });