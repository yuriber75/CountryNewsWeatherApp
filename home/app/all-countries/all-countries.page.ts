import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DataService } from '../services/my-data.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AllCountriesPage implements OnInit {

  keyword: string = "";

  constructor(private ds:DataService) { }

  ngOnInit() {
    this.getKW();
  }

  async getKW() {
    this. keyword = await this.ds.get('kw');
  }

}
