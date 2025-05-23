
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
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

    setShowTokenInput(false);
  };

  if (showTokenInput) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
        <div className="text-center mb-6">
          <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Configuration de la carte</h3>
          <p className="text-blue-600 mb-6">
            Pour afficher la carte du monde interactive, veuillez entrer votre token Mapbox public.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Obtenez votre token gratuitement sur{' '}
            <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              mapbox.com
            </a>
          </p>
        </div>
        
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSI..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button 
            onClick={initializeMap}
            disabled={!mapboxToken.startsWith('pk.')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Charger la carte
          </Button>
        </div>
      </div>
    );
  }

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
