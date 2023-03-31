var AandB = {};
var AandC = {};

AandB['Toate'] = ['Toate', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6'];
AandB['A1'] = ['B1', 'B2', 'B3'];
AandB['A2'] = ['B4', 'B5'];
AandB['A3'] = ['B6'];

AandC['Toate'] = [
	'Toate',
	'C1',
	'C2',
	'C3',
	'C4',
	'C5',
	'C6',
	'C7',
	'C8',
	'C9',
	'C10',
];
AandC['A1'] = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];
AandC['A2'] = ['C7', 'C8', 'C9'];
AandC['A3'] = ['C10'];

var BandA = {};
var BandC = {};
BandA['Toate'] = ['Toate', 'A1', 'A2', 'A3'];
BandA['B1'] = ['A1'];
BandA['B2'] = ['A1'];
BandA['B3'] = ['A1'];
BandA['B4'] = ['A2'];
BandA['B5'] = ['A2'];
BandA['B6'] = ['A3'];

BandC['Toate'] = [
	'Toate',
	'C1',
	'C2',
	'C3',
	'C4',
	'C5',
	'C6',
	'C7',
	'C8',
	'C9',
	'C10',
];
BandC['B1'] = ['C1', 'C2', 'C3'];
BandC['B2'] = ['C4', 'C5'];
BandC['B3'] = ['C6'];
BandC['B4'] = ['C7'];
BandC['B5'] = ['C8', 'C9'];
BandC['B6'] = ['C10'];

var CandA = {};
var CandB = {};
CandA['Toate'] = ['Toate', 'A1', 'A2', 'A3'];
CandA['C1'] = ['A1'];
CandA['C2'] = ['A1'];
CandA['C3'] = ['A1'];
CandA['C4'] = ['A1'];
CandA['C5'] = ['A1'];
CandA['C6'] = ['A1'];
CandA['C7'] = ['A2'];
CandA['C8'] = ['A2'];
CandA['C9'] = ['A2'];
CandA['C10'] = ['A3'];

CandB['Toate'] = ['Toate', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6'];
CandB['C1'] = ['B1'];
CandB['C2'] = ['B1'];
CandB['C3'] = ['B1'];
CandB['C4'] = ['B2'];
CandB['C5'] = ['B2'];
CandB['C6'] = ['B3'];
CandB['C7'] = ['B4'];
CandB['C8'] = ['B5'];
CandB['C9'] = ['B5'];
CandB['C10'] = ['B6'];

window.onload = () => {
	createTable();
};

var myTable = document
	.getElementById('myTable')
	.getElementsByTagName('tbody')[0];

function myFunctionA(sel) {
	var selectB = document.getElementById('selectB');
	var selectC = document.getElementById('selectC');

	while (selectB.options.length) {
		selectB.remove(0);
	}

	while (selectC.options.length) {
		selectC.remove(0);
	}

	changeSelect(selectB, AandB, sel);

	changeSelect(selectC, AandC, sel);

	while (myTable.rows.length) {
		myTable.deleteRow(0);
	}

	switch (sel) {
		case 'A1':
			insertRows(0, 5);
			break;
		case 'A2':
			insertRows(6, 8);
			break;
		case 'A3':
			insertRowi(9);
			break;
		case 'Toate':
			createTable();
			break;
	}
}

function myFunctionB(sel) {
	var selectA = document.getElementById('selectA');
	var selectC = document.getElementById('selectC');

	while (selectA.options.length) {
		selectA.remove(0);
	}

	while (selectC.options.length) {
		selectC.remove(0);
	}

	changeSelect(selectA, BandA, sel);

	changeSelect(selectC, BandC, sel);

	while (myTable.rows.length) {
		myTable.deleteRow(0);
	}

	switch (sel) {
		case 'B1':
			insertRows(0, 2);
			break;
		case 'B2':
			insertRows(3, 4);
			break;
		case 'B3':
			insertRowi(5);
			break;
		case 'B4':
			insertRowi(6);
			break;
		case 'B5':
			insertRows(7, 8);
			break;
		case 'B6':
			insertRowi(9);
			break;
		case 'Toate':
			createTable();
			break;
	}
}

function myFunctionC(sel) {
	var selectA = document.getElementById('selectA');
	var selectB = document.getElementById('selectB');

	while (selectA.options.length) {
		selectA.remove(0);
	}

	while (selectB.options.length) {
		selectB.remove(0);
	}

	changeSelect(selectA, CandA, sel);

	changeSelect(selectB, CandB, sel);

	while (myTable.rows.length) {
		myTable.deleteRow(0);
	}

	for (let i = 1; i <= 10; i++) {
		if (sel === `C${i}`) {
			insertRowi(i - 1);
		}
	}
	if (sel === 'Toate') createTable();
}

function createTable() {
	fetch('./data.json')
		.then((response) => response.json())
		.then((data) => {
			for (let i = 0; i < 10; i++) {
				var newRow = myTable.insertRow();

				var newCellA = newRow.insertCell();
				newCellA.innerText = data[i].A;

				var newCellB = newRow.insertCell();
				newCellB.innerText = data[i].B;

				var newCellC = newRow.insertCell();
				newCellC.innerText = data[i].C;
			}
		});
}

function insertRowi(i) {
	fetch('./data.json')
		.then((response) => response.json())
		.then((data) => {
			var newRow = myTable.insertRow();

			var newCellA = newRow.insertCell();
			newCellA.innerText = data[i].A;

			var newCellB = newRow.insertCell();
			newCellB.innerText = data[i].B;

			var newCellC = newRow.insertCell();
			newCellC.innerText = data[i].C;
		});
}

function insertRows(a, b) {
	fetch('./data.json')
		.then((response) => response.json())
		.then((data) => {
			for (let i = a; i <= b; i++) {
				var newRow = myTable.insertRow();

				var newCellA = newRow.insertCell();
				newCellA.innerText = data[i].A;

				var newCellB = newRow.insertCell();
				newCellB.innerText = data[i].B;

				var newCellC = newRow.insertCell();
				newCellC.innerText = data[i].C;
			}
		});
}

function changeSelect(select, newSelect, sel) {
	var newOptions = newSelect[sel];
	if (newOptions) {
		var i;
		for (i = 0; i < newOptions.length; i++) {
			var option = new Option(newOptions[i], newOptions[i]);
			select.options.add(option);
		}
	}
}
