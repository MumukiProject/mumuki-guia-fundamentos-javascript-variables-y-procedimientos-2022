¡Pasemos en limpio! :sparkles: Hasta acá vimos que: 

  1. las variables se **declaran** mediante la palabra reservada `let`;
  2. para **asignarles un valor** utilizamos el operador `=`. :warning: Es importante no confundirlo con el operador `===`, que sirve para comparar valores, no para asignarlos;
  3. siempre que declaremos una variable le asignaremos un valor inicial, en un sólo paso. Y como en programación nos gusta tener términos para todo :stuck_out_tongue_closed_eyes:, a este acto se lo conoce como **inicialización**;
  4. siempre que **referenciemos** (es decir, usemos) una variable, JavaScript lo intepretará como si estuvieramos usando el valor que le asignamos. 
   
Pero entonces, ¿qué pasa si intentás **referenciar** una variable que nunca declaraste? :scream:

> ¡Averigüémoslo! Tenemos esta función definida:
> 
> ```javascript
> function sumaSinSentido() {
>   return numero + 8;
> }
> ```
>
> Probala en la consola y fijate qué sucede.
