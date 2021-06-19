import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-task';
import { Task } from '../Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl ='http://localhost:5000/tasks';

  constructor(private http : HttpClient) { }

  getTasks(): Observable<Task[]>{
    return  this.http.get<Task[]>(this.apiUrl);
  }
}
