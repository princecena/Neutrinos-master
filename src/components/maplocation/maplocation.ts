import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
 
declare var google;
 
@Component({
  selector: 'maplocation',
  templateUrl: 'maplocation.html'
})
export class MaplocationComponent implements OnInit {

    @ViewChild('map') mapElement: ElementRef;
    map: any;
    showSpinner: boolean = true;

    constructor
    (
      public navCtrl: NavController,
      public geolocation: Geolocation,
      public platform: Platform
    ) {
      console.log("inside MaplocationComponent constructor");
        this.loadMap();
    }
  
    ngOnInit() {
      console.log("inside MaplocationComponent ngOnInit");
    }
  
    loadMap() {
      
      this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then((position) => {

        console.log("inside geolocation");

        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
          let mapOptions = {
            center:latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }

          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          
          this.showSpinner = false;
          
          var service = new google.maps.places.PlacesService(this.map);
          var self = this;
          service.nearbySearch({
                  location: latLng,
                  rankBy:google.maps.places.RankBy.DISTANCE,
                  name:'State Bank of India',
                  type: ['bank']
                }, 
                function(results, status) {
                  if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        let marker = new google.maps.Marker({
                          map: self.map,
                          position: results[i].geometry.location
                        });

                        let infoWindow = new google.maps.InfoWindow({
                          content: results[i].name
                        });
                          
                        google.maps.event.addListener(marker, 'click', () => {
                          infoWindow.open(self.map, marker);
                        });
                    }
                  }
                }
            ); 
      
         }, (err) => {
          console.log("Geolocation Error: " + err);
      })

    }

}