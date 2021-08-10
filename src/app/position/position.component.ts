import { Component, OnInit } from '@angular/core';
import { PositionService } from '../services/position.service';

@Component({
  selector: 'code-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  positions : Position[];
  displayedColumns = ['id', 'name', 'code', 'description', 'view'];
  dataSource : Position[] = [];

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private positionService: PositionService) { }

  ngOnInit() {
    this.positionService.getPositions().subscribe(positions => this.positions = positions);
  }
}
