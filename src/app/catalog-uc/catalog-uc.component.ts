import { Component, OnInit, ViewChild } from '@angular/core'
import { CatalogUCService } from '../services/catalog-uc.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { CatalogUC } from '../shared/catalogUC';

@Component({
  selector: 'code-catalog-uc',
  templateUrl: './catalog-uc.component.html',
  styleUrls: ['./catalog-uc.component.scss']
})
export class CatalogUCComponent implements OnInit {
  catalogUClist: CatalogUC[];
  displayedColumns = ['Code', 'Name', 'Description', 'view'];
  dataSource:CatalogUC[]= [];
  constructor(
    private catalogucservice: CatalogUCService
  ) { }
  
  
  ngOnInit() {
    this.catalogucservice.getCatalogUClist()
      .subscribe(catalogUClist =>{
      this.catalogUClist= catalogUClist
      console.log("catalog list: ",this.catalogUClist);   
    });


  }

}
