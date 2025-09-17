export type Language = 'en' | 'zh' | 'es';

export interface Translations {
  // Navigation
  nav: {
    about: string;
    login: string;
    profile: string;
    myPets: string;
    savedPreferences: string;
    logout: string;
  };
  
  // HomePage
  home: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    searchButton: string;
    filtersTitle: string;
    filtersSubtitle: string;
    activeFilters: string;
    savedPreferencesTitle: string;
    savedPreferencesDesc: string;
    viewButton: string;
    statsParks: string;
    statsUsers: string;
    statsSatisfaction: string;
  };
  
  // Filters
  filters: {
    nightLighting: {
      label: string;
      description: string;
    };
    leashRequired: {
      label: string;
      description: string;
      noRequirement: string;
      required: string;
      optional: string;
    };
    fencedArea: {
      label: string;
      description: string;
    };
    wasteStations: {
      label: string;
      description: string;
    };
    waterFountain: {
      label: string;
      description: string;
    };
    parking: {
      label: string;
      description: string;
    };
    requireThisFacility: string;
    selected: string;
  };
  
  // MapPage
  map: {
    searchResults: string;
    found: string;
    parks: string;
    filter: string;
    mapView: string;
    mockMapNote: string;
    myLocation: string;
    navigateTo: string;
    save: string;
  };
  
  // Park Details
  parkDetails: {
    hours: string;
    facilities: string;
    otherAmenities: string;
    rules: string;
    yes: string;
    no: string;
    required: string;
    optional: string;
    nightLighting: string;
    leashRequirement: string;
    fencedArea: string;
    wasteStations: string;
    waterFountain: string;
    parking: string;
    navigateTo: string;
    saveToFavorites: string;
  };
  
  // About Page
  about: {
    title: string;
    description: string;
    tabs: {
      about: string;
      tutorial: string;
      data: string;
      disclaimer: string;
    };
    projectTitle: string;
    projectDescription1: string;
    projectDescription2: string;
    mainFeatures: string;
    smartSearch: string;
    smartSearchDesc: string;
    preciseFilters: string;
    preciseFiltersDesc: string;
    realTimeNavigation: string;
    realTimeNavigationDesc: string;
    communityReviews: string;
    communityReviewsDesc: string;
    contactUs: string;
    tutorialTitle: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
    step4: string;
    step4Desc: string;
    tips: string;
    dataTitle: string;
    dataAccuracy: string;
    dataAccuracyNote: string;
    disclaimerTitle: string;
    serviceNature: string;
    serviceNatureDesc: string;
    dataAccuracyTitle: string;
    safetyResponsibility: string;
    privacyProtection: string;
    serviceChanges: string;
    importantReminder: string;
    importantReminderText: string;
  };
  
  // Login/Register
  auth: {
    welcomeTitle: string;
    welcomeDesc: string;
    login: string;
    register: string;
    email: string;
    emailPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    name: string;
    namePlaceholder: string;
    confirmPassword: string;
    confirmPasswordPlaceholder: string;
    rememberMe: string;
    forgotPassword: string;
    or: string;
    wechatLogin: string;
    qqLogin: string;
    agreeToTerms: string;
    termsOfService: string;
    privacyPolicy: string;
    registerNote: string;
    noLoginNote: string;
  };
  
  // Profile
  profile: {
    title: string;
    description: string;
    tabs: {
      profile: string;
      dogs: string;
      preferences: string;
    };
    personalInfo: string;
    edit: string;
    cancel: string;
    save: string;
    changeAvatar: string;
    name: string;
    email: string;
    phone: string;
    phonePlaceholder: string;
    location: string;
    locationPlaceholder: string;
    bio: string;
    bioPlaceholder: string;
    notSet: string;
    myPets: string;
    addPet: string;
    noPetsYet: string;
    addFirstPet: string;
    petName: string;
    breed: string;
    breedPlaceholder: string;
    size: string;
    smallDog: string;
    mediumDog: string;
    largeDog: string;
    age: string;
    specialNeeds: string;
    specialNeedsPlaceholder: string;
    years: string;
    addPetTitle: string;
    addPetDesc: string;
    savedFilters: string;
    savedFiltersDesc: string;
    manageSavedFilters: string;
    favoriteParks: string;
    favoriteParksDesc: string;
    viewFavorites: string;
    searchHistory: string;
    searchHistoryDesc: string;
    viewHistory: string;
  };
  
  // Common
  common: {
    close: string;
    back: string;
    next: string;
    previous: string;
    loading: string;
    error: string;
    success: string;
    add: string;
    delete: string;
    edit: string;
    save: string;
    cancel: string;
    confirm: string;
    yes: string;
    no: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      login: "Login",
      profile: "Profile",
      myPets: "My Pets",
      savedPreferences: "Saved Preferences",
      logout: "Logout"
    },
    home: {
      title: "Find the Perfect Dog Walking Spots for You and Your Furry Friend",
      subtitle: "Search for nearby dog-friendly parks and facilities, filter by your needs to find the most suitable walking locations",
      searchPlaceholder: "Enter address or area name...",
      searchButton: "Search",
      filtersTitle: "Filter Options",
      filtersSubtitle: "Click to select the facilities and conditions you need",
      activeFilters: "Selected Filter Options",
      savedPreferencesTitle: "My Preference Settings",
      savedPreferencesDesc: "View and manage your saved filter preferences",
      viewButton: "View",
      statsParks: "Dog-Friendly Parks",
      statsUsers: "Active Users",
      statsSatisfaction: "User Satisfaction"
    },
    filters: {
      nightLighting: {
        label: "Night Lighting",
        description: "Parks with lighting facilities suitable for evening dog walks"
      },
      leashRequired: {
        label: "Leash Requirements",
        description: "Choose whether leash is required or dogs can run freely",
        noRequirement: "No requirement",
        required: "Leash required",
        optional: "Leash optional"
      },
      fencedArea: {
        label: "Fenced Area",
        description: "Safe enclosed areas where dogs can play securely"
      },
      wasteStations: {
        label: "Waste Disposal",
        description: "Facilities providing dog waste bags and bins"
      },
      waterFountain: {
        label: "Water Facilities",
        description: "Water fountains designed specifically for dogs"
      },
      parking: {
        label: "Parking Facilities",
        description: "Convenient parking locations available"
      },
      requireThisFacility: "Require this facility",
      selected: "Selected"
    },
    map: {
      searchResults: "Search Results",
      found: "Found",
      parks: "parks",
      filter: "Filter",
      mapView: "Map View",
      mockMapNote: "(Mock map - real application would use actual map API)",
      myLocation: "My Location",
      navigateTo: "Navigate To",
      save: "Save to Favorites"
    },
    parkDetails: {
      hours: "Hours:",
      facilities: "Features & Facilities",
      otherAmenities: "Other Amenities",
      rules: "Rules & Guidelines",
      yes: "✓",
      no: "✗",
      required: "Required",
      optional: "Optional",
      nightLighting: "Night Lighting",
      leashRequirement: "Leash Requirement",
      fencedArea: "Fenced Area",
      wasteStations: "Waste Disposal",
      waterFountain: "Water Facilities",
      parking: "Parking",
      navigateTo: "Navigate To",
      saveToFavorites: "Save to Favorites"
    },
    about: {
      title: "About Dog Walking Map",
      description: "Learn about the features, usage methods and related information of Dog Walking Map",
      tabs: {
        about: "About Us",
        tutorial: "Tutorial",
        data: "Data Sources",
        disclaimer: "Disclaimer"
      },
      projectTitle: "Project Introduction",
      projectDescription1: "Dog Walking Map is a map application designed specifically for dog owners, helping you find the most suitable walking spots for you and your beloved pets. We are committed to providing accurate and practical park and facility information for urban dog owners.",
      projectDescription2: "Through detailed filtering features, you can find parks with various facilities such as night lighting, fenced areas, water facilities, etc., based on your dog's size, personality needs, and your preferences.",
      mainFeatures: "Main Features",
      smartSearch: "🔍 Smart Search",
      smartSearchDesc: "Quickly find nearby dog-friendly locations by address",
      preciseFilters: "🎯 Precise Filtering",
      preciseFiltersDesc: "Multiple filter conditions to find parks that best meet your needs",
      realTimeNavigation: "📍 Real-time Navigation",
      realTimeNavigationDesc: "One-click navigation to selected parks, supporting multiple map applications",
      communityReviews: "⭐ Community Reviews",
      communityReviewsDesc: "View reviews and experiences from other dog owners",
      contactUs: "Contact Us",
      tutorialTitle: "User Tutorial",
      step1: "Step 1: Search Address",
      step1Desc: "Enter your address or the area name you want to search in the search box on the homepage, then click the search button.",
      step2: "Step 2: Set Filter Conditions",
      step2Desc: "Click on filter condition cards to set your facility requirements: night lighting for evening walks, leash requirements, fenced areas for safe play, waste disposal facilities, dog water fountains, and parking facilities.",
      step3: "Step 3: View Map Results",
      step3Desc: "After entering the map page, you can see park markers that meet your criteria. Click on markers to view detailed information including facility introductions, usage rules, and other user reviews.",
      step4: "Step 4: Navigate There",
      step4Desc: "After selecting your desired park, click the 'Navigate To' button. The system will open your phone's navigation app and plan the optimal route for you.",
      tips: "💡 Usage Tips",
      dataTitle: "Data Sources",
      dataAccuracy: "Data Accuracy Notice",
      dataAccuracyNote: "While we strive to ensure data accuracy and timeliness, park facilities may change. We recommend verifying the latest information through official channels before visiting, or checking recent user reviews.",
      disclaimerTitle: "Disclaimer",
      serviceNature: "Service Nature",
      serviceNatureDesc: "Dog Walking Map is an information service platform. The park and facility information provided is for reference only. We are not the operators of the parks and are not responsible for the actual conditions of the parks.",
      dataAccuracyTitle: "Information Accuracy",
      safetyResponsibility: "Safety Responsibility",
      privacyProtection: "Privacy Protection",
      serviceChanges: "Service Changes",
      importantReminder: "⚠️ Important Reminder",
      importantReminderText: "By using this service, you acknowledge that you have read and agree to the above disclaimer. When walking your dog, please be sure to comply with local laws and regulations, ensure the safety of people and pets, and be a responsible pet owner."
    },
    auth: {
      welcomeTitle: "Welcome to Dog Walking Map",
      welcomeDesc: "Login or register an account to use full features",
      login: "Login",
      register: "Register",
      email: "Email",
      emailPlaceholder: "Enter your email",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      name: "Name",
      namePlaceholder: "Enter your name",
      confirmPassword: "Confirm Password",
      confirmPasswordPlaceholder: "Enter your password again",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      or: "or",
      wechatLogin: "WeChat Login",
      qqLogin: "QQ Login",
      agreeToTerms: "I have read and agree to the",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      registerNote: "Registration indicates your agreement to our Terms of Service and Privacy Policy",
      noLoginNote: "You can also use search features without logging in"
    },
    profile: {
      title: "Profile",
      description: "Manage your personal information, pet profiles and preference settings",
      tabs: {
        profile: "Basic Info",
        dogs: "My Pets",
        preferences: "Preferences"
      },
      personalInfo: "Personal Information",
      edit: "Edit",
      cancel: "Cancel",
      save: "Save",
      changeAvatar: "Change Avatar",
      name: "Name",
      email: "Email",
      phone: "Phone",
      phonePlaceholder: "Enter phone number",
      location: "Location",
      locationPlaceholder: "Enter your city",
      bio: "Bio",
      bioPlaceholder: "Tell us about you and your dog...",
      notSet: "Not set",
      myPets: "My Pets",
      addPet: "Add Pet",
      noPetsYet: "No pet information added yet",
      addFirstPet: "Add First Pet",
      petName: "Pet Name",
      breed: "Breed",
      breedPlaceholder: "e.g., Golden Retriever",
      size: "Size",
      smallDog: "Small Dog (< 10kg)",
      mediumDog: "Medium Dog (10-25kg)",
      largeDog: "Large Dog (> 25kg)",
      age: "Age",
      specialNeeds: "Special Needs (Optional)",
      specialNeedsPlaceholder: "e.g., needs lots of exercise, good with children, easily excited, etc.",
      years: "years old",
      addPetTitle: "Add Pet Information",
      addPetDesc: "Fill in your pet's basic information to help us recommend more suitable parks for you",
      savedFilters: "Saved Filter Conditions",
      savedFiltersDesc: "Save your frequently used filter conditions for quick application next time",
      manageSavedFilters: "Manage Saved Filter Conditions",
      favoriteParks: "Favorite Parks",
      favoriteParksDesc: "Your list of favorite parks",
      viewFavorites: "View Favorites List",
      searchHistory: "Search History",
      searchHistoryDesc: "View your recent search records",
      viewHistory: "View Search History"
    },
    common: {
      close: "Close",
      back: "Back",
      next: "Next",
      previous: "Previous",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      add: "Add",
      delete: "Delete",
      edit: "Edit",
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm",
      yes: "Yes",
      no: "No"
    }
  },
  zh: {
    nav: {
      about: "关于",
      login: "登录",
      profile: "个人资料",
      myPets: "我的宠物",
      savedPreferences: "保存的偏好",
      logout: "退出登录"
    },
    home: {
      title: "找到最适合您和爱犬的遛狗地点",
      subtitle: "搜索附近的狗友好公园和设施，根据您的需求筛选最合适的遛狗场所",
      searchPlaceholder: "输入地址或地区名称...",
      searchButton: "搜索",
      filtersTitle: "筛选条件",
      filtersSubtitle: "点击选择您需要的设施和条件",
      activeFilters: "已选择的筛选条件",
      savedPreferencesTitle: "我的偏好设置",
      savedPreferencesDesc: "查看和管理您保存的筛选偏好",
      viewButton: "查看",
      statsParks: "狗友好公园",
      statsUsers: "活跃用户",
      statsSatisfaction: "用户满意度"
    },
    filters: {
      nightLighting: {
        label: "夜间照明",
        description: "适合晚上遛狗的有照明设施的公园"
      },
      leashRequired: {
        label: "牵绳要求",
        description: "选择是否需要牵绳或可以自由奔跑",
        noRequirement: "无要求",
        required: "必须牵绳",
        optional: "可不牵绳"
      },
      fencedArea: {
        label: "围栏区域",
        description: "有围栏的安全区域，狗狗可以安全玩耍"
      },
      wasteStations: {
        label: "垃圾处理",
        description: "提供狗狗便便袋和垃圾桶的设施"
      },
      waterFountain: {
        label: "饮水设施",
        description: "有专门为狗狗设计的饮水设施"
      },
      parking: {
        label: "停车设施",
        description: "有方便的停车位置"
      },
      requireThisFacility: "需要此设施",
      selected: "已选择"
    },
    map: {
      searchResults: "搜索结果",
      found: "找到",
      parks: "个公园",
      filter: "筛选",
      mapView: "地图视图",
      mockMapNote: "（模拟地图，实际应用中会使用真实地图API）",
      myLocation: "我的位置",
      navigateTo: "导航到此",
      save: "保存收藏"
    },
    parkDetails: {
      hours: "开放时间：",
      facilities: "设施特色",
      otherAmenities: "其他设施",
      rules: "使用规则",
      yes: "✓",
      no: "✗",
      required: "需要牵绳",
      optional: "可不牵绳",
      nightLighting: "夜间照明",
      leashRequirement: "牵绳要求",
      fencedArea: "围栏区域",
      wasteStations: "垃圾处理",
      waterFountain: "饮水设施",
      parking: "停车设施",
      navigateTo: "导航到此",
      saveToFavorites: "保存收藏"
    },
    about: {
      title: "关于遛狗地图",
      description: "了解遛狗地图的功能、使用方法和相关信息",
      tabs: {
        about: "关于我们",
        tutorial: "使用教程",
        data: "数据来源",
        disclaimer: "免责声明"
      },
      projectTitle: "项目介绍",
      projectDescription1: "遛狗地图是一个专门为狗主人设计的地图应用，帮助您找到最适合您和爱犬的遛狗场所。我们致力于为城市中的狗主人提供准确、实用的公园和设施信息。",
      projectDescription2: "通过详细的筛选功能，您可以根据狗狗的大小、个性需求和您的偏好，找到有夜间照明、围栏区域、饮水设施等各种设施的公园。",
      mainFeatures: "主要功能",
      smartSearch: "🔍 智能搜索",
      smartSearchDesc: "根据地址快速查找附近的狗友好场所",
      preciseFilters: "🎯 精准筛选",
      preciseFiltersDesc: "多种筛选条件，找到最符合需求的公园",
      realTimeNavigation: "📍 实时导航",
      realTimeNavigationDesc: "一键导航到选中的公园，支持多种地图应用",
      communityReviews: "⭐ 社区评价",
      communityReviewsDesc: "查看其他狗主人的评价和使用体验",
      contactUs: "联系我们",
      tutorialTitle: "使用教程",
      step1: "第一步：搜索地址",
      step1Desc: "在首页搜索框中输入您的地址或想要搜索的区域名称，点击搜索按钮。",
      step2: "第二步：设置筛选条件",
      step2Desc: "点击筛选条件卡片，设置您需要的设施要求：夜间照明适合晚上遛狗、牵绳要求、围栏区域安全玩耍、垃圾处理设施、狗狗饮水设施、停车设施。",
      step3: "第三步：查看地图结果",
      step3Desc: "进入地图页面后，您可以看到符合条件的公园标记。点击标记查看详细信息，包括设施介绍、使用规则、其他用户评价等。",
      step4: "第四步：导航前往",
      step4Desc: "选择心仪的公园后，点击\"导航到此\"按钮，系统会打开您手机的导航应用，为您规划最优路线。",
      tips: "💡 使用小贴士",
      dataTitle: "数据来源",
      dataAccuracy: "数据准确性说明",
      dataAccuracyNote: "虽然我们努力确保数据的准确性和及时性，但公园设施可能会发生变化。建议您在前往之前通过官方渠道确认最新信息，或查看最近的用户评价。",
      disclaimerTitle: "免责声明",
      serviceNature: "服务性质",
      serviceNatureDesc: "遛狗地图是一个信息服务平台，提供公园和设施信息仅供参考。我们不是公园的运营方，也不对公园的实际状况负责。",
      dataAccuracyTitle: "信息准确性",
      safetyResponsibility: "安全责任",
      privacyProtection: "隐私保护",
      serviceChanges: "服务变更",
      importantReminder: "⚠️ 重要提醒",
      importantReminderText: "使用本服务即表示您已阅读并同意上述免责声明。在遛狗过程中，请务必遵守当地法律法规，确保人身和宠物安全，做一个负责任的宠物主人。"
    },
    auth: {
      welcomeTitle: "欢迎使用遛狗地图",
      welcomeDesc: "登录或注册账户以使用完整功能",
      login: "登录",
      register: "注册",
      email: "邮箱",
      emailPlaceholder: "请输入邮箱",
      password: "密码",
      passwordPlaceholder: "请输入密码",
      name: "姓名",
      namePlaceholder: "请输入姓名",
      confirmPassword: "确认密码",
      confirmPasswordPlaceholder: "请再次输入密码",
      rememberMe: "记住我",
      forgotPassword: "忘记密码？",
      or: "或",
      wechatLogin: "微信登录",
      qqLogin: "QQ登录",
      agreeToTerms: "我已阅读并同意",
      termsOfService: "《服务条款》",
      privacyPolicy: "《隐私政策》",
      registerNote: "注册即表示您同意我们的服务条款和隐私政策",
      noLoginNote: "不登录也可以正常使用搜索功能"
    },
    profile: {
      title: "个人资料",
      description: "管理您的个人信息、宠物资料和偏好设置",
      tabs: {
        profile: "基本信息",
        dogs: "我的宠物",
        preferences: "偏好设置"
      },
      personalInfo: "个人信息",
      edit: "编辑",
      cancel: "取消",
      save: "保存",
      changeAvatar: "更换头像",
      name: "姓名",
      email: "邮箱",
      phone: "电话",
      phonePlaceholder: "请输入电话号码",
      location: "所在地区",
      locationPlaceholder: "请输入所在城市",
      bio: "个人简介",
      bioPlaceholder: "介绍一下您和您的狗狗...",
      notSet: "未设置",
      myPets: "我的宠物",
      addPet: "添加宠物",
      noPetsYet: "还没有添加宠物信息",
      addFirstPet: "添加第一只宠物",
      petName: "宠物姓名",
      breed: "品种",
      breedPlaceholder: "例如：金毛寻回犬",
      size: "体型",
      smallDog: "小型犬 (< 10kg)",
      mediumDog: "中型犬 (10-25kg)",
      largeDog: "大型犬 (> 25kg)",
      age: "年龄",
      specialNeeds: "特殊需求（可选）",
      specialNeedsPlaceholder: "例如：需要大量运动、对小孩友好、容易兴奋等",
      years: "岁",
      addPetTitle: "添加宠物信息",
      addPetDesc: "填写您宠物的基本信息，帮助我们为您推荐更合适的公园",
      savedFilters: "常用筛选条件",
      savedFiltersDesc: "保存您经常使用的筛选条件，下次搜索时快速应用",
      manageSavedFilters: "管理保存的筛选条件",
      favoriteParks: "收藏的公园",
      favoriteParksDesc: "您收藏的公园列表",
      viewFavorites: "查看收藏列表",
      searchHistory: "搜索历史",
      searchHistoryDesc: "查看最近的搜索记录",
      viewHistory: "查看搜索历史"
    },
    common: {
      close: "关闭",
      back: "返回",
      next: "下一步",
      previous: "上一步",
      loading: "加载中...",
      error: "错误",
      success: "成功",
      add: "添加",
      delete: "删除",
      edit: "编辑",
      save: "保存",
      cancel: "取消",
      confirm: "确认",
      yes: "是",
      no: "否"
    }
  },
  es: {
    nav: {
      about: "Acerca de",
      login: "Iniciar Sesión",
      profile: "Perfil",
      myPets: "Mis Mascotas",
      savedPreferences: "Preferencias Guardadas",
      logout: "Cerrar Sesión"
    },
    home: {
      title: "Encuentra los Lugares Perfectos para Pasear a tu Perro",
      subtitle: "Busca parques y instalaciones cercanas aptas para perros, filtra según tus necesidades para encontrar los lugares de paseo más adecuados",
      searchPlaceholder: "Ingresa dirección o nombre del área...",
      searchButton: "Buscar",
      filtersTitle: "Opciones de Filtro",
      filtersSubtitle: "Haz clic para seleccionar las instalaciones y condiciones que necesitas",
      activeFilters: "Opciones de Filtro Seleccionadas",
      savedPreferencesTitle: "Mis Configuraciones de Preferencias",
      savedPreferencesDesc: "Ver y gestionar tus preferencias de filtro guardadas",
      viewButton: "Ver",
      statsParks: "Parques Aptos para Perros",
      statsUsers: "Usuarios Activos",
      statsSatisfaction: "Satisfacción del Usuario"
    },
    filters: {
      nightLighting: {
        label: "Iluminación Nocturna",
        description: "Parques con instalaciones de iluminación adecuadas para paseos nocturnos"
      },
      leashRequired: {
        label: "Requisitos de Correa",
        description: "Elige si se requiere correa o si los perros pueden correr libremente",
        noRequirement: "Sin requisito",
        required: "Correa requerida",
        optional: "Correa opcional"
      },
      fencedArea: {
        label: "Área Cercada",
        description: "Áreas cerradas seguras donde los perros pueden jugar de forma segura"
      },
      wasteStations: {
        label: "Eliminación de Residuos",
        description: "Instalaciones que proporcionan bolsas para desechos caninos y contenedores"
      },
      waterFountain: {
        label: "Instalaciones de Agua",
        description: "Fuentes de agua diseñadas específicamente para perros"
      },
      parking: {
        label: "Instalaciones de Estacionamiento",
        description: "Ubicaciones de estacionamiento convenientes disponibles"
      },
      requireThisFacility: "Requiere esta instalación",
      selected: "Seleccionado"
    },
    map: {
      searchResults: "Resultados de Búsqueda",
      found: "Encontrado",
      parks: "parques",
      filter: "Filtrar",
      mapView: "Vista del Mapa",
      mockMapNote: "(Mapa simulado - la aplicación real usaría API de mapa actual)",
      myLocation: "Mi Ubicación",
      navigateTo: "Navegar A",
      save: "Guardar en Favoritos"
    },
    parkDetails: {
      hours: "Horarios:",
      facilities: "Características e Instalaciones",
      otherAmenities: "Otras Comodidades",
      rules: "Reglas y Pautas",
      yes: "✓",
      no: "✗",
      required: "Requerido",
      optional: "Opcional",
      nightLighting: "Iluminación Nocturna",
      leashRequirement: "Requisito de Correa",
      fencedArea: "Área Cercada",
      wasteStations: "Eliminación de Residuos",
      waterFountain: "Instalaciones de Agua",
      parking: "Estacionamiento",
      navigateTo: "Navegar A",
      saveToFavorites: "Guardar en Favoritos"
    },
    about: {
      title: "Acerca del Mapa de Paseo de Perros",
      description: "Aprende sobre las características, métodos de uso e información relacionada del Mapa de Paseo de Perros",
      tabs: {
        about: "Acerca de Nosotros",
        tutorial: "Tutorial",
        data: "Fuentes de Datos",
        disclaimer: "Descargo de Responsabilidad"
      },
      projectTitle: "Introducción del Proyecto",
      projectDescription1: "El Mapa de Paseo de Perros es una aplicación de mapas diseñada específicamente para dueños de perros, ayudándote a encontrar los lugares de paseo más adecuados para ti y tus queridas mascotas. Nos comprometemos a proporcionar información precisa y práctica sobre parques e instalaciones para dueños de perros urbanos.",
      projectDescription2: "A través de características de filtrado detalladas, puedes encontrar parques con varias instalaciones como iluminación nocturna, áreas cercadas, instalaciones de agua, etc., basándote en el tamaño de tu perro, necesidades de personalidad y tus preferencias.",
      mainFeatures: "Características Principales",
      smartSearch: "🔍 Búsqueda Inteligente",
      smartSearchDesc: "Encuentra rápidamente ubicaciones cercanas aptas para perros por dirección",
      preciseFilters: "🎯 Filtrado Preciso",
      preciseFiltersDesc: "Múltiples condiciones de filtro para encontrar parques que mejor satisfagan tus necesidades",
      realTimeNavigation: "📍 Navegación en Tiempo Real",
      realTimeNavigationDesc: "Navegación con un clic a parques seleccionados, compatible con múltiples aplicaciones de mapas",
      communityReviews: "⭐ Reseñas de la Comunidad",
      communityReviewsDesc: "Ver reseñas y experiencias de otros dueños de perros",
      contactUs: "Contáctanos",
      tutorialTitle: "Tutorial de Usuario",
      step1: "Paso 1: Buscar Dirección",
      step1Desc: "Ingresa tu dirección o el nombre del área que quieres buscar en el cuadro de búsqueda de la página principal, luego haz clic en el botón de búsqueda.",
      step2: "Paso 2: Establecer Condiciones de Filtro",
      step2Desc: "Haz clic en las tarjetas de condiciones de filtro para establecer tus requisitos de instalaciones: iluminación nocturna para paseos nocturnos, requisitos de correa, áreas cercadas para juego seguro, instalaciones de eliminación de desechos, fuentes de agua para perros e instalaciones de estacionamiento.",
      step3: "Paso 3: Ver Resultados del Mapa",
      step3Desc: "Después de ingresar a la página del mapa, puedes ver marcadores de parques que cumplen con tus criterios. Haz clic en los marcadores para ver información detallada incluyendo introducciones de instalaciones, reglas de uso y reseñas de otros usuarios.",
      step4: "Paso 4: Navegar Allí",
      step4Desc: "Después de seleccionar tu parque deseado, haz clic en el botón 'Navegar A'. El sistema abrirá la aplicación de navegación de tu teléfono y planificará la ruta óptima para ti.",
      tips: "💡 Consejos de Uso",
      dataTitle: "Fuentes de Datos",
      dataAccuracy: "Aviso de Precisión de Datos",
      dataAccuracyNote: "Aunque nos esforzamos por garantizar la precisión y oportunidad de los datos, las instalaciones del parque pueden cambiar. Recomendamos verificar la información más reciente a través de canales oficiales antes de visitar, o revisar reseñas recientes de usuarios.",
      disclaimerTitle: "Descargo de Responsabilidad",
      serviceNature: "Naturaleza del Servicio",
      serviceNatureDesc: "El Mapa de Paseo de Perros es una plataforma de servicio de información. La información de parques e instalaciones proporcionada es solo para referencia. No somos los operadores de los parques y no somos responsables de las condiciones reales de los parques.",
      dataAccuracyTitle: "Precisión de la Información",
      safetyResponsibility: "Responsabilidad de Seguridad",
      privacyProtection: "Protección de Privacidad",
      serviceChanges: "Cambios en el Servicio",
      importantReminder: "⚠️ Recordatorio Importante",
      importantReminderText: "Al usar este servicio, reconoces que has leído y aceptas el descargo de responsabilidad anterior. Al pasear a tu perro, asegúrate de cumplir con las leyes y regulaciones locales, garantizar la seguridad de personas y mascotas, y ser un dueño de mascota responsable."
    },
    auth: {
      welcomeTitle: "Bienvenido al Mapa de Paseo de Perros",
      welcomeDesc: "Inicia sesión o registra una cuenta para usar todas las características",
      login: "Iniciar Sesión",
      register: "Registrarse",
      email: "Correo Electrónico",
      emailPlaceholder: "Ingresa tu correo electrónico",
      password: "Contraseña",
      passwordPlaceholder: "Ingresa tu contraseña",
      name: "Nombre",
      namePlaceholder: "Ingresa tu nombre",
      confirmPassword: "Confirmar Contraseña",
      confirmPasswordPlaceholder: "Ingresa tu contraseña nuevamente",
      rememberMe: "Recordarme",
      forgotPassword: "¿Olvidaste tu contraseña?",
      or: "o",
      wechatLogin: "Inicio de Sesión WeChat",
      qqLogin: "Inicio de Sesión QQ",
      agreeToTerms: "He leído y acepto los",
      termsOfService: "Términos de Servicio",
      privacyPolicy: "Política de Privacidad",
      registerNote: "El registro indica tu acuerdo con nuestros Términos de Servicio y Política de Privacidad",
      noLoginNote: "También puedes usar las características de búsqueda sin iniciar sesión"
    },
    profile: {
      title: "Perfil",
      description: "Gestiona tu información personal, perfiles de mascotas y configuraciones de preferencias",
      tabs: {
        profile: "Información Básica",
        dogs: "Mis Mascotas",
        preferences: "Preferencias"
      },
      personalInfo: "Información Personal",
      edit: "Editar",
      cancel: "Cancelar",
      save: "Guardar",
      changeAvatar: "Cambiar Avatar",
      name: "Nombre",
      email: "Correo Electrónico",
      phone: "Teléfono",
      phonePlaceholder: "Ingresa número de teléfono",
      location: "Ubicación",
      locationPlaceholder: "Ingresa tu ciudad",
      bio: "Biografía",
      bioPlaceholder: "Cuéntanos sobre ti y tu perro...",
      notSet: "No establecido",
      myPets: "Mis Mascotas",
      addPet: "Agregar Mascota",
      noPetsYet: "Aún no se ha agregado información de mascotas",
      addFirstPet: "Agregar Primera Mascota",
      petName: "Nombre de la Mascota",
      breed: "Raza",
      breedPlaceholder: "ej., Golden Retriever",
      size: "Tamaño",
      smallDog: "Perro Pequeño (< 10kg)",
      mediumDog: "Perro Mediano (10-25kg)",
      largeDog: "Perro Grande (> 25kg)",
      age: "Edad",
      specialNeeds: "Necesidades Especiales (Opcional)",
      specialNeedsPlaceholder: "ej., necesita mucho ejercicio, bueno con niños, se emociona fácilmente, etc.",
      years: "años",
      addPetTitle: "Agregar Información de Mascota",
      addPetDesc: "Completa la información básica de tu mascota para ayudarnos a recomendarte parques más adecuados",
      savedFilters: "Condiciones de Filtro Guardadas",
      savedFiltersDesc: "Guarda tus condiciones de filtro usadas frecuentemente para aplicación rápida la próxima vez",
      manageSavedFilters: "Gestionar Condiciones de Filtro Guardadas",
      favoriteParks: "Parques Favoritos",
      favoriteParksDesc: "Tu lista de parques favoritos",
      viewFavorites: "Ver Lista de Favoritos",
      searchHistory: "Historial de Búsqueda",
      searchHistoryDesc: "Ver tus registros de búsqueda recientes",
      viewHistory: "Ver Historial de Búsqueda"
    },
    common: {
      close: "Cerrar",
      back: "Atrás",
      next: "Siguiente",
      previous: "Anterior",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      add: "Agregar",
      delete: "Eliminar",
      edit: "Editar",
      save: "Guardar",
      cancel: "Cancelar",
      confirm: "Confirmar",
      yes: "Sí",
      no: "No"
    }
  }
};

export function useTranslation(language: Language) {
  return translations[language];
}