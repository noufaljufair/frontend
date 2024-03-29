import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/services/auth.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

// Highlight JS
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { SplashScreenModule } from './_metronic/partials/layout/splash-screen/splash-screen.module';
import {JwtInterceptor} from './services/jwt.interceptor';
import {ConfirmationDialogComponent} from './modules/shared/confirmation-dialog/confirmation-dialog';
import {TicketAddDialogComponent} from './modules/client/TicketAddDialog/TicketAddDialog';
import {TicketViewDialogComponent} from './modules/shared/TicketViewDialog/TicketViewDialog';

import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {RouterExtService} from './services/RouterExtService.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { CommonModule } from "@angular/common";
import { AvatarsDialogComponent } from './modules/shared/avatars/avatarsDialog';



function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [AppComponent, ConfirmationDialogComponent , TicketAddDialogComponent , TicketViewDialogComponent , AvatarsDialogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SplashScreenModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    HighlightModule,
    ClipboardModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InlineSVGModule.forRoot(),
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSliderModule, 
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [
    {
      provide: RouterExtService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [AuthService],
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
          json: () => import('highlight.js/lib/languages/json')
        },
      },
    },
    {provide: LocationStrategy,
      useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]

})
export class AppModule { }
