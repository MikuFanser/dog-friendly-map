import { useState } from "react";
import { X, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Checkbox } from "./ui/checkbox";
import { Language, useTranslation } from "../utils/translations";

interface LoginPageProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: any) => void;
}

export function LoginPage({ language, isOpen, onClose, onLogin }: LoginPageProps) {
  const t = useTranslation(language);
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    const mockUser = {
      id: "1",
      email: loginForm.email,
      name: "John Smith",
      avatar: "",
      preferences: {},
      savedLocations: [],
      dogs: []
    };
    onLogin(mockUser);
    onClose();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    if (!registerForm.agreeTerms) {
      alert("Please agree to terms");
      return;
    }
    
    // Mock registration
    const mockUser = {
      id: "1",
      email: registerForm.email,
      name: registerForm.name,
      avatar: "",
      preferences: {},
      savedLocations: [],
      dogs: []
    };
    onLogin(mockUser);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {t.auth.welcomeTitle}
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="size-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>
            {t.auth.welcomeDesc}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">{t.auth.login}</TabsTrigger>
            <TabsTrigger value="register">{t.auth.register}</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.auth.email}</Label>
                    <div className="relative">
                      <Mail className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.auth.emailPlaceholder}
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">{t.auth.password}</Label>
                    <div className="relative">
                      <Lock className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder={t.auth.passwordPlaceholder}
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={loginForm.rememberMe}
                        onCheckedChange={(checked) => 
                          setLoginForm({...loginForm, rememberMe: checked as boolean})
                        }
                      />
                      <Label htmlFor="remember" className="text-sm">{t.auth.rememberMe}</Label>
                    </div>
                    <Button variant="link" className="text-sm p-0">
                      {t.auth.forgotPassword}
                    </Button>
                  </div>

                  <Button type="submit" className="w-full">
                    {t.auth.login}
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-background text-gray-500">{t.auth.or}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <Button variant="outline" className="w-full">
                      {t.auth.wechatLogin}
                    </Button>
                    <Button variant="outline" className="w-full">
                      {t.auth.qqLogin}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">{t.auth.name}</Label>
                    <div className="relative">
                      <User className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="register-name"
                        type="text"
                        placeholder={t.auth.namePlaceholder}
                        value={registerForm.name}
                        onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">{t.auth.email}</Label>
                    <div className="relative">
                      <Mail className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder={t.auth.emailPlaceholder}
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">{t.auth.password}</Label>
                    <div className="relative">
                      <Lock className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        placeholder={t.auth.passwordPlaceholder}
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">{t.auth.confirmPassword}</Label>
                    <div className="relative">
                      <Lock className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="confirm-password"
                        type={showPassword ? "text" : "password"}
                        placeholder={t.auth.confirmPasswordPlaceholder}
                        value={registerForm.confirmPassword}
                        onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agree-terms"
                      checked={registerForm.agreeTerms}
                      onCheckedChange={(checked) => 
                        setRegisterForm({...registerForm, agreeTerms: checked as boolean})
                      }
                      className="mt-1"
                    />
                    <Label htmlFor="agree-terms" className="text-sm leading-5">
                      {t.auth.agreeToTerms}{" "}
                      <Button variant="link" className="text-sm p-0 h-auto">
                        {t.auth.termsOfService}
                      </Button>
                      {" "}and{" "}
                      <Button variant="link" className="text-sm p-0 h-auto">
                        {t.auth.privacyPolicy}
                      </Button>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={!registerForm.agreeTerms}>
                    {t.auth.register}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-gray-600 mt-4">
          <p>{t.auth.registerNote}</p>
          <p className="mt-1">{t.auth.noLoginNote}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}