"use strict";

// ===================================================
//          JS-Vertiefung – Ternary Operator
// ===================================================

console.log("%c JS-Vertiefung – Ternary Operator", "color: tomato");

const btnSubmit = document.querySelector("#btn_submit");

btnSubmit.addEventListener("click", (event) => {
	event.preventDefault();
	const ageInput = Number(document.querySelector("#age").value);
	const output = document.querySelector("#output");

	let ageCheck = ageInput >= 18 ? "volljährig" : "minderjährig";
	output.innerHTML = `Du bist ${ageCheck}!`;
});
