<template>
    <div id="user">
        <div class="card card-body mt-8, align-left, col-md-15"> 
            <h1 class="text-center">4. Variables y operaciones</h1>
            <br>
            <h3>Ejemplo 2:</h3>
            <p class="texto-personalizado">Hacer un programa que calcule el área de las siguientes figuras: un rectángulo que tiene dos lados de 12 cm y otros dos lados de 6 cm y el área de un triángulo de base 12 cm y altura 8 cm (no usar fórmula de Herón).</p>
            <h3>Descomposición:</h3>
            <p class="texto-personalizado">Resuelva el siguiente crucigrama con pistas y encuentra la palabra que define lo que el problema está solicitando</p>
            <div class="crossword-board, crossword-container">
                <div v-for="(row, rowIndex) in board" :key="rowIndex" class="crossword-row">
                    <div v-for="(cell, colIndex) in row" :key="colIndex" :class="['crossword-cell', { 'editable-cell': cell.editable }, { 'default-value': cell.defaultValue }]">
                        <input
                            v-if="cell.editable"
                            type="text"
                            v-model="cell.value"
                            maxlength="1"
                            @input="handleInput(rowIndex, colIndex)"
                            class="bold-text"
                            />
                        <div v-else class="crossword-cell-text">{{ cell.value || ' ' }}</div>
                    </div>
                </div>
            </div>
            <h3>Pistas:</h3>
            <ul>
                <p class="texto-personalizado">Palabras horizontales:</p>
                <li v-for="(clue, index) in cluesh" :key="index" class="texto-personalizado">
                <p><strong>{{ index + 1 }}.</strong> {{ clue }}</p>
                </li>
            </ul>
            <ul>
                <p class="texto-personalizado">Palabras verticales:</p>
                <li v-for="(clue, index) in cluesv" :key="index" class="texto-personalizado">
                <p><strong>{{ index + 1 }}.</strong> {{ clue }}</p>
                </li>
            </ul>
            <button @click="validarPalabra" class="btn btn-primary">Validar crucigrama</button>
            <P>{{ validationMessage }}</P>
            <p class="texto-personalizado">Añade el número de subproblemas que tiene el problema usando el acumulador:</p>
            <div>
                <h4>Acumulador</h4>
                <p class="texto-personalizado">Valor acumulado: {{ acumulado }}</p>
                <button @click="incrementar">Incrementar</button>
                <button @click="resetear">Resetear</button>
            </div>
            <br>
            <button @click="submitOrder" class="btn btn-primary">Enviar acumulación</button>
            <br>
            <p class="texto-personalizado">Completa la linea de prioridad definiendo el orden correcto</p>
            <div id="timeline">
                <div v-for="(stage, index) in stages" :key="stage.id"
                    class="stage, list"
                    :draggable="true"
                    @dragstart="dragStart(stage, index)"
                    @dragover.prevent
                    @drop="dropLine(index)">
                    {{ stage.name }}
                </div>
                <div class="line"></div>
            </div>
            <br>
            <button @click="submitOrder" class="btn btn-primary">Enviar Orden</button>
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
import Menu from "../../components/Menu.vue";
export default {
    components: {
        Menu
    },

    data() {
        return {
            acumulado: 0,
            board: [
                [{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '2', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
                [{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
                [{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
                [{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
                [{ value: '1', editable: false },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false }],
                [{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
                [{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
                [{ value: '2', editable: false },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true },{ value: '', editable: true }],
                [{ value: '', editable: false },{ value: '1', editable: false },{ value: '', editable: false },{ value: '', editable: true },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false },{ value: '', editable: false }],
            ],

            cluesh: ["Lenguaje en el cual se desarrolló Java",
                "Elemento de programación en el cual se guarda algún dato",
            ],

            cluesv: ["Motor de videojuegos 3D que usa el lenguaje de programación C#",
                "Palabra que define el problema presentado",
            ],

            stages: [
                { id: 1, name: 'Hallar área trapecio' }, 
                { id: 2, name: 'hallar área triángulo' }, 
                { id: 3, name: 'hallar área rectángulo' },
                // Agrega más etapas según sea necesario
            ],

            timelineSpaces: [  
                {id: 1, stage: null}, 
                {id: 2, stage: null}, 
                {id: 3, stage: null}
            ],

        };
    },

    methods: {
        initializeBoard() {
            // Inicializa el tablero con celdas vacías
            for (let i = 0; i < this.size.rows; i++) {
                const row = [];
                    for (let j = 0; j < this.size.cols; j++) {
                        row.push('');
                    }
                this.board.push(row);
            }
        },

        dragStart(index) {
            // Guardar el índice del elemento arrastrado en el evento de arrastre
            event.dataTransfer.setData("text/plain", index);
        },

        drop(index) {
            // Obtener el índice del elemento soltado
            const droppedIndex = event.dataTransfer.getData("text/plain");
            // Reordenar las etapas
            const movedStage = this.stages.splice(droppedIndex, 1)[0];
            this.stages.splice(index, 0, movedStage);
        },

        dropLine(index) {
            const droppedIndex = event.dataTransfer.getData("text/plain");
            this.stages.splice(index, 0, this.stages.splice(droppedIndex, 1)[0]);
        },

        dropSpace(space) {
            const droppedIndex = event.dataTransfer.getData("text/plain");
            // Asignar la etapa al espacio correspondiente
            this.$set(this.timelineSpaces, space.id - 1, { id: space.id, stage: this.stages[droppedIndex] });
        },

        incrementar() {
            this.acumulado++; // Incrementa el valor acumulado en 1
        },

        resetear() {
            this.acumulado = 0; // Reinicia el valor acumulado a 0
        },

        finish() {
            router.push('/algoritmoEj')
        },

    },

}
</script>

<style scoped>
#user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

.card {
  max-width: 100%;
  margin: auto;
}

.align-left {
  text-align: left; /* Alinea el contenido a la izquierda */
}

.square-card {
  width: 330px; /* Define el ancho deseado de la tarjeta */
  margin-top: 0px;
  overflow: hidden; /* Evita que el contenido se desborde */
}

.texto-personalizado {
    font-family: Arial, sans-serif; /* Tipo de letra */
    font-size: 18px; /* Tamaño de fuente */
    text-align: justify; /* Alineación justificada */
}

.crossword-board {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
}

.crossword-cell {
  width: 30px;
  height: 30px;
  border: 1px solid #11111196;
  display: flex;
  align-items: center;
  justify-content: center;
}

.crossword-cell input {
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  background-color: rgb(112, 99, 231);
  font-weight: bold;
}

.crossword-cell-text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.crossword-cell-text::selection {
  background-color: transparent;
}

.crossword-cell-text::-moz-selection {
  background-color: transparent;
}

.default-value {
  font-weight: bold; /* Establece el texto en negrita */
}

.crossword-container {
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  height: 40vh; /* Opcional: ajusta el alto del contenedor al 100% de la altura de la ventana del navegador */
}

#timeline {
  width: 100%;
  height: 200px;
  border: 1px solid #ccc;
  padding: 10px;
}

.stage {
  width: 100px;
  height: 50px;
  background-color: #f0f0f0;
  border: 1px solid #999;
  text-align: center;
  line-height: 50px;
  margin-bottom: 10px;
  cursor: pointer;
}

.line {
  flex: 1; /* La línea ocupa todo el espacio restante */
  height: 5px; /* Grosor de la línea */
  background-color: rgba(47, 24, 128, 0.589); /* Color de la línea */
}

.temas {
  position: sticky;
  margin-top: -245px;
}

.letras {
  font-size: 22px;
  height: 25px;
  font-weight: bold;
  color: #16161696;
}

</style>