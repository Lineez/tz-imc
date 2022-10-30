<template>
  <pre><code @dblclick="change" @blur="saveChanges">{{ json }}</code></pre>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FormGeneratorData } from "@/components/json/interface";

export default defineComponent({
  props: {
    json: {
      type: Object as PropType<FormGeneratorData[]>,
      required: true,
    },
  },
  emits: ["update:json"],
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
  },
});
</script>

<style lang="scss"></style>
