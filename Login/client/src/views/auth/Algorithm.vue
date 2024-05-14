<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15">
            <h1 class="text-center">Variables y operaciones</h1>
            <h3>Ejemplo 1:</h3>
            <p class="texto-personalizado">Hacer un programa que calcule el área de las siguientes figuras: un rectángulo que tiene dos lados de 12 cm y otros dos lados de 6 cm y el área de un triángulo de base 12 cm y altura 8 cm (no usar fórmula de Herón).</p>
            <br>
            <h3>Algoritmo:</h3>
            <div v-if="showPrincipal" class="algoritmos">
                <p class="text">{{ enunciado }}</p>
                <div class="image-container">
                    <div class="image-item" v-for="(image, index) in puzzle" :key="image.id">
                        <img :src="require(`@/assets/images/${image.src}`)" :alt="image.alt" />
                        <p>{{ index + 1 }}</p>
                    </div>
                </div>
                <p class="text">{{ instruccion }}</p>
                <div class="input-container">
                    <div class="input-item" v-for="(input, index) in inputs" :key="input.key">
                        <p>{{ index + 1 }}</p>
                        <input
                        type="number"
                        v-model.number="input.value"
                        :ref="input.name"
                        min="1"
                        :max="numSteps"
                        size="1"
                        required
                        />
                    </div>
                </div>
                <div class="button-container">
                    <button @click="validateInputs">Enviar</button>
                </div>
                <div class="message" v-if="showErrorMessage">
                    <p>Verifica los datos!</p>
                </div>
            </div>
            <div v-if="showResult" class="validate-container">
                <div v-if="showResult">
                    <p class="validate-msg" v-if="isCorrect">¡Correcto!</p>
                    <p class="validate-msg" v-else>Lo sentimos, es incorrecto.</p>
                </div>
                <div class="button-container">
                    <button class="bt-validate" v-if="isCorrect" @click="hideModule">
                        Finalizar
                    </button>
                    <button class="bt-validate" v-else @click="showModule">
                        Volver a intentar
                    </button>
                </div>
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
import Menu from "../../components/Menu.vue";
import ImageChecker from "../../components/ImageChecker.vue";

export default {
  components: {
    Menu,
    ImageChecker,
  }
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
