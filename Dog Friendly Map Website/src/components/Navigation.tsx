import { useState } from "react";
import { User, Menu, LogIn, Info, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Language, useTranslation } from "../utils/translations";

interface NavigationProps {
  currentUser?: any;
  language: Language;
  onLanguageChange: (language: Language) => void;
  onShowAbout: () => void;
  onShowLogin: () => void;
  onShowProfile: () => void;
  onLogout: () => void;
}

export function Navigation({
  currentUser,
  language,
  onLanguageChange,
  onShowAbout,
  onShowLogin,
  onShowProfile,
  onLogout,
}: NavigationProps) {
  const t = useTranslation(language);
  
  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇦🇺' },
    { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🐕</span>
            </div>
            <h1 className="text-xl font-medium">Dog Walking Map</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Globe className="size-4" />
                  {languages.find(l => l.code === language)?.flag}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={language === lang.code ? 'bg-accent' : ''}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" onClick={onShowAbout} className="flex items-center gap-2">
              <Info className="size-4" />
              {t.nav.about}
            </Button>

            {currentUser ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Avatar className="size-8">
                      <AvatarImage src={currentUser.avatar} />
                      <AvatarFallback>
                        {currentUser.name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <span>{currentUser.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={onShowProfile}>
                    {t.nav.profile}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {t.nav.myPets}
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {t.nav.savedPreferences}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout}>
                    {t.nav.logout}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={onShowLogin} className="flex items-center gap-2">
                <LogIn className="size-4" />
                {t.nav.login}
              </Button>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-4">
                  {/* Mobile Language Switcher */}
                  <div className="border-b pb-4">
                    <h3 className="font-medium mb-2">Language</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {languages.map((lang) => (
                        <Button
                          key={lang.code}
                          variant={language === lang.code ? "default" : "ghost"}
                          onClick={() => onLanguageChange(lang.code)}
                          className="justify-start"
                          size="sm"
                        >
                          <span className="mr-2">{lang.flag}</span>
                          {lang.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button variant="ghost" onClick={onShowAbout} className="justify-start">
                    <Info className="size-4 mr-2" />
                    {t.nav.about}
                  </Button>
                  
                  {currentUser ? (
                    <>
                      <div className="flex items-center gap-2 p-2">
                        <Avatar className="size-10">
                          <AvatarImage src={currentUser.avatar} />
                          <AvatarFallback>
                            {currentUser.name?.charAt(0) || 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <span>{currentUser.name}</span>
                      </div>
                      <Button variant="ghost" onClick={onShowProfile} className="justify-start">
                        {t.nav.profile}
                      </Button>
                      <Button variant="ghost" className="justify-start">
                        {t.nav.myPets}
                      </Button>
                      <Button variant="ghost" className="justify-start">
                        {t.nav.savedPreferences}
                      </Button>
                      <Button variant="ghost" onClick={onLogout} className="justify-start">
                        {t.nav.logout}
                      </Button>
                    </>
                  ) : (
                    <Button onClick={onShowLogin} className="justify-start">
                      <LogIn className="size-4 mr-2" />
                      {t.nav.login}
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}