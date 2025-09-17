import { useState, useEffect } from "react";
import { ArrowLeft, Filter, Navigation, Star, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FilterOptions, Park } from "../types";
import { Language, useTranslation } from "../utils/translations";

interface MapPageProps {
  language: Language;
  searchAddress: string;
  initialFilters: FilterOptions;
  onBack: () => void;
}

export function MapPage({ language, searchAddress, initialFilters, onBack }: MapPageProps) {
  const t = useTranslation(language);
  const [parks, setParks] = useState<Park[]>([]);
  const [selectedPark, setSelectedPark] = useState<Park | null>(null);
  const [showParkDetails, setShowParkDetails] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Mock parks data - in a real application this would call APIs
  const mockParks: Park[] = [
    {
      id: "1",
      name: "Roma Street Parkland Dog Area",
      address: "1 Parkland Blvd, Brisbane City QLD 4000",
      coordinates: { lat: -27.4698, lng: 153.0251 },
      features: {
        nightLighting: true,
        leashRequired: false,
        fencedArea: true,
        wasteStations: true,
        waterFountain: true,
        parking: true,
        size: 'large',
        surfaceType: 'Grass',
        amenities: ['Agility equipment', 'Small dog area', 'Large dog area']
      },
      rating: 4.8,
      reviewCount: 156,
      photos: ["https://images.unsplash.com/photo-1552053831-71594a27632d"],
      description: "A well-equipped large dog park with separate areas for small and large dogs, suitable for dogs of all sizes to play.",
      hours: "Daily 6:00 AM - 10:00 PM",
      rules: ["Keep park clean", "Control your dog's behavior", "Puppies under 12 months must be leashed"]
    },
    {
      id: "2",
      name: "New Farm Park Dog Off-Leash Area",
      address: "Brunswick St, New Farm QLD 4005",
      coordinates: { lat: -27.4644, lng: 153.0515 },
      features: {
        nightLighting: false,
        leashRequired: true,
        fencedArea: false,
        wasteStations: true,
        waterFountain: false,
        parking: true,
        size: 'medium',
        surfaceType: 'Dirt path',
        amenities: ['Walking trails', 'Rest areas']
      },
      rating: 4.3,
      reviewCount: 89,
      photos: ["https://images.unsplash.com/photo-1552053831-71594a27632d"],
      description: "A pet-friendly area within New Farm Park, beautiful environment, suitable for leashed dog walking.",
      hours: "Daily 5:00 AM - 9:00 PM",
      rules: ["Leash required", "Clean up after your pet", "Do not feed wildlife"]
    }
  ];

  useEffect(() => {
    // Simulate getting user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log("Failed to get location:", error);
          // Use default location (Brisbane)
          setUserLocation({ lat: -27.4698, lng: 153.0251 });
        }
      );
    } else {
      setUserLocation({ lat: -27.4698, lng: 153.0251 });
    }

    // Simulate API call
    setParks(mockParks);
  }, []);

  const filteredParks = parks.filter(park => {
    if (filters.lightingRequired && !park.features.nightLighting) return false;
    if (filters.leashRequired !== undefined && park.features.leashRequired !== filters.leashRequired) return false;
    if (filters.fencedAreaRequired && !park.features.fencedArea) return false;
    if (filters.wasteStationsRequired && !park.features.wasteStations) return false;
    if (filters.waterFountainRequired && !park.features.waterFountain) return false;
    if (filters.parkingRequired && !park.features.parking) return false;
    if (filters.preferredSize && filters.preferredSize !== 'any' && park.features.size !== filters.preferredSize) return false;
    return true;
  });

  const handleParkClick = (park: Park) => {
    setSelectedPark(park);
    setShowParkDetails(true);
  };

  const handleNavigate = (park: Park) => {
    // In a real application, this would call navigation APIs
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${park.coordinates.lat},${park.coordinates.lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`size-4 ${
          i < Math.floor(rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="size-4" />
            </Button>
            <div>
              <h1 className="font-medium">{t.map.searchResults}</h1>
              <p className="text-sm text-gray-600">{searchAddress}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">{t.map.found} {filteredParks.length} {t.map.parks}</span>
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="size-4 mr-2" />
                  {t.map.filter}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="py-6">
                  <h2 className="text-lg font-medium mb-4">{t.map.filter}</h2>
                  {/* Filter components would go here */}
                  <p className="text-sm text-gray-600">Filter functionality in development...</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        {/* Mock Map */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-50 to-green-50">
          {/* Mock map content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="size-16 mx-auto mb-4" />
              <p>{t.map.mapView}</p>
              <p className="text-sm">{t.map.mockMapNote}</p>
            </div>
          </div>

          {/* Park Markers */}
          {filteredParks.map((park, index) => {
            const x = 30 + (index % 3) * 25;
            const y = 20 + Math.floor(index / 3) * 30;
            
            return (
              <div
                key={park.id}
                className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer transition-all hover:scale-110"
                style={{ left: `${x}%`, top: `${y}%` }}
                onClick={() => handleParkClick(park)}
              >
                <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
                  🐕
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs whitespace-nowrap">
                  {park.name}
                </div>
              </div>
            );
          })}

          {/* User Location */}
          {userLocation && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-red-600 text-white p-2 rounded-full shadow-lg">
                📍
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs">
                {t.map.myLocation}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Button */}
        {selectedPark && (
          <div className="absolute bottom-6 right-6">
            <Button
              onClick={() => handleNavigate(selectedPark)}
              className="shadow-lg"
              size="lg"
            >
              <Navigation className="size-5 mr-2" />
              {t.map.navigateTo}
            </Button>
          </div>
        )}
      </div>

      {/* Park Details Dialog */}
      <Dialog open={showParkDetails} onOpenChange={setShowParkDetails}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedPark && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  {selectedPark.name}
                  <div className="flex items-center gap-1">
                    {renderStars(selectedPark.rating)}
                    <span className="text-sm text-gray-600 ml-1">
                      ({selectedPark.reviewCount} reviews)
                    </span>
                  </div>
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {selectedPark.photos[0] && (
                  <div className="h-48 w-full">
                    <ImageWithFallback
                      src={selectedPark.photos[0]}
                      alt={selectedPark.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="size-4" />
                    {selectedPark.address}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Clock className="size-4" />
                    {selectedPark.hours}
                  </div>
                  <p className="text-gray-700">{selectedPark.description}</p>
                </div>

                <div>
                  <h3 className="font-medium mb-3">{t.parkDetails.facilities}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className={selectedPark.features.nightLighting ? "text-green-600" : "text-gray-400"}>
                        {selectedPark.features.nightLighting ? t.parkDetails.yes : t.parkDetails.no}
                      </span>
                      {t.parkDetails.nightLighting}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={!selectedPark.features.leashRequired ? "text-green-600" : "text-orange-600"}>
                        {!selectedPark.features.leashRequired ? t.parkDetails.yes : "!"}
                      </span>
                      {selectedPark.features.leashRequired ? t.parkDetails.required : t.parkDetails.optional}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={selectedPark.features.fencedArea ? "text-green-600" : "text-gray-400"}>
                        {selectedPark.features.fencedArea ? t.parkDetails.yes : t.parkDetails.no}
                      </span>
                      {t.parkDetails.fencedArea}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={selectedPark.features.wasteStations ? "text-green-600" : "text-gray-400"}>
                        {selectedPark.features.wasteStations ? t.parkDetails.yes : t.parkDetails.no}
                      </span>
                      {t.parkDetails.wasteStations}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={selectedPark.features.waterFountain ? "text-green-600" : "text-gray-400"}>
                        {selectedPark.features.waterFountain ? t.parkDetails.yes : t.parkDetails.no}
                      </span>
                      {t.parkDetails.waterFountain}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={selectedPark.features.parking ? "text-green-600" : "text-gray-400"}>
                        {selectedPark.features.parking ? t.parkDetails.yes : t.parkDetails.no}
                      </span>
                      {t.parkDetails.parking}
                    </div>
                  </div>
                </div>

                {selectedPark.features.amenities.length > 0 && (
                  <div>
                    <h3 className="font-medium mb-3">{t.parkDetails.otherAmenities}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPark.features.amenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="font-medium mb-3">{t.parkDetails.rules}</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {selectedPark.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button onClick={() => handleNavigate(selectedPark)} className="flex-1">
                    <Navigation className="size-4 mr-2" />
                    {t.parkDetails.navigateTo}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    {t.parkDetails.saveToFavorites}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}