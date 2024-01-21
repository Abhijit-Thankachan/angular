import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  form !: FormGroup ;
  ngOnInit(){
    this.form = new FormGroup({
      firstName : new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      address: new FormGroup({
        city: new FormControl('',Validators.required),
        state: new FormControl('',Validators.required),
      })
    })
  }
  onSubmit() {
    console.log('Submitted',this.form)
  }
}
