import { X, Shield, BookOpen, Database, Mail, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Language, useTranslation } from "../utils/translations";

interface AboutPageProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export function AboutPage({ language, isOpen, onClose }: AboutPageProps) {
  const t = useTranslation(language);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {t.about.title}
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="size-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>
            {t.about.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">{t.about.tabs.about}</TabsTrigger>
            <TabsTrigger value="tutorial">{t.about.tabs.tutorial}</TabsTrigger>
            <TabsTrigger value="data">{t.about.tabs.data}</TabsTrigger>
            <TabsTrigger value="disclaimer">{t.about.tabs.disclaimer}</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.about.projectTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{t.about.projectDescription1}</p>
                <p>{t.about.projectDescription2}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.about.mainFeatures}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">{t.about.smartSearch}</h4>
                    <p className="text-sm text-gray-600">{t.about.smartSearchDesc}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">{t.about.preciseFilters}</h4>
                    <p className="text-sm text-gray-600">{t.about.preciseFiltersDesc}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">{t.about.realTimeNavigation}</h4>
                    <p className="text-sm text-gray-600">{t.about.realTimeNavigationDesc}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">{t.about.communityReviews}</h4>
                    <p className="text-sm text-gray-600">{t.about.communityReviewsDesc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.about.contactUs}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="size-4" />
                  <span>info@dogwalkingmap.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="size-4" />
                  <span>github.com/dogwalkingmap</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutorial" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="size-5" />
                  {t.about.tutorialTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium">{t.about.step1}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t.about.step1Desc}</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-medium">{t.about.step2}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t.about.step2Desc}</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-medium">{t.about.step3}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t.about.step3Desc}</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-medium">{t.about.step4}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t.about.step4Desc}</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">{t.about.tips}</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Register and log in to save your filter preferences</li>
                    <li>• Bookmark your favorite parks for quick access</li>
                    <li>• Check park opening hours and rules before visiting</li>
                    <li>• Follow park regulations and be a responsible pet owner</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="size-5" />
                  {t.about.dataTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Park Basic Data</h3>
                    <p className="text-sm text-gray-600 mt-1">Our park data comes from the following APIs and datasets:</p>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• Brisbane City Council Open Data</li>
                      <li>• Queensland Government Park Information</li>
                      <li>• Community contributed user-generated content</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium">Map Services</h3>
                    <p className="text-sm text-gray-600 mt-1">Map display and navigation features use:</p>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• Google Maps API</li>
                      <li>• OpenStreetMap</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">{t.about.dataAccuracy}</h4>
                  <p className="text-sm text-gray-600">{t.about.dataAccuracyNote}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="disclaimer" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="size-5" />
                  {t.about.disclaimerTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">{t.about.serviceNature}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t.about.serviceNatureDesc}</p>
                  </div>

                  <div>
                    <h3 className="font-medium">{t.about.dataAccuracyTitle}</h3>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• Information may be delayed or incorrect, please verify on-site</li>
                      <li>• Park opening hours and facility status may change at any time</li>
                      <li>• We recommend verifying information before traveling</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium">{t.about.safetyResponsibility}</h3>
                    <ul className="text-sm text-gray-600 mt-1 space-y-1">
                      <li>• Dog owners are fully responsible for their pet's behavior</li>
                      <li>• Follow local laws, regulations and park rules</li>
                      <li>• Ensure personal and pet safety</li>
                      <li>• Maintain environmental cleanliness and clean up after pets</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-900 mb-2">{t.about.importantReminder}</h4>
                  <p className="text-sm text-red-800">{t.about.importantReminderText}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}