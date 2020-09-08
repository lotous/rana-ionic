import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {Plugins, StatusBarStyle} from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp().then(r => {});
  }

  async initializeApp() {
    const {SplashScreen, StatusBar} = Plugins;
    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({style: StatusBarStyle.Dark});
      if (this.platform.is('android')) {
        await StatusBar.setBackgroundColor({color: '#CDCDCD'});
      }
    } catch (error) {
      console.log('Normal browser', error);
    }
  }
}
