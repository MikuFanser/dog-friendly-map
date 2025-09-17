import { MapPin } from "lucide-react";
import { Location } from "./LocationCard";

interface MapViewProps {
  locations: Location[];
  selectedLocation?: Location;
  onLocationSelect: (location: Location) => void;
}

export function MapView({ locations, selectedLocation, onLocationSelect }: MapViewProps) {
  return (
    <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
      {/* Mock Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-green-50">
        {/* Mock Streets */}
        <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-300"></div>
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300"></div>
        <div className="absolute top-3/4 left-0 right-0 h-1 bg-gray-300"></div>
        <div className="absolute top-0 bottom-0 left-1/4 w-1 bg-gray-300"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300"></div>
        <div className="absolute top-0 bottom-0 left-3/4 w-1 bg-gray-300"></div>
      </div>

      {/* Location Markers */}
      {locations.map((location, index) => {
        const isSelected = selectedLocation?.id === location.id;
        const x = 20 + (index % 4) * 20;
        const y = 20 + Math.floor(index / 4) * 20;
        
        return (
          <div
            key={location.id}
            className={`absolute transform -translate-x-1/2 -translate-y-full cursor-pointer transition-all hover:scale-110 ${
              isSelected ? 'scale-125 z-20' : 'z-10'
            }`}
            style={{ left: `${x}%`, top: `${y}%` }}
            onClick={() => onLocationSelect(location)}
          >
            <div className="relative">
              <MapPin
                className={`size-8 ${
                  isSelected
                    ? 'text-red-600 fill-red-600'
                    : 'text-blue-600 fill-blue-600'
                } drop-shadow-lg`}
              />
              {isSelected && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg whitespace-nowrap text-sm z-30">
                  {location.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Mock Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <button className="bg-white border border-gray-300 rounded p-2 shadow hover:shadow-md transition-shadow">
          +
        </button>
        <button className="bg-white border border-gray-300 rounded p-2 shadow hover:shadow-md transition-shadow">
          -
        </button>
      </div>

      {/* Mock Map Attribution */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white bg-opacity-75 px-2 py-1 rounded">
        Mock Map View
      </div>
    </div>
  );
}