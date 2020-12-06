import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import  emails from "../../../assets/email.json"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted=false
  constructor() { }
  mailer: FormGroup
  ngOnInit(): void {
    this.createForm()
  }


  createForm(){ 
    this.mailer =new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      comment:new FormControl()
    })
    console.log(this.mailer.value);


  }
  
  createMail(){
    this.submitted= true
    console.log(this.mailer.value);
    emails.push(this.mailer.value)
    console.log(emails);

  }
  

}
