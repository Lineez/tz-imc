<template>
  <div v-if="show" @click="closeModal" class="modal">
    <div class="modal__wrap">
      <div @click.stop class="modal__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:show"],
  methods: {
    closeModal() {
      this.$emit("update:show", false);
    },
  },
});
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  // .modal__wrap
  &__wrap {
    height: 100vh;
    padding: 50px 0;
    overflow: auto;
  }
  // .modal__content
  &__content {
    max-width: 500px;
    padding: 15px;
    margin: 0 auto;
    background-color: var(--color-white);
  }
}
</style>
