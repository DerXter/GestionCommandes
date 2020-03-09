import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ModifierPageRoutingModule } from './modifier-routing.module';

import { ModifierPage } from './modifier.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ModifierPage]
})
export class ModifierPageModule {}
