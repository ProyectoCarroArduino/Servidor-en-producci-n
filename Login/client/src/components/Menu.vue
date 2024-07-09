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
                label: "1. ¿Qué es C?:",
                icon: "",
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
                        href: "/user"
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
                                        href: "/descomposicion"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/algoritmo"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/abstraccion"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/generalizacion"
                                    },
                                ]
                            },
                            {
                                label: "Ejemplo 2:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/prueba"
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
               label: "5. Estructuras de control y repetición:" ,
               icon: "",
               children: [
                    {
                        label: "5.2 Estructuras de repetición (switch case): ",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/teoria"
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
                                                href: "/descomposicionSwitchEj"
                                            },
                                            {
                                                label: "Algoritmo",
                                                href: "/algorithmSwitchEj"
                                            },
                                            {
                                                label: "Abstracción",
                                                href: "/abstractionSwitchEj"
                                            },
                                            {
                                                label: "Generalización",
                                                href: "/generalizacionSwitchEj"
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
            }
    
    ]
    
    }),

    components: {
        MenuItem
    },
}
</script>

<style scoped>

.menu {
    position: fixed;
    height: 100vh;
    width: 336px;
    left: 100;
    top: 1;
    border-right: 1px solid #ececec;
    transition: all .3s ease;
    overflow: auto;
    font-weight: bold;
    background-color: rgb(235, 241, 243);
}

</style>