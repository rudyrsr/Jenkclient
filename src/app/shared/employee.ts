import { EmployeePosition } from "./employee-position";

export interface Employee {
  id?: number;
  ci?: number;
  name?: string;
  gender?: string;
  address?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  phone?:number;
  image?: string;
  featured?: boolean;
  version?: number,
  created_on?: string,
  //TODO remove these fields
  jobPosition?: string;
  jobCode?: string;
  jobDescription?: string;

  position?: EmployeePosition
}
