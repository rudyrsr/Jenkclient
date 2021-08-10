import { Machinery } from "./machinery";
import { Employee } from "./employee";

export interface AsignationMachinery {
    id: number;
    assignationInitDate:Date;
    assignationEndDate:Date;
    machineryId: number;
    employeeId: number;
    machineryCM: Machinery;
    employeeCE: Employee;
    

}
