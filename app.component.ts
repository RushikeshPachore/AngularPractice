import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Class1 } from './class1';

@Component({
  selector: 'app-root', //[app-root] bracket gives it as a attribute
  templateUrl: './app.component.html', //html in seperate file
  styleUrls: ['./app.component.css'], //we can put multiple css files here
  preserveWhitespaces:true,  //by default it is false
  viewProviders:[Class1],  //loads class when comp is loaded
  encapsulation:ViewEncapsulation.ShadowDom //to get css of parent comp  to child comp applied 
})
export class AppComponent {
  title = 'first-project';
  // name='shaam';
  
  // @HostListener('click',['$event'])
  // show(){
  //   alert("hello");
  // }

  //object creation
  // constructor(private obj:Class1){
  //   obj.show();
  // }

  // ngIf used here
  isvalid:boolean=true;
  changevalue(valid:boolean){
    this.isvalid=valid;
  }


  // ngFor
  Students:any[]=[  //array of any type
    {
      'name':'rahul'
    },
    {
      'name':'ram'
    },
    {
      'name':'tayde'
    },
    {
      'name':'tarun'
    }
  ]


  //ngFor
  emplyoee:any[]; //array of any type
    constructor(){
      this.emplyoee=[
        {
        employeeid:1,
        name:'chandan',
        gender:'male',
        age:27,
        course:'cdac'
        },
        {
          employeeid:2,
          name:'rahul',
          gender:'male',
          age:27,
          course:'cdac'
        },
        {
            employeeid:3,
            name:'ram',
            gender:'male',
            age:29,
            course:'cdac'
        },

      ]
    }
  


     //method 
   getmoreemplyoee():void{
    this.emplyoee=[
      {
      employeeid:81,
      name:'helo',
      gender:'male',
      age:27,
      course:'cda'
      },
      {
        employeeid:72,
        name:'manoj',
        gender:'male',
        age:27,
        course:'cac'
        },
        {
        employeeid:63,
        name:'ramesh',
        gender:'male',
        age:29,
        course:'cc'
        },
    ]
}




    //Grouping with ngFor
    Countrydetails:any[]=[
      {
        'country':'india',
        'people':[
          {
            'name':'ajit'
          },
          {
            'name':'bassi'
          },
          {
            'name':'chirag'
          }
        ]
    },

    {
      'country':'newzealand',
      'people':[
        {
          'name':'aman'
        },
        {
          'name':'kjh'
        },
        {
          'name':'kamal'
        }
      ]
  }
  ];

  // <!-- property binding -->
  firstname:string='Rahull';

// attribute binding
  cols:number=3;
  bdr:number=5;

// event bind
  showData(){
    console.log("event bindign exam")
  }
}
