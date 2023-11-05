

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

var currentIcon = L.icon({
  iconUrl: 'https://media.discordapp.net/attachments/819662445635043398/1170489623466741767/needtowee.png?ex=65593a68&is=6546c568&hm=ad05593c3c1af488993f8fab53f673b50aa4b66f3aeaedcba87333da0629540d&=&width=676&height=1410',

  iconSize:     [60, 120], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function success(pos) {
  const crd = pos.coords;

  const user_lat = crd.latitude
  const user_long = crd.longitude
  localStorage.setItem("user_lat", user_lat);
  localStorage.setItem("user_long", user_long);

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);


}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
