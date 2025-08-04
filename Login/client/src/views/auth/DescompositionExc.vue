<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15">
            <h1 class="text-center">4. Variables y operaciones</h1>
            <h3>Ejercicio 1:</h3>
            <p class="texto-personalizado">Hacer un programa que calcule el área de las siguientes figuras: Un trapecio el cual tiene por base mayor 12cm, por base menor una tercera parte de la base mayor y por altura 4cm. Un cilindro el cual tiene por diámetro 4,5cm y por altura 5,3cm. Y por último, una esfera que tiene por diámetro 2,5cm.</p>
            <br>
            <h3>Descomposición:</h3>
            <div>
              <button class="bt-validate" @click="finish">Avanzar</button>
            </div>
        </div>
        <div class="align-left col-md-3">
            <div class="temas">
                <Menu />
            </div>
        </div>
    </div>
</template>


<script>
import router from '@/router';
import axios from 'axios';
import Menu from "../../components/Menu.vue";
export default {
    components: {
        Menu
    },

    data() {
    return {
      code: '',
      result: null
    };
  },

  methods: {
    async analyzeCode() {
      try {
        const response = await axios.post('http://localhost:5000/analyze-code', {
          code: this.code
        });

        this.result = response.data.output;
      } catch (error) {
        console.error('Error:', error);
      }
    },

    finish() {
      router.push('/generalizacionEj')
    },
  },

}
</script>


<style>

#user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
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