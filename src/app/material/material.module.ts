import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

const Material = [
	MatToolbarModule,
	MatButtonModule,
	MatIconModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
