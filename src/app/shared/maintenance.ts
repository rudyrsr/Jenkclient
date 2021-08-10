import {Machinery} from './machinery';

export interface Maintenance{
    id: number;
    maintenanceLabel:string;
    maintenanceCode:string;
    maintenanceDescription:string;
    maintenanceObservation:string;
    maintenancePrice:any;
    machineryId: Machinery;
    deleted:boolean;
    maintenanceTimeLineInitDate:string;
    machineryCMD:Machinery;


    
}