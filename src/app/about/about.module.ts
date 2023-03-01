import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutService } from './about.service';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutComponent],
  providers: [AboutService]
})
export class AboutModule { }
