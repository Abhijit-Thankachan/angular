import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
private sampleService;
condition= false;
  constructor(sampleService : SampleService){
    this.sampleService = SampleService
}
// Clicked() {
//   console.log("Button clicked");
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
@Input()
InputValue: any;

@ViewChild('inputBox')
inputElement!: ElementRef;

Passinput(arg0: string) {
  console.log(arg0);
  }

sendBtnClicked(){
  console.log(this.inputElement?.nativeElement.value);

  // this.sampleService.acceptData(this.inputElement.nativeElement.value)
}
}



