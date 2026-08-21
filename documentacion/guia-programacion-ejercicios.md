# Guia de programacion y ejercicios

## Entrada y navegacion
- Ruta principal: /IntroGuiaC -> Login/client/src/views/auth/GuiaProgramacionC/GuiaProgramacionHome.vue.
- Menu lateral: Login/client/src/components/Menu.vue y Login/client/src/components/MenuItem.vue (arbol de temas y ejercicios).
- Rutas definidas en Login/client/src/router/index.ts para teoria, ejemplos y ejercicios por categoria.

## Contenido de la guia
- Conceptos basicos: Login/client/src/views/auth/GuiaProgramacionC/ConceptosBasicos/CB_Teoria.vue y subcarpetas de Ejemplo/Ejercicios.
- Temas generales fuera de GuiaProgramacionC: TheorySwitch.vue, TheoryWhile.vue, TheoryArray.vue, TheoryParameterlessFunction.vue.
- Cada tema tiene vistas por categoria: Descomposition*, Algorithm*, Abstraction*, Generalization*.

## Tipos de ejercicios
- Interacciones drag and drop y ordenamiento: componentes AudioChecker* e ImageChecker* en Login/client/src/components/.
- Ejercicios con codigo C: llamadas a /api/auth/analyze o VITE_API_URI_ANALYZE en varias vistas (Abstraction*, GuiaProgramacionC/ConceptosBasicos/Ejercicios, etc).

## Evaluacion en ejercicios
- Algunos ejercicios usan useEvaluacionSubejercicio para persistir intentos y nota (ej. CB_DescomposicionComp1.vue, CB_ImageChecker1.vue).
- Otros ejercicios siguen validacion local sin BD (lista en contexto/EjerciciosPendientes.md).
- El nombre de curso y submodulo debe coincidir con la plantilla para que /api/curso/evaluar funcione.

## Estado actual y validacion
- Menu.vue contiene enlaces vacios o sin prefijo "/" (ej. "CBDescomposicion1"), lo que puede romper la navegacion si no coincide con rutas.
- Existen llamadas a analizar codigo con URL fija http://localhost:5000 en varias vistas; solo algunas usan VITE_API_URI_ANALYZE.
- La plantilla seedCourseTemplate.js solo define un ejercicio; para cubrir mas ejercicios se debe ampliar la plantilla y sincronizar usuarios.
