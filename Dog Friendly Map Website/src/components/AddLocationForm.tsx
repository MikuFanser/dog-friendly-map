import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { X, Plus } from "lucide-react";

interface AddLocationFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (locationData: any) => void;
}

const categories = [
  { value: "parks", label: "Parks & Recreation" },
  { value: "restaurants", label: "Restaurants" },
  { value: "cafes", label: "Cafes" },
  { value: "stores", label: "Pet Stores" },
  { value: "veterinary", label: "Veterinary" },
  { value: "grooming", label: "Grooming" },
  { value: "hotels", label: "Hotels" },
  { value: "beaches", label: "Beaches" },
];

const amenities = [
  "Water bowls",
  "Dog treats",
  "Leash hooks",
  "Waste bags",
  "Off-leash area",
  "Dog menu",
  "Outdoor seating",
  "Parking",
  "Shade",
  "Fenced area",
];

export function AddLocationForm({ isOpen, onClose, onSubmit }: AddLocationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    address: "",
    description: "",
    hours: "",
    selectedAmenities: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: Date.now().toString(),
      rating: 0,
      reviewCount: 0,
      priceLevel: 2,
      amenities: formData.selectedAmenities,
      coordinates: { lat: 0, lng: 0 },
      image: "https://images.unsplash.com/photo-1710478122312-1ca86aa0b6a5",
    });
    setFormData({
      name: "",
      category: "",
      address: "",
      description: "",
      hours: "",
      selectedAmenities: [],
    });
    onClose();
  };

  const handleAmenityToggle = (amenity: string) => {
    if (formData.selectedAmenities.includes(amenity)) {
      setFormData({
        ...formData,
        selectedAmenities: formData.selectedAmenities.filter(a => a !== amenity),
      });
    } else {
      setFormData({
        ...formData,
        selectedAmenities: [...formData.selectedAmenities, amenity],
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Add Dog-Friendly Location</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="size-4" />
          </Button>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Business Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter business name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Enter full address"
                required
              />
            </div>

            <div>
              <Label htmlFor="hours">Hours</Label>
              <Input
                id="hours"
                value={formData.hours}
                onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                placeholder="e.g., Mon-Sun 9am-8pm"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe what makes this place dog-friendly..."
                rows={4}
                required
              />
            </div>

            <div>
              <Label>Dog-Friendly Amenities</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox
                      id={amenity}
                      checked={formData.selectedAmenities.includes(amenity)}
                      onCheckedChange={() => handleAmenityToggle(amenity)}
                    />
                    <Label htmlFor={amenity} className="text-sm cursor-pointer">
                      {amenity}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 flex items-center gap-2">
                <Plus className="size-4" />
                Add Location
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}