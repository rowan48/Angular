import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './logo/logo.component';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './product/product.component';
import {StringReplacePipe} from "../string-replace.pipe";





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LogoComponent,
    ProductComponent,
    StringReplacePipe,

  ],
  imports: [
    CommonModule, RatingModule, FormsModule
  ],
  exports:[
    FooterComponent,LogoComponent,HeaderComponent,SidebarComponent,ProductComponent,StringReplacePipe

  ]
})
export class CoreModule {

}
