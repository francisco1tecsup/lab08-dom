let posicion = 0;
let total = 0;

// Creacion de clase

class Componente {
  constructor(nombre, descripcion, precio, path) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.path = path;
  }
 
  getnombre() {
    return this.nombre;
  }

  getdescripcion() {
    return this.descripcion;
  }
 
  getprecio() {
    return this.precio;
  }

  getpath() {
    return this.path;
  }
}

const arreglo7400 = [];

for (let i = 0; i < listaimg.length; i++){
  const chip = listaimg[i];
  const nuevaclase = new Componente(chip.nombre,chip.descripcion,chip.precio,chip.path);
  arreglo7400.push(nuevaclase);
}
