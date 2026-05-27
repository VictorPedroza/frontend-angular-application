import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/layouts/header-component/header-component';
import { HomePage } from './pages/home/home-page/home-page';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, HomePage],
  imports: [CommonModule],
  exports: [HeaderComponent, HomePage],
})
export class SharedModule {}
