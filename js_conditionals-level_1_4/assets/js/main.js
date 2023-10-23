"use strict";

// ===================================================
//       JS-Vertiefung – Conditionals-Level-1_4
// ===================================================

console.log("%c JS-Vertiefung – Conditionals-Level-1_4", "color: tomato");

const btnSave = document.querySelector("#btn_save");

btnSave.addEventListener("click", (event) => {
	event.preventDefault();
	const pwdInput = document.querySelector("#pwd").value;
	const output = document.querySelector("#output");

	pwdInput.length >= 8
		? ((output.textContent = "Welcome to your Account"),
			(output.style.color = "green"))
		: ((output.textContent = "The passwort is to short"),
			(output.style.color = "red"));

	// let pwdCheck = pwdInput.length >= 8 ? "Welcome to your Account" : "The passwort is to short";
	// pwdCheck === "Welcome to your Account" ? output.style.color = "green" : output.style.color = "red";
	// output.innerHTML = `${pwdCheck}!`;
});
