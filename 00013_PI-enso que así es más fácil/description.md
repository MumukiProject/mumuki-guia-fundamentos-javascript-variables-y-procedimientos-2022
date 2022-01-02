Por suerte existe una herramienta que va a simplificar nuestra tarea de ahora en adelante: las _variables_. :grin:

Las variables nos permiten nombrar y reutilizar _valores_, de forma similar a cómo los procedimientos y funciones nos permiten dar nombres y reutilizar soluciones a problemas más pequeños. Por ejemplo, si hacemos...

``` javascript
let primerMes // declaración
primerMes = "enero" // asignación
```

...estamos primero _declarando_ la variable `primerMes` y luego, _asignándole_ `"enero"`.  Dicho de otra forma, en la primera línea creamos una variable y en la segunda, le damos un valor. :relieved: A partir de este momento, en cualquier lugar en donde usemos `primerMes`...

```javascript
function esAnioNuevo(dia, mes) {
  return dia === 1 && mes === primerMes;
}
```

...JavaScript sabrá que nos estamos refiriendo a `"enero"`:

```javascript
ム esAnioNuevo(1, "febrero")
false
ム esAnioNuevo(1, "enero")
true
```

Como declarar una variable y seguidamente asignarle un valor inicial es tan común, JavaScript nos permite hacer todo esto en un solo paso, como parte de la misma declaración. Y además, podemos declarar tantas variables como necesitemos, de cualquier tipo de dato: 

```javascript
let primerMes = "enero"; // declaración con asignación de valor inicial 
let cantidadDiasDeLaSemana = 7; 
```

> Veamos si se entiende: como ya no queríamos seguir repitiendo por todos lados el valor de pi :rolling_eyes:, hemos declarado una variable `pi`. ¡Pero nos faltó usarla! Cambiá en las funciones que tenemos definidas el valor `3.14159265358979` por la variable `pi` 