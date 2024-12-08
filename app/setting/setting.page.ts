import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { IonSelectOption } from '@ionic/angular/standalone';
import { IonSelect } from '@ionic/angular/standalone';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelectOption, IonSelect]
})
export class SettingPage implements OnInit {

  selectedUnit: string = 'Metric';
  constructor() {}

  ngOnInit() {
  }

  closeSetting(){
    
  }

}
