import { Employee } from "./employee";
import { IncidentCatalog } from "./incidentCatalog";


export interface Incident {
  id: number;
  incidentCode: string;
  insidentDescription: string;
  incidentObsevations: string;
  incidentRegDate: Date;
  incidentLabel: string;
  employeeCM: Employee;
  incidentCatalogCommandCM: IncidentCatalog;
  incidentPlace: string;
  incidentWitness: string;
}












