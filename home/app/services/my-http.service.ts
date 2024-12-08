import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core'

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor() { }

  public async get(options: HttpOptions) {
    console.log(options.url);
    return await CapacitorHttp.get(options)
  }
}
