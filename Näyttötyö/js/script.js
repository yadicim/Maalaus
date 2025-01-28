					// JavaScript responsive
let menuBar = document.querySelector('#menu_bar'); 
let navLinks = document.querySelector('.nav_links'); 
let links = document.querySelectorAll('.nav_links a'); // Select all menu items

navLinks.style.top = '-450px'; 

menuBar.onclick = function() {
    if (navLinks.style.top === '-450px') { 
        navLinks.style.top = '50px'; // Show the menu
    } else {
        navLinks.style.top = '-450px'; // Hide the menu
    }
};



//navbar JQery Toggle

$(document).ready(function() {
	if (window.matchMedia("(max-width: 990px)").matches) {
	$("#palvelut-li").click(function(event) {
			event.stopPropagation();
	});
} else {
	
	$("#palvelut-li").click(function(event) {
			$("#palvelut-ul").slideToggle("slow");
			event.stopPropagation();
	});
}


$(document).click(function() {
	if (window.matchMedia("(min-width: 991px)").matches) {
			$("#palvelut-ul").slideUp("slow");
	}
	});
});


//Evästeet katsoin netistä Js koodi

document.addEventListener("DOMContentLoaded", () => {
	const cookieBanner = document.getElementById("cookie-banner");
	const acceptCookiesButton = document.getElementById("accept-cookies");

	
	if (!localStorage.getItem("cookiesAccepted")) {
			cookieBanner.style.display = "flex";
	}

	
	acceptCookiesButton.addEventListener("click", () => {
			localStorage.setItem("cookiesAccepted", "true");
			cookieBanner.style.display = "none";
	});
});






 
// Close menu when any nav link is clicked
links.forEach(function(link) {
    link.onclick = function() {
        navLinks.style.top = '-450px'; // Hide the menu after clicking
    };
});



//TESTAA VÄRIT

					function color1() {
							document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#DD4132;");
					}
					function color2() {
						document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#9E1030;");
					}
					function color3() {
					document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#FE840E;");
					}
					function color4() {
				document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#FF6F61;");
					}
					function color5() {
						document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#C62168;");
					}
					function color6() {
					document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#8D9440;");
					}
					function color7() {
					document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#FFD662;");
					}
					function color8() {
					document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#00539C;");
					}
					function color9() {
						document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#755139;");

					}
					function color10() {
						document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#D69C2F;");
					}
					function color11() {
					document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#616247;");
					}
					function color12() {
					document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#E8B5CE;");
					}
					function color13() {
					document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#D2C29D;");
						}
					function color14() {
						document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#343148;");
					}
					function color15() {
					document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#F0EAD6;");
					}
					function color16() {
					document.querySelector("#BACKGROUND rect").setAttribute("style", "fill:#615550;");
					}



					function color21() {
						document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#DD4132;");
				}
				function color22() {
					document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#9E1030;");
				}
				function color23() {
				document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#FE840E;");
				}
				function color24() {
			document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#FF6F61;");
				}
				function color25() {
					document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#C62168;");
				}
				function color26() {
				document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#8D9440;");
				}
				function color27() {
				document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#FFD662;");
				}
				function color28() {
				document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#00539C;");
				}
				function color29() {
					document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#755139;");

				}
				function color210() {
					document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#D69C2F;");
				}
				function color211() {
				document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#616247;");
				}
				function color212() {
				document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#E8B5CE;");
				}
				function color213() {
				document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#D2C29D;");
					}
				function color214() {
					document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#343148;");
				}
				function color215() {
				document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#F0EAD6;");
				}
				function color216() {
				document.querySelector("#BACKGROUND2 rect").setAttribute("style", "fill:#615550;");
				}



				function resetColors() {
					// ENSIMAINEN
					const background1 = document.querySelector("#BACKGROUND rect");
					if (background1) {
							background1.setAttribute("style", "fill:#ffffff;");
					}
			
					// TOINEN
					const background2 = document.querySelector("#BACKGROUND2 rect");
					if (background2) {
							background2.setAttribute("style", "fill:#ffffff;");
					}
			}



//YHTEISTIEDOT EMAIL COPY
//TÄMÄ SCRIPT KOODI ON OTETTU CHATGPT:STA

function copyEmail(event,email) {
	event.preventDefault(); 
	
	
	navigator.clipboard.writeText(email) 
		.then(() => {
			console.log("Kopioitu sähköpostiosoite: " + email);
			
			window.location.href = `mailto:${email}`;
		})
		.catch(err => {
			console.error("Kopiointi epäonnistui:", err);
		});
}

//YHTEISTIETO LOMAKKE


function info() {
	// Retrieve form values
	let x = document.forms["demo"]["nimi"].value;
	let y = document.forms["demo"]["email"].value;
	let z = document.forms["demo"]["tel"].value;
	let a = document.forms["demo"]["palvelu"].value;
	let d = document.forms["demo"]["lisa"].value;

	
	alert(
		"Nimi: " + x + "\n" +
		"Sähköposti: " + y + "\n" +
		"Puhelinnumero: " + z + "\n" +
		"Valittu palvelu: " + a + "\n" +
		"Lisätietoja: " + d+ "\n" +
		"Tiedokset ovat talennettu otetaan yhteyttä teidän kanssa"
	);
	return false; 
}


//GALLERIA

// MAALAUS KUVAT

$(document).ready(function(){
	$("#maalaus-button").click(function(){
		$("#img1").fadeIn();
		$("#img2").fadeIn(3000);
		$("#img3").fadeIn(5000);
	});
});

//TAPETOINTI KUVAT

$(document).ready(function(){
	$("#tapetointi-button").click(function(){
		$("#img10").fadeIn();
		$("#img11").fadeIn(3000);
		$("#img12").fadeIn(5000);
	});
});
			