import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/prerequis/utils.service';
import { LoadingController } from '@ionic/angular';
import { PlatService}  from '../../service/plat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {
  platId : number;
  updatePlatForm : FormGroup;
  public nom:string;
  public prix: number;
  public description : string ;
  constructor(private route: Router, 
    private serviceplat: PlatService , 
    private activiRoute : ActivatedRoute  , 
    private utils: UtilsService,
    private formbuilder:FormBuilder) {
   
    this.platId = Number(this.activiRoute.snapshot.paramMap.get('id'));
    console.log("Id="+this.platId);
  }

  

  ngOnInit() {
    this.serviceplat.getPlat(this.platId).toPromise().then(
      Response=>{
        this.nom=Response.nom;
        this.prix=Response.prix;
        this.description=Response.description;

      }
    ).catch(err=>{console.log(err)});

    this
  }

  updatePLat(plat :any , id:Number){
    this.serviceplat.updatePlat(plat).subscribe(
      data=>{
        this.utils.presentToast('modification reussite','success');
      },error=>{
        this.utils.presentToast('echecmodification ', 'danger');
      }
    );
  }

  /*async updatePlat() {
    await this.api.updateClassroom(this.route.snapshot.paramMap.get('id'), this.classroomForm.value)
      .subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/detail', JSON.stringify(id)]);
      }, (err) => {
        console.log(err);
      });
  }*/

}
