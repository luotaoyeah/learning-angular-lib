import { ModuleWithProviders, NgModule } from '@angular/core';
import { TComponentModule } from './component/t--component.module';

@NgModule({
  imports: [TComponentModule],
  exports: [TComponentModule],
})
export class TLearningAngularLibModule {
  public static forChild(): ModuleWithProviders<TLearningAngularLibModule> {
    return {
      ngModule: TLearningAngularLibModule,
    };
  }

  public static forRoot(): ModuleWithProviders<TLearningAngularLibModule> {
    return {
      ngModule: TLearningAngularLibModule,
      providers: [],
    };
  }
}
