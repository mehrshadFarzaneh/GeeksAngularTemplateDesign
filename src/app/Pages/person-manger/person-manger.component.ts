import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterPersonForm } from 'src/app/Models/FormsModels/registerPersonForm';

@Component({
  selector: 'app-person-manger',
  templateUrl: './person-manger.component.html',
  styleUrls: ['./person-manger.component.scss']
})
export class PersonMangerComponent implements OnInit {
  registerPersonForm!: FormGroup;
  registerPersonFormModel!: RegisterPersonForm;
  editMode: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  private initForm() {
    this.registerPersonForm = new FormGroup({
      "name": new FormControl(this.registerPersonFormModel.name),
      "password": new FormControl(this.registerPersonFormModel.password),
      "phoneNumber": new FormControl(this.registerPersonFormModel.phoneNumber),
    })
  }
}
