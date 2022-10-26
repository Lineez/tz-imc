<template>
  <UiButton @click="generateModal">Generate modal</UiButton>
  <pre><code @dblclick="change" @blur="saveChanges">{{ json }}</code></pre>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { formGenerator } from "@/utils/formGenerator";
import { FormGeneratorData } from "@/components/json/interface";
import UiButton from "@/components/buttons/UiButton.vue";

export default defineComponent({
  components: { UiButton },
  props: {
    json: {
      type: Object as PropType<FormGeneratorData[]>,
      required: true,
    },
  },
  emits: ["generateModal", "update:json"],
  methods: {
    change(e: Event) {
      const target = e.target as HTMLElement;
      target.setAttribute("contenteditable", "true");
      target.focus();
    },
    saveChanges(e: Event) {
      const target = e.target as HTMLElement;
      target.removeAttribute("contenteditable");
      if (target.textContent) {
        try {
          const json = JSON.parse(target.textContent);
          this.$emit("update:json", json);
        } catch (error) {
          alert("input valid json");
        }
      }
    },
    generateModal() {
      const form = formGenerator(this.json);
      this.$emit("generateModal", form);
    },
  },
});
</script>

<style lang="scss"></style>
