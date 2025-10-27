<template>
    <div class="menu">
        <MenuItemCarro
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
import MenuItemCarro from './MenuItemCarro.vue';
export default {
    name: "recursive-menu",
    data: () => ({
        menuTree: [
            {
                label: "Contenido"
            },
            {
                label: "1. Fase de ensamblaje:",
                icon: "",
                children: [
                    {
                        label: "Paso 1. Conectar cables a los motorreductores:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/ConectarCablesMotorreductoresTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionConectarCablesMotorreductores"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoConectarCablesMotorreductores"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionConectarCablesMotorreductores"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionConectarCablesMotorreductores"
                                    },
                                ]
                            },
                        ]
                    },

                    {
                        label: "Paso 2. Ensamblar soportes de los motorreductores al chasis:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/EnsamblarSoportesMotorreductoresTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionEnsamblarSoportesMotorreductores"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoEnsamblarSoportesMotorreductores"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionEnsamblarSoportesMotorreductores"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionEnsamblarSoportesMotorreductores"
                                    },
                                ]
                            },
                        ]
                    },

                    {
                        label: "Paso 3. Ensamblar motorreductores a los soportes:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/EnsamblarMotorreductoresSoportesTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionEnsamblarMotorreductoresSoportes"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoEnsamblarMotorreductoresSoportes"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionEnsamblarMotorreductoresSoportes"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizaciónEnsamblarMotorreductoresSoportes"
                                    },
                                ]
                            },
                        ]
                    },

                    {
                        label: "Paso 4. Ensamblar ruedas a los motorreductores:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/EnsamblarRuedasMotorreductoresTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionEnsamblarRuedasMotorreductores"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoEnsamblarRuedasMotorreductores"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionEnsamblarRuedasMotorreductores"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionEnsamblarRuedasMotorreductores"
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },

            {
                label: "2. Fase de montaje del circuito en el Arduino UNO:",
                icon: "",
                children: [
                    {
                        label: "Paso 1. Montar Arduino UNO en el soporte:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/MontarArduinoUNOSoporteTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionMontarArduinoUNOSoporte"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoMontarArduinoUNOSoporte"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstractionMontarArduinoUNOSoporte"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionMontarArduinoUNOSoporte"
                                    },
                                ]
                            },
                        ]
                    },

                    {
                        label: "Paso 2. Montar módulo Bluetooth HC-06 al Arduino UNO:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/MontarModuloBluetoothHC06Teoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionMontarModuloBluetoothHC06"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoMontarModuloBluetoothHC06"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionMontarModuloBluetoothHC06"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionMontarModuloBluetoothHC06"
                                    },
                                ]
                            },
                        ]
                    },

                    {
                        label: "Paso 3. Montar puente H (módulo L298N) y conectarlo al Arduino UNO:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/MontarModuloPuenteHL298NTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionMontarModuloPuenteHL298N"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoMontarModuloPuenteHL298N"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionMontarModuloPuenteHL298N"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionMontarModuloPuenteHL298N"
                                    },
                                ]
                            },
                        ]
                    },

                ],
            },


            {
                label: "3. Fase de conectar la fuente de poder al circuito:",
                icon: "",
                children: [
                    {
                        label: "Paso 1. Montar Arduino UNO en el soporte:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/MontarArduinoUNOSoporteTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionMontarArduinoUNOSoporte"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoMontarArduinoUNOSoporte"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstractionMontarArduinoUNOSoporte"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionMontarArduinoUNOSoporte"
                                    },
                                ]
                            },
                        ]
                    },

                    {
                        label: "Paso 2. Montar módulo Bluetooth HC-06 al Arduino UNO:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/MontarModuloBluetoothHC06Teoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionMontarModuloBluetoothHC06"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoMontarModuloBluetoothHC06"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionMontarModuloBluetoothHC06"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionMontarModuloBluetoothHC06"
                                    },
                                ]
                            },
                        ]
                    },

                    {
                        label: "Paso 3. Montar puente H (módulo L298N) y conectarlo al Arduino UNO:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/MontarModuloPuenteHL298NTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionMontarModuloPuenteHL298N"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoMontarModuloPuenteHL298N"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionMontarModuloPuenteHL298N"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionMontarModuloPuenteHL298N"
                                    },
                                ]
                            },
                        ]
                    },

                ],
            },
    
    ]
    
    }),

    components: {
        MenuItemCarro
    },
}
</script>

<style scoped>

.menu {
    position: fixed;
    top: 52px; /* 🔹 altura de tu navbar (ajústala si tu navbar es más alto) */
    right: 0; /* 🔹 lo mueve al lado derecho */
    height: calc(100vh - 64px); /* 🔹 ocupa toda la pantalla menos el alto del navbar */
    width: 475px;
    border-left: 0px solid #ececec; /* 🔹 borde en el lado izquierdo del menú */
    transition: all 0.3s ease;
    overflow-y: auto;
    font-weight: bold;
    background-color: rgb(235, 241, 243);
    z-index: 999; /* 🔹 asegura que quede encima del contenido, pero debajo del navbar */
}

/* 🔹 En pantallas medianas (como laptops de 16") */
@media (max-width: 1200px) {
  .menu {
    width: 26vw;
    max-width: 300px;
  }
}

/* 🔹 En pantallas pequeñas (tablets o laptops de 13-14") */
@media (max-width: 992px) {
  .menu {
    width: 30vw;
    max-width: 260px;
  }
}

/* 🔹 En pantallas muy pequeñas (por ejemplo, móviles o tablets verticales) */
@media (max-width: 768px) {
  .menu {
    position: fixed;
    width: 100%;
    height: auto;
    top: var(--navbar-height);
    border-left: none;
    border-top: 1px solid #333;
  }
}

</style>