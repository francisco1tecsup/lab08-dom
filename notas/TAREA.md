# Tarea: Mi componente interactivo
 
## Componente elegido

Se utilizo los siguientes componentes:
- **IMG** con id "imagen"
- **H2** con id"nombre", "precio"
- **P** con id "descripcion"
- **UL** con id "lista-componentes"
- **BUTTON** con id "btnavanzar", "btnretroceder", "btnagregar", "btnlimpiar" (lista) y botones que acompañan a cada item de la lista

## Codigo principal

### Creacion de clase y objetos a partir de una lista listaimg[] [listaimg2.js](../tarea/listaimg2.js):
```js
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

//Creacion de objetos

const arreglo7400 = [];

for (let i = 0; i < listaimg.length; i++){
  const chip = listaimg[i];
  const nuevaclase = new Componente(chip.nombre,chip.descripcion,chip.precio,chip.path);
  arreglo7400.push(nuevaclase);
}

```

### Creacion de los eventos para cambiar de imagenes, texto, agregar items a la lista y limpiar la lista:

```js
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
```
 
## Pruebas realizadas
| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
| click en btnretroceder | cambiar imagen y contenido en elementos IMG, H2, P |  Si|
| click en btnavanzar | cambiar imagen y contenido en elementos IMG, H2, P |  Si|
| click en btnagregar | Agrega nombre y descripcion en la lista |  Si|
| click en btnlimpiar | Elimina los elementos de las lista |  Si|
| click en boton de LI | Elimina un item de la lista |  Si|
 
## Por que disene asi mi clase

```text
Con esta clase basado en json o diccionarios me permite tener las mismas claves y diferentes valores por cada componente electronico, al recorrer la lista "listaimg" se puede crear un arreglo de objetos de la clase Componente.
```
```text
Al tener el arreglo de los objetos con un indice se puede acceder a los metodos de la clase y realizar cambios en el documento HTML.
```