import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class ApiInterceptor implements HttpInterceptor {
  private apiKey: string = 'AIzaSyC5TzcKsE0YZYoggt1pkPqFa7eDPZrg3YY';

  private youtubeApiURL: string = 'https://www.googleapis.com/youtube/v3';


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      url: `${this.youtubeApiURL}/${req.url}?key=${this.apiKey}`,
    })
    return next.handle(cloned)};
}
