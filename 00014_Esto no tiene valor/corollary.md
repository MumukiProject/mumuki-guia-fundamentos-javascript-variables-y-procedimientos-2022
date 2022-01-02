¡Ups! `ReferenceError: numero is not defined` :collision:

Como vemos, para poder utilizar una variable tendremos siempre que haberla declarado y asignado un valor inicial, o de lo contrario, JavaScript se quejará y nos dirá que no reconoce a la variable en cuestión.   

Por ejemplo, si hubieramos declarado e inicializado a nuestra variable con el valor 34...

```javascript
let numero = 34;

function sumaSinSentido() {
  return numero + 8;
}
```

...nuestra `sumaSinSentido()` sí que hubiera tenido sentido:

```javascript
ム sumaSinSentido()
42
```