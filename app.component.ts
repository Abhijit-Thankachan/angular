import { Component } from '@angular/core';
import { SampleService } from './18.01.2024/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment_one';
  title_sample = "Hi From Parent"
  selectedLink: string | undefined;
  value= 1;
  DeleteChild() {
    this.value=0;
  }
  loadContent(link: string) {
    this.selectedLink = link;
    console.log(link)
  }
  dataArray: any[] = [];
  constructor(sampleservice :SampleService){
    this.dataArray = sampleservice.dataArray
  }
}
