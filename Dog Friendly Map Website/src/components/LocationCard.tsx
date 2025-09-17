import { MapPin, Star, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Location {
  id: string;
  name: string;
  category: string;
  address: string;
  rating: number;
  reviewCount: number;
  priceLevel: number;
  hours: string;
  description: string;
  image: string;
  amenities: string[];
  coordinates: { lat: number; lng: number };
}

interface LocationCardProps {
  location: Location;
  onClick: () => void;
}

export function LocationCard({ location, onClick }: LocationCardProps) {
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

  const renderPrice = (level: number) => {
    return Array.from({ length: 4 }, (_, i) => (
      <DollarSign
        key={i}
        className={`size-3 ${
          i < level ? "text-green-600" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <ImageWithFallback
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <Badge className="absolute top-3 left-3 bg-white text-gray-900">
            {location.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-medium text-lg">{location.name}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="size-3" />
              {location.address}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {renderStars(location.rating)}
              </div>
              <span className="text-sm text-muted-foreground">
                {location.rating} ({location.reviewCount} reviews)
              </span>
            </div>
            <div className="flex items-center">
              {renderPrice(location.priceLevel)}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-3" />
            {location.hours}
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {location.description}
          </p>
          
          <div className="flex flex-wrap gap-1">
            {location.amenities.slice(0, 3).map((amenity) => (
              <Badge key={amenity} variant="secondary" className="text-xs">
                {amenity}
              </Badge>
            ))}
            {location.amenities.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{location.amenities.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}