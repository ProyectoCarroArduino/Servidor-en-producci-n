import { defineStore } from "pinia";


// store/evaluacion.js

export const useEvaluacionStore = defineStore('evaluacionTotal', {
  state: () => ({
    evaluacion: 0,
  }),
  actions: {
    setEvaluacionTotal(valor: number) {
      this.evaluacion = valor;
    }
  }
});

export const useEvaluacionAlgorithmStore = defineStore('evaluacionAlgorithm', {
  state: () => ({
    evaluacion: 0,
  }),
  actions: {
    setEvaluacion(valor: number) {
      this.evaluacion = valor;
    }
  }
});

export const useEvaluacionAbstractionStore = defineStore('evaluacionAbstraction', {
  state: () => ({
    evaluacion: 0,
  }),
  actions: {
    setEvaluacion(valor: number) {
      this.evaluacion = valor;
    }
  }
});

export const useEvaluacionGeneralizationStore = defineStore('evaluacionGeneralization', {
  state: () => ({
    evaluacion: 0,
  }),
  actions: {
    setEvaluacion(valor: number) {
      this.evaluacion = valor;
    }
  }
});

export const useEvaluacionConectarCablesStore = defineStore("evaluacionConectarCables", {
  state: () => ({
    evaluacion: 0,
  }),
  actions: {
    setEvaluacion(valor: number) {
      this.evaluacion = valor;
    },
    calcularPromedioDesdeStores() {
      const evaluacionTotal: number = useEvaluacionStore().evaluacion;
      const evaluacionAlgorithm: number = useEvaluacionAlgorithmStore().evaluacion;
      const evaluacionAbstraction: number = useEvaluacionAbstractionStore().evaluacion;
      const evaluacionGeneralization: number = useEvaluacionGeneralizationStore().evaluacion;

      // Incluye evaluacionTotal en la suma y luego divide entre 4
      this.evaluacion =
        (evaluacionTotal + evaluacionAlgorithm + evaluacionAbstraction + evaluacionGeneralization) / 4;
    },
  },
});