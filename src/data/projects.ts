export type Project = {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  techStack: string[];
  services?: string[];
  year: number;
};

export const projects = [
  {
    id: '1',
    name: 'Ciklusharmónia',
    description:
      'Egy teljes weboldalt készítettem egy menstruációs ciklussal foglalkozó mentor számára (FEMM/BOM), egyedi dizájnnal és könnyen kezelhető blogfelülettel, Sanity alapú tartalomkezeléssel. Fontos szempont volt a költséghatékonyság, ezért olyan eszközöket választottam, mint a MailerLite, Resend, egy alacsony költségű időpontfoglaló rendszer, valamint Make-alapú automatizmusok, amelyek leegyszerűsítik a napi munkát.',
    imageSrc: '/CiklusSquareMain.webp',
    techStack: [
      'NextJs',
      'MailerLite',
      'Sanity CMS',
      'Make',
      'Booked4Us',
      'Resend',
    ],
    services: [
      'Webdizájn',
      'Többoldalas weboldal',
      'CMS rendszer',
      'Hírlevél integráció',
      'Foglalási rendszer',
      'Automatizáció',
      'Kapcsolatfelvételi űrlap',
      'SEO optimalizáció',
    ],
    alt: '',
    year: 2025,
  },
  {
    id: '2',
    name: 'Energiagazdálkodási Admin Dashboard',
    description:
      'Modern, reszponzív admin felületet fejlesztettem asztali használatra, amely gáz- és villamosenergia-fogyasztási adatokat jelenít meg és kezel. A projekt egy egyedi, felhasználóbarát UI-ra épül, interaktív táblázatokkal (szűrés, rendezés, részletek), Leaflet-alapú térképes nézettel, valamint Recharts segítségével készült halmozott oszlopdiagramokkal. Tartalmaz CRUD funkciókat, JavaScript-alapú számításokat, világos/sötét módot, többnyelvűséget (EN/HU) és unit teszteket.',
    imageSrc: '/TisSquareMain.webp',
    techStack: ['NextJs', 'Typescript', 'SCSS'],
    services: [
      'Webdizájn',
      'Admin dashboard',
      'Tartalomkezelés',
      'Unit tesztek',
      'i18n internalizáció',
      'Light/Dark mód',
    ],
    alt: '',
    year: 2025,
  },
  {
    id: '3',
    name: 'Beeco Admin Alkalmazás',
    description:
      'A cég teljes admin alkalmazását újraépítettem Angularról Reactre TypeScript használatával. Szorosan együttműködtem a backend fejlesztővel, új funkciókat vezettem be, javítottam a meglévőket és hibákat javítottam, jelentősen modernizálva a rendszert. React Query-t használtam a nagy adathalmazok hatékony kezelésére, valamint React Hook Formot az űrlap-alapú interakciók gyorsítására.',
    imageSrc: '/BeecoMainSquare.webp',
    techStack: ['TypeScript', 'React', 'SCSS', 'Fixed-width'],
    alt: '',
    services: [
      'Webdizájn',
      'Admin dashboard',
      'Tartalomkezelés',
      'Unit tesztek',
      'i18n internalizáció',
      'Light/Dark mód',
    ],
    year: 2025,
  },
  {
    id: '4',
    name: 'Beeco Partner Alkalmazás',
    description:
      'A vállalat partneralkalmazásának fejlesztésében vettem részt új funkciók implementálásával, meglévő elemek fejlesztésével és hibák javításával, ezzel növelve a rendszer stabilitását és a felhasználói élményt.',
    imageSrc: '/portfolioMainSquare.webp',
    techStack: ['React', 'Tailwind', 'Responsive'],
    alt: '',
    year: 2024,
  },

  {
    id: '5',
    name: 'DevJobs',
    description:
      'Egy haladó frontend kihívást választottam a Frontend Mentor oldalról, amely során egy álláskereső alkalmazást építettem React, TypeScript és React Router használatával. Az alkalmazás helyi JSON fájlból dolgozik, és lehetőséget ad szűrésre pozíció, helyszín és teljes munkaidős állások alapján. Jesttel írt teszteket készítettem, TypeScriptet használtam a típusbiztonság érdekében, valamint a felhasználó preferált színsémájához igazodó témát alakítottam ki.',
    imageSrc: '/DevjobsMainSquare.webp',
    techStack: ['TypeScript', 'React', 'SCSS', 'Responsive'],
    alt: '',
    year: 2024,
  },
];
