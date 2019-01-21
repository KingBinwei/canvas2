var c = document.querySelector('#drawing');
var ctx = c.getContext("2d");

var data = ctx.getImageData(0, 0, 400, 400);

function paintGreen(imageData) {
	var numPixels = imageData.data.length/4;
	for (var i = 0 ; i < numPixels; i++) {
		if (i % 10 === 0) {
			imageData.data[i * 4 + 1] = 255;
			imageData.data[i * 4 + 3] = 255;
		}
	}
	ctx.putImageData(imageData, 0, 0);
}
paintGreen(data);