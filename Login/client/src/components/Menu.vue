<template>
    <div class="menu">
        <MenuItem
            v-for="(item, index) in menuTree" 
            :key="index"
            :label="item.label"
            :icon="item.icon"
            :depth="0"
            :data="item.children"
            :menuTree="menuTree"
            :href="item.href"
        />
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
export default {
    name: "recursive-menu",
    data: () => ({
        menuTree: [
            {
                label: "Contenido"
            },
            {
                label: "1. Conceptos basicos",
                icon: "",
                children: [
                    {
                        label: "1.1 Introduccion a C",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/CBTeoria"
                            },
                            {
                                label: "Ejemplos:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejemplo 1:",
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
                                        label: "Ejemplo 2:",
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
                                    }
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
                                                href: "CBDescomposicion1"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "CBAlgoritmo1"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "CBAbstraccion1"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "CBGeneralizacion1"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 4:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 5:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    }
                                ]
                            }
                            
                        ],
                    },
               ],
                href: "",
            },
            {
                label: "2. ¿Cómo instalar el IDE de C?:",
                icon: "",
                href: "",
            },
            {
                label: "3. Estructura de un programa e impresiones por pantalla:",
                icon: "",
                href: "",
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
                        label: "5.2 Estructuras de repetición (switch case): ",
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
                                                href: "DescomposicionSwitchCaseCEjercicio2"
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                ]
                            }
                            
                        ],
                    },

                    {
                        label: "5.4 Estructuras de repetición (ciclo while): ",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/teoriaWhile"
                            },
                            {
                                label: "Ejemplos:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejemplo 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/descomposicionWhileEj"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/algoritmoWhileEj"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/abstraccionWhileEj"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/generalizacionWhileEj"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejemplo 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/descomposicionSwitchEj2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/algoritmoEj"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/abstraccionEj"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/generalizacionEj"
                                            },
                                        ]
                                    }
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
                                                href: "/prueba"
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 4:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 5:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    }
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
                                label: "Ejemplos:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejemplo 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/descomposicionArrayEj"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/algoritmoArrayEj"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/abstraccionArrayEj"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/generalizacionArrayEj"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejemplo 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/descomposicionSwitchEj2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/algoritmoEj"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/abstraccionEj"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/generalizacionEj"
                                            },
                                        ]
                                    }
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
                                                href: "/prueba"
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 4:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 5:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    }
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
                                href: "/teoriaWhile"
                            },
                            {
                                label: "Ejemplos:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejemplo 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/descomposicionWhileEj"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/algoritmoWhileEj"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/abstraccionWhileEj"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/generalizacionWhileEj"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejemplo 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/descomposicionSwitchEj2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/algoritmoEj"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/abstraccionEj"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/generalizacionEj"
                                            },
                                        ]
                                    }
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
                                                href: "/prueba"
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 4:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 5:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    }
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
                                label: "Ejemplos:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejemplo 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/descomposicionFuncionesSinparEj"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/algoritmoFuncionesSinparEj"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/abstraccionFuncionesSinparEj"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/generalizacionFuncionesSinparEj"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejemplo 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/descomposicionFuncionesSinparEj2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/algoritmoEj"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/abstraccionEj"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/generalizacionEj"
                                            },
                                        ]
                                    }
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
                                                href: "/prueba"
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 4:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 5:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    }
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
                                href: "/teoriaWhile"
                            },
                            {
                                label: "Ejemplos:",
                                icon: "",
                                children: [
                                    {
                                        label: "Ejemplo 1:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/descomposicionWhileEj"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/algoritmoWhileEj"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/abstraccionWhileEj"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/generalizacionWhileEj"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejemplo 2:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: "/descomposicionSwitchEj2"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/algoritmoEj"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/abstraccionEj"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/generalizacionEj"
                                            },
                                        ]
                                    }
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
                                                href: "/prueba"
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
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
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 4:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    },
                                    {
                                        label: "Ejercicio 5:",
                                        children: [
                                            {
                                                label: "Descomposición",
                                                href: ""
                                            },
                                            {
                                                label: "Algoritmo"
                                            },
                                            {
                                                label: "Abstracción"
                                            },
                                            {
                                                label: "Generalización"
                                            },
                                        ]
                                    }
                                ]
                            }
                            
                        ],
                    },
               ]
            },
    
    ]
    
    }),

    components: {
        MenuItem
    },
}
</script>

<style>

.menu {
  position: fixed;
  top: 52px;
  right: 0;
  height: calc(100vh - 52px);
  background-color: rgb(235, 241, 243);
  font-weight: bold;
  overflow-y: auto;
  transition: all 0.3s ease;
  z-index: 999;

  /* 🔹 AJUSTE DE ANCHO */
  /* Mínimo 180px, ideal 18vw, máximo 320px */
  width: clamp(180px, 18vw, 320px);

  /* 🔹 SEPARACIÓN del contenido principal (empuja hacia la izquierda) */
  padding-left: 0px; 
  box-sizing: border-box;
}

/* Laptops medianas */
@media (max-width: 1300px) {
  .menu {
    width: clamp(160px, 20vw, 280px);
  }
}

/* Tablets */
@media (max-width: 900px) {
  .menu {
    position: relative;
    width: 100%;
    height: auto;
    top: 0;
    border-left: none;
    border-top: 1px solid #ccc;
  }
}

/* Celulares */
@media (max-width: 600px) {
  .menu {
    display: none;
  }
}


</style>