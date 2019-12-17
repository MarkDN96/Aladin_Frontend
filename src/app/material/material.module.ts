import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule, MatProgressBarModule } from '@angular/material';

const Material = [
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatTabsModule,
	MatProgressBarModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
