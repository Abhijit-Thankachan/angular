import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sampletwo',
  templateUrl: './sampletwo.component.html',
  styleUrls: ['./sampletwo.component.css']
})
export class SampletwoComponent {
  // constructor(){
  //   console.log("Constructor")
  // }
  // ngOnInit(){
  //   console.log("Oninit")
  // }
  // ngOnChanges(){
  //   console.log("Onchanges")
  // }
  // ngDoCheck(){
  //   console.log("Docheck")
  // }
  // ngAfterViewInit(){
  //   console.log("View Init")
  // }
  // ngAfterViewChecked(){
  //   console.log("View Checked")
  // }
  ngOnDestroy(){
    console.log("Deleted")
  }
  @Input()
  InputValue: any;
}
