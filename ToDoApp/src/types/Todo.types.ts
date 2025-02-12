export type TodoType = {
  id: string;
  name: string;
  priority: PriorityType;
};

type PriorityType = "High" | "Medium" | "Low";
