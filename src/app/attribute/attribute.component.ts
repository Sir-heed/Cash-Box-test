import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-attribute",
  templateUrl: "./attribute.component.html",
  styleUrls: ["./attribute.component.css"]
})
export class AttributeComponent implements OnInit {
  dataId;
  person;
  formDisplay = "form-display";
  formEdit = "form-display";
  attrModel;
  editModel;

  constructor(
    private _route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.editModel = { id: -1, attr: "", val: "" };
  }

  ngOnInit() {
    let id = parseInt(this._route.snapshot.paramMap.get("id"));
    this.dataId = id;
    this.getAttr(this.dataId);
    this.attrModel = { id: id, attr: "", val: "" };
  }
  getAttr = id => {
    this.dataService.getPerson(id).subscribe(
      data => {
        console.log(data.attributes);
        this.person = data.attributes;
      },
      error => {
        console.log(error);
      }
    );
  };
  createAttribute = () => {
    this.formDisplay = "";
  };
  editAttribute = data => {
    this.formEdit = "";
    this.editModel.id = this.dataId;
    this.editModel.attr = data.key;
    this.editModel.val = data.value;
  };
  onCreate() {
    this.dataService
      .createAttribute(this.attrModel)
      .subscribe(data => console.log(data), error => console.log(error));
    window.alert("Attribue created successfully");
    window.location.reload();
  }
  onEdit() {
    // console.log(this.editModel);
    this.dataService
      .editAttribute(this.editModel)
      .subscribe(data => console.log(data), error => console.log(error));
    window.alert("Attribute updated successfully");
    window.location.reload();
  }
  deleteAttribute = id => {
    this.dataService.deleteAttribute(id).subscribe(
      data => {
        console.log(data);
        window.alert("Attribute deleted successfully");
        window.location.reload();
        //Refresh the page
      },
      error => {
        console.log(error);
      }
    );
  };
}
