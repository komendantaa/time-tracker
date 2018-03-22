/**
 * Created by komendant on 14.03.2018.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './common/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);