import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);

  emailField = new FormControl('');

  phoneField = new FormControl('');

  colorField = new FormControl('#000000');

  dateField = new FormControl('');

  ageField = new FormControl('12');

  categoryField = new FormControl('03')

  tagField = new FormControl('')

  agreeField  = new FormControl(false);

  genderField = new FormControl('');

  zoneField = new FormControl('');

  constructor() { }

  ngOnInit(): void {

   this.nameField.valueChanges.subscribe (value => {

        console.log(value);

    });

   }

   getNameValue(){
    console.log(this.nameField.value) ;
  }

  get isNamefieldValid() {
     return this.nameField.touched && this.nameField.valid ;
  }

  get isNamefieldInvalid() {
    return this.nameField.touched && this.nameField.valid ;
 }


}
