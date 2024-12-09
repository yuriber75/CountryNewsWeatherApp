import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonButton, IonIcon } from '@ionic/angular/standalone';
import { DataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.page.html',
  standalone: true,
  imports: [IonIcon, IonButton, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardContent]
})
export class AllCountriesPage implements OnInit {

  keyword: string = "";
  countriesInfo!: any;
  countriesDetail: { flag: string; name: string; cca2: string; capital: string}[] = [];
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"
  }

  constructor(private ds:DataService, private mhs: MyHttpService, private router: Router) { }

  ngOnInit() {
    this.getKW();
  }

  async getKW() {
    this.keyword = await this.ds.get('kw');
    this.options.url = this.options.url.concat(this.keyword);
    this.countriesInfo = await this.mhs.get(this.options);


    for (const country of this.countriesInfo.data) {
      this.countriesDetail.push({
        flag: country.flags.png, 
        name: country.name.official, 
        cca2: country.cca2, 
        capital: country.capital
      });
    }

  }

  async openNewsCountry(cca2: string, name: string) {
    await this.ds.set('selectedCountry', cca2);
    await this.ds.set('nameCountry', name);
    this.router.navigate(['/news'])
  }

  async openWeatherCountry(capital: string) {
    await this.ds.set('capital', capital);
    this.router.navigate(['/weather'])
  }

  async goHomePage(){
    this.router.navigate(['/'])    
  }

}




