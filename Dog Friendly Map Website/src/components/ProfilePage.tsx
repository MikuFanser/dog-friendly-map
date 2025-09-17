import { useState } from "react";
import { X, User, Mail, Phone, MapPin, Plus, Edit, Trash2, Camera } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Language, useTranslation } from "../utils/translations";

interface ProfilePageProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  currentUser: any;
  onUpdateUser: (user: any) => void;
}

export function ProfilePage({ language, isOpen, onClose, currentUser, onUpdateUser }: ProfilePageProps) {
  const t = useTranslation(language);
  const [editingProfile, setEditingProfile] = useState(false);
  const [editingDog, setEditingDog] = useState<any>(null);
  const [showAddDog, setShowAddDog] = useState(false);
  
  const [profileForm, setProfileForm] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: "",
    location: "",
    bio: ""
  });

  const [dogForm, setDogForm] = useState({
    name: "",
    breed: "",
    size: "medium",
    age: 1,
    specialNeeds: "",
    photo: ""
  });

  const mockDogs = [
    {
      id: "1",
      name: "Buddy",
      breed: "Golden Retriever",
      size: "large",
      age: 3,
      specialNeeds: ["Needs lots of exercise", "Good with children"],
      photo: "https://images.unsplash.com/photo-1552053831-71594a27632d"
    },
    {
      id: "2", 
      name: "Bella",
      breed: "Labrador",
      size: "large",
      age: 2,
      specialNeeds: ["Gets excited easily", "Needs socializing"],
      photo: "https://images.unsplash.com/photo-1552053831-71594a27632d"
    }
  ];

  const handleSaveProfile = () => {
    const updatedUser = {
      ...currentUser,
      ...profileForm
    };
    onUpdateUser(updatedUser);
    setEditingProfile(false);
  };

  const handleAddDog = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding dog:", dogForm);
    setShowAddDog(false);
    setDogForm({
      name: "",
      breed: "",
      size: "medium",
      age: 1,
      specialNeeds: "",
      photo: ""
    });
  };

  const getSizeLabel = (size: string) => {
    switch (size) {
      case 'small': return t.profile.smallDog;
      case 'medium': return t.profile.mediumDog;
      case 'large': return t.profile.largeDog;
      default: return size;
    }
  };

  if (!currentUser) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {t.profile.title}
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="size-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>
            {t.profile.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">{t.profile.tabs.profile}</TabsTrigger>
            <TabsTrigger value="dogs">{t.profile.tabs.dogs}</TabsTrigger>
            <TabsTrigger value="preferences">{t.profile.tabs.preferences}</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {t.profile.personalInfo}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setEditingProfile(!editingProfile)}
                  >
                    <Edit className="size-4 mr-2" />
                    {editingProfile ? t.profile.cancel : t.profile.edit}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="size-20">
                    <AvatarImage src={currentUser.avatar} />
                    <AvatarFallback className="text-lg">
                      {currentUser.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium">{currentUser.name}</h3>
                    <p className="text-sm text-gray-600">{currentUser.email}</p>
                    {editingProfile && (
                      <Button variant="outline" size="sm" className="mt-2">
                        <Camera className="size-4 mr-2" />
                        {t.profile.changeAvatar}
                      </Button>
                    )}
                  </div>
                </div>

                {editingProfile ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.profile.name}</Label>
                      <Input
                        id="name"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.profile.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({...profileForm, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.profile.phone}</Label>
                      <Input
                        id="phone"
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({...profileForm, phone: e.target.value})}
                        placeholder={t.profile.phonePlaceholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">{t.profile.location}</Label>
                      <Input
                        id="location"
                        value={profileForm.location}
                        onChange={(e) => setProfileForm({...profileForm, location: e.target.value})}
                        placeholder={t.profile.locationPlaceholder}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">{t.profile.bio}</Label>
                      <Textarea
                        id="bio"
                        value={profileForm.bio}
                        onChange={(e) => setProfileForm({...profileForm, bio: e.target.value})}
                        placeholder={t.profile.bioPlaceholder}
                        rows={3}
                      />
                    </div>
                    <div className="md:col-span-2 flex gap-3">
                      <Button onClick={handleSaveProfile}>{t.profile.save}</Button>
                      <Button variant="outline" onClick={() => setEditingProfile(false)}>
                        {t.profile.cancel}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="size-4 text-gray-400" />
                      <span className="text-gray-600">{t.profile.name}:</span>
                      <span>{currentUser.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="size-4 text-gray-400" />
                      <span className="text-gray-600">{t.profile.email}:</span>
                      <span>{currentUser.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="size-4 text-gray-400" />
                      <span className="text-gray-600">{t.profile.phone}:</span>
                      <span>{profileForm.phone || t.profile.notSet}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 text-gray-400" />
                      <span className="text-gray-600">{t.profile.location}:</span>
                      <span>{profileForm.location || t.profile.notSet}</span>
                    </div>
                    {profileForm.bio && (
                      <div className="md:col-span-2">
                        <span className="text-gray-600">{t.profile.bio}:</span>
                        <p className="mt-1">{profileForm.bio}</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dogs" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {t.profile.myPets}
                  <Button onClick={() => setShowAddDog(true)}>
                    <Plus className="size-4 mr-2" />
                    {t.profile.addPet}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {mockDogs.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>{t.profile.noPetsYet}</p>
                    <Button onClick={() => setShowAddDog(true)} className="mt-4">
                      {t.profile.addFirstPet}
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockDogs.map((dog) => (
                      <Card key={dog.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="size-16 rounded-lg overflow-hidden">
                              <ImageWithFallback
                                src={dog.photo}
                                alt={dog.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-medium">{dog.name}</h3>
                                <div className="flex gap-1">
                                  <Button variant="ghost" size="sm">
                                    <Edit className="size-3" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Trash2 className="size-3" />
                                  </Button>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{dog.breed}</p>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary">{getSizeLabel(dog.size)}</Badge>
                                <Badge variant="outline">{dog.age} {t.profile.years}</Badge>
                              </div>
                              {dog.specialNeeds.length > 0 && (
                                <div className="space-y-1">
                                  <p className="text-xs text-gray-600">Special needs:</p>
                                  {dog.specialNeeds.map((need, index) => (
                                    <Badge key={index} variant="outline" className="text-xs mr-1">
                                      {need}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.profile.tabs.preferences}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">{t.profile.savedFilters}</h3>
                    <p className="text-sm text-gray-600 mb-4">{t.profile.savedFiltersDesc}</p>
                    <Button variant="outline">
                      {t.profile.manageSavedFilters}
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">{t.profile.favoriteParks}</h3>
                    <p className="text-sm text-gray-600 mb-4">{t.profile.favoriteParksDesc}</p>
                    <Button variant="outline">
                      {t.profile.viewFavorites}
                    </Button>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">{t.profile.searchHistory}</h3>
                    <p className="text-sm text-gray-600 mb-4">{t.profile.searchHistoryDesc}</p>
                    <Button variant="outline">
                      {t.profile.viewHistory}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add Dog Dialog */}
        <Dialog open={showAddDog} onOpenChange={setShowAddDog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t.profile.addPetTitle}</DialogTitle>
              <DialogDescription>
                {t.profile.addPetDesc}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddDog} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dog-name">{t.profile.petName}</Label>
                  <Input
                    id="dog-name"
                    value={dogForm.name}
                    onChange={(e) => setDogForm({...dogForm, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dog-breed">{t.profile.breed}</Label>
                  <Input
                    id="dog-breed"
                    value={dogForm.breed}
                    onChange={(e) => setDogForm({...dogForm, breed: e.target.value})}
                    placeholder={t.profile.breedPlaceholder}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dog-size">{t.profile.size}</Label>
                  <Select value={dogForm.size} onValueChange={(value) => setDogForm({...dogForm, size: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">{t.profile.smallDog}</SelectItem>
                      <SelectItem value="medium">{t.profile.mediumDog}</SelectItem>
                      <SelectItem value="large">{t.profile.largeDog}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dog-age">{t.profile.age}</Label>
                  <Input
                    id="dog-age"
                    type="number"
                    min="0"
                    max="20"
                    value={dogForm.age}
                    onChange={(e) => setDogForm({...dogForm, age: parseInt(e.target.value) || 1})}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dog-needs">{t.profile.specialNeeds}</Label>
                <Textarea
                  id="dog-needs"
                  value={dogForm.specialNeeds}
                  onChange={(e) => setDogForm({...dogForm, specialNeeds: e.target.value})}
                  placeholder={t.profile.specialNeedsPlaceholder}
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit">{t.common.add}</Button>
                <Button type="button" variant="outline" onClick={() => setShowAddDog(false)}>
                  {t.common.cancel}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}