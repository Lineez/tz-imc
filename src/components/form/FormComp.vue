<script lang="ts">
import UiButton from "@/components/buttons/UiButton.vue";
import { FormGeneratorData } from "@/components/json/interface";
import { defineComponent, h, PropType, VNode } from "vue";

export default defineComponent({
  render() {
    const form = h("form", null, []);
    const excludeObjCodes: string[] = [];

    for (const objNode of this.content) {
      if (excludeObjCodes.includes(objNode.code)) continue;

      const node = this.generateNodeByType(objNode);

      const childs = this.generateChilds(objNode, excludeObjCodes);

      node.children = childs;

      (form.children as VNode[]).push(node);
    }

    return form;
  },
  components: {
    UiButton,
  },
  props: {
    content: {
      type: Object as PropType<FormGeneratorData[]>,
      required: true,
    },
  },
  methods: {
    generateChilds(objNode: FormGeneratorData, excludeObjCodes: string[]) {
      const childsObj = this.content.filter(
        (item) => item.parent === objNode.code
      );

      const childs: VNode[] = [];

      if (childsObj.length) {
        for (const child of childsObj) {
          const node = this.generateNodeByType(child);
          const insideChilds = this.generateChilds(child, excludeObjCodes);

          (node.children as VNode[]).push(...insideChilds);

          childs.push(node);
        }
      }
      excludeObjCodes.push(objNode.code);
      return childs;
    },
    generateNodeByType(objNode: FormGeneratorData) {
      let vNode = null;

      // datepicker
      if (objNode.type === "datepicker") {
        vNode = h(
          "input",
          {
            type: "date",
            value: objNode.value,
            name: `${objNode.type}_${objNode.code}`,
          },
          []
        );
      }
      // input
      else if (objNode.type === "input") {
        vNode = h(
          "input",
          {
            value: objNode.value,
            name: `${objNode.type}_${objNode.code}`,
          },
          []
        );
      }
      // list
      else if (objNode.type === "list") {
        const childs = objNode.listdata.map((item) => {
          const input = h(
            "input",
            {
              type: "radio",
              value: String(item.value),
              name: `list_${objNode.code}`,
              checked: objNode.value === item.key ? true : false,
            },
            []
          );

          const label = h("label", [item.value, input]);

          return label;
        });

        vNode = h("fieldset", null, childs);
      }
      // container
      else {
        vNode = h("div", null, []);
      }

      vNode.props = vNode.props || {};
      vNode.props.class = objNode.type;
      return vNode;
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
