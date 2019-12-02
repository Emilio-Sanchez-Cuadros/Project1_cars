function calcularSeguro(tipoSeguro, modelo) {
	let precioAlfa = 100;
	let precioBmw = 150;
	let precioVw = 100;
	let precioFiat = 60;
	let precioBaseTerceros = 300;
	let precioBaseTodoRiesgo = 1000;
	let precioFinal = 0;

	if (document.getElementById("model").value == "Alfa Romeo 147" && document.getElementById("insurance").value == "Third party") {
		precioFinal = precioAlfa + precioBaseTerceros;
	}

	else if (document.getElementById("model").value == "BMW Serie 1" && document.getElementById("insurance").value == "Third party") {
		precioFinal = precioBmw + precioBaseTerceros;
	}

	else if (document.getElementById("model").value == "Volkswagen Golf" && document.getElementById("insurance").value == "Third party") {
		precioFinal = precioVw + precioBaseTerceros;
	}

	else if (document.getElementById("model").value == "Fiat 500" && document.getElementById("insurance").value == "Third party") {
		precioFinal = precioFiat + precioBaseTerceros;
	}

	if (document.getElementById("model").value == "Alfa Romeo 147" && document.getElementById("insurance").value == "Comprehensive") {
		precioFinal = precioAlfa + precioBaseTodoRiesgo;
	}

	else if (document.getElementById("model").value == "BMW Serie 1" && document.getElementById("insurance").value == "Comprehensive") {
		precioFinal = precioBmw + precioBaseTodoRiesgo;
	}

	else if (document.getElementById("model").value == "Volkswagen Golf" && document.getElementById("insurance").value == "Comprehensive") {
		precioFinal = precioVw + precioBaseTodoRiesgo;
	}

	else if (document.getElementById("model").value == "Fiat 500" && document.getElementById("insurance").value == "Comprehensive") {
		precioFinal = precioFiat + precioBaseTodoRiesgo;
	}

	document.getElementById('exampleInputPassword1').value = precioFinal + "€";
}