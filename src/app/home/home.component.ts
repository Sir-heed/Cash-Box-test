import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { from } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  data;
  formDisplay = "form-display";
  personModel;
  currentDate = new Date().getFullYear();

  constructor(private _router: Router, private dataService: DataService) {
    this.personModel = { firstName: "", surName: "", dateOfBirth: "" };
  }

  ngOnInit() {
    this.getData();
  }
  getAge(dob) {
    // let convDob = new Date(dob);
    let diff_ms = Date.now() - new Date(dob).getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
    //   return new Date(date_diff);
  }
  onSelect(data) {
    this._router.navigate(["/home", data.id]);
  }
  createPerson = () => {
    this.formDisplay = "";
  };
  onSubmit() {
    console.log(this.personModel);
    this.dataService
      .createPerson(this.personModel)
      .subscribe(data => console.log(data), error => console.log(error));
    window.alert("You have added a new person");
    window.location.reload();
    //Reload page
  }
  getData = () => {
    this.dataService.getData().subscribe(
      data => {
        console.log(data);
        this.data = data;
      },
      error => {
        console.log(error);
      }
    );
  };
}
