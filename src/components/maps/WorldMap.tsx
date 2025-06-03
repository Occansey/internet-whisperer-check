import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

type Location = {
  id: string;
  name: string;
  coordinates: { lat: number; lng: number };
  description?: string;
  color: string;
};

type Props = {
  locations: Location[];
};

const WorldMap = ({ locations }: Props) => {
  const defaultIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-md">
      <MapContainer
        center={[0, 15]}
        zoom={2}
        scrollWheelZoom={false}
        dragging={true}
        className="w-full h-full z-0"
        zoomControl={true}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.coordinates.lat, loc.coordinates.lng]}
            icon={defaultIcon}
          >
            <Tooltip direction="top" offset={[0, -20]} permanent>
              <div className="text-xs font-semibold">{loc.name}</div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMap;
