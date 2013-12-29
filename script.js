// The Sky
var sky = document.querySelector('.sky');

// The Fireworks colors
var color = [
	'#EE437A',
	'#B0D274',
	'#BFBEDF',
	'#A9D9F5',
	'#EEEEEE',
	'#EEEEEE',
	'#F9E091',
	'#F9E091',
	'#E9ABF4'
];

// Randomize numbers with min and max
function random (min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

// Manipulate HEX
function shadeColor(color, percent) {   
 	var num = parseInt(color.slice(1),16),
    		amt = Math.round(2.55 * percent),
    		R = (num >> 16) + amt,
    		G = (num >> 8 & 0x00FF) + amt,
    		B = (num & 0x0000FF) + amt;

	return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

// Loop to create Fireworks randomly
for (var i = 0; i < 100; i++) {

	var randomTime = random(1000, 40000);

	window.setTimeout( function () {

		var fireworkDimension = random(60, 300);
		var fireworkTop = random(0, 60);
		var fireworkLeft = random(0, 80);
		var fireworkColor = color[random(0, color.length)];
		var fireworkZ = random(100, 300);

		var firework = document.createElement("div");
		firework.classList.add('firework');
		firework.style.width = fireworkDimension + 'px';
		firework.style.height = fireworkDimension + 'px';
		firework.style.top = fireworkTop + '%';
		firework.style.left = fireworkLeft + '%';
		firework.style.backgroundImage = 'radial-gradient('+ fireworkColor +', '+ shadeColor(fireworkColor, 10) +')';
		firework.style.boxShadow = '0 0 ' + (fireworkDimension / 2) + 'px ' + fireworkColor;
		firework.style.zIndex = fireworkZ + '';
		sky.appendChild(firework);

	}, randomTime)
}

