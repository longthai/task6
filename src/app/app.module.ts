import { MediaService } from './services/media.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

const routeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'front',
    component: FrontComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TopBarComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [
    MediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
