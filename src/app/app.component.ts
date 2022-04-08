import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';
  subTitle = 'It fun to learn Inrerpolation'
  epNum = 17;
  placeholderVal = 'Enter Value';
  updatedLink= 'http://oracle.com';

  showAlert(id:number) {
    alert('Hello from Emmanuel' + id)
  }
  consoleLog() {
    console.log('From input')
  }
   firstname =''

  // showMsg= false;
  // switchValue = 5;
  // colorVal = 'blue';
  // clsName = 'one'
  // clsName2 = 'two'
  // clsName3 = 'three'
  // showColor = false;

  hrefVal = 'http://google.com'

  users = [
    {id:1, name: 'John'},
    {id:2, name: 'Emma'},
    {id:5, name: 'jane'},
    {id:7, name: 'tab'},
    {id:3, name: 'fellla'},
    {id:0, name: 'kuti'},
  ]

  user = {
    userId:201,
    userName: 'ARC',
    status: 'Active'
  }

  colorVal = 'red';

  user2 = {
    userId: 20,
    firstName: 'ABC',
    lastName: 'Tutorials',
    DOB: '07/23/1991',
    salary:12000.56
  }

  user3 = {
    firstName: 'Jane Doe',
    city: 'New York',
    cityCode: 'NY'
  }
}
