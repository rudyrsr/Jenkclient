import { Component, OnInit } from '@angular/core';
import { PositionService } from '../services/position.service';
import { EmployeeService } from '../employee/shared/employee.service';
import { ContractService } from '../services/contract.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'code-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.scss']
})
export class ContractEditComponent implements OnInit {
  contractId: number;
  positions= [];
  employees = [];
  contract = {
    "positionId" : "",
    "employeeId" : "",
    "contractDescription" : ""
  };
  constructor(private contractService: ContractService,
              private positionService: PositionService,
              private employeeService: EmployeeService,
              private location: Location, 
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (paramss) =>
      {
        this.contractId = paramss.id;
        this.contractService.getContractById(this.contractId)
          .subscribe(
            contract =>
            {
              this.contract.employeeId = contract.employeeId;
              this.contract.positionId = contract.positionId;
              this.contract.contractDescription = contract.contractDescription;
            }
          );
      }
    );
    this.positionService.getPositions().subscribe(
      positions =>
      {
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
  updateContract():void
  {
    this.contractService.updateContract(this.contract, this.contractId).subscribe(
      (response) =>{
        alert("The Contract has been updated");
        this.location.back();
      },(error) =>
      {
        console.log('error',error);
      }
    );
  }
}
