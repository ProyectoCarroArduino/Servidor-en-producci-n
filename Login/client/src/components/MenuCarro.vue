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
                                href: "/ConectarCablesTeoria",
                            },
                            {
                                label: "Ejercicio:",
                                children: [
                                    {
                                        label: "Descomposición",
                                        href: "/DescomposicionConectarCables"
                                    },
                                    {
                                        label: "Algoritmo",
                                        href: "/AlgoritmoConectarCables"
                                    },
                                    {
                                        label: "Abstracción",
                                        href: "/AbstraccionConectarCables"
                                    },
                                    {
                                        label: "Generalización",
                                        href: "/GeneralizacionConectarCables"
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