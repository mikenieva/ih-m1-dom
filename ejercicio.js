// OBJETIVO -> OBTENER TODOS LOS DATOS DEL CAMPO DE TEXTO Y MOSTRARLOS EN UNA ETIQUETA NUEVA, AL MOMENTO DE QUE LE DE CLICK ENVIAR

// 1. SELECCIÓN
const form = document.getElementById("formulario")
const button = document.getElementById("enviar")
const results = document.getElementById("resultados")

// 2. MANIPULACIÓN

// A. EVENTOS
button.addEventListener("click", (event) => {


	// 1. EVITA LA RECARGA DE PÁGINA
	event.preventDefault()

	// 2. OBTENER TODOS LOS DATOS EN VARIABLES
	// -> [selector].[nombre del campo de texto].["value"]
	const name = form.nombre.value
	const email = form.email.value
	const birthDate = form.birthDate.value

	const dessert = form.dessert.checked

	let dessertIsCheckedMessage

	if(dessert){ 
		dessertIsCheckedMessage = "El usuario SÍ seleccionó el helado"
	 } else {
		 dessertIsCheckedMessage = "El usuario NO seleccionó el helado"
	 }

	 const selectedIndex = form.decisions.selectedIndex
	 const selectedOption = form.decisions.options[selectedIndex]
	 const selectedOptionText = selectedOption.text


	 results.innerHTML = `
	 		<h1>Datos de envío</h1>
	 		<p>El nombre es: ${name}</p>
		 	<p>El email es: ${email}</p>
		 	<p>El cumpleaños es: ${birthDate}</p>
		 	<p>${dessertIsCheckedMessage}</p>
		 	<p>El número elegido fue: ${selectedOptionText}</p>
	 `

	 return 
	

})



