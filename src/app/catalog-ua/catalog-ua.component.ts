import { Component, OnInit, ViewChild } from '@angular/core'
import { CatalogUA } from '../shared/catalogUA';
import { CatalogUAService } from '../services/catalog-ua.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'code-catalog-ua',
  templateUrl: './catalog-ua.component.html',
  styleUrls: ['./catalog-ua.component.scss']
})
export class CatalogUAComponent implements OnInit {
  catalogUAlist: CatalogUA[];
  displayedColumns = ['Code', 'Name', 'Description', 'view'];
  dataSource:CatalogUA[]= [];
  constructor(
    private cataloguaservice: CatalogUAService
  ) { }
  
  
  ngOnInit() {
    this.cataloguaservice.getCatalogUAlist()
      .subscribe(catalogUAlist =>{
      this.catalogUAlist= catalogUAlist
      console.log("catalog list: ",this.catalogUAlist);   
    });


  }

}
