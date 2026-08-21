# Metodologia TAM

## Alcance
- Encuesta de percepcion y resultados estadisticos (utilidad, facilidad de uso, actitud, intencion).

## Interpretacion de la escala (leer antes que nada)

La encuesta usa una escala Likert **ascendente**: `1 = Muy baja ... 5 = Muy alta`, como
el TAM estandar. **Un valor mayor significa mejor percepcion.**

Regla vigente en el proyecto:

- Los valores se guardan, se agregan y se grafican **tal cual**. No hay ninguna
  transformacion en ningun punto de la cadena.
- `/api/encuesta/resumen` declara la direccion en el campo `escala`
  (`direccion: 'ascendente'`, `mejor: 'max'`) para que ningun consumidor tenga que
  asumirla.
- Las anclas se muestran **junto a los radios de cada pregunta**, no solo en la leyenda
  del encabezado.

### Historia: por que esto importa

Hasta el 8 de agosto de 2026 el formulario declaraba una escala **invertida**
(`1 = Muy alta ... 5 = Muy baja`) en un recuadro separado, lejos de los radios. Las
respuestas recogidas bajo ese diseño resultaron **imposibles de interpretar**: los
valores se concentraban en 5, lo que segun las anclas declaradas significaba rechazo
casi total de la aplicacion, pero la redaccion de los items ("La aplicacion proporciona
herramientas utiles?") hace mucho mas probable que los participantes usaran la
convencion habitual, donde 5 es el maximo acuerdo. No hay forma de saber desde los datos
que orientacion aplico cada persona.

Decisiones tomadas a raiz de eso:

1. Se vacio la coleccion de respuestas (respaldo en `Login/server/backups/`).
2. Se corrigio la escala a ascendente en el formulario.
3. Se movieron las anclas junto a los radios, que es donde la persona decide. Esa
   cercania es la correccion de fondo: la leyenda lejana era la causa real de que la
   direccion se ignorara.
4. Se elimino la reorientacion `6 - valor` que existia en la vista de resultados.

**Cualquier dato recogido antes de esa fecha no es comparable con el actual.**

## El instrumento: 4 items por dimension

Cada una de las cuatro dimensiones TAM se mide con **4 items** en la escala 1..5.

Hasta el 10 de agosto de 2026 eran 3 items por dimension. Al agregar el cuarto se
volvio a vaciar la coleccion (respaldo en `Login/server/backups/`): una muestra que
mezcle respuestas de 3 items con respuestas de 4 no mide el mismo instrumento, aunque
los promedios se sigan calculando sin error. **Los datos anteriores al 10 de agosto de
2026 tampoco son comparables con los actuales.**

En el mismo cambio, la pregunta de recomendacion a terceros paso de `attitude` a
`intention`. Estaba redactada de forma casi identica en las dos dimensiones, y medir lo
mismo en ambas infla artificialmente la correlacion entre ellas. En TAM la recomendacion
es conducta intencional, no actitud: su lugar es `intention`. El hueco que dejo en
`attitude` lo ocupa un item de agrado, propio de esa dimension.

Si se vuelven a cambiar los items, hay que tocar los tres puntos a la vez:

1. `questionSections` y los `Array(n).fill('')` en `EncuestaTAMCopy.vue`.
2. `ITEMS_POR_DIMENSION` en `Respuestas.js`.
3. El subtitulo "Media de los cuatro items" en `ResultadosEncuesta.vue`.

El controller **no** depende del numero de items: `valoresDe()` aplana la dimension
completa con `flatMap`, asi que promedios, desviaciones y distribuciones funcionan con
cualquier cantidad.

## Backend
- Modelo: `Login/server/models/Respuestas.js`.
  - Campos demograficos: `age`, `gender`, `tech_courses`, `household`, `income`, `employment`.
  - Campos TAM: `utility`, `easeOfUse`, `attitude`, `intention` (arreglos de 4 valores 1..5).
  - `escalaTAM` valida cantidad de items **y** rango: enteros entre 1 y 5. Mongoose solo
    valida al guardar, asi que los documentos viejos de 3 items se siguen leyendo sin
    error; lo que se rechaza es un envio nuevo con la forma equivocada.
  - `userId` unico para una respuesta por usuario.
- Rutas: `Login/server/routes/api/encuesta.js`.
  - `POST /api/encuesta/responder` (auth) -> `registrarRespuesta`.
  - `GET /api/encuesta/verificar` (auth) -> verifica si ya respondio.
  - `GET /api/encuesta/resumen` (publico) -> agregados estadisticos.
- Controller: `Login/server/controlllers/EncuestaController.js` (ojo: el directorio
  tiene el nombre mal escrito, con tres L).
  - `registrarRespuesta` bloquea respuestas duplicadas por `userId`.
  - `obtenerResumen` calcula promedios, desviaciones, distribuciones y conteos
    demograficos.

### Contrato de `GET /api/encuesta/resumen`

```jsonc
{
  "total": 12,                                  // tamaño de muestra (n)
  "escala": { "min": 1, "max": 5,
              "direccion": "ascendente", "mejor": "max" },
  "categorias":    { "utilidad": 4.13, ... },   // promedio por dimension, o null
  "desviaciones":  { "utilidad": 0.87, ... },   // desviacion estandar poblacional, o null
  "distribuciones":{ "utilidad": { "1": 5, "2": 9, "3": 3, "4": 1, "5": 0 }, ... },
  "demografia": {
    "edad": {}, "genero": {}, "empleo": {},
    "cursos": {}, "hogar": {}, "ingresos": {}
  },
  "edad": {}, "genero": {}, "empleo": {}        // duplicados por compatibilidad
}
```

Notas del contrato:

- Los promedios son `Number` (o `null` si no hay datos). Antes se devolvia el
  resultado de `toFixed(2)`, que es un **string**, mientras el caso vacio devolvia el
  numero `0`: tipos inconsistentes para el mismo campo.
- `desviaciones` se calcula y se expone, pero **la interfaz no la muestra por ahora**
  (decision del proyecto, tomada para simplificar la lectura de la pagina). El campo se
  mantiene en el contrato para poder reactivarlo sin tocar el backend.
- `distribuciones` cuenta cuantas veces se marco cada punto 1..5 en valores **crudos**.
- `demografia` incluye `cursos`, `hogar` e `ingresos`, que antes se recogian en el
  formulario pero nunca se agregaban ni se graficaban.
- Las claves de nivel superior `edad`, `genero` y `empleo` se mantienen duplicadas
  para no romper a ningun consumidor previo del endpoint.

## Frontend
- Vista encuesta: `Login/client/src/views/auth/EncuestaTAMCopy.vue`.
  - Formulario demografico + 4 secciones con 4 preguntas cada una.
  - Escala ascendente 1..5 con las anclas "Muy baja" / "Muy alta" a los lados de cada
    fila de opciones.
  - Verifica si ya respondio via `/api/encuesta/verificar`.
  - Envia respuestas via `/api/encuesta/responder`.
- Vista resultados: `Login/client/src/views/auth/ResultadosEncuesta.vue`.
  - Consume el resumen con `useApi()`, es decir a traves de `VITE_API_URI`.
  - Estados explicitos de carga (skeleton), error con reintento y muestra vacia.
  - En el encabezado muestra dos cifras: el total de respuestas y el **indice global**,
    que es el promedio simple de las cuatro dimensiones. Se calcula en la vista, no en el
    backend, y el endpoint no lo devuelve.
  - Exportacion a CSV de promedios, distribuciones y demografia. **No incluye las
    desviaciones**, por la misma razon por la que no se grafican.
- Mantenimiento: `Login/server/LimpiarEncuestas.js` vacia la coleccion de respuestas
  para dejarla en limpio. Siempre respalda a `Login/server/backups/*.json` antes de
  borrar, y sin la bandera `--confirmar` solo simula. Al vaciar la coleccion todos los
  usuarios vuelven a poder responder, porque `verificarRespuesta` decide consultando
  unicamente esa coleccion.
- Tema de graficas: `Login/client/src/composables/useChartTheme.ts`.
- Rutas: `Login/client/src/router/index.ts` (`/EncuestaTAM` y `/resultados`, ambas con
  `meta: { requiresAuth: true }`).

### Formas y colores de las graficas

Las decisiones de forma y color no son esteticas; siguen una regla por tipo de dato:

| Dato | Forma | Color |
|---|---|---|
| Promedio por dimension TAM (categorias sin orden natural) | barras horizontales, con el promedio rotulado al final de cada barra | **una sola serie, un solo color**; nunca una rampa de valor, porque el largo de la barra ya codifica la magnitud |
| Distribucion de la escala 1..5 | barra apilada **al 100%**, de "Muy baja" (izquierda) a "Muy alta" (derecha) | rampa rojo - gris neutro - azul |
| Bandas con orden natural (edad, hogar, ingresos) | barras en HTML/CSS | rampa **ordinal** de un solo tono, claro -> oscuro, para que el orden se lea en el color |
| Variables nominales (genero, empleo, cursos) | barras en HTML/CSS | un solo color de serie |

Cada promedio se muestra **unicamente junto a su propia grafica**, como etiqueta directa
en la punta de la barra. No hay una fila de tarjetas de indicador que repita esas mismas
cuatro cifras: se retiro por decision de diseno para no recargar la pagina.

Los hex estan definidos en `Login/client/src/assets/theme.css` y duplicados como
literales en `useChartTheme.ts` (chart.js pinta sobre `<canvas>` y no resuelve
`var(--token)`). Estan validados contra banda de luminosidad, piso de croma,
separacion bajo daltonismo protan/deutan y contraste sobre fondo blanco. **No
sustituir esos hex sin volver a validarlos.**

Decisiones que se apartan de la version anterior de la vista:

- Se descarto la barra **divergente** centrada en el punto neutro para la distribucion.
  Es la forma canonica en investigacion de encuestas, pero obliga a partir la categoria
  del medio en dos mitades a lado y lado del cero y a usar un eje que va de 100% a 100%,
  lo que se lee como si sumara 200%. Resulto confusa en la practica. La reemplaza una
  barra apilada al 100% con eje de 0 a 100.
- Se eliminaron los graficos de dona. Un dona de 2 segmentos (situacion laboral) no es
  un grafico, y el resto comparaba valores cercanos, que es justo lo que una dona hace
  peor. Se reemplazaron por barras con conteo y porcentaje visibles.
- Se descarto el grafico de radar: repetiria la informacion que ya da el grafico de
  promedios, con menos precision de lectura.
- El eje del grafico de promedios arranca en **1**, no en 0, porque 1 es el minimo real
  de la escala; arrancar en 0 dibuja un rango que no existe.
- Toda cifra graficada es legible tambien como texto en la tabla desplegable, requisito
  de accesibilidad para los tonos claros de la rampa divergente.

## Estado actual y validacion
- Resuelto: `ResultadosEncuesta` usaba `fetch` contra una URL de produccion
  hard-codeada, ignorando `VITE_API_URI`. En desarrollo local nunca mostraba los datos
  locales. Ahora usa `useApi()`.
- Resuelto: si la peticion fallaba, la vista quedaba en "Cargando datos..." de forma
  indefinida. Ahora hay estado de error con boton de reintento.
- Resuelto: se eliminó `SeccionTAMSchema` de `Respuestas.js`, un esquema definido y
  nunca usado.
- Resuelto: el esquema no verificaba el rango 1..5 de cada valor. Ahora `escalaTAM`
  valida cantidad de items y rango.
- El esquema exige 4 respuestas por categoria; el formulario las valida antes de enviar.
- Unicidad: `userId` es `unique` en la coleccion, y el controller tambien valida
  duplicados.

### Pendientes
- `/api/encuesta/resumen` es **publico**, pero la vista `/resultados` exige sesion
  (`requiresAuth`). No hay restriccion por rol: cualquier usuario autenticado ve los
  resultados agregados de todos. Definir si eso es lo deseado o si debe limitarse a un
  rol administrador.
- El enlace "GraficasTAM" en `NavBar.vue` es visible para todo usuario autenticado,
  coherente con lo anterior pero probablemente no con la intencion.
