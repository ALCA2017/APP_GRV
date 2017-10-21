import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';

  constructor(
    public navCtrl: NavController,
    private auth: AuthService,
    public navParams: NavParams
  ) {
      let info = this.auth.getUserInfo();
      this.username = info['name'];
      this.email = info['email'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot("LoginPage")
    });
  }
}
