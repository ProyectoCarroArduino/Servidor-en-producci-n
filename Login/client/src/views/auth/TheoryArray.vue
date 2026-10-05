<template>
  <TeoriaLayout titulo="6.1 Arreglos (Arrays)">
    <!--<h1 class="text-center">Programación en C</h1>-->
    <h2>6.1.1 Concepto de arreglo</h2>
    <p class="texto-personalizado">
      Un arreglo o array es una estructura de datos almacenada en una variable,
      donde cada elemento tiene el mismo tipo de dato y nombre, y estos están
      almacenados de forma consecutiva. A cada posición almacenada en un arreglo
      se le llama <strong>(elemento del arreglo)</strong> y el número de esto va
      a depender del <strong>(tamaño)</strong> que se le asigne al arreglo. Los
      arreglos son estructuras estáticas debido a que se les declara un tamañao
      y un tipo de dato conservando estas características durante la ejecución
      de todo el programa.
    </p>
    <div class="nota">
      <p>
        <span style="font-weight: bold">Nota:</span> Un arreglo o array también
        es llamada vector y su uso principal es implementar listas a un
        programa, por esta razón el tipo de dato más común que usa es
        <strong>string</strong>.
      </p>
    </div>

    <h2>6.1.2 Declaración de un arreglo</h2>
    <p class="texto-personalizado">
      Para declarar un arreglo se usa la siguiente estructura:
    </p>
    <div class="teoria-sintaxis">
      <p class="text-center">
        <span style="font-weight: bold">
          ( tipo + nombre del arreglo + tamaño )</span
        >
      </p>
    </div>
    <ul>
      <li>
        <p class="texto-personalizado">
          <strong>Tipo:</strong> Es el tipo de dato que el arreglo guardará y
          que cada
          <span style="font-weight: bold">(elemento del arreglo)</span> tendrá
          asignado.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> El tipo de dato más
          utilizado es el <strong>string</strong>.
        </p>
      </div>
      <li>
        <p class="texto-personalizado">
          <strong>Nombre del arreglo:</strong> Es como se quiere llamar a la
          variable que va a almacenar el arreglo<span
            style="font-weight: bold"
          ></span
          >.
        </p>
      </li>
      <li>
        <p class="texto-personalizado">
          <strong>Tamaño:</strong> Es el número de
          <strong>(elementos del arreglo)</strong> de un tipo especifico que el
          arreglo va a almacenar.
        </p>
      </li>
      <div class="nota">
        <p>
          <span style="font-weight: bold">Nota:</span> El tipo de dato no afecta
          el tamaño del arreglo y este siempre debe ir delimitado por
          <strong>(corchetes)</strong>, si no se hace el compilador del
          lenaguaje no detecta la variable como un arreglo.
        </p>
      </div>
    </ul>

    <img class="centrada" src="/imagenes/Declaracion array.png?url" alt="" />

    <h2>6.1.3 Guardar datos en un arreglo</h2>

    <img class="centrada" src="/imagenes/Elementos while.png?url" alt="" />
    <div class="teoria-acciones">
      <button class="teoria-boton" @click="finish">Avanzar</button>
    </div>
  </TeoriaLayout>
</template>

<script>
import router from '@/router'
import TeoriaLayout from "@/components/teoria/TeoriaLayout.vue";
export default {
    components: {
        TeoriaLayout
    },

    methods: {
      
    finish() {
        router.push('/descomposicionArrayEj').then(() => {
          window.scrollTo(0, 0);
        });
      },
  
    },

};
</script>

<style scoped src="@/components/teoria/teoriaContenidoIlustrado.css"></style>
