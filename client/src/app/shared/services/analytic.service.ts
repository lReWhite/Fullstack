import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AnalyticPage, OverviewPage} from "../iterfaces";
@Injectable({
providedIn: "root"
})
export class AnalyticService {
constructor (private http: HttpClient){}
getOverview (): Observable<OverviewPage>{
return this.http.get<OverviewPage>('/api/analytics/overview')
}
getAnalytics ():Observable<AnalyticPage>{
  return this.http.get<AnalyticPage>('/api/analytics/analytics')
}
}
