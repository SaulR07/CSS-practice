// El código JavaScript es el encargado de mostrar el menú cuando tocamos en el icono de menú

/**
 * Mostrar el menú, añade una clase (panel-nav) a la etiqueta html que será la encargada de desplazar toda la página 15 em hacia la izquierda.
 * @author Saul Reyes Medina <saulreyesm@outlook.com>
 */
var is_open = 0;
var htmlElement = document.documentElement;
var $j = jQuery.noConflict();

addEventListener("touchend", (e) => {
	let element = e.target;

	if (is_open === 1) {
		// si está abierto

		if (!$j(element).closest("#menu").length > 0) {
			//y no pincho en navegación
			close_nav(); //ciérrate
		}
	} else {
		// si está cerrado
		if ($j(element).closest("#nav-open").length > 0) {
			//y pincho en nav open
			open_nav(); //abro
		}

		console.log($j(element).closest("#nav-open"));
		console.log(element.closest("#nav-open"));
	}
});

function close_nav() {
	htmlElement.classList.remove("nav-js");
	is_open = 0;
}

function open_nav() {
	htmlElement.classList.add("nav-js");
	is_open = 1;
}
