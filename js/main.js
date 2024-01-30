let saludar = "¡Bienvenidos a Compras Controladas!"
console.log(saludar)
alert(saludar)

let nombre = prompt("Ingresa tu nombre:")
console.log("Hola", nombre)
alert("Hola"+ " " +nombre)

let carrito = [];
let totalGasto = 0;
let presupuesto = parseFloat(prompt("Ingrese su presupuesto:"));

while (presupuesto > totalGasto) {
    let producto = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    carrito.push({ producto, precio });

    totalGasto += precio;

    console.log("Carrito de compras:");
    for (let i = 0; i < carrito.length; i++) {
        console.log(`${carrito[i].producto}: $${carrito[i].precio}`);
    }
    console.log(`Total de gasto: $${totalGasto}`);

    let continuar = prompt("¿Desea agregar más productos? (Sí/No)").toLowerCase();
    if (continuar !== 'si') {
        break;
    }
}

console.log("Resumen final:");
for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].producto}: $${carrito[i].precio}`);
}
console.log(`Total de gasto: $${totalGasto}`);

if (totalGasto > presupuesto) {
    alert("¡Has excedido tu presupuesto!" + " " + "El monto alcanzado es de:" + " " + totalGasto);
} else {
    alert("¡Gracias por tu compra!" + " " + "El monto total es de:" + " " + totalGasto);
}
