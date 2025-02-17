import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObservablePage } from './observable.page';
import {HttpClient, HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: ObservablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

      HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ObservablePage]
})
export class ObservablePageModule {}
