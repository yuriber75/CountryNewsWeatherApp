import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { IonSelectOption } from '@ionic/angular/standalone';
import { IonSelect } from '@ionic/angular/standalone';
import { DataService } from '../services/my-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelectOption, IonSelect]
})
export class SettingPage implements OnInit {

  selectedUnit: string = 'Metric';
  constructor(private ds:DataService, private router: Router) {}

  ngOnInit() {
    this.loadSelectedUnit();
  }

  async loadSelectedUnit() {
    const storedUnit = await this.ds.get('selectedUnit');
    if (storedUnit) {
      this.selectedUnit = storedUnit;
    }
  }

  async goHomePage(){
    await this.ds.set("selectedUnit", this.selectedUnit);
    this.router.navigate(['/'])    
  }

}
