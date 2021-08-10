import { Employee } from "./employee";
import { AfflictionCatalog } from "./afflictionCatalog";


export interface Affliction {
  id: number;
  afflictionName: string;
  afflictionCode: string;
  afflictionDescription: string;
  afflictionObservation: string;
  afflictionRegDate: Date;
  afflictionLabel: string;
  employeeCommand: Employee;
  afflictionCatalogCM: AfflictionCatalog;
  afflictionCatalogId:number;
  employeeId:number;
}


