import { Component, OnInit } from '@angular/core';
import { Affliction } from '../shared/affliction';
import { AfflictionService } from '../services/affliction.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'code-affliction-detail',
  templateUrl: './affliction-detail.component.html',
  styleUrls: ['./affliction-detail.component.scss']
})
export class AfflictionDetailComponent implements OnInit {

  affliction: Affliction;
  affictionId:number;



  constructor(
    private afflicionservice: AfflictionService,
    private activateroute: ActivatedRoute,
    private location: Location,
    private router: Router) {
  }

  ngOnInit() {
    this.activateroute.params
    .subscribe(
      (paramss) =>{
        this.affictionId = paramss.id;
        this.afflicionservice.getAfflictionById(this.affictionId)
        .subscribe(affliction => {
          this.affliction = affliction;
          //console.log('afliccion', this.affliction);
        });
      }
    )
    }
    goBack(): void {
    this.location.back();
    }
   /*  createNew():void {
      this.router.navigate(['/affliction/create']);
    } */


    deleteToAffliction(afflicID: number, afflicType: string, afflicEmployee: string): void {
      let confirmar = confirm('Are you sure to delete a affliction: '+afflicType+' of '+ afflicEmployee);
      if(confirmar)
      this.afflicionservice.deleteAffliction(afflicID).subscribe(
        (response) => {
          this.location.back();
        }, (error) => {
          console.log('error: ', error);
        }
      )}

}



