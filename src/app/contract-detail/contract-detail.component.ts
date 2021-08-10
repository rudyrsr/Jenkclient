import { Component, OnInit } from '@angular/core';
import { ContractService } from '../services/contract.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Contract } from '../shared/contract';

@Component({
  selector: 'code-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit {

  contract: Contract;
  contractId: number;
  constructor(private contractService: ContractService,
              private activateRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (paramss)=>{
          this.contractId = paramss.id;
          this.contractService.getContractById(this.contractId).subscribe(
            contract =>
            {
              this.contract = contract;
            });
      });
  }
  goBack(): void{
    this.location.back();
  }
  deleteContract(id:number, employeeName: string):void{
    let confir = confirm('Are you sure to delte this employee Contract' + employeeName);
    if(confir)
      this.contractService.deletePosition(id).subscribe(
        (response) =>{
          this.location.back();
        },(error) => {
          console.log('error', error);
        }
      );
  }
}
