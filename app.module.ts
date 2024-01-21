import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './17.01.2024/topbar/topbar.component';
import { SidebarComponent } from './17.01.2024/sidebar/sidebar.component';
import { FooterComponent } from './17.01.2024/footer/footer.component';
import { ContentComponent } from './17.01.2024/content/content.component';
import { SampleComponent } from './18.01.2024/sample/sample.component';
import { SampletwoComponent } from './18.01.2024/sampletwo/sampletwo.component';
import { FirstComponent } from './19.02.24/first/first.component';
import { SecondComponent } from './19.02.24/second/second.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ThirdComponent } from './19.02.24/third/third.component';
import { ErrorComponent } from './19.02.24/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent},
  { path: 'second-component', component: SecondComponent },
  { path: '**', component: ErrorComponent }, 
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    SampleComponent,
    SampletwoComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ErrorComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
