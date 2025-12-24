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
                        label: "Paso 1. Conectar la fuente de poder a la bornera macho:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/ConectarFuentePoderBorneraMachoTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionConectarFuentePoderBorneraMacho"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoConectarFuentePoderBorneraMacho"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionConectarFuentePoderBorneraMacho"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionConectarFuentePoderBorneraMacho"
                                    },
                                ]
                            },
                        ]
                    },

                    {
                        label: "Paso 2. Preparar la bornera hembra para conexión:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/PrepararBorneraHembraConexionTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionPrepararBorneraHembraConexion"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoPrepararBorneraHembraConexion"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionPrepararBorneraHembraConexion"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionPrepararBorneraHembraConexion"
                                    },
                                ]
                            },
                        ]
                    },

                    {
                        label: "Paso 3. Conectar bornera tipo hembra al puente H (módulo L298N):",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/ConectarBorneraHembraPuenteHTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionConectarBorneraHembraPuenteH"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoConectarBorneraHembraPuenteH"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionConectarBorneraHembraPuenteH"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionConectarBorneraHembraPuenteH"
                                    },
                                ]
                            },
                        ]
                    },

                ],
            },

                       {
                label: "4. Montaje del circuito al chasis:",
                icon: "",
                children: [
                    {
                        label: "Paso 1. Desplazar circuito al chasis:",
                        icon: "",
                        children: [
                            {
                                label: "Teoria",
                                icon: "",
                                href: "/DesplazarCircuitoChasisTeoria",
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

    
    ]
    
    }),

    components: {
        MenuItemCarro
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
