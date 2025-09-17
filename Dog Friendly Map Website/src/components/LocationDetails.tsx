import { MapPin, Star, Clock, DollarSign, Phone, Globe, X, Navigation } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Location } from "./LocationCard";

interface LocationDetailsProps {
  location: Location;
  isOpen: boolean;
  onClose: () => void;
}

export function LocationDetails({ location, isOpen, onClose }: LocationDetailsProps) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative p-0">
          <div className="relative h-64 w-full">
            <ImageWithFallback
              src={location.image}
              alt={location.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4"
              onClick={onClose}
            >
              <X className="size-4" />
            </Button>
            <Badge className="absolute top-4 left-4 bg-white text-gray-900">
              {location.category}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          <div>
            <CardTitle className="text-2xl mb-2">{location.name}</CardTitle>
            <div className="flex items-center gap-1 text-muted-foreground mb-3">
              <MapPin className="size-4" />
              {location.address}
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
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
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Clock className="size-4" />
              {location.hours}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium mb-3">Description</h3>
            <p className="text-muted-foreground">{location.description}</p>
          </div>

          <div>
            <h3 className="font-medium mb-3">Dog-Friendly Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {location.amenities.map((amenity) => (
                <Badge key={amenity} variant="secondary">
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium mb-3">Contact & Visit</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="size-4 text-muted-foreground" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="size-4 text-muted-foreground" />
                <a href="#" className="text-blue-600 hover:underline">
                  Visit website
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1 flex items-center gap-2">
              <Navigation className="size-4" />
              Get Directions
            </Button>
            <Button variant="outline" className="flex-1">
              Write Review
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}