
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

const WorldMap = ({ locations }: WorldMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Set the Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF4d2VsbC1vIiwiYSI6ImNtOGg5YW80NzEwYnEyanNicDZxdHczenoifQ.iOJkukwaCaVAHsHJm4CQ4w';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [0, 20],
      zoom: 1.5,
      projection: 'globe' as any
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for all locations
    locations.forEach((location) => {
      if (!map.current) return;

      // Create custom marker element
      const el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.cssText = `
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: ${location.color.includes('blue') ? '#3b82f6' : 
                    location.color.includes('red') ? '#ef4444' :
                    location.color.includes('green') ? '#22c55e' :
                    location.color.includes('orange') ? '#f97316' :
                    location.color.includes('purple') ? '#a855f7' :
                    location.color.includes('emerald') ? '#10b981' : '#3b82f6'};
        border: 3px solid white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        cursor: pointer;
        transition: all 0.3s ease;
      `;

      // Add hover effect
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'scale(1.3)';
      });
      
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'scale(1)';
      });

      // Create popup
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false
      }).setHTML(`
        <div class="p-3">
          <h3 class="font-bold text-lg text-gray-800 mb-2">${location.name}</h3>
          <p class="text-sm text-gray-600 mb-2">${location.description}</p>
          <p class="text-xs text-gray-500">${location.address}</p>
        </div>
      `);

      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat([location.coordinates.lng, location.coordinates.lat])
        .setPopup(popup)
        .addTo(map.current);
    });

    // Add fog and atmosphere
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

    // Cleanup function
    return () => {
      map.current?.remove();
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
