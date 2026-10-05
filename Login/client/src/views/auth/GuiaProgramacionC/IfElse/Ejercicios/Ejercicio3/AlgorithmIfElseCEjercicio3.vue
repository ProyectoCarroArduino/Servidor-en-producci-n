<template>
    <div id="layout-general">
        <main class="contenido">
       <h1 class="text-center">5. Estructuras de control y repetición</h1>
      <br>
      <br>
      <h3>Ejercicio 3:</h3>
      <br>
      <p class="texto-personalizado">Un museo cobra según la edad del visitante y el día de la visita. Hacer un programa en C que declare dos variables enteras: edad con el valor 15 y dia con el valor 6 (1 = lunes … 7 = domingo), en ese orden. Primero muestre Edad: 15 con un printf que use %d y la variable edad. Luego, si edad es menor que 0 o mayor que 120 (una sola condición con ||), muestre Error: edad no valida. Si no (en el else), tome dos decisiones, una después de la otra: (a) con if, else if y else: si edad es menor que 12, muestre Tarifa: Infantil; si no, si edad es menor o igual que 17, muestre Tarifa: Juvenil; en otro caso, muestre Tarifa: General; (b) con if else: si dia es igual a 6 o igual a 7 (una sola condición con == y ||), muestre Dia: fin de semana; si no, muestre Dia: entre semana. Use la estructura vista en la teoría: biblioteca stdio.h, función int main(void), las variables declaradas al inicio de main con su valor fijo, llaves en todos los bloques y return 0; al final. Cada mensaje termina en \n y se escribe sin tildes.</p>
      <p class="texto-personalizado"><strong>Salida esperada:</strong></p>
      <pre style="background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 6px; padding: 12px; text-align: left; font-size: 16px; white-space: pre-wrap;">Edad: 15
Tarifa: Juvenil
Dia: fin de semana</pre>
      <br>
      <hr class="my-4" />
            <br>
            <h3>Algoritmo:</h3>
            <br>
            <p class="texto-personalizado"><strong>Nota:</strong> En PSeInt, Si … Entonces … SiNo … FinSi equivale a if … else; Escribir equivale a un printf terminado en \n y &lt;- equivale a la asignación =. PSeInt no tiene else if: se escribe un Si dentro del SiNo. Y equivale a &amp;&amp;, O equivale a ||, = compara (como == en C) y Escribir con una coma y la variable muestra su valor (como %d).</p>
            <ImageChecker/>
        </main>
        <aside class="menu-lateral">
            <div>
                <NavMenu />
            </div>
        </aside>
    </div>
</template>

<script>
import ImageChecker from "@/components/GuiaProgramacionC/IfElse/Ejercicios/Ejercicio3/ImageCheckerIfElseCEjercicio3.vue";
import NavMenu from "@/components/Menu.vue";
export default{
    components:{
        NavMenu, 
        ImageChecker
    },
}
</script >



<style>

#user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

    .layout-general {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  margin: 0 auto; /* centra horizontalmente */
  box-sizing: border-box;
  gap: 2rem;
  }

/* Contenido principal */
.contenido {
  flex: 1; /* Ocupa el resto del espacio disponible */
  min-width: 0; /* evita overflow horizontal */
  max-width: 82%; /* Ajusta este valor según quieras */
  overflow-x: hidden;
  }

/* Menú lateral */
.menu-lateral {
  flex: 0 0 280px;
  background-color: transparent;
  border-radius: 10px;
  padding: 1rem;
  position: sticky;
  top: 20px;
  height: fit-content;
  }

  /* Versión responsive */
@media (max-width: 992px) {
  .layout-general {
    flex-direction: column;
    align-items: center;
  }

  .contenido {
    flex: 1;
    max-width: 120%;
  }
  .menu-lateral {
    max-width: 100%;
  }

  .menu-lateral {
    position: relative; /* deja de ser sticky en móviles */
    top: 0;
  }

}

.card {
  max-width: 100%;
  margin: auto;
  padding: 20px;
}

.texto-personalizado {
    font-family: Arial, sans-serif; /* Tipo de letra */
    font-size: 18px; /* Tamaño de fuente */
    text-align: justify; /* Alineación justificada */
}

.temas {
  position: fixed;
  margin-top: -245px;
}

</style>