export const libraries = ["places", "geometry"];
export const mapContainerStyle = { height: "100vh", width: "100%" };

export const GMapsOptions = {
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: true,
  rotateControl: false,
  fullscreenControl: false,
  disableDefaultUi: false,
  zoomControlOptions: { position: 9 },
  streetViewControlOptions: { position: 9 },
};

export const markerOptions = {
  url: "/static/images/marker.png",
  scaledSize: { width: 30, height: 40, f: "px", b: "px" },
};

export const infoOptions = {
  pixelOffset: { width: 0, height: -70 },
  disableAutoPan: true,
};

export const restrictions = { country: ["id"] }

const rad = x => {
  return (x * Math.PI) / 180;
};

export const getDistance = (p1, p2) => {
  /* Haversine formula */
  let R = 6378137; // Earth’s mean radius in meter
  let dLat = rad(p2.lat() - p1.lat());
  let dLong = rad(p2.lng() - p1.lng());
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat())) *
      Math.cos(rad(p2.lat())) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d; // returns the distance in meter
};

