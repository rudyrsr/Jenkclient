import { Employee } from "./employee";



export interface Project {
  id: number;
  projectCode: string;
  projectName: string
  porjectLabel: string;
  projectDescription: string;
  projectLocation: string;
  projectInitDate: Date;
  projectEndDate: Date;
  image: string;
  activate: boolean;
  employees: Employee[];
}













