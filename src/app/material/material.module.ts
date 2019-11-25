import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

const Material = [
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
