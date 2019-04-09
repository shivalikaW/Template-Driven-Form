import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  defaultQues="pet";
  answer='';
  genders=['male','female'];
  user={
    username:'',
    email:'',
    secret:'',
    answer:'',
    gender:'' 
  }
  submitted=false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username:'Test',
    //     email:'test@test.com'
    //   },
    //   secret:'pet',
    //   questionAnswer:'abc',
    //   gender:'male'
    // });
    this.signupForm.form.patchValue({
      userData:{
        username:'test',
        email:'test@test.com',
      },
      secret:'school',
      questionAnswer:'abc',
      gender:'male'
    });
  }

  onSubmit(){
    this.submitted=true;
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.secret=this.signupForm.value.secret;
    this.user.answer=this.signupForm.value.questionAnswer;
    this.user.gender=this.signupForm.value.gender;

    //reset the form page
    this.signupForm.reset();
  }
}
