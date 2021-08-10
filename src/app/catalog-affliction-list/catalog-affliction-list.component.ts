import { Component, OnInit } from '@angular/core';
import { AfflictionCatalog } from '../shared/afflictionCatalog';
import { AffictionCatalogService } from '../services/affiction-catalog.service';

@Component({
  selector: 'code-catalog-affliction-list',
  templateUrl: './catalog-affliction-list.component.html',
  styleUrls: ['./catalog-affliction-list.component.scss']
})
export class CatalogAfflictionListComponent implements OnInit {


  affCatalogList: AfflictionCatalog[];

  displayedColumns = ['label', 'name', 'details'];
  dataSource:AfflictionCatalog[]= [];
  constructor(
    private afflictioncatalogservice: AffictionCatalogService
  ) { }

  ngOnInit() {

    this.afflictioncatalogservice.getAfflictionsCatalogList()
    .subscribe(affCatalogList => {
      this.affCatalogList = affCatalogList
  });
  }

}
