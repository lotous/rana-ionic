import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getActivity(activityID: string): Observable<Activity> {
    return this.httpClient.get<Activity>(environment.serverApi + 'id/' + activityID);
  }

  getAllActivities(): Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(environment.serverApi);
  }
}

