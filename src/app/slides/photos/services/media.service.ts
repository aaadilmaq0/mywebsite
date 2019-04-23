import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Image } from "../photos.model";

@Injectable({
  providedIn: "root"
})
export class MediaService {
  private images: Image[] = [];
  private imagesUpdated = new Subject<Image[]>();
  constructor(private http: HttpClient) {}

  getPhotos() {
    this.images = [];
    this.http.get("http://localhost:3000/getImages").subscribe(response => {
      response["resources"].forEach(resource => {
        this.images.unshift({ path : resource["url"]});
      });
    });
    this.imagesUpdated.next([...this.images]);
    return this.images;
  }

  getImagesSubscription(){
    return this.imagesUpdated.asObservable();
  }
}
