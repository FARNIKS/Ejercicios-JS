inventario = {
  jabon: 50,
  shampoo: 30,
  arroz: 100,
  pasta: 75,
  aceite: 40,
  detergente: 60,
};

function agregarProducto(producto, cantidad) {
  if (inventario[producto] == undefined) {
    inventario[producto] = cantidad;
  } else {
    inventario[producto] += cantidad;
  }
}

agregarProducto("papaya", 20);

console.log(inventario);

agregarProducto("jabon", 20);

console.log(inventario["jabon"]);

compraProducto = (producto, cantidad) => {
  if (inventario[producto] == undefined) {
    agregarProducto(producto, cantidad);
    return (
      "El producto no existe en el inventario pero vamos a agregarlo agregarlo\n",
      inventario
    );
  } else if (inventario[producto] < cantidad) {
    return "No hay suficiente inventario del producto";
  } else {
    inventario[producto] -= cantidad;
    return `Compra exitosa. Quedan ${inventario[producto]} unidades de ${producto}`;
  }
};

let producto = "Guayaba";
let cantidad = "5";

let mensaje = compraProducto(producto, parseInt(cantidad));

console.log(mensaje);
