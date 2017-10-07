import { Component } from '@angular/core';
import { AlertController,NavController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth-provider'
// import {CustomNavbar} from '../custom-navbar/custom-navbar'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[AuthProvider]
})
export class HomePage {

  constructor(public navCtrl: NavController, public authProvider:AuthProvider,public alertCtrl: AlertController) {

  }
  logout():void{
    let alert = this.alertCtrl.create({
      title: 'Logout',
      subTitle: 'Are you sure you want to Logout?',
     buttons: [{
        text:'Yes',
        handler: data => {
         this.authProvider.logoutUser().then(()=>{
  this.navCtrl.setRoot('login');
         });}},{
        text:'No'
      }]
    });
    alert.present();


  }

}
