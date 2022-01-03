_Todo muy lindo hasta acá, pero ¿por qué se llaman variables si no varian?_ :face_with_raised_eyebrow:

Bueno, es que en realidad sí pueden variar :sunglasses::

```javascript
// declaramos e inicializamos la variable para que valga 0...
let diasSinAccidentesConVelocirraptores = 0
// ... hacemos otras cosas...
// ...y más adelante, la volvemos a asignar, actualizando su valor
diasSinAccidentesConVelocirraptores = diasSinAccidentesConVelocirraptores + 1
// ¡ahora vale 1!
diasSinAccidentesConVelocirraptores
```

Incluso podríamos modificar variables globales desde otros lugares:

```javascript
// inicializamos la variable 
let diasSinAccidentesConVelocirraptores = 0

function pasarUnDiaNormal() {
  // acá adentro la actualizamos
  diasSinAccidentesConVelocirraptores = diasSinAccidentesConVelocirraptores + 1
}
```

> Probá en la consola, en orden, lo siguiente:
>
> 1. `diasSinAccidentesConVelocirraptores`
> 2. `pasarUnDiaNormal()`
> 3. `pasarUnDiaNormal()`
> 4. `pasarUnDiaNormal()`
> 5. `diasSinAccidentesConVelocirraptores`

> Podés usar las flechas de tu teclado para navegar entre comandos ejecutados previamente. :arrow_up_small: :arrow_down_small: