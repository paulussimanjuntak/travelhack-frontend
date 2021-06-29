import { DirectionsRenderer } from '@react-google-maps/api'

const DirectionsAsRenderer = ({ directions, selectedPlaceLength }) => {
  let dir = directions
  if(selectedPlaceLength < 2) dir = { routes: [] }

  return (
    <DirectionsRenderer 
      options={{ 
        directions: dir,
        polylineOptions: {
          strokeOpacity: 0.5,
          strokeColor: '#499797',
          strokeWeight: 5,
          geodesic: true,
        },
        // preserveViewport: true,
        suppressMarkers: true
      }}
    />
  )
}

export default DirectionsAsRenderer
