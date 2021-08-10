import { Time } from "@angular/common";
import { Employee } from "./employee";
import { Accident } from "./accident";

export interface AccidentRegistry{
    accidentRid: number;
    accidentRegistryDate: String;
    accidentRegistryHour: String;
    deleted: Boolean;
    accident: Accident;
    employee: Employee;
    
  }