<template>
    <header-comp />
    <router-view />
    <footer-comp />
</template>

<script>
import FooterComp from "@/components/FooterComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: { FooterComp, HeaderComp },
});
</script>

<style lang="scss" scoped></style>
