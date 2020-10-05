// console.log("Console Working");

const cars = []; // Para almacenar todos los objetos (autos)
let flag = false;

function printCars() {
	const carsTableBody = document.getElementById('cars-table-body');
	carsTableBody.innerHTML = '';
	cars.forEach((car) => {
		const td = `<tr>
						<td>${car.brand}</td>
						<td>${car.model}</td>
						<td>${car.color}</td>
						<td>${car.year}</td>
						<td>${car.price}</td>
						<td><button class="btn btn-danger" onclick="removeCar(${car.id})">Delete</button></td>
						<td><button type="button" class="btn btn-warning" onclick="editCarButton(${car.id})">Edit</button></td>
					</tr>`
		carsTableBody.innerHTML += td;
	})
}; //AQUI TERMINA FUNCION PRINTCARS

function addCar() {
	
	const carsTableBody = document.getElementById('cars-table-body');
	const brand = document.getElementById('brand').value;
	const model = document.getElementById('model').value;
	const color = document.getElementById('color').value;
	const year = document.getElementById('year').value;
	const price = document.getElementById('price').value;

	const newCar = {
		id: cars.length + 1,
		brand: brand,
		model: model,
		color: color,
		year: year,
		price: price
	}
	console.log(cars)
	cars.push(newCar);
	printCars();



	// const td = `<tr>
	// 				<td>${brand}</td>
	// 				<td>${model}</td>
	// 				<td>${color}</td>
	// 				<td>${year}</td>
	// 				<td>${price}</td>
	// 			</tr>`
	// carsTableBody.innerHTML += td;
	// console.log(carsTableBody);
};     //AQUI TERMINA FUNCION ADDCAR()	

function removeCar(id) {
	const removedCarIndex =cars.findIndex((car) => car.id === id);
	cars.splice(removedCarIndex, 1);
	printCars();
}

function submitCar() {
	if(flag) {
		editCar();
	} else {
		addCar();
	}
}
function editCar () {
	const brand =   document.getElementById('brand').value  
	const model =	document.getElementById('model').value 
	const color =	document.getElementById('color').value 
	const year  =	document.getElementById('year').value 
	const price =	document.getElementById('price').value 
	flag.brand = brand
	flag.model = model
	flag.color = color
	flag.year = year
	flag.price = price
	printCars();
}
function editCarButton(id) {
	const car =cars.find((car) => car.id === id);
	document.getElementById('brand').value  = car.brand
	document.getElementById('model').value = car.model
	document.getElementById('color').value = car.color
	document.getElementById('year').value = car.year
	document.getElementById('price').value = car.price
	flag = car;
	console.log(car);
}