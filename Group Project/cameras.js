const Cameras = [];

class Map{
    constructor(){

        this.PreviousWindow = null

        function initMap() {
            const map = new google.maps.Map(document.getElementById("map"), {
              zoom: 12,
              center: {lat:51.507602,lng:-0.127816}
            });

            App.ListJamCam().then(()=>{
                for (let i = 0; i < Cameras.length; i++) {
                    const element = Cameras[i];
                    const marker = new google.maps.Marker({
                        position: {lat:element.lat,lng:element.lon},
                        map: map,
                        fillColor:"green"
                    });
                    const infowindow = new google.maps.InfoWindow({
                        content: `<h2>${element.name}</h2><br><img src="${element.ImageUrl}">`,
                        ariaLabel: "Uluru",
                      });
                    marker.addListener("click", () => {
                        try {
                            this.PreviousWindow.close()
                        } catch (error) {
                            console.log("no previous opened")
                        }
                        infowindow.open({
                          anchor: marker,
                          map,
                        });
                        this.PreviousWindow = infowindow
                      });
                }
            })
        }
        window.initMap = initMap;
    }
}


class JamCam {
  constructor(TempObj) {
    this.name = TempObj.commonName;