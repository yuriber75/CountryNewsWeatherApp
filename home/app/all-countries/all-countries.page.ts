import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard } from '@ionic/angular/standalone';
import { DataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.page.html',
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AllCountriesPage implements OnInit {

  keyword: string = "";
  countriesInfo!: any;
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"
  }

  constructor(private ds:DataService, private mhs: MyHttpService) { }

  ngOnInit() {
    this.getKW();
  }

  async getKW() {
    this. keyword = await this.ds.get('kw');
    this.options.url = this.options.url.concat(this.keyword);
    this.countriesInfo = this.mhs.get(this.options);
    console.log(this.countriesInfo);
  }

}
