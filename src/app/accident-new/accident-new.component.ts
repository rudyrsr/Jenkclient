import {Component, OnInit} from '@angular/core'
import {AccidentService} from '../services/accident.service';
import {CatalogFIService} from '../services/catalog-fi.service';
import {CatalogNIService} from '../services/catalog-ni.service';
import {CatalogTDService} from '../services/catalog-td.service';
import {CatalogUAService} from '../services/catalog-ua.service';
import {CatalogUCService} from '../services/catalog-uc.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'code-accident-new',
  templateUrl: './accident-new.component.html',
  styleUrls: ['./accident-new.component.scss']
})
export class AccidentNewComponent implements OnInit {
  accident = {
    accidentCode:"",
    accidentDescription:"",
    accidentSupervisor:"",
    accidentMedicalCenter:"",
    accidentPlace:"",
    accidentWitness:"",
    accidentRegistrationCode:"",
    accidentDisabilityDay:0,
    deleted: false,
    catalogFI_id:0,
    catalogNI_id:0,
    catalogTD_id:0,
    catalogUA_id:0,
    catalogUC_id:0,
  };
  catalogFIList=[];
  catalogNIList=[];
  catalogTDList=[];
  catalogUCList=[];
  catalogUAList = [];
  codeaccd = "";
  url= "";

  constructor(
    private accidentService: AccidentService,
    private catalogFIService:CatalogFIService,
    private catalogNIService:CatalogNIService,
    private catalogTDService:CatalogTDService,
    private catalogUAService:CatalogUAService,
    private catalogUCService:CatalogUCService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router

  ) { }

  ngOnInit( ) {
    this.catalogFIService.getCatalogFIlist().
      subscribe(
        catalogFIList => {
          this.catalogFIList = catalogFIList;
          console.log("lista de proyectos catalog rudy", this.catalogFIList)
        }
      );
      this.catalogNIService.getCatalogNIlist().
      subscribe(
        catalogNIList => {
          this.catalogNIList =catalogNIList;

        }
      );
      this.catalogTDService.getCatalogTDlist().
      subscribe(
        catalogTDList => {
          this.catalogTDList =catalogTDList;

        }
      );
      this.catalogUAService.getCatalogUAlist().
      subscribe(
        catalogUAList => {
          this.catalogUAList =catalogUAList;

        }
      );
      this.catalogUCService.getCatalogUClist().
      subscribe(
        catalogUCList => {
          this.catalogUCList = catalogUCList;

        }
      );

  }
  create() {
    this.accidentService.createNewAccident(this.accident).
      subscribe(
        (response) => {
          console.log('accidentCode: ',this.accident.accidentCode);
          this.url = "accidentRegistry/create/" + this.accident.accidentCode;
          this.router.navigate([this.url]);
        }, (error) => {
          console.log('error: ', error);
        }

      )
  }

}
