import { useState } from "react";
import { Search, MapPin, Settings, Bookmark, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { FilterPopover } from "./FilterPopover";
import { FilterOptions } from "../types";
import { Language, useTranslation } from "../utils/translations";

interface HomePageProps {
  language: Language;
  onNavigateToMap: (searchAddress: string, filters: FilterOptions) => void;
  onShowSavedPreferences: () => void;
  currentUser?: any;
}

export function HomePage({ language, onNavigateToMap, onShowSavedPreferences, currentUser }: HomePageProps) {
  const t = useTranslation(language);
  const [searchAddress, setSearchAddress] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({});

  const handleSearch = () => {
    if (searchAddress.trim()) {
      onNavigateToMap(searchAddress, filters);
    }
  };

  const filterCategories = [
    {
      key: 'lightingRequired',
      label: t.filters.nightLighting.label,
      icon: '💡',
      description: t.filters.nightLighting.description
    },
    {
      key: 'leashRequired',
      label: t.filters.leashRequired.label,
      icon: '🦮',
      description: t.filters.leashRequired.description
    },
    {
      key: 'fencedAreaRequired',
      label: t.filters.fencedArea.label,
      icon: '🚧',
      description: t.filters.fencedArea.description
    },
    {
      key: 'wasteStationsRequired',
      label: t.filters.wasteStations.label,
      icon: '🗑️',
      description: t.filters.wasteStations.description
    },
    {
      key: 'waterFountainRequired',
      label: t.filters.waterFountain.label,
      icon: '💧',
      description: t.filters.waterFountain.description
    },
    {
      key: 'parkingRequired',
      label: t.filters.parking.label,
      icon: '🅿️',
      description: t.filters.parking.description
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.home.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.home.subtitle}
          </p>
          
          {/* Search Section */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex gap-3 mb-4">
                <div className="flex-1 relative">
                  <MapPin className="size-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder={t.home.searchPlaceholder}
                    value={searchAddress}
                    onChange={(e) => setSearchAddress(e.target.value)}
                    className="pl-10 h-12"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  className="h-12 px-6"
                  disabled={!searchAddress.trim()}
                >
                  <Search className="size-5 mr-2" />
                  {t.home.searchButton}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.home.filtersTitle}</h2>
          <p className="text-gray-600">{t.home.filtersSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {filterCategories.map((category) => (
            <FilterPopover
              key={category.key}
              category={category}
              filters={filters}
              onFiltersChange={setFilters}
              language={language}
            />
          ))}
        </div>

        {/* Active Filters Summary */}
        {Object.keys(filters).length > 0 && (
          <div className="mt-8 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">{t.home.activeFilters}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {Object.entries(filters).map(([key, value]) => {
                    if (value) {
                      const category = filterCategories.find(c => c.key === key);
                      return (
                        <span key={key} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                          {category?.label}
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Saved Preferences Section */}
      {currentUser && (
        <div className="container mx-auto px-4 pb-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bookmark className="size-6 text-blue-600" />
                  <div>
                    <h3 className="font-medium">{t.home.savedPreferencesTitle}</h3>
                    <p className="text-sm text-gray-600">{t.home.savedPreferencesDesc}</p>
                  </div>
                </div>
                <Button variant="outline" onClick={onShowSavedPreferences}>
                  {t.home.viewButton} <ChevronRight className="size-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quick Stats */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">{t.home.statsParks}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
              <p className="text-gray-600">{t.home.statsUsers}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-600">{t.home.statsSatisfaction}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}