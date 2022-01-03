Hay veces que no queremos, o simplemente no tiene sentido, que nuestras variables sean referenciadas por todas las funciones. Por suerte, podemos declarar variables tanto directamente en el programa, como dentro de una función:

```javascript
function elMasLargoSinEspacios(unString, otroString) {
  // trim es otra primitiva que quita los espacios al inicio y fin de un string
  let unStringSinEspacios = unString.trim(); 
  let otroStringSinEspacios = otroString.trim();
  
  if (unStringSinEspacios.length > otroStringSinEspacios.length) {
    return unStringSinEspacios;
  } else {
    return otroStringSinEspacios;
  }
}
```

Las variables inicializadas dentro de una función, conocidas como _variables locales_, no presentan mayor misterio. Sin embargo, hay que tener un particular cuidado :warning: ya que sólo se pueden utilizar dentro de la función en cuestión. Si quiero referenciarla desde otro lugar...

```javascript
let pregunta = "¿" + unStringSinEspacios + "?"
```

...¡boom! ¡se romperá! :collision:

Sin embargo, las variables inicializadas directamente en el programa, conocidas como _variables globales_, pueden ser leídas desde cualquier función. Por ejemplo:


```javascript
let pesoMaximoEquipajeEnGramos = 5000;

function puedeLlevar(pesoEquipaje) {
  return pesoEquipaje <= pesoMaximoEquipajeEnGramos;
}
```
 
> Como te habrás dado cuenta, nunca nos olvidamos de saludar ¡y ahora no es la excepción!

> Modificá la función `saludarA` para evitar la repetición de lógica. Para eso utilizá una variable local `finalDeSaludo`.
