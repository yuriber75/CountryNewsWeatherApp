import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon } from '@ionic/angular/standalone';
import { DataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  standalone: true,
  imports: [ IonIcon, IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherPage implements OnInit {

  api: string = "841b13fc8f3fd919c2026be5463108ff";
  capital: string = "";
  selectedUnit: string = "";
  unit: string = "";
  url: any = "";
  unitSymbol: string = "";

  weatherDescriptions: string = ""; 
  temperature: number = 0 ; 
  weatherIcons: string = "";

  weatherInfoResponse: any = "";

  options: HttpOptions = {
    url: "https://api.weatherstack.com/current?access_key=" + this.api + "&query="
  }

  constructor(private ds:DataService, private mhs: MyHttpService, private router: Router) { }

  ngOnInit() {
    this.getWeather();
  }

  ionViewWillEnter() {
    this.getWeather();
  }

  async getWeather() {
    this.capital = await this.ds.get('capital');
    this.selectedUnit = await this.ds.get('selectedUnit');
    if ( this.selectedUnit == "Fahrenheit" ) {
      this.unit = "f";
      this.unitSymbol = "°F";
    } else if ( this.selectedUnit == "Scientific" ) {
      this.unit = "s";
      this.unitSymbol = "°K";
    } else {
      this.unit = "m";
      this.unitSymbol = "°C";
    }
    
    this.options.url = this.options.url.concat(this.capital);
    this.options.url = this.options.url.concat("&units=");
    this.options.url = this.options.url.concat(this.unit);

    console.log(this.options.url);

    this.weatherInfoResponse = await this.mhs.get(this.options);

    console.log(this.weatherInfoResponse);

    if (this.weatherInfoResponse) {

      // Salva i dati nel componente per l'uso nel template o altrove
      this.temperature = this.weatherInfoResponse.data.current.temperature;
      this.weatherIcons = this.weatherInfoResponse.data.current.weather_icons[0];
      this.weatherDescriptions = this.weatherInfoResponse.data.current.weather_descriptions[0];

      console.log("Temperature:", this.temperature);
      console.log("Weather Icons:", this.weatherIcons);
      console.log("Weather Descriptions:", this.weatherDescriptions);
    }

  }

  async goHomePage(){
    this.router.navigate(['/'])    
  }


}



//https://api.weatherstack.com/current?access_key=841b13fc8f3fd919c2026be5463108ff&query=Rome&units=m
