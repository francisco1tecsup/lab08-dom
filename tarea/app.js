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

const imagenchip = document.getElementById("imagen");
const descripcionchip = document.getElementById("descripcion");
const nombrechip = document.getElementById("nombre");
const preciochip = document.getElementById("precio");
const btnRetroceder = document.getElementById("btnretroceder");
const btnAvanzar = document.getElementById("btnavanzar");
const btnagregar = document.getElementById("btnagregar");
const btnlimpiar = document.getElementById("btnlimpiar");
const listaproductos = document.querySelector("#lista-componentes");

imagenchip.src = arreglo7400[posicion].getpath();
nombrechip.textContent = arreglo7400[posicion].getnombre();
descripcionchip.textContent = arreglo7400[posicion].getdescripcion();
preciochip.textContent = "S/ " + arreglo7400[posicion].getprecio();

btnAvanzar.addEventListener("click", function() {
  posicion++;
  if (posicion >= arreglo7400.length) {
      posicion = 0;
  }
  imagenchip.src = arreglo7400[posicion].getpath();
  nombrechip.textContent = arreglo7400[posicion].getnombre();
  descripcionchip.textContent = arreglo7400[posicion].getdescripcion();
  preciochip.textContent = "S/ " + arreglo7400[posicion].getprecio();
});

btnRetroceder.addEventListener("click", function() {
  posicion--;
  if (posicion < 0) {
      posicion = arreglo7400.length - 1;
  }
  imagenchip.src = arreglo7400[posicion].getpath();
  nombrechip.textContent = arreglo7400[posicion].getnombre();
  descripcionchip.textContent = arreglo7400[posicion].getdescripcion();
  preciochip.textContent = "S/ " + arreglo7400[posicion].getprecio();
});

btnagregar.addEventListener("click", function() {
  const li = document.createElement("li");
  li.textContent = arreglo7400[posicion].getnombre() + ":  " + arreglo7400[posicion].getdescripcion();
  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "❌";
  btnBorrar.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(btnBorrar);
  listaproductos.appendChild(li);
});

btnlimpiar.addEventListener("click", function() {
  listaproductos.innerHTML = '';

});