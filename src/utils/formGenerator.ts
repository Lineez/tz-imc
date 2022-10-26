import { FormGeneratorData } from "@/components/json/interface";

export function formGenerator(json: FormGeneratorData[]): DocumentFragment {
  const fragment = new DocumentFragment();

  for (const objNode of json) {
    const node = generateNodeByType(objNode);

    if (objNode.parent) {
      const parent = fragment.querySelector(`[data-code="${objNode.parent}"]`);

      if (parent) {
        node.removeAttribute("data-parent");
        parent.append(node);
      }
    } else {
      fragment.append(node);
    }
  }
  return fragment;
}

function generateNodeByType(objNode: FormGeneratorData) {
  let node = null;

  // datepicker
  if (objNode.type === "datepicker") {
    node = document.createElement("input");
    node.type = "date";
    node.value = objNode.value;
    node.name = `${objNode.type}_${objNode.code}`;
  }
  // input
  else if (objNode.type === "input") {
    node = document.createElement("input");
    node.value = objNode.value;
    node.name = `${objNode.type}_${objNode.code}`;
  }
  // list
  else if (objNode.type === "list") {
    node = document.createElement("fieldset");

    const childs = objNode.listdata.map((item) => {
      const label = document.createElement("label");
      label.textContent = item.value;

      const input = document.createElement("input");
      input.type = "radio";
      input.value = String(item.value);
      input.name = `list_${objNode.code}`;

      if (objNode.value === item.key) {
        input.setAttribute("checked", "true");
      }

      label.append(input);
      return label;
    });

    node.append(...childs);
  }
  // container
  else {
    node = document.createElement("div");
  }

  node.setAttribute("data-code", objNode.code);
  if (objNode.parent) {
    node.setAttribute("data-parent", objNode.parent);
  }
  node.classList.add(objNode.type);
  return node;
}
