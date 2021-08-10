import { Component, OnInit } from '@angular/core';
import { MachineryCatalog } from '../shared/machineryCatalog';
import { MachineryCatalogService } from '../services/machinery-catalog.service';
import {Location} from '@angular/common';

@Component({
  selector: 'code-machinery-catalog-list',
  templateUrl: './machinery-catalog-list.component.html',
  styleUrls: ['./machinery-catalog-list.component.scss']
})
export class MachineryCatalogListComponent implements OnInit {
  machineryCatalogList: MachineryCatalog[];

  displayedColumns = ['label', 'Name', 'Description', 'view','edit'];
  dataSource:MachineryCatalog[]= [];
  constructor(private machineryCatalogservice:MachineryCatalogService) {

   }
  ngOnInit() {
    this.machineryCatalogservice.getMachineryCatalogList().subscribe(machineryCatalogList =>{
      this.machineryCatalogList=machineryCatalogList
    });
  }

  deleteToMachineryCatalog(machiyCatalgcID: number, machiyCatalgCode: string, machiyCatalgName: string): void {
    let confirmar = confirm('Are you sure to delete a MachineryCatalog: '+machiyCatalgCode+' of '+ machiyCatalgName);
    if(confirmar)
    this.machineryCatalogservice.deleteMachineryCatalog(machiyCatalgcID).subscribe(
      (response) => {
        //this.location.back();
      }, (error) => {
        console.log('error: ', error);
      }

    )}
}