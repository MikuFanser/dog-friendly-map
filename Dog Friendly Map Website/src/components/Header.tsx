import { Search, MapPin, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddLocation: () => void;
}

export function Header({ searchQuery, onSearchChange, onAddLocation }: HeaderProps) {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="size-8 text-primary" />
            <h1 className="text-2xl font-medium text-primary">PawMap</h1>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search dog-friendly places..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <Button onClick={onAddLocation} className="flex items-center gap-2">
            <Plus className="size-4" />
            Add Location
          </Button>
        </div>
      </div>
    </header>
  );
}