import { Component, OnInit } from '@angular/core';
import { Contract } from '../shared/contract';
import { ContractService } from '../services/contract.service';

@Component({
  selector: 'code-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  contracts: Contract [];
  displayedColumns = ['id', 'position', 'employee', 'description', 'view'];
  constructor(private conractService: ContractService) { }

  ngOnInit() {
    this.conractService.getContracts().subscribe(
      contracts =>{
        this.contracts = contracts;
      }
    );
  }

}
