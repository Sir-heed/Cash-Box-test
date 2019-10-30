import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  _baseUrl = "http://127.0.0.1:8000/app/";
  // _url = "http://127.0.0.1:8000/app/person/";

  constructor(private _http: HttpClient) {}
  getData(): Observable<any> {
    return this._http.get<any>(this._baseUrl + "person/");
  }
  getPerson(id): Observable<any> {
    return this._http.get<any>(this._baseUrl + "person/" + id);
  }
  deleteAttribute(id): Observable<any> {
    return this._http.delete(this._baseUrl + "attribute/" + id);
  }
  createAttribute(attribute): Observable<any> {
    const body = {
      key: attribute.attr,
      value: attribute.val,
      person: attribute.id
    };
    return this._http.post<any>(this._baseUrl + "attribute/", body);
  }
  createPerson(person): Observable<any> {
    const body = {
      full_name: person.firstName,
      sur_name: person.surName,
      date_of_birth: person.dateOfBirth
    };
    return this._http.post<any>(this._baseUrl + "person/", body);
  }
  editAttribute(attribute): Observable<any> {
    const body = {
      key: attribute.attr,
      value: attribute.val,
      person: attribute.id
    };
    return this._http.put<any>(
      this._baseUrl + "attribute/" + attribute.id + "/",
      body
    );
  }
}
