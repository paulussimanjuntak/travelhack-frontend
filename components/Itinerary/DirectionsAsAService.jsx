import { DirectionsService } from '@react-google-maps/api'

const DirectionsAsAService = ({ travelMode, raw_waypoints, callback }) => {
  const tmp_waypts = raw_waypoints.map(o => { return { location: o.position, stopover: true } })
  const waypts = tmp_waypts.slice(1, tmp_waypts.length - 1)

  return (
    <DirectionsService
      options={{
        origin: tmp_waypts[0].location,
        destination: tmp_waypts[tmp_waypts.length - 1].location,
        travelMode: travelMode,
        waypoints: waypts,
        optimizeWaypoints: false,
        avoidFerries: false,
        avoidHighways: false,
        avoidTolls: false,
        provideRouteAlternatives: false
      }}
      callback={callback}
    />
  )
}

export default DirectionsAsAService
