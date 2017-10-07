import { NgModule } from '@angular/core';
import { CustomNavbar } from './custom-navbar';

@NgModule({
  declarations: [
    CustomNavbar
  ],
  exports: [
    CustomNavbar
  ]
})
export class CustomNavbarModule {}
