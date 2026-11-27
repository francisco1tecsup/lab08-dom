# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Firefox 160.0.1
 
## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde app.js | El texto del elemento h1 (id titulo) cambio de **Mi primera pagina interactiva** a **Hola desde la consola**| No, debido a que el cambio se realiza en la consola.|
| style.color | <br>El contenido de H1 cambia y tambien de estilo.<br>el color de fondo de p class "mensaje" tambien cambia| Si, debido a que el cambio esta alamcenado permanentemente en el archivo app.js|

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | El clic en el boton Sumar 1| 1 unidad|
| dblclick | Hacer doble clic en el boton Sumar 1| 1 unidad|
| mouseover | Al pasar el mouse sobre el boton| 1 unidad|

## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | Al escribir en el input nombre se muestra la combinacion de "Hola ..." en el elemento p.saludo| No|
| Enviar sin preventDefault | Se muestra el correo en el elemento p.resultado| Si|
| Enviar con preventDefault, correo sin @ | Se muestra en rojo la advertencia de correo no valido en el elemento p.resultado| No|
| Enviar con preventDefault, correo con @ | Se muestra el mensaje de correo enviado en el elemento p.resultado| No|

## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | conDescuento(0.25) |
|--------|--------|--------|--------------------|
| laptop | Laptop| S/ 2500.00|  S/ 1875.00|
| mouse | Mouse| S/ 45.00| S/ 33.75|
| teclado | Teclado| S/ 120.00| S/ 90.00|


