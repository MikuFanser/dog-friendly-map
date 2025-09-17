import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { MapPage } from "./components/MapPage";
import { AboutPage } from "./components/AboutPage";
import { LoginPage } from "./components/LoginPage";
import { ProfilePage } from "./components/ProfilePage";
import { FilterOptions } from "./types";
import { Language } from "./utils/translations";

type Page = 'home' | 'map';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [searchAddress, setSearchAddress] = useState("");
  const [mapFilters, setMapFilters] = useState<FilterOptions>({});
  const [language, setLanguage] = useState<Language>('en'); // Default to English for Brisbane
  
  // Modal states
  const [showAbout, setShowAbout] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleNavigateToMap = (address: string, filters: FilterOptions) => {
    setSearchAddress(address);
    setMapFilters(filters);
    setCurrentPage('map');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleLogin = (user: any) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleUpdateUser = (user: any) => {
    setCurrentUser(user);
  };

  const handleShowSavedPreferences = () => {
    // If user is not logged in, show login page
    if (!currentUser) {
      setShowLogin(true);
    } else {
      // Show user preferences page (can be extended)
      setShowProfile(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        currentUser={currentUser}
        language={language}
        onLanguageChange={setLanguage}
        onShowAbout={() => setShowAbout(true)}
        onShowLogin={() => setShowLogin(true)}
        onShowProfile={() => setShowProfile(true)}
        onLogout={handleLogout}
      />

      {currentPage === 'home' && (
        <HomePage
          language={language}
          onNavigateToMap={handleNavigateToMap}
          onShowSavedPreferences={handleShowSavedPreferences}
          currentUser={currentUser}
        />
      )}

      {currentPage === 'map' && (
        <MapPage
          language={language}
          searchAddress={searchAddress}
          initialFilters={mapFilters}
          onBack={handleBackToHome}
        />
      )}

      <AboutPage
        language={language}
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
      />

      <LoginPage
        language={language}
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={handleLogin}
      />

      {currentUser && (
        <ProfilePage
          language={language}
          isOpen={showProfile}
          onClose={() => setShowProfile(false)}
          currentUser={currentUser}
          onUpdateUser={handleUpdateUser}
        />
      )}
    </div>
  );
}