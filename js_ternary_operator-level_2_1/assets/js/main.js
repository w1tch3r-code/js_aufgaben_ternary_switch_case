"use strict";

// ===================================================
//     JS-Vertiefung – Ternary-Operator-Level_2_1
// ===================================================

console.log("%c JS-Vertiefung – Ternary-Operator-Level_2_1", "color: tomato");

const btnSubmit = document.querySelector("#btn_submit");

btnSubmit.addEventListener("click", (event) => {
	event.preventDefault();
	const txtInput = document.querySelector("#txt").value;
	const output = document.querySelector("#output");
	const info = document.querySelector("#info");

	let txtOutput = txtInput.length === 0 ? 'Gib bitte eine Nachricht ein!' : '';
	txtInput.length > 0 ? output.textContent = `${txtInput}` : '';

	info.textContent = `${txtOutput}`;
	
});
