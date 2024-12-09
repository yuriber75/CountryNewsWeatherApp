import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonIcon } from '@ionic/angular/standalone';
import { DataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  standalone: true,
  imports: [IonIcon, IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewsPage implements OnInit {


  selectedCountry: string = "";
  countryNews!: any;
  news: { image_url: string; title: string; description: string }[] = [];
  nameCountry: string = "";
  newsPresent: string = "";

  options: HttpOptions = {
    url: "https://newsdata.io/api/1/latest?apikey=pub_617162d08e23202339fbaa0c5d654ec26eb54&country="
  }

  constructor(private ds:DataService, private mhs: MyHttpService, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getNews();
  }

  async getNews() {
    this.news = [];

    this.nameCountry = await this.ds.get('nameCountry');
    this.selectedCountry = await this.ds.get('selectedCountry');

    this.options.url = await this.options.url.concat(this.selectedCountry);
    this.countryNews = await this.mhs.get(this.options);
    console.log(this.countryNews.data);


    if (this.countryNews?.data?.results?.length > 0) {
      for (const n of this.countryNews.data.results) {
        this.news.push({
          title: n.title,
          description: n.description,
          image_url: n.image_url,
        });
      }
      this.newsPresent = "News for ";
    } else {
      this.newsPresent = "No News found for ";     
    }
  
  }

  async goHomePage(){
    this.router.navigate(['/'])    
  }

}
