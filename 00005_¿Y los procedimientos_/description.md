¿Notaste algo distinto en la "función" del ejercicio anterior :mag:? Veámosla nuevamente:

```javascript
function pasarUnDiaNormal() {
  dias_sin_accidentes_con_velocirraptores = dias_sin_accidentes_con_velocirraptores + 1
}
```

¡No tiene `return`! Pero, ¿las funciones no tienen todas un `return`? :face_with_monocle:

Correcto, es que en realidad `pasar_un_dia_normal()` no es una función, ¡es un _procedimiento_! :open_mouth: 


A diferencia de Gobstones, en donde funciones y procedimiento usando palabras reservadas diferentes, en JavaScript se usa la misma palabra reservada `function`. De todas formas, se mantienen sus diferencias:

* las funciones **retornan un valor y no tienen efecto**, es decir, no cambian nuestras variables;
* los procedimientos **no retornan nada y tienen un efecto** al ser invocados. 

> Ahora que sabes la diferencia, definí un procedimiento `aumentar_fortuna` que duplique el valor de la variable global `pesos_en_mi_billetera`. No inicialices la variable, porque ya lo hicimos por vos (con una cantidad secreta de dinero :wink:).