import { MachineryCatalog } from "./machineryCatalog";

export interface Machinery {
    id: number;
    machineryLabel: string;
    machineryCode: string;
    machineryName: string;
    machineryDateBuy: string;
    machineryAvailable: number;
    machineryPrice: any;
    machineryBrand:string;
    machineryCatalogId:MachineryCatalog;
    machinerycatalogName:MachineryCatalog;
    deleted:boolean;
    }  

