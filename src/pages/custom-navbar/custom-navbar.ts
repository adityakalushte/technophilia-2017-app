import { Component,Input } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth-provider'

/**
 * Generated class for the CustomNavbar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'custom-navbar',
  templateUrl: 'custom-navbar.html',
  providers:[AuthProvider]
})
export class CustomNavbar {
@Input() title:String="None";
  constructor(private navCtrl: NavController,private alertCtrl:AlertController, private authProvider:AuthProvider) {
    }
    // setTitle(title){
    //   this.title=title;
    // }
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