import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { PwaService } from './services/pwa.service';
import { MatBottomSheetModule, MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PromptComponent } from './prompt/prompt.component';
import { UserProfileComponent } from './cadastro/veiculos/container/user-profile.component';
import { UserProfileComponentMobile } from './cadastro/veiculos/container/mobile/user-profile.component.mobile';
import { UserProfileComponentDesktop } from './cadastro/veiculos/container/web/user-profile.component.desktop';
import { ApplicationStateService } from './application-state.service';
import { FormsModule } from '@angular/forms';
import { HotelEditComponent } from './cadastro/veiculos/component/web/hotel-edit.component';
import { HotelService } from './cadastro/veiculos/api/hotel.api.service';

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();

@NgModule({
  declarations: [
    AppComponent,
    PromptComponent,
    UserProfileComponent,
    UserProfileComponentDesktop,
    UserProfileComponentMobile,
    HotelEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  entryComponents: [
    PromptComponent,
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true},
    ApplicationStateService,
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
