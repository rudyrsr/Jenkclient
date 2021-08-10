import { CatalogFI } from "./catalogFI";
import { CatalogNI } from "./catalogNI";
import { CatalogTD } from "./catalogTD";
import { CatalogUA } from "./catalogUA";
import { CatalogUC } from "./catalogUC";
import { Employee } from "./employee";

export interface Accident{
    id: number;
    accidentCode: string;
    accidentDescription: string;
    accidentSupervisor: string;
    accidentMedicalCenter: string;
    accidentPlace: string;
    accidentWitness: string;
    accidentRegistrationCode: string;
    accidentDisabilityDay: number;
    deleted: Boolean;
    catalogFI: CatalogFI;
    catalogNI: CatalogNI;
    catalogTD: CatalogTD;
    catalogUA: CatalogUA ;
    catalogUC: CatalogUC;
  }
 