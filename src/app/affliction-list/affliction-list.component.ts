import { Component, OnInit, ViewChild } from '@angular/core';
import { Affliction } from '../shared/affliction';
import { AfflictionService } from '../services/affliction.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'code-affliction-list',
  templateUrl: './affliction-list.component.html',
  styleUrls: ['./affliction-list.component.scss'],
})
export class AfflictionListComponent implements OnInit {

  afflictionList: Affliction[];

  displayedColumns = ['label', 'catalog', 'employee','date' ,'view'];
  dataSource:Affliction[]= [];

  constructor(
    private afflicionservice: AfflictionService) {
  }

  ngOnInit() {
    this.afflicionservice.getAfflictionsList()
      .subscribe(afflictionList => {
        this.afflictionList = afflictionList
       // console.log('affliction list: ', this.afflictionList);
    });
  }
}
