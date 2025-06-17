<template>
  <div>
    <h1>Encuesta Metodología TAM</h1>

    <div v-if="yaRespondio">
      <p style="text-align:center; font-size:18px; margin-top:40px;">
        Ya has respondido esta encuesta. ¡Gracias por tu participación!
      </p>
    </div>

    <form v-else @submit.prevent="submitForm">
      <!-- Sección demográfica -->
      <div class="question">
        <fieldset>
          <legend>¿Cuál es su rango de edad?</legend>
          <label><input type="radio" name="age" value="under17" v-model="formData.age" /> -17</label>
          <label><input type="radio" name="age" value="17-20" v-model="formData.age" /> 17 a 20</label>
          <label><input type="radio" name="age" value="20-23" v-model="formData.age" /> 20 a 23</label>
          <label><input type="radio" name="age" value="23-26" v-model="formData.age" /> 23 a 26</label>
          <label><input type="radio" name="age" value="26plus" v-model="formData.age" /> 26+</label>
        </fieldset>

        <fieldset>
          <legend>¿Cuál es su género?</legend>
          <label><input type="radio" name="gender" value="Masculino" v-model="formData.gender" /> Masculino</label>
          <label><input type="radio" name="gender" value="Femenino" v-model="formData.gender" /> Femenino</label>
          <label><input type="radio" name="gender" value="Otro" v-model="formData.gender" /> Otro</label>
        </fieldset>

        <fieldset>
          <legend>¿Cuenta con cursos o certificaciones en el área de tecnología?</legend>
          <label><input type="radio" name="tech_courses" value="SI" v-model="formData.tech_courses" /> SI</label>
          <label><input type="radio" name="tech_courses" value="NO" v-model="formData.tech_courses" /> NO</label>
        </fieldset>

        <fieldset>
          <legend>¿Con cuántas personas convive en su hogar?</legend>
          <label><input type="radio" name="household" value="Solo" v-model="formData.household" /> Vive Solo</label>
          <label><input type="radio" name="household" value="1-2" v-model="formData.household" /> 1 a 2</label>
          <label><input type="radio" name="household" value="3-4" v-model="formData.household" /> 3 a 4</label>
          <label><input type="radio" name="household" value="5-6" v-model="formData.household" /> 5 a 6</label>
          <label><input type="radio" name="household" value="7plus" v-model="formData.household" /> 7 o más</label>
        </fieldset>

        <fieldset>
          <legend>¿Cuál es el rango de ingreso familiar mensual aproximado (en millones)?</legend>
          <label><input type="radio" name="income" value="under1_5" v-model="formData.income" /> -1,5</label>
          <label><input type="radio" name="income" value="1_5-2_5" v-model="formData.income" /> 1,5 a 2,5</label>
          <label><input type="radio" name="income" value="2_5-3_5" v-model="formData.income" /> 2,5 a 3,5</label>
          <label><input type="radio" name="income" value="3_5-5" v-model="formData.income" /> 3,5 a 5</label>
          <label><input type="radio" name="income" value="5plus" v-model="formData.income" /> 5+</label>
        </fieldset>

        <fieldset>
          <legend>¿Cuál es su situación laboral actual?</legend>
          <label><input type="radio" name="employment" value="Employed" v-model="formData.employment" /> Empleado</label>
          <label><input type="radio" name="employment" value="Unemployed" v-model="formData.employment" /> Desempleado</label>
        </fieldset>
      </div>

      <div class="information">
        <p>
          A continuación, encontrarás una serie de preguntas que requieren tu calificación en una escala del 1 al 5:
          <br /><strong>1: Muy alta</strong><br /><strong>2: Alta</strong><br /><strong>3: Moderada</strong><br />
          <strong>4: Baja</strong><br /><strong>5: Muy baja</strong>
        </p>
      </div>

      <div class="question2" v-for="(section, key) in questionSections" :key="key">
        <h3>{{ section.title }}</h3>
        <div v-for="(question, index) in section.questions" :key="key + '-' + index">
          <label class="text">{{ question }}</label>
          <fieldset>
            <legend class="sr-only">Calificación</legend>
            <label v-for="n in 5" :key="n">
              <input type="radio" :name="key + index" :value="n" v-model="formData[key][index]" /> {{ n }}
            </label>
          </fieldset>
        </div>
      </div>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yaRespondio: false,
      formData: {
        age: '',
        gender: '',
        tech_courses: '',
        household: '',
        income: '',
        employment: '',
        utility: Array(3).fill(''),
        easeOfUse: Array(3).fill(''),
        attitude: Array(3).fill(''),
        intention: Array(3).fill('')
      },
      questionSections: {
        utility: {
          title: 'Medir la percepción de utilidad',
          questions: [
            '¿La aplicación proporciona herramientas útiles para desarrollar habilidades de pensamiento computacional?',
            '¿La información proporcionada por la aplicación es clara y precisa?',
            '¿Considera que la aplicación ha mejorado su conocimiento sobre programación?'
          ]
        },
        easeOfUse: {
          title: 'Facilidad de Uso Percibida',
          questions: [
            '¿Qué tan fácil fue entender cómo funciona la aplicación?',
            '¿Fue fácil encontrar las funcionalidades que estaba buscando?',
            '¿El diseño de la aplicación es intuitivo?'
          ]
        },
        attitude: {
          title: 'Actitud hacia el uso de la aplicación',
          questions: [
            '¿Se siente motivado a seguir usando la aplicación?',
            '¿Recomendaría esta aplicación a otros estudiantes?',
            '¿Considera que la aplicación tiene potencial para mejorar su aprendizaje?'
          ]
        },
        intention: {
          title: 'Intención de uso y uso real',
          questions: [
            '¿Tiene intención de seguir utilizando la aplicación en el futuro?',
            '¿Considera que usará esta aplicación de manera regular?',
            '¿Se ha convertido esta aplicación en parte de su rutina de estudio?'
          ]
        }
      }
    };
  },
  mounted() {
    this.verificarSiYaRespondio();
  },
  methods: {
    async verificarSiYaRespondio() {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/encuesta/verificar', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        this.yaRespondio = data.yaRespondio;
      } catch (error) {
        console.error('Error al verificar encuesta:', error);
      }
    },
    async submitForm() {
      const {
        age, gender, tech_courses, household, income, employment,
        utility, easeOfUse, attitude, intention
      } = this.formData;

      if (
        !age || !gender || !tech_courses || !household || !income || !employment ||
        utility.includes('') || easeOfUse.includes('') ||
        attitude.includes('') || intention.includes('')
      ) {
        alert('Por favor, responde todas las preguntas antes de enviar.');
        return;
      }

      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/encuesta/responder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(this.formData)
        });

        const data = await response.json();

        if (response.ok) {
          alert('¡Gracias por completar la encuesta!');
          this.yaRespondio = true;
        } else {
          alert(data.message || 'Hubo un problema al enviar la encuesta.');
        }
      } catch (error) {
        console.error('Error al enviar encuesta:', error);
      }
    }
  }
};
</script>

<style scoped>
form {
  margin: 40px auto;
  max-width: 850px;
  padding: 30px;
  background: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  font-size: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 28px;
  color: #333;
}

h3 {
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 20px;
  color: #333;
}

.question,
.question2 {
  margin-bottom: 30px;
}

fieldset {
  border: none;
  margin-bottom: 20px;
  padding: 0;
}

legend {
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 10px;
  color: #444;
}

label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #333;
}

input[type="radio"] {
  transform: scale(1.2);
  cursor: pointer;
}

fieldset > label {
  display: inline-flex;
  align-items: center;
  margin-right: 25px;
  margin-bottom: 10px;
}

.information p {
  font-size: 15px;
  margin: 20px 0;
  line-height: 1.6;
  background-color: #f0f5ff;
  padding: 15px 20px;
  border-left: 4px solid #007acc;
  border-radius: 5px;
}

.question2 .text {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #444;
}

.question2 fieldset {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

button[type="submit"] {
  display: block;
  margin: 40px auto 0;
  padding: 12px 80px;
  font-size: 16px;
  font-weight: bold;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #388e3c;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
