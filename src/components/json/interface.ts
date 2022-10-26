export interface FormGeneratorData {
  type: "container" | "input" | "datepicker" | "list";
  code: string;
  parent: string | null;
  listdata: FormListData[];
  value: any;
}

export interface FormListData {
  key: number;
  value: string;
}
