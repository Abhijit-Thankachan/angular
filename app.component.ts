import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';
  private subscription: Subscription | any;
   constructor(private apiservice:ApiService){

  }
  OnClick(){
    this.subscription= this.apiservice.getData().subscribe({
    next: (data) =>{
      console.log(data);
    },
    error: (error: Error)=>{
      alert('Error has occured'+ error.message);
    },
    complete: ()=>{
      console.log('completed');
    }
  });
  };

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
  dynamic(){
    console.log('HI')
  }
}
