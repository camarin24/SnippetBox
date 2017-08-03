import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routing, appRoutingProviders  } from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';


import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk';


import { AppComponent } from './app.component';
import {HomeComponent } from './../Components/Home/home.component';
import {MenuprofileComponent } from './../Components/MenuProfile/menuProfile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuprofileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdSidenavModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    routing,
    MdIconModule,
    MdToolbarModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdListModule,
    MdCardModule,
    MdMenuModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
