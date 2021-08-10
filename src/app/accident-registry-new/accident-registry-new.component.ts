import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {EmployeeService} from '../services/employee.service';
import {AccidentService} from '../services/accident.service';
import {AccidentRegistryService} from '../services/accident-registry.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Accident} from '../shared/accident';

@Component({
  selector: 'code-accident-registry-new',
  templateUrl: './accident-registry-new.component.html',
  styleUrls: ['./accident-registry-new.component.scss']
})
export class AccidentRegistryNewComponent implements OnInit {
  accidentRegistry = {
    accidentRegistryDate:"",
    accidentRegistryHour:"",
    deleted:false,
    accidentId:0,
    employeeId:0
  };
  accidentList=[];
  employeeList=[];
  accidentR: Accident;
  accidentCode = "";

  constructor(
    private employeService: EmployeeService,
    private accidentRegistryService:AccidentRegistryService,
    private accidentService: AccidentService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router
  ){}

  ngOnInit() {
    this.activateroute.params
      .subscribe(
        (paramss) => {
          this.accidentCode = paramss.id;
          this.accidentService.getAccidentFindCode(this.accidentCode)
            .subscribe(accidentR => {
                this.accidentR = accidentR;
              }
            );
        }
      )
    this.employeService.getEmployees().
      subscribe(
        employeeList => {
          this.employeeList = employeeList;

        }
      );
    this.accidentService.getAccidentlist().
      subscribe(
        accidentList => {
          this.accidentList = accidentList;
          console.log("lista de proyectos ", this.accidentList);
        }
      );
  }
  create() {
    this.accidentRegistryService.createAccidentRegistry(this.accidentRegistry).
    subscribe(
      (response) => {
        alert("the accident has been created");
        this.router.navigate(['accidentRegistry']);
      }, (error) => {
        console.log('error: ', error);
      }

    )
  }
}


