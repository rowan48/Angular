import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './logo/logo.component';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LogoComponent
  ],
  imports: [
    CommonModule, RatingModule, FormsModule
  ],
  exports:[
    FooterComponent,LogoComponent,HeaderComponent,SidebarComponent
  ]
})
export class CoreModule {

}
