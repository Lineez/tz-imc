<template>
  <form ref="form"></form>
  <UiButton @click="showResult">Show result</UiButton>
</template>

<script lang="ts">
import UiButton from "@/components/buttons/UiButton.vue";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  components: { UiButton },
  props: {
    content: {
      type: Object as PropType<DocumentFragment>,
      required: true,
    },
  },
  mounted() {
    (this.$refs.form as HTMLFormElement).append(this.content);
  },
  methods: {
    showResult(e: Event) {
      const formData = new FormData(this.$refs.form as HTMLFormElement);

      alert(JSON.stringify(Object.fromEntries(formData)));
    },
  },
});
</script>

<style lang="scss">
.input,
.container {
  border: 1px solid silver;
}
.container {
  padding: 10px;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 5px;
  }
}
</style>
