import { Filter, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  priceRange: number[];
  onPriceRangeChange: (range: number[]) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
}

const categories = [
  { id: "parks", label: "Parks & Recreation", count: 24 },
  { id: "restaurants", label: "Restaurants", count: 18 },
  { id: "cafes", label: "Cafes", count: 12 },
  { id: "stores", label: "Pet Stores", count: 8 },
  { id: "veterinary", label: "Veterinary", count: 6 },
  { id: "grooming", label: "Grooming", count: 10 },
  { id: "hotels", label: "Hotels", count: 4 },
  { id: "beaches", label: "Beaches", count: 3 },
];

export function FilterSidebar({
  isOpen,
  onClose,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  minRating,
  onMinRatingChange,
}: FilterSidebarProps) {
  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoryChange(selectedCategories.filter(id => id !== categoryId));
    } else {
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  const clearAllFilters = () => {
    onCategoryChange([]);
    onPriceRangeChange([1, 4]);
    onMinRatingChange(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      <div className="lg:hidden absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <Card className="absolute right-0 top-0 h-full w-80 lg:relative lg:w-full lg:h-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Filter className="size-5" />
            Filters
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="lg:hidden">
            <X className="size-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Active Filters</span>
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              Clear All
            </Button>
          </div>

          <div>
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => handleCategoryToggle(category.id)}
                    />
                    <label
                      htmlFor={category.id}
                      className="text-sm cursor-pointer"
                    >
                      {category.label}
                    </label>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <div className="space-y-3">
              <Slider
                value={priceRange}
                onValueChange={onPriceRangeChange}
                min={1}
                max={4}
                step={1}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>${"$".repeat(priceRange[0])}</span>
                <span>${"$".repeat(priceRange[1])}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Minimum Rating</h3>
            <div className="space-y-3">
              <Slider
                value={[minRating]}
                onValueChange={(value) => onMinRatingChange(value[0])}
                min={0}
                max={5}
                step={0.5}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Any</span>
                <span>{minRating}+ stars</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}