import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonInput, IonIcon } from '@ionic/angular/standalone';
import { DataService } from '../services/my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonIcon, IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, IonButtons],
})
export class HomePage {

  keyword: string = "";
  constructor(private router: Router, private ds:DataService) {}

  async openCountries() {
    await this.ds.set("kw", this. keyword);
    this.router.navigate(['/all-countries'])
  }

  async openSettings() {
    this.router.navigate(['/setting'])
  }


}
