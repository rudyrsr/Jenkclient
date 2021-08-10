import { Component, OnInit, ViewChild } from '@angular/core'
import { CatalogFI } from '../shared/catalogFI';
import { CatalogFIService } from '../services/catalog-fi.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'code-catalog-fi',
  templateUrl: './catalog-fi.component.html',
  styleUrls: ['./catalog-fi.component.scss']
})
export class CatalogFIComponent implements OnInit {
  catalogFIlist: CatalogFI[];
  displayedColumns = ['Code', 'Name', 'Description', 'view'];
  dataSource:CatalogFI[]= [];
  constructor(
    private catalogfiservice: CatalogFIService
  ) { }
  
  
  ngOnInit() {
    this.catalogfiservice.getCatalogFIlist()
      .subscribe(catalogFIlist =>{
      this.catalogFIlist= catalogFIlist
      console.log("catalog list: ",this.catalogFIlist);   
    });


  }

}
