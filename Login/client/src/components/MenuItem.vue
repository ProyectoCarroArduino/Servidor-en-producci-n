<template>
    <div class="menu-item" :class="{expanded: expanded}">
        <div 
            class="label"
            @click="handleClick()"
            :style="{
                paddingLeft: depth * 20 + 'px'
            }"
        >
            <div class="left" :style="{ marginLeft: 10 + depth * 10 + 'px' }">
                <i v-if="icon" class="material-icons">{{ icon }}</i>
                <span>{{ label }}</span>
            </div>
            <div v-if="data" class="right">
                <i class="expand material-icons" :class="{expanded: expanded}" style="color: #6e6e6e;">expand_more</i>
            </div>
        </div>
        <div 
            v-show="showChildren"
            class="items-container"
            ref="container"
            :style="{height: containerHeight}"
        >
            <menu-item
                v-for="(item, index) in data"
                :key="index"
                :label="item.label"
                :icon="item.icon"
                :depth="depth + 1"
                :data="item.children"
                :href="item.href"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'menu-item',
    data: () => ({
        showChildren: false,
        expanded: false,
        containerHeight: 0,
    }),
    props: {
        label: {
            type: String, 
            required: true
        },
        icon: {
            type: String
        },
        depth: {
            type: Number, 
            required: true
        },
        data: {
            type: Array
        }, 
        href: {
            type: String, 
        },
    },

    methods: {
        toggleMenu() {
            this.expanded = !this.expanded;
            if(!this.showChildren) {
                this.showChildren = true;
                this.$nextTick(() => {
                    this.containerHeight = this.$refs["container"].scrollHeight + "px";
                    setTimeout(() => {
                        this.containerHeight = "fit-content";
                        this.$refs["container"].style.overflow = "visible";
                    }, 300)
                })
            }else{
                this.containerHeight = this.$refs["container"].scrollHeight + "px";
                this.$refs["container"].style.overflow = "hidden";
                setTimeout(() => {
                    this.containerHeight = 0 + "px";
                }, 10)
                setTimeout(() => {
                    this.showChildren = false;

                }, 300)
                this.showChildren = false;
            }
        },

        handleClick() {
            if (this.data === undefined || this.data === null) {
                // Redirige utilizando Vue Router si hay una ruta definida
                if (this.href) {
                    this.$router.push(this.href);
                }
            } else {
                this.toggleMenu();
            }
        },
    }
}
</script>

<style scoped>

.menu-item {
    position: relative;
    width: 100%;
    .label {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        white-space: nowrap;
        user-select: none;
        height: 50px;
        padding: 0 20px;
        box-sizing: border-box;
        color: #3a3939;
        transition: all .3s ease;
        border-bottom: 1px solid #dddcdccc;
        border-top: 1px solid #dddcdccc;
        > div {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        i {
            font-size: 20px;
            color: #6e6e6e;
            transition: all .3s ease;
            &.expand {
                font-size: 16px;
                color: #cacaca;
                &.expanded {
                    transform: rotate(180deg);
                }
            }
        }
    }
    &:hover {
        background-color: #d2e2f7;
        cursor: pointer;
    }
    .items-container {
        width: 100%;
        overflow: hidden;
        transition: height .3s ease;
    }
}

</style>