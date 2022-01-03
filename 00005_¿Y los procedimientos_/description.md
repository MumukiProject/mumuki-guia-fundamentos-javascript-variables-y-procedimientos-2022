¿Viste qué raro ese `undefined`? ¿Notaste algo distinto en la "función" del ejercicio anterior :mag:? Veámosla nuevamente:

```javascript
function pasarUnDiaNormal() {
  diasSinAccidentesConVelociraptores = diasSinAccidentesConVelociraptores + 1
}
```

¡No tiene `return`! Y por eso no devolvió nada, o mejor dicho, devolvió `undefined`, que significa "no definido" en inglés.

Pero, ¿las funciones no tienen todas un `return`? :face_with_monocle: Correcto, pero es que en realidad `pasarUnDiaNormal()` no es una función, ¡es un _procedimiento_! :open_mouth: 


A diferencia de Gobstones, en donde funciones y procedimiento usando palabras reservadas diferentes, en JavaScript se usa la misma palabra reservada `function`. De todas formas, se mantienen sus diferencias:

* las funciones **retornan un valor y no tienen efecto**, es decir, no cambian nuestras variables;
* los procedimientos **no retornan nada y tienen un efecto** al ser invocados. 

> ¡Ahora vamos a hacer algo de dinero :moneybag:!
>
> Definí el procedimiento `aumentarFortuna` que duplique el valor de la variable global `pesosEnMiBilletera`. No declares la variable, ya lo hicimos por vos (con una cantidad secreta de dinero) :wink:. 
> 