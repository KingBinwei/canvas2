var c = document.querySelector('#drawing');
var ctx = c.getContext("2d");
var image = new Image();
image.onload = function() {
  ctx.drawImage(image, 0, 0);
}

image.src = "images/palette.jpg";
var makePixelGrayScale = function (r, g, b, a) {
	var y = (0.3 * r) + （0.59 * g） + (0.11 * b);
	return {r:y, g:y, b:y, a:y};
}

function makeGrayScale() {
	var r, g, b, a;
	var imageData = ctx.getImageData(0, 0, 300, 300);
	var numPixels = imageData.data.length/4;
	for (var i = 0; i < numPixels; i++) {
		r = imageData.data[i * 4 + 0];
		g = imageData.data[i * 4 + 1];
		b = imageData.data[i * 4 + 2];
 		a = imageData.data[i * 4 + 3];
 		pixel = makePixelGrayScale(r, g, b, a);
 		imageData.data[i * 4 + 0] = pixel.r;
 		imageData.data[i * 4 + 1] = pixel.g;
 		imageData.data[i * 4 + 2] = pixel.b;
 		imageData.data[i * 4 + 3] = pixel.a;
	}
	ctx.putImageDate(imageData,0 , 0);
}
