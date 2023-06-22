import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getQuestions(){
    return this.http.get('../../assets/files/questions.json').pipe(
      map((res : any)=>{
        return res.data;
      })
    )
  }

  getFrases(){
    return this.http.get('../../assets/files/questions.json').pipe(
      map((res : any)=>{
        return res.frases;
      })
    )
  }


}
