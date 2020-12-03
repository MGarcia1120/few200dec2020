import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftCountComponent } from './components/gift-count/gift-count.component';
import { GiftEntryComponent } from './components/gift-entry/gift-entry.component';
import { GiftGivingComponent } from './components/gift-giving/gift-giving.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GiftFeatureComponent } from './gift-feature.component';
import { GiftDataService } from './services/gift-data.service';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';



@NgModule({
  declarations: [
    GiftCountComponent,
    GiftEntryComponent,
    GiftGivingComponent,
    GiftListComponent,
    GiftFeatureComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [
    GiftFeatureComponent
  ],
  providers: [GiftDataService]
})
export class GiftFeatureModule { }
