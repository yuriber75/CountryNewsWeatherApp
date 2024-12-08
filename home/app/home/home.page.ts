import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonInput } from '@ionic/angular/standalone';
import { DataService } from '../services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class HomePage {

  keyword: string = "";
  constructor(private ds:DataService) {}

  async openCountries() {
    await this.ds.set("kw", this. keyword);
  }


}
