import { Component, OnInit } from '@angular/core';
import { AuditoryHistoryService } from '../services/auditory-history.service';
import { AuditHistory } from '../shared/auditHistory';

@Component({
  selector: 'code-auditory-history',
  templateUrl: './auditory-history.component.html',
  styleUrls: ['./auditory-history.component.scss']
})
export class AuditoryHistoryComponent implements OnInit {

  auditoryList: AuditHistory[];

  displayedColumns = ['HistoryId', 'TableName', 'ColumnName','Id' ,'Date','OldValue','NewValue'];
  dataSource:AuditHistory[]= [];

  constructor(
    private auditoryservice: AuditoryHistoryService
  ) { }

  ngOnInit() {
    this.auditoryservice.getAuditoryList()
      .subscribe(auditoryList => {
        this.auditoryList = auditoryList
        console.log('audotory list: ', this.auditoryList);
    });
  }

}
