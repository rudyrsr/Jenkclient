import { Component, OnInit } from '@angular/core';
import { PositionService } from '../services/position.service';
import { EmployeeService } from '../employee/shared/employee.service';
import { ContractService } from '../services/contract.service';
import { Location } from '@angular/common';

@Component({
  selector: 'code-contract-add',
  templateUrl: './contract-add.component.html',
  styleUrls: ['./contract-add.component.scss']
})
export class ContractAddComponent implements OnInit {
  positions= [];
  employees= [];
  contract = {
    "positionId" : "",
    "employeeId" : "",
    "contractDescription" : ""
  };
  constructor(private positionService: PositionService,
              private employeeService: EmployeeService,
              private contractService: ContractService,
              private location: Location) { }

  ngOnInit() {
    this.positionService.getPositions().
    subscribe(
      positions => {
        this.positions = positions;
      }
    );
    this.employeeService.getAll().subscribe(
      employees =>
      {
        this.employees = employees;
      }
    );
  }
  addContract()
  {
    this.contractService.addContract(this.contract)
    .subscribe(
      response => {
        alert("Contract Created");
        this.location.back();
      }, (error) =>{
        console.log('error',error);
      }
    )
  }
}
