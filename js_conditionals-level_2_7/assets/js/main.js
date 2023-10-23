"use strict";

// ===================================================
//       JS-Vertiefung – Conditionals-Level-2_7
// ===================================================

console.log("%c JS-Vertiefung – Conditionals-Level-2_7", "color: tomato");

const showTxt = document.querySelector("#show_txt");

showTxt.addEventListener("click", () => {
	const myListInput = document.querySelector("#mylist").value;
	const masseOutput = document.querySelector("#masse");
	const tdGewicht = document.querySelector("table tr td:nth-of-type(1)");

	switch (myListInput) {
		case "0":
			tdGewicht.innerHTML = "";
			masseOutput.innerHTML =
				"<p><b>Brief und Postkarte</b></p><p>L: 10 - 23,5 cm<br> B: 7 - 12,5 cm<br> H: bis 1 cm</p>";
			break;

		case "1":
			tdGewicht.innerHTML = "";
			masseOutput.innerHTML =
				"<p><b>DHL Paket 2 kg</b></p><p>bis 60 x 30 x 15 cm</p>";
			break;

		case "2":
			tdGewicht.innerHTML = "";
			masseOutput.innerHTML =
				"<p><b>DHL Paket 5 kg</b></p><p>bis 120 x 60 x 60 cm</p>";
			break;

		case "3":
			tdGewicht.innerHTML = "";
			masseOutput.innerHTML =
				"<p><b>DHL Paket 10 kg</b></p><p>bis 120 x 60 x 60 cm</p>";
			break;

		default:
			tdGewicht.innerHTML = "";
			masseOutput.innerHTML = "<b>Extra große Größe</b>";
	}
});
