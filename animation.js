window.alert(
	" Please open this file in -moz- Firefox Browser for a better view 📡 "
);
function rangeSlider(value) {
	document.getElementById("bgRangeValue").style.width = +value + "%";
	document.getElementById("mobileRangeValue").style.width = +value + "%";
	document.getElementById("border").style.width = +value + "%";
}
