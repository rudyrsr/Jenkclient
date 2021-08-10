import { Project } from "./project";
import { Employee } from "./employee";

export interface ProjectAsignation {
  id: number;
  assignationInitDate: string;
  assignationEndDate: string;
  projectId: number;
  employeeId: number;
  employeeCM:Employee;
  projectCM:Project;
}

