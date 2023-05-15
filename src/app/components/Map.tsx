import mapboxgl from 'mapbox-gl'
import { useEffect, useRef } from "react"
import '../map.css'

const accessToken = process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN

export default function Map() {
  const mapNode = useRef(null)

  useEffect(() => {
    const node = mapNode.current
    if (typeof window === "undefined" || node === null) return

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-79.46195123637413, 43.726373526795946],
      zoom: 13,
    })

      const el = document.createElement('div')
      el.className = 'marker'

    new mapboxgl.Marker(el).setLngLat([-79.46195123637413, 43.726373526795946]).addTo(mapboxMap)

    return () => {
      mapboxMap.remove()
    }
  }, [])

  return <div ref={mapNode} style={{ width: "100%", height: 400 }} />

}
