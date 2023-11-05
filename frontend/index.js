import { bathrooms } from "./src/all_locations.js";
import { closest_bathroom, closest_bathroom_info, distance_in_kilo, calculateDistance, user_lat, user_long } from "./src/nearest_location.js";

let map;

async function initMap() {

    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    var user_long = parseFloat(localStorage.getItem("user_long"));
    var user_lat = parseFloat(localStorage.getItem("user_lat"));
    const startPoint = {lat: user_lat, lng: user_long}


    const { Map } = await google.maps.importLibrary("maps");
    const centerLatLong = { lat: 33.6424, lng: -117.8417 };
    const offLatLong = { lat: 33.65099393675353, lng: -117.8449827846549 }


    //   const image = {url: "https://media.discordapp.net/attachments/819662445635043398/1170490438797496481/peeingandweeing.png?ex=65593b2b&is=6546c62b&hm=d591bb2f882ac7d1ae650eb11cbe00729ba5e7e97db3d2878ced2d7640b9f76c&=&width=1252&height=1410",
    // size: new google.maps.Size(50,50),};

    var image = {
        url: "./assets/peeingandweeing.png",
        scaledSize: new google.maps.Size(95, 110)
    };

    const shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: "poly",
    };
    map = new Map(document.getElementById("map"), {
        center: centerLatLong,
        zoom: 15,
    });

    directionsDisplay.setMap(map); // Display on the map
    document.getElementById('navigate-button').addEventListener("click", () => {
        // Define the route request
        var request = {
            origin: startPoint,
            destination: {lat: closest_bathroom_info.latitude, lng: closest_bathroom_info.longitude},
            travelMode: google.maps.TravelMode.WALKING // You can use other travel modes
        };

        // Calculate and display the route
        directionsService.route(request, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            } else {
                console.error('Error: ' + status);
            }
        });
    })
    for (let i = 0; i < bathrooms.length; i++) {
        //console.log(bathrooms[i].latitude,bathrooms[i].longitude)
        // console.log(bathrooms[i].rooms)
        let popUpText;
        let adaCompliant;
        popUpText = bathrooms[i].name + "<br/>";
        for (let j = 0; j < bathrooms[i].rooms.length; j++) {
            if (bathrooms[i].rooms[j].available) {
                adaCompliant = "ADA Compliant"
            }
            else {
                adaCompliant = "Not ADA Compliant"
            }
            if (!isNaN(bathrooms[i].rooms[j].name.charAt(0))) {
                popUpText += "Room " + bathrooms[i].rooms[j].name + ": " + adaCompliant
                popUpText += "<br/>"
            }
            else {
                popUpText += bathrooms[i].rooms[j].name + ": " + adaCompliant
                popUpText += "<br/>"
            }
        }
        const marker = new google.maps.Marker({
            position: { lat: bathrooms[i].latitude, lng: bathrooms[i].longitude },
            map,
            icon: image,
            shape: shape
        })

        const contentString =
            `<p>${popUpText}</p>`;

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener("click", () => {
            console.log("CLICKED MARKER")
            infowindow.open({
                anchor: marker,
                map,
            });
        });
    }


    console.log(parseFloat(user_lat), parseFloat(user_long));

    var needtowee = {
        url: "./assets/needtowee.png",
        scaledSize: new google.maps.Size(80, 140)
    }

    new google.maps.Marker({
        position: { lat: user_lat, lng: user_long },
        map,
        icon: needtowee,
        shape: shape
    })

}

initMap()
