import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TFooComponent } from './foo/t--foo.component';

@NgModule({
  declarations: [TFooComponent],
  imports: [...[CommonModule, FormsModule, ReactiveFormsModule, RouterModule]],
  exports: [TFooComponent],
})
export class KgComponentModule {}
