<template>
  <main>
    <p>Double click to edit, focusout to save</p>
    <JsonViewer @generateModal="openModalWithForm" v-model:json="exampleJson" />
    <ModalComp v-model:show="showModal">
      <FormComp :content="fragment"></FormComp>
    </ModalComp>
  </main>
</template>

<script lang="ts">
import FormComp from "@/components/form/FormComp.vue";
import { FormGeneratorData } from "@/components/json/interface";
import JsonViewer from "@/components/json/JsonViewer.vue";
import ModalComp from "@/components/modal/ModalComp.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { JsonViewer, ModalComp, FormComp },
  data() {
    return {
      fragment: null as unknown as DocumentFragment,
      showModal: false,
      exampleJson: [
        {
          type: "container",
          code: "k1",
          parent: null,
        },
        {
          type: "input",
          code: "c1",
          parent: "k1",
          value: null,
        },
        {
          type: "datepicker",
          code: "c2",
          parent: "k1",
          value: "2020-01-01",
        },
        {
          type: "container",
          code: "k2",
          parent: "k1",
        },
        {
          type: "list",
          code: "с3",
          parent: "k2",
          listdata: [
            {
              key: 1,
              value: "мужской",
            },
            {
              key: 2,
              value: "женский",
            },
          ],
          value: 1,
        },
        {
          type: "input",
          code: "c4",
          parent: "k2",
          value: "тест",
        },
      ] as FormGeneratorData[],
    };
  },
  methods: {
    openModalWithForm(fragment: DocumentFragment) {
      this.showModal = true;
      this.fragment = fragment;
    },
  },
});
</script>

<style lang="scss"></style>
