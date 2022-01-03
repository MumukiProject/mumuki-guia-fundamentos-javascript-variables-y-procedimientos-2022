Hay veces que no queremos, o simplemente no tiene sentido, que nuestras variables sean referenciadas por todas las funciones. Por suerte, podemos declarar variables tanto directamente en el programa, como dentro de una función:

```javascript
function el_mas_largo_sin_espacios(un_string, otro_string) {
  let un_string_sin_espacios = str.strip(un_string)
  let otro_string_sin_espacios = str.strip(otro_string)
  
  if(len(un_string_sin_espacios) > len(otro_string_sin_espacios)):
    return un_string_sin_espacios
  else:
    return otro_string_sin_espacios
}
```

Las variables inicializadas dentro de una función, conocidas como _variables locales_, no presentan mayor misterio. Sin embargo, hay que tener un particular cuidado :warning: ya que sólo se pueden utilizar dentro de la función en cuestión. Si quiero referenciarla desde otro lugar...

```javascript
pregunta = "¿" + un_string_sin_espacios + "?"
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
