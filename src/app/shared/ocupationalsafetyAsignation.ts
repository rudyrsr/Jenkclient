import { OcupationalSafety } from "./ocupationalsafety";
import { Employee } from "./employee";

export interface OcupationalSafetyAsignation {
  id: number;
  assignationInitDate: Date;
  assignationEndDate: Date;
  ocupationalsafetyId: number;
  employeeId: number;
  employeeCM:Employee;
  ocupationalsafetyCM:OcupationalSafety;
}

