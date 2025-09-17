import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { FilterOptions } from "../types";
import { Language, useTranslation } from "../utils/translations";

interface FilterPopoverProps {
  category: {
    key: string;
    label: string;
    icon: string;
    description: string;
  };
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  language: Language;
}

export function FilterPopover({ category, filters, onFiltersChange, language }: FilterPopoverProps) {
  const t = useTranslation(language);
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = filters[category.key as keyof FilterOptions];

  const handleToggle = () => {
    const newFilters = { ...filters };
    if (category.key === 'leashRequired') {
      // Special handling for leash requirement - three options: required, optional, no requirement
      if (!newFilters.leashRequired) {
        newFilters.leashRequired = true;
      } else {
        delete newFilters.leashRequired;
      }
    } else {
      if (newFilters[category.key as keyof FilterOptions]) {
        delete newFilters[category.key as keyof FilterOptions];
      } else {
        (newFilters as any)[category.key] = true;
      }
    }
    onFiltersChange(newFilters);
  };

  const renderSpecialContent = () => {
    switch (category.key) {
      case 'leashRequired':
        return (
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-3">{category.description}</p>
            <RadioGroup
              value={filters.leashRequired === true ? 'required' : filters.leashRequired === false ? 'optional' : 'any'}
              onValueChange={(value) => {
                const newFilters = { ...filters };
                if (value === 'required') {
                  newFilters.leashRequired = true;
                } else if (value === 'optional') {
                  newFilters.leashRequired = false;
                } else {
                  delete newFilters.leashRequired;
                }
                onFiltersChange(newFilters);
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="any" id="leash-any" />
                <Label htmlFor="leash-any">{t.filters.leashRequired.noRequirement}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="required" id="leash-required" />
                <Label htmlFor="leash-required">{t.filters.leashRequired.required}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="optional" id="leash-optional" />
                <Label htmlFor="leash-optional">{t.filters.leashRequired.optional}</Label>
              </div>
            </RadioGroup>
          </div>
        );
      
      case 'maxDistance':
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600">{category.description}</p>
            <div>
              <Label className="text-sm font-medium">Maximum distance: {filters.maxDistance || 5}km</Label>
              <Slider
                value={[filters.maxDistance || 5]}
                onValueChange={(value) => {
                  onFiltersChange({ ...filters, maxDistance: value[0] });
                }}
                min={1}
                max={20}
                step={1}
                className="mt-2"
              />
            </div>
          </div>
        );
      
      case 'preferredSize':
        return (
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-3">{category.description}</p>
            <RadioGroup
              value={filters.preferredSize || 'any'}
              onValueChange={(value) => {
                const newFilters = { ...filters };
                if (value === 'any') {
                  delete newFilters.preferredSize;
                } else {
                  newFilters.preferredSize = value as 'small' | 'medium' | 'large';
                }
                onFiltersChange(newFilters);
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="any" id="size-any" />
                <Label htmlFor="size-any">Any size</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="size-small" />
                <Label htmlFor="size-small">Small dog area</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="size-medium" />
                <Label htmlFor="size-medium">Medium dog area</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="size-large" />
                <Label htmlFor="size-large">Large dog area</Label>
              </div>
            </RadioGroup>
          </div>
        );
      
      default:
        return (
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-3">{category.description}</p>
            <div className="flex items-center space-x-2">
              <Checkbox
                id={category.key}
                checked={!!filters[category.key as keyof FilterOptions]}
                onCheckedChange={handleToggle}
              />
              <Label htmlFor={category.key}>{t.filters.requireThisFacility}</Label>
            </div>
          </div>
        );
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Card className={`cursor-pointer transition-all hover:shadow-md ${isActive ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <h3 className="font-medium">{category.label}</h3>
                  {isActive && (
                    <div className="flex items-center gap-1 text-sm text-blue-600">
                      <Check className="size-3" />
                      {t.filters.selected}
                    </div>
                  )}
                </div>
              </div>
              <ChevronDown className="size-4 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <span>{category.icon}</span>
            {category.label}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          {renderSpecialContent()}
        </CardContent>
      </PopoverContent>
    </Popover>
  );
}