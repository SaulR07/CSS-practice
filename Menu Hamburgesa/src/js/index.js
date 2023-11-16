document.getElementById("boton-hamburguesa").addEventListener("click", function () {
	var menu = document.getElementById("menu-hamburguesa");
	var icono = document.querySelector("#boton-hamburguesa span");

	if (menu.style.display == "none") {
		menu.style.display = "block";
		icono.innerHTML = "&#10005;";
	} else {
		menu.style.display = "none";
		icono.innerHTML = "&#9776;";
	}

	menu.classList.toggle("mostrando");
	icono.classList.toggle("rotar");
});
