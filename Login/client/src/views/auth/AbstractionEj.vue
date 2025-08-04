<template>
  <div id="user">
      <div class="card card-body mt-8, align-left, col-md-15">
          <h1 class="text-center">4. Variables y operaciones</h1>
          <h3>Ejemplo 2:</h3>
          <br>
          <p class="texto-personalizado">Hacer un programa que calcule el <strong>área</strong> de un triángulo de base 12 cm y altura 8 cm <strong>(no usar fórmula de Herón)</strong>.</p>
          <br>
          <h3>Abstracción:</h3>
          <br>
          <div class="hello">
            <h1>{{ msg }}</h1>
            <textarea v-model="code" placeholder="Escribe tu código aquí"></textarea>
            <br>
            <br>
            <button @click="analyzeCode">Analizar Código</button>
            <br>
            <br>
            <p v-if="result" :class="resultClass">{{ result }}</p>
          </div>
          <br>
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

  props: {
  msg: String
},

  data() {
  return {
    code: '',
    result: '',
    resultClass: '',
  };
},

methods: {
      analyzeCode() {
          axios.post('http://localhost:5000/api/auth/analyze', { code: this.code })
              .then(response => {
                if (response.data.errors) {
                      this.result = response.data.errors;
                      this.resultClass = 'warning';
                  } else {
                      this.result = response.data.message;
                      this.resultClass = 'success';
                  }
              })
              .catch(error => {
                  console.error('Error al analizar el código:', error);
              });
      },
      finish() {
          router.push('/generalizacion')
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

textarea {
width: 100%;
height: 200px;
}

.success {
color: green;
font-weight: bold;
font-size: 20px;
}

.warning {
color: red;
font-weight: bold;
font-size: 15px;
}

</style>