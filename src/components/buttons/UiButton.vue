<template>
  <button :class="className"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    className: {
      type: String,
      required: false,
      default: "button",
    },
  },
});
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 15px;
  border: 1px solid teal;
}
</style>
