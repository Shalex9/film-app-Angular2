import { Component, OnInit , Renderer  } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    location: Location;
    constructor(location:Location, private renderer: Renderer) {
        this.location = location;
        this.renderer.listenGlobal('window', 'scroll', (evt) => { 
        this.scrollFunction();
        // console.log('scroll'); 
    });
    }
    ngOnInit(){
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }
    public isMaps(path){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(path == titlee){
            return false;
        }
        else {
            return true;
        }
    }

    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topBtn").style.display = "block";
        } else {
            document.getElementById("topBtn").style.display = "none";
        }
    }
    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    scrollTop(){
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            // document.getElementById("topBtn").style.display = "block";
            console.log('yes');
        } else {
            // document.getElementById("topBtn").style.display = "none";
            console.log('no');
        }
        // $(".arrow-up").hide();
        $(window).scroll(function() {
            if($(window).scrollTop() > 200) {
            // $('.arrow-up').fadeIn(); 
            console.log('yes'); 
            } else {
            // $('.arrow-up').fadeOut(); 
            console.log('no'); 
            }
        })
    }
    
}
