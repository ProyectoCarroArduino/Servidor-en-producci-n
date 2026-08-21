# Diseno de pagina, estilos y plantillas

## Frameworks y estilos globales
- Bootstrap 5 y material-icons se importan en Login/client/src/main.ts.
- Login/client/src/assets/theme.css se importa de forma global en main.ts.
- No hay import activo de Login/client/src/assets/base.css ni de main.css (tema base de Vue).
- App.vue solo define estilos minimos para navbar y padding.

## Tokens de diseno (theme.css)
- Login/client/src/assets/theme.css es el unico punto donde viven los valores del tema.
- Solo declara variables CSS sobre :root; no aplica estilos a ningun elemento, por lo
  que puede importarse globalmente sin alterar vistas existentes.
- Los valores de marca (--ec-blue-*, --ec-accent, radios, sombras, tipografia) provienen
  del tema ya establecido en views/auth/GuiaProgramacionC/GuiaProgramacionHome.vue, que
  hasta ahora era la unica vista con un lenguaje visual completo.
- Importa Sora y Manrope desde Google Fonts. Antes esas familias se usaban en CSS sin
  cargarse en ningun lado, por lo que siempre se renderizaba el fallback.
- El bloque --viz-* define la paleta de graficas: color de serie unica, rampa ordinal de
  5 pasos y rampa divergente de 5 pasos, mas el chrome (grilla, ejes, tinta, track).
  Estan validados contra banda de luminosidad, piso de croma, separacion bajo daltonismo
  protan/deutan y contraste sobre fondo blanco. No sustituirlos sin re-validar.
- Login/client/src/composables/useChartTheme.ts replica esos hex como literales de
  TypeScript y aplica los defaults de chart.js una sola vez por sesion. La duplicacion es
  necesaria: chart.js pinta sobre <canvas> y no resuelve var(--token).

## Componentes de layout y plantillas
- Login/client/src/components/NavBar.vue: barra principal con estilos propios y clases bootstrap.
- Login/client/src/components/LayoutConMenu.vue: plantilla de dos columnas (contenido + menu).
- Login/client/src/components/Menu.vue y Login/client/src/components/MenuItem.vue: menu lateral para guia de programacion.
- Login/client/src/components/MenuCarro.vue y Login/client/src/components/MenuItemCarro.vue: menu lateral para guia de construccion.
- Login/client/src/views/auth/ProgresoCurso.vue usa clases tipo tailwind (bg-gray-50, text-indigo-800, etc).

## Estilos por vista
- Login/client/src/views/auth/GuiaProgramacionC/GuiaProgramacionHome.vue define un tema visual completo con variables CSS, gradientes y animaciones.
- Login/client/src/views/auth/GuiaConstruccion.vue y muchas vistas de ejercicios usan <style scoped> con tipografia y layout propios.
- Componentes AudioChecker*/ImageChecker* incluyen estilos locales para drag and drop y tarjetas.

## Estado actual y validacion
- Mezcla de Bootstrap, estilos scoped y clases tipo tailwind. theme.css es el primer paso
  hacia un sistema centralizado, pero solo lo consumen por ahora ResultadosEncuesta.vue y
  useChartTheme.ts; el resto de vistas sigue con su CSS propio.
- Clases tailwind en ProgresoCurso.vue no tienen dependencia de tailwind en package.json,
  y no hay CSS equivalente: hoy esa vista se renderiza practicamente sin estilos.
  Pendiente de arreglo (migrar a theme.css o instalar tailwind).
- Sora y Manrope ya se cargan desde theme.css. Poppins sigue referenciada en CSS sin
  cargarse, pero solo como segundo fallback.
- Menus laterales usan posicion fixed/sticky; en pantallas pequenas se ocultan o cambian, revisar consistencia de layout con contenido largo.
- No hay soporte de tema oscuro en ninguna parte del proyecto. Los tokens de theme.css
  estan definidos solo para superficie clara; si algun dia se agrega modo oscuro, la
  paleta de graficas debe re-validarse contra la superficie oscura, no invertirse.

## Tipografia: como aplicarla en una vista
- App.vue aplica --ec-font sobre .guia-page, asi que toda la app hereda Sora por defecto.
  Cualquier `font-family` declarado en un <style scoped> de vista pisa esa herencia.
- Regla de uso: --ec-font (Sora) para el contenedor de la vista y los titulos;
  --ec-font-ui (Manrope) para texto corrido, enlaces, mensajes y controles.
- Los controles de formulario (input, textarea, select, button) NO heredan la fuente en
  ningun navegador: hay que declararles --ec-font-ui de forma explicita. Quitar el
  `font-family` de la vista no basta.

## Vistas ya alineadas al tema
- views/auth/GuiaProgramacionC/GuiaProgramacionHome.vue (origen del lenguaje visual).
- views/auth/ResultadosEncuesta.vue.
- views/auth/GlosarioReferencias.vue: alineada solo en tipografia. Layout, colores y
  tarjetas siguen con estilos propios.
- views/auth/ConceptosAdmin.vue: alineada solo en tipografia, incluidos los controles de
  formulario. Layout y colores siguen con estilos propios.

## Vistas pendientes de alinear
- views/auth/EncuestaTAMCopy.vue: formulario con estilos propios, sin relacion con el tema.
- views/auth/ProgresoCurso.vue: sin estilos efectivos (ver arriba).
- views/auth/ReferenciasAdmin.vue: archivo huerfano, no esta registrado en router/index.ts
  y no es alcanzable desde ninguna ruta. Usa clases tipo tailwind sin dependencia de
  tailwind, por lo que se renderiza sin estilos (mismo caso que ProgresoCurso.vue).
  Decidir si se elimina o se enruta antes de invertir en su estilo.
- Vistas de ejercicios con <style scoped> independiente.
