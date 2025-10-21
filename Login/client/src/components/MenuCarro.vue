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