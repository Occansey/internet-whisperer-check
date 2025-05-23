import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  description: string;
  color: string;
  coordinates: { lat: number; lng: number };
}

interface WorldMapProps {
  locations: Location[];
}

// Fonction utilitaire pour déterminer la couleur du marqueur
const getColorFromKeyword = (keyword: string): string => {
  if (keyword.includes('blue')) return '#3b82f6';
  if (keyword.includes('red')) return '#ef4444';
  if (keyword.includes('green')) return '#22c55e';
  if (keyword.includes('orange')) return '#f97316';
  if (keyword.includes('purple')) return '#a855f7';
  if (keyword.includes('emerald')) return '#10b981';
  return '#3b82f6';
};

const WorldMap = ({ locations }: WorldMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || 'pk.eyJ1IjoibWF4d2VsbC1vIiwiYSI6ImNtOGg5YW80NzEwYnEyanNicDZxdHczenoifQ.iOJkukwaCaVAHsHJm4CQ4w';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [0, 20],
      zoom: 1.5,
      projection: 'globe' as any
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Supprimer les anciens marqueurs
    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    locations.forEach((location) => {
      if (!map.current) return;

      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.title = location.name;
      el.style.cssText = `
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: ${getColorFromKeyword(location.color)};
        border: 3px solid white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        cursor: pointer;
        transition: all 0.3s ease;
      `;

      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.3)';
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
      });

      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false
      }).setHTML(`
        <div class="p-3">
          <h3 class="flex items-center gap-1 font-bold text-lg text-gray-800 mb-2">
            📍 ${location.name}
          </h3>
          <p class="text-sm text-gray-600 mb-2">${location.description}</p>
          <p class="text-xs text-gray-500">${location.address}</p>
        </div>
      `);

      const marker = new mapboxgl.Marker(el)
        .setLngLat([location.coordinates.lng, location.coordinates.lat])
        .setPopup(popup)
        .addTo(map.current);

      markers.current.push(marker);
    });

    map.current.on('style.load', () => {
      if (!map.current) return;
      map.current.setFog({
        color: 'rgb(186, 210, 235)',
        'high-color': 'rgb(36, 92, 223)',
        'horizon-blend': 0.02,
        'space-color': 'rgb(11, 11, 25)',
        'star-intensity': 0.6
      });
    });

    return () => {
      markers.current.forEach(marker => marker.remove());
      map.current?.remove();
      map.current = null;
    };
  }, [locations]);

  return (
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
      <div ref={mapContainer} className="w-full h-[500px] lg:h-[600px]" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h3 className="font-semibold text-sm text-gray-800 mb-1">Bureaux Solio Group</h3>
        <p className="text-xs text-gray-600">{locations.length} bureaux dans le monde</p>
      </div>
    </div>
  );
};

export default WorldMap;
