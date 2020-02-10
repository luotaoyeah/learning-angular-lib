import { ModuleWithProviders, NgModule } from '@angular/core';
import { KgComponentModule } from './component/kg--component.module';

@NgModule({
  imports: [KgComponentModule],
  exports: [KgComponentModule],
})
export class KgCommonModule {
  public static forChild(): ModuleWithProviders<KgCommonModule> {
    return {
      ngModule: KgCommonModule,
    };
  }

  public static forRoot(): ModuleWithProviders<KgCommonModule> {
    return {
      ngModule: KgCommonModule,
      providers: [],
    };
  }
}
