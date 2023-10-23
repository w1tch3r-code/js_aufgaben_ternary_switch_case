"use strict";

// ===================================================
//       JS-Vertiefung – Conditionals-Level-2_5
// ===================================================

console.log("%c JS-Vertiefung – Conditionals-Level-2_5", "color: tomato");

const btnCheck = document.querySelector("#btnCheck");

btnCheck.addEventListener("click", () => {
	const bundeslandInput = document.querySelector("#bundeslandInfo").value;
	const bundeslandoutput = document.querySelector("#bundeslandInfoErgebnis");

	switch (bundeslandInput) {
		case "Baden-Württemberg":
			bundeslandoutput.textContent =
				"Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
			break;

		case "Bayern":
			bundeslandoutput.textContent =
				"Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
			break;

		case "Berlin":
			bundeslandoutput.textContent =
				"Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
			break;

		case "Brandenburg":
			bundeslandoutput.textContent =
				"Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
			break;

		case "Bremen":
			bundeslandoutput.textContent =
				"Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
			break;

		case "Hamburg":
			bundeslandoutput.textContent =
				"Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
			break;

		case "Hessen":
			bundeslandoutput.textContent =
				"Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
			break;

		case "Mecklenburg-Vorpommern":
			bundeslandoutput.textContent =
				"Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
			break;

		case "Niedersachsen":
			bundeslandoutput.textContent =
				"Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
			break;

		case "Nordrhein-Westfalen":
		case "NRW":
			bundeslandoutput.textContent =
				"Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
			break;

		case "Rheinland-Pfalz":
			bundeslandoutput.textContent =
				"Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
			break;

		case "Saarland":
			bundeslandoutput.textContent =
				"Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
			break;

		case "Sachsen":
			bundeslandoutput.textContent =
				"Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
			break;

		case "Sachsen-Anhalt":
			bundeslandoutput.textContent =
				"Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
			break;

		case "Schleswig-Holstein":
			bundeslandoutput.textContent =
				"Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
			break;

		case "Thüringen":
			bundeslandoutput.textContent =
				"Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
			break;

		default:
			bundeslandoutput.textContent =
				"Ein solches Bundesland gibt es in Deutschland nicht.";
	}
});
