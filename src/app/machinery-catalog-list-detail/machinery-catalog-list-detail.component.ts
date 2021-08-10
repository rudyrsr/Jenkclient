import { Component, OnInit } from '@angular/core';
import { MachineryCatalog } from '../shared/machineryCatalog';
import { MachineryCatalogService } from '../services/machinery-catalog.service';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'code-machinery-catalog-list-detail',
  templateUrl: './machinery-catalog-list-detail.component.html',
  styleUrls: ['./machinery-catalog-list-detail.component.scss']
})
export class MachineryCatalogListDetailComponent implements OnInit {
  machineryCatalog: MachineryCatalog;
  machineryCatalogId: number;

  constructor(
            private machineryCatalogservice:MachineryCatalogService,
            private activateroute: ActivatedRoute,
            private location: Location, 
            private router: Router) { }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.machineryCatalogId = paramss.id;
        this.machineryCatalogservice.getMachineryCatalogById(this.machineryCatalogId)
        .subscribe(machineryCatalog => this.machineryCatalog = machineryCatalog);
      }
    )
    }
    goBack(): void {
    this.location.back();
    }


    deleteToMachineryCatalog(machiyCatalgcID: number, machiyCatalgCode: string, machiyCatalgName: string): void {
      let confirmar = confirm('Are you sure to delete a MachineryCatalog: '+machiyCatalgCode+' of '+ machiyCatalgName);
      if(confirmar)
      this.machineryCatalogservice.deleteMachineryCatalog(machiyCatalgcID).subscribe(
        (response) => {
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )}
  }