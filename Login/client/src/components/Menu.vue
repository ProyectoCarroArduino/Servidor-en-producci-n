<template>
  <GuideSidebar
    :items="menuTree"
    id="programacion"
    title="Programación en C"
    intro-route="/IntroGuiaC"
    section-label="Temas"
    count-label="temas"
    footer-text="Teoría, ejemplos y ejercicios"
  />
</template>

<script>
import GuideSidebar from './GuideSidebar.vue';
export default {
    name: "recursive-menu",
    data: () => ({
        menuTree: [
            {
                label: "Contenido"
            },
            {
                label: "1. Conceptos básicos",
                icon: "",
                children: [
                    {
                        label: "1.1 Introducción a C",
                        children: [
                            {
                                label: "Teoría",
                                icon: "",
                                href: "/CBTeoria"
                            },
                            {
                                label: "Ejemplo:",
                                icon: "",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/CBEjDescomposicion"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/CBEjAlgoritmo"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/CBEjAbstraccion"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/CBEjGeneralizacion"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicios:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejercicio 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/CBDescomposicion1"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/CBAlgoritmo1"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/CBAbstraccion1"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/CBGeneralizacion1"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/CBDescomposicion2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/CBAlgoritmo2"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/CBAbstraccion2"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/CBGeneralizacion2"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 3:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/CBDescomposicion3"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/CBAlgoritmo3"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/CBAbstraccion3"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/CBGeneralizacion3"
                                            },
                                        ]
                                    },
                                ]
                            }
                        ],
                    },
                ],
            },
            {
                label: "2. ¿Cómo instalar el IDE de C?:",
                icon: "",
                href: "/ComoInstalarCTeoria",
            },
            {
                label: "3. Estructura de un programa e impresiones por pantalla:",
                icon: "",
                children: [
                    {
                        label: "Teoria",
                        icon: "",
                        href: "/EstructuraProgramaCTeoria"
                    },
                    {
                        label: "Ejemplo:",
                        icon: "",
                        children: [
                            {
                                label: "Descomposición",
                                href: "/EIEjDescomposicion"
                            },
                            {
                                label: "Algoritmo",
                                href: "/EIEjAlgoritmo"
                            },
                            {
                                label: "Abstracción",
                                href: "/EIEjAbstraccion"
                            },
                            {
                                label: "Generalización",
                                href: "/EIEjGeneralizacion"
                            },
                      
                        ]
                    },
                    {
                        label: "Ejercicios:",
                        icon: "",
                        children: [
                            {
                                label: "Ejercicio 1:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/EIDescomposicion1"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/EIAlgoritmo1"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/EIAbstraccion1"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/EIGeneralizacion1"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicio 2:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/EIDescomposicion2"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/EIAlgoritmo2"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/EIAbstraccion2"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/EIGeneralizacion2"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicio 3:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/EIDescomposicion3"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/EIAlgoritmo3"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/EIAbstraccion3"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/EIGeneralizacion3"
                                    },
                                ]
                            },
                        ]
                    }
                ],  
            },
            {
                label: "4. Variables y operaciones:",
                icon: "",
                children: [
                    {
                        label: "Teoria",
                        icon: "",
                        href: "/VariablesOperacionesCTeoria"
                    },
                    {
                        label: "Ejemplo:",
                        icon: "",
                        children: [
                            {
                                label: "Descomposición",
                                href: "/DescomposicionVariablesOperacionesCEjemplo"
                            },
                            {
                                label: "Algoritmo",
                                href: "/AlgoritmoVariablesOperacionesCEjemplo"
                            },
                            {
                                label: "Abstracción",
                                href: "/AbstraccionVariablesOperacionesCEjemplo"
                            },
                            {
                                label: "Generalización",
                                href: "/GeneralizacionVariablesOperacionesCEjemplo"
                            },
                      
                        ]
                    },
                    {
                        label: "Ejercicios:",
                        icon: "",
                        children: [
                            {
                                label: "Ejercicio 1:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionVariablesOperacionesCEjercicio1"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoVariablesOperacionesCEjercicio1"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionVariablesOperacionesCEjercicio1"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionVariablesOperacionesCEjercicio1"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicio 2:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionVariablesOperacionesCEjercicio2"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoVariablesOperacionesCEjercicio2"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionVariablesOperacionesCEjercicio2"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionVariablesOperacionesCEjercicio2"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicio 3:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionVariablesOperacionesCEjercicio3"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoVariablesOperacionesCEjercicio3"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionVariablesOperacionesCEjercicio3"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionVariablesOperacionesCEjercicio3"
                                    },
                                ]
                            },
                        ]
                    }
                ],  
            },

            {
               label: "5. Estructuras de control y repetición:" ,
               icon: "",
               children: [

                    {
                        label: "5.1 Estructuras de control (if else): ",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/IfElseCTeoria"
                            },
                            {
                                label: "Ejemplo:",
                                icon: "",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/IEEjDescomposicion"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/IEEjAlgoritmo"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/IEEjAbstraccion"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/IEEjGeneralizacion"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicios:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejercicio 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/IEDescomposicion1"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/IEAlgoritmo1"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/IEAbstraccion1"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/IEGeneralizacion1"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/IEDescomposicion2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/IEAlgoritmo2"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/IEAbstraccion2"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/IEGeneralizacion2"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 3:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/IEDescomposicion3"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/IEAlgoritmo3"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/IEAbstraccion3"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/IEGeneralizacion3"
                                            },
                                        ]
                                    },
                                ]
                            }
                            
                        ],
                    },

                    {
                        label: "5.2 Estructuras de repetición (ciclo for): ",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/ForCTeoria"
                            },
                            {
                                label: "Ejemplo:",
                                icon: "",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/FOREjDescomposicion"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/FOREjAlgoritmo"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/FOREjAbstraccion"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/FOREjGeneralizacion"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicios:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejercicio 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/FORDescomposicion1"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/FORAlgoritmo1"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/FORAbstraccion1"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/FORGeneralizacion1"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/FORDescomposicion2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/FORAlgoritmo2"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/FORAbstraccion2"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/FORGeneralizacion2"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 3:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/FORDescomposicion3"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/FORAlgoritmo3"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/FORAbstraccion3"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/FORGeneralizacion3"
                                            },
                                        ]
                                    },
                                ]
                            }
                            
                        ],
                    },

                    {
                        label: "5.3 Estructuras de repetición (ciclo while): ",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/WhileCTeoria"
                            },
                            {
                                label: "Ejemplo:",
                                icon: "",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionWhileCEjemplo"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoWhileCEjemplo"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionWhileCEjemplo"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionWhileCEjemplo"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicios:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejercicio 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/DescomposicionWhileCEjercicio1"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: ""
                                            },
                                            {
                                                label: "Abstracción",
                                                href: ""
                                            },
                                            {
                                                label: "Generalización",
                                                href: ""
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 3:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: ""
                                            },
                                            {
                                                label: "Abstracción",
                                                href: ""
                                            },
                                            {
                                                label: "Generalización",
                                                href: ""
                                            },
                                        ]
                                    },
                                ]
                            } 
                        ],
                    },

                    {
                        label: "5.4 Estructuras de repetición (ciclo do while): ",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/"
                            },
                            {
                                label: "Ejemplo:",
                                icon: "",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicios:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejercicio 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/AlgoritmoWhileCEjercicio1"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/AbstraccionWhileCEjercicio1"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/GeneralizacionWhileCEjercicio1"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/DescomposicionWhileCEjercicio2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/AlgoritmoWhileCEjercicio2"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/AbstraccionWhileCEjercicio2"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/GeneralizacionWhileCEjercicio2"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 3:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: ""
                                            },
                                            {
                                                label: "Abstracción",
                                                href: ""
                                            },
                                            {
                                                label: "Generalización",
                                                href: ""
                                            },
                                        ]
                                    },
                                ]
                            }
                            
                        ],
                    },
                    {
                        label: "5.5 Estructuras de repetición (switch case): ",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/SwitchCaseCTeoria"
                            },
                            {
                                label: "Ejemplo:",
                                icon: "",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionSwitchCaseCEjemplo"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoSwitchCaseCEjemplo"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionSwitchCaseCEjemplo"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionSwitchCaseCEjemplo"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicios:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejercicio 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/DescomposicionSwitchCaseCEjercicio1"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/AlgoritmoSwitchCaseCEjercicio1"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/AbstraccionSwitchCaseCEjercicio1"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/GeneralizacionSwitchCaseCEjercicio1"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/DescomposicionSwitchCaseCEjercicio2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/AlgoritmoSwitchCaseCEjercicio2"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/AbstraccionSwitchCaseCEjercicio2"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/GeneralizacionSwitchCaseCEjercicio2"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 3:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/DescomposicionSwitchCaseCEjercicio3"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/AlgoritmoSwitchCaseCEjercicio3"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/AbstraccionSwitchCaseCEjercicio3"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/GeneralizacionSwitchCaseCEjercicio3"
                                            },
                                        ]
                                    },
                                ]
                            }
                            
                        ],
                    },

               ]
            },

            {
               label: "6. Estructuras de datos:" ,
               icon: "",
               children: [
                    {
                        label: "6.1 Estructuras de datos (arreglos): ",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/teoriaArray"
                            },
                            {
                                label: "Ejemplo:",
                                icon: "",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicios:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejercicio 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: ""
                                            },
                                            {
                                                label: "Abstracción",
                                                href: ""
                                            },
                                            {
                                                label: "Generalización",
                                                href: ""
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 3:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: ""
                                            },
                                            {
                                                label: "Abstracción",
                                                href: ""
                                            },
                                            {
                                                label: "Generalización",
                                                href: ""
                                            },
                                        ]
                                    },
                                ]
                            }
                            
                        ],
                    },

                    {
                        label: "6.2 Estructuras de datos (matrices): ",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/MatricesCTeoria"
                            },
                            {
                                label: "Ejemplo:",
                                icon: "",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/MATEjDescomposicion"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/MATEjAlgoritmo"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/MATEjAbstraccion"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/MATEjGeneralizacion"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicios:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejercicio 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/MATDescomposicion1"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/MATAlgoritmo1"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/MATAbstraccion1"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/MATGeneralizacion1"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/MATDescomposicion2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/MATAlgoritmo2"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/MATAbstraccion2"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/MATGeneralizacion2"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 3:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/MATDescomposicion3"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/MATAlgoritmo3"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/MATAbstraccion3"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/MATGeneralizacion3"
                                            },
                                        ]
                                    },
                                ]
                            }  
                        ],
                    },
               ]
            },

            {
               label: "7. Funciones:" ,
               icon: "",
               children: [
                    {
                        label: "7.1 Funciones (sin parámetros): ",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/teoriaFuncionesSinpar"
                            },
                            {
                                label: "Ejemplo:",
                                icon: "",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicios:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejercicio 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: ""
                                            },
                                            {
                                                label: "Abstracción",
                                                href: ""
                                            },
                                            {
                                                label: "Generalización",
                                                href: ""
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 3:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: ""
                                            },
                                            {
                                                label: "Abstracción",
                                                href: ""
                                            },
                                            {
                                                label: "Generalización",
                                                href: ""
                                            },
                                        ]
                                    },
                                ]
                            }
                            
                        ],
                    },

                    {
                        label: "7.2 Funciones (con parámetros): ",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/FuncionesConParametrosCTeoria"
                            },
                            {
                                label: "Ejemplo:",
                                icon: "",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/FCPEjDescomposicion"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/FCPEjAlgoritmo"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/FCPEjAbstraccion"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/FCPEjGeneralizacion"
                                    },
                                ]
                            },
                            {
                                label: "Ejercicios:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejercicio 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/FCPDescomposicion1"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/FCPAlgoritmo1"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/FCPAbstraccion1"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/FCPGeneralizacion1"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/FCPDescomposicion2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/FCPAlgoritmo2"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/FCPAbstraccion2"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/FCPGeneralizacion2"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 3:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/FCPDescomposicion3"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/FCPAlgoritmo3"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/FCPAbstraccion3"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/FCPGeneralizacion3"
                                            },
                                        ]
                                    },
                                ]
                            }
                            
                        ],
                    },
               ]
            },
    
    ]
    
    }),

    components: { GuideSidebar },
}
</script>
