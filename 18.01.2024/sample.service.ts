import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  dataArray: any[] = [];
  constructor() { 
  }
  acceptData(received: string){
    this.dataArray.push(received);
  }
}
