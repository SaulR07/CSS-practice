// $(function () {
// 	$(".toggle").on("click", function () {
// 		if ($(".item").hasClass("active")) {
// 			$(".item").removeClass("active");
// 			$(this).find("a").html("<i class='fas fa-bars'><span>&#9776;</span></i>");
// 		} else {
// 			$(".item").addClass("active");
// 			$(this).find("a").html("<i class='fas fa-times'>X</i>");
// 		}
// 	});
// });

addEventListener("touchend", (e) => {
	let element = e.target;
	console.log(element);

	if ($(".item").hasClass("active")) {
		// si está abierto

		if (!$(element).closest("#menu").length > 0) {
			//y no pincho en navegación
			//ciérrate
			$(".item").removeClass("active");
			$("#toggle").find("a").html("<i class='fas fa-bars'><span>&#9776;</span></i>");
		}
	} else {
		// si está cerrado
		if ($(element).closest("#toggle").length > 0) {
			//y pincho en nav open
			//abro
			$(".item").addClass("active");
			$("#toggle").find("a").html("<i class='fas fa-times'>X</i>");
		}
	}
});
