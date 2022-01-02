¡Ups! `ReferenceError: numero is not defined` :collision:

Como vemos, para poder utilizar una variable tendremos que haberle dado un _valor inicial_ **antes**, o de lo contrario, JavaScript se quejará y nos dirá que no reconoce a la variable en cuestión. Y como en programación nos gusta tener términos para todo :stuck_out_tongue_closed_eyes:, a este acto de dar un valor inicial a una variable se lo conoce como _inicialización_.  

Por ejemplo, si hubieramos inicializado a nuestra variable con el valor 10...

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