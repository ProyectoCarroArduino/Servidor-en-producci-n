import { defineStore } from "pinia";

export const useEvaluacionStore = defineStore("evaluacion", {
  state: () => ({
    evaluacionTotal: 0 as number,
  }),

  actions: {
    setEvaluacionTotal(valor: number) {
      this.evaluacionTotal = valor;
    },
  },
});