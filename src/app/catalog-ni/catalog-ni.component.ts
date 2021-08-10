import { Component, OnInit } from '@angular/core';
import { CatalogNI } from '../shared/catalogNI';
import { CatalogNIService } from '../services/catalog-ni.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'code-catalog-ni',
  templateUrl: './catalog-ni.component.html',
  styleUrls: ['./catalog-ni.component.scss']
})
export class CatalogNIComponent implements OnInit {
  catalogNIlist: CatalogNI[];
  displayedColumns = ['Code', 'Name', 'Description', 'view'];
  dataSource:CatalogNI[]= [];
  constructor(
    private catalogNIservice:CatalogNIService
  ) { }
  
  
  ngOnInit() {
    this.catalogNIservice.getCatalogNIlist()
      .subscribe(catalogNIlist =>{
      this.catalogNIlist= catalogNIlist
      console.log("catalog list: ",this.catalogNIlist);   
    });


  }

}