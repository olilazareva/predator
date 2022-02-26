// $('.carousel').carousel() {
// 	interval: 1000;
// }


(function(){
	"use strict";

	const translate = document.getElementById('translated');
	const codes = document.getElementById('carouselExampleFade');
	const codes2 = document.getElementById('carouselExampleFade2');
	const picture = document.getElementById('pic');
	const playBtn = document.getElementById('play-btn');


	function magic(){
			codes.style.display = "none";
			codes2.style.display = "none";
			translate.style.display = "block";

			if ($(window).width() >=992){
				picture.style.display = "block";
				playBtn.style.marginLeft = "0px"
			}

			window.addEventListener("resize", function(){
			if(window.matchMedia("(min-width: 992px)").matches){
				picture.style.display = "block";
				playBtn.style.marginLeft = "0px"
			} else{
				picture.style.display = "none";
				playBtn.style.marginLeft = "auto"
			}
		})

		};

	
		codes.onclick = magic;

		codes2.onclick = magic;



})();
