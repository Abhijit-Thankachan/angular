import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  private subscription: Subscription | any;
  constructor(private apiservice:ApiService){
  }
  form !: FormGroup ;
  ngOnInit(){
    this.form = new FormGroup({
      countryId: new FormControl('',Validators.required),
      countryCode: new FormControl('',Validators.required),
      countryName: new FormControl('',Validators.required),
      description : new FormControl('',Validators.required),
    })
  }
getUser(){
  if(this.click){
    this.click();
  }
  else{
    console.log("Getuser")
  }
}
  @Input()
  click(): void {}
  
  onSubmit() {
    this.apiservice.postData(this.form.value).subscribe(response =>{
      console.log(response);
    })
  }
   // OnClick(){
  //   this.subscription= this.apiservice.getData().subscribe({
  //   next: (data) =>{
  //     console.log(data);
  //   },
  //   error: (error: Error)=>{
  //     alert('Error has occured'+ error.message);
  //   },
  //   complete: ()=>{
  //     console.log('completed');
  //   }
  // });
  // };
}
