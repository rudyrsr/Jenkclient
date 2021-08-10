import { Component, OnInit, ViewChild } from '@angular/core'
import { CatalogTD } from '../shared/catalogTD';
import { CatalogTDService } from '../services/catalog-td.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'code-catalog-td',
  templateUrl: './catalog-td.component.html',
  styleUrls: ['./catalog-td.component.scss']
})
export class CatalogTDComponent implements OnInit {
  catalogTDlist: CatalogTD[];
  displayedColumns = ['Code', 'Name', 'Description', 'view'];
  dataSource:CatalogTD[]= [];
  constructor(
    private catalogtdservice: CatalogTDService
  ) { }
  
  
  ngOnInit() {
    this.catalogtdservice.getCatalogTDlist()
      .subscribe(catalogTDlist =>{
      this.catalogTDlist= catalogTDlist
      console.log("catalog list: ",this.catalogTDlist);   
    });


  }

}
