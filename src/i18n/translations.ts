// Languages supported:
// en  – English         (Nigeria)
// yo  – Yoruba          (Nigeria)
// ha  – Hausa           (Nigeria)
// ig  – Igbo            (Nigeria)
// fr  – French          (Togo & Benin Republic)
// ew  – Ewe             (Togo)
// fon – Fon             (Benin Republic)

export type LangCode = "en" | "yo" | "ha" | "ig" | "fr" | "ew" | "fon";

export interface Country {
  name: string;
  flag: string;
  languages: { code: LangCode; label: string; nativeLabel: string }[];
}

export const countries: Country[] = [
  {
    name: "Nigeria",
    flag: "🇳🇬",
    languages: [
      { code: "en", label: "English", nativeLabel: "English" },
      { code: "yo", label: "Yoruba", nativeLabel: "Yorùbá" },
      { code: "ha", label: "Hausa", nativeLabel: "Hausa" },
      { code: "ig", label: "Igbo", nativeLabel: "Igbo" },
    ],
  },
  {
    name: "Togo",
    flag: "🇹🇬",
    languages: [
      { code: "fr", label: "French", nativeLabel: "Français" },
      { code: "ew", label: "Ewe", nativeLabel: "Eʋegbe" },
    ],
  },
  {
    name: "Benin Republic",
    flag: "🇧🇯",
    languages: [
      { code: "fr", label: "French", nativeLabel: "Français" },
      { code: "fon", label: "Fon", nativeLabel: "Fon gbe" },
    ],
  },
];

export type Translations = {
  // Navbar
  nav_ride: string;
  nav_drive: string;
  nav_earn: string;
  nav_company: string;
  nav_join_waitlist: string;
  nav_language: string;

  // Nav tab headings
  tab_ride_heading: string;
  tab_ride_desc: string;
  tab_ride_link1: string;
  tab_ride_link2: string;
  tab_ride_link3: string;

  tab_drive_heading: string;
  tab_drive_desc: string;
  tab_drive_link1: string;
  tab_drive_link2: string;
  tab_drive_link3: string;

  tab_earn_heading: string;
  tab_earn_desc: string;
  tab_earn_link1: string;
  tab_earn_link2: string;
  tab_earn_link3: string;

  tab_company_heading: string;
  tab_company_desc: string;
  tab_company_link1: string;
  tab_company_link2: string;
  tab_company_link3: string;
  tab_company_link4: string;

  app_available: string;
  app_register_text: string;
  app_store: string;
  download_on: string;
  get_it_on: string;
  google_play: string;

  // Hero
  hero_launching: string;
  hero_headline_1: string;
  hero_headline_2: string;
  hero_headline_accent: string;
  hero_subtext: string;
  hero_drive_btn: string;
  hero_ride_btn: string;

  // Services
  services_heading_1: string;
  services_heading_accent: string;
  services_heading_2: string;
  services_book_btn: string;
  service_section_desc: string;
  service_rides_title: string;
  service_rides_desc: string;
  service_delivery_title: string;
  service_delivery_desc: string;
  service_carsharing_title: string;
  service_carsharing_desc: string;
  service_carrent_title: string;
  service_carrent_desc: string;
  service_business_title: string;
  service_business_desc: string;

  // Download section
  download_heading: string;
  download_subtext: string;

  // Footer
  footer_coming_soon: string;
  footer_cta_heading_1: string;
  footer_cta_heading_2: string;
  footer_cta_sub: string;
  footer_join_waitlist: string;
  footer_tagline: string;
  footer_rights: string;
  footer_terms: string;
  footer_privacy: string;
  footer_cookies: string;

  // About Us
  about_heading_small: string;
  about_heading_1: string;
  about_heading_2: string;
  about_desc: string;
  about_btn: string;

  // How It Works
  how_small: string;
  how_heading_1: string;
  how_heading_2: string;
  how_desc: string;
  how_step1_title: string;
  how_step1_desc: string;
  how_step2_title: string;
  how_step2_desc: string;
  how_step3_title: string;
  how_step3_desc: string;

  // Earn With Keyen
  earn_heading_1: string;
  earn_heading_2: string;
  earn_driver_sub: string;
  earn_driver_title: string;
  earn_driver_desc: string;
  earn_driver_btn: string;
  earn_courier_sub: string;
  earn_courier_title: string;
  earn_courier_desc: string;
  earn_courier_btn: string;

  // Waitlist Form
  waitlist_title: string;
  waitlist_desc: string;
  waitlist_rider: string;
  waitlist_driver: string;
  waitlist_name: string;
  waitlist_phone: string;
  waitlist_email: string;
  waitlist_city: string;
  waitlist_btn_join: string;
  waitlist_btn_joining: string;
  waitlist_success_title: string;
  waitlist_success_done: string;
};

export const translations: Record<LangCode, Translations> = {
  // ─── ENGLISH ───────────────────────────────────────────────────────────────
  en: {
    nav_ride: "Ride",
    nav_drive: "Drive",
    nav_earn: "Earn",
    nav_company: "Company",
    nav_join_waitlist: "Join the Waitlist",
    nav_language: "EN",
    tab_ride_heading: "Get a ride in minutes",
    tab_ride_desc:
      "Available on web and mobile. Register to use Keyen on web or click the links below to download the Keyen mobile application.",
    tab_ride_link1: "Request a ride",
    tab_ride_link2: "Price estimator",
    tab_ride_link3: "Ride options",
    tab_drive_heading: "Drive and earn on your terms",
    tab_drive_desc:
      "Join our community of drivers. Work on your own schedule, be your own boss, and get paid fast with Keyen.",
    tab_drive_link1: "Sign up to drive",
    tab_drive_link2: "Driver requirements",
    tab_drive_link3: "Vehicle requirements",
    tab_earn_heading: "Multiple ways to earn",
    tab_earn_desc:
      "Whether you're driving passengers, delivering packages, or managing a fleet, Keyen offers flexible earning opportunities.",
    tab_earn_link1: "Delivery driver",
    tab_earn_link2: "Fleet management",
    tab_earn_link3: "Keyen for Business",
    tab_company_heading: "Moving the world forward",
    tab_company_desc:
      "We are building the future of mobility in Africa. Learn more about our mission, our team, and our commitment to safety.",
    tab_company_link1: "About us",
    tab_company_link2: "Careers",
    tab_company_link3: "Blog",
    tab_company_link4: "Safety",
    app_available: "Available on web and mobile",
    app_register_text:
      "Register to use Keyen on web or click the links below to download the Keyen mobile application.",
    app_store: "App Store",
    download_on: "Download on the",
    get_it_on: "Get it on",
    google_play: "Google Play",
    hero_launching: "Launching soon",
    hero_headline_1: "Know Who You're",
    hero_headline_2: "Riding",
    hero_headline_accent: "With.",
    hero_subtext:
      "Keyen connects riders and drivers through a mobility platform built around verification, transparent fares, reliable service and real human support. Because getting from one place to another should feel simple, predictable and secure.",
    hero_drive_btn: "Join the waitlist",
    hero_ride_btn: "Earn with Keyen",
    services_heading_1: " WHY CHOOSE",
    services_heading_accent: " KEYEN?",
    services_heading_2: " ",
    services_book_btn: "Book a Ride",
    service_section_desc:
      "From daily commutes to business logistics, Keyen provides reliable mobility solutions tailored to every need.",
    service_rides_title: "Rides",
    service_rides_desc:
      "Request in seconds, ride in minutes. Safe, verified trips whenever you need them.",
    service_delivery_title: "Delivery",
    service_delivery_desc:
      "Your favourite food and packages, delivered fast to your doorstep.",
    service_carsharing_title: "Car Sharing",
    service_carsharing_desc:
      "Share rides, split costs. A smarter way to travel together.",
    service_carrent_title: "Car Rental",
    service_carrent_desc:
      "Rent a car for hours or days. Flexible, affordable, and hassle-free.",
    service_business_title: "Business",
    service_business_desc:
      "Corporate mobility solutions for teams, fleets, and enterprise logistics.",
    download_heading: "Download the free Keyen app",
    download_subtext: "For faster, easier booking and exclusive deals.",
    footer_coming_soon: "Coming Soon",
    footer_cta_heading_1: "Be the First to",
    footer_cta_heading_2: "Ride with Keyen",
    footer_cta_sub:
      "Join thousands already on the waitlist. We're launching soon — don't miss your spot.",
    footer_join_waitlist: "Join the Waitlist",
    footer_tagline:
      "Technology-powered mobility and logistics built to simplify the way people, businesses, and communities move.",
    footer_rights: "Keyen Technologies Ltd. All rights reserved.",
    footer_terms: "Terms",
    footer_privacy: "Privacy",
    footer_cookies: "Cookies",
    about_heading_small: "About Keyen",
    about_heading_1: "We're building mobility ",
    about_heading_2: " people can trust.",
    about_desc:
      "Keyen is a technology and mobility company creating a better way for people to move around their cities. We connect riders and drivers through a platform designed around something simple: you should know who you’re riding with, and everyone involved should be accountable for the experience. From verified users and transparent payments to reliable support and thoughtful driver solutions, we’re building the infrastructure for mobility that feels more human, more predictable and more trustworthy.",
    about_btn: "Discover Our Journey",
    how_small: "Seamless Mobility",
    how_heading_1: "How It",
    how_heading_2: "Works",
    how_desc: "Your journey starts in three simple steps.",
    how_step1_title: "Request",
    how_step1_desc:
      "Tell us where you're headed and see your fare upfront — no surprises later.",
    how_step2_title: "Connect",
    how_step2_desc:
      "Get matched with a verified driver and see the information you need to know before you get in.",
    how_step3_title: "Move",
    how_step3_desc:
      "Ride safely to your destination, tracked from start to finish.",
    earn_heading_1: "Earn money with",
    earn_heading_2: "Keyen",
    earn_driver_sub: "FOR DRIVERS",
    earn_driver_title: "Earn money as a Keyen driver",
    earn_driver_desc:
      "Drive and earn money. Join the Keyen platform to connect with passengers and turn your free time into earnings with complete flexibility.",
    earn_driver_btn: "Register to drive",
    earn_courier_sub: "FOR COURIERS",
    earn_courier_title: "Become a Keyen courier partner",
    earn_courier_desc:
      "Earn with every delivery. Join our network of couriers and start earning by delivering packages and food around your city with full flexibility.",
    earn_courier_btn: "Register as a courier",
    waitlist_title: "Join the Waitlist",
    waitlist_desc:
      "Be among the first to experience Keyen when we launch in your city.",
    waitlist_rider: "I'm a Rider",
    waitlist_driver: "I'm a Driver",
    waitlist_name: "Full Name",
    waitlist_phone: "Phone Number",
    waitlist_email: "Email Address",
    waitlist_city: "Your City",
    waitlist_btn_join: "Join Waitlist",
    waitlist_btn_joining: "Joining...",
    waitlist_success_title: "You're on the list!",
    waitlist_success_done: "Done",
  },

  // ─── YORUBA ────────────────────────────────────────────────────────────────
  yo: {
    nav_ride: "Gigun",
    nav_drive: "Wakọ",
    nav_earn: "Jèrè",
    nav_company: "Ile-iṣẹ",
    nav_join_waitlist: "Darapọ mọ Atokọ Idaduro",
    nav_language: "YO",
    tab_ride_heading: "Gba gigun ni iṣẹju diẹ",
    tab_ride_desc:
      "Wa lori ayelujara ati foonu. Forukọsilẹ lati lo Keyen lori ayelujara tabi tẹ awọn ọna asopọ isalẹ lati ṣe igbasilẹ eto alagbeka Keyen.",
    tab_ride_link1: "Beere fun gigun",
    tab_ride_link2: "Iṣiro idiyele",
    tab_ride_link3: "Awọn aṣayan gigun",
    tab_drive_heading: "Wakọ ki o jèrè lori awọn ofin rẹ",
    tab_drive_desc:
      "Darapọ mọ awujọ awọn awakọ wa. Ṣiṣẹ lori iṣeto tirẹ, jẹ olori tirẹ, ki o gba isanwo ni kiakia pẹlu Keyen.",
    tab_drive_link1: "Forukọsilẹ lati wakọ",
    tab_drive_link2: "Awọn ibeere awakọ",
    tab_drive_link3: "Awọn ibeere ọkọ",
    tab_earn_heading: "Ọpọlọpọ awọn ọna lati jèrè",
    tab_earn_desc:
      "Boya o n wakọ awọn arinrin-ajo, n jiṣẹ awọn ẹru, tabi n ṣakoso ọkọ, Keyen n pese awọn aye jèrè irọrun.",
    tab_earn_link1: "Awakọ jiṣẹ",
    tab_earn_link2: "Iṣakoso ọkọ",
    tab_earn_link3: "Keyen fun Iṣowo",
    tab_company_heading: "Gbigbe agbaye siwaju",
    tab_company_desc:
      "A n kọ ọjọ iwaju ti gbigbe ni Afirika. Kọ siwaju sii nipa iṣẹ apinfunni wa, ẹgbẹ wa, ati ifaramo wa si ailewu.",
    tab_company_link1: "Nipa wa",
    tab_company_link2: "Awọn iṣẹ",
    tab_company_link3: "Bulọọgi",
    tab_company_link4: "Ailewu",
    app_available: "Wa lori ayelujara ati alagbeka",
    app_register_text:
      "Forukọsilẹ lati lo Keyen lori ayelujara tabi tẹ awọn ọna asopọ isalẹ lati ṣe igbasilẹ eto alagbeka Keyen.",
    app_store: "App Store",
    download_on: "Ṣe igbasilẹ lori",
    get_it_on: "Gba lori",
    google_play: "Google Play",
    hero_launching: "N ṣe ifilọlẹ ni Eko",
    hero_headline_1: "Mọ Ẹni Ti O Nrin",
    hero_headline_2: "Pẹlu",
    hero_headline_accent: "Rẹ.",
    hero_subtext:
      "Gbogbo awakọ Keyen ni a ṣayẹwo idanimọ, ni iwe-aṣẹ, ati ni olufowosi. Gbogbo arinrin-ajo tun ti ni iyẹwo. Kii ṣe ikede — ilana ti o le beere wa nipa rẹ.",
    hero_drive_btn: "Wakọ Pẹlu Keyen",
    hero_ride_btn: "Gun Pẹlu Keyen",
    services_heading_1: "Kilode ti o fi yan wa?",
    services_heading_accent: "Àfojúsùn",
    services_heading_2: "iṣẹ ni Ilu.",
    services_book_btn: "Ṣe Ifiṣẹ Gigun",
    service_section_desc:
      "Lati irin-ajo ojoojumọ si iṣẹ-ṣiṣe iṣowo, Keyen pese ojutu gbigbe ti o gbẹkẹle ti o bamu si gbogbo iwulo.",
    service_rides_title: "Gigun",
    service_rides_desc:
      "Beere ni iṣẹju-aaya, gun ni iṣẹju. Irin-ajo ailewu, ti a fọwọsi nigbakugba ti o nilo wọn.",
    service_delivery_title: "Ifijiṣẹ",
    service_delivery_desc:
      "Ounjẹ ati awọn ẹru ayanfẹ rẹ, ti a firanṣẹ ni iyara si ẹnu-ọna rẹ.",
    service_carsharing_title: "Pinpin Ọkọ",
    service_carsharing_desc:
      "Pin gigun, pin owo. Ọna ti o gbọn julọ lati rin-ajo papọ.",
    service_carrent_title: "Yiya Ọkọ",
    service_carrent_desc:
      "Ya ọkọ fun awọn wakati tabi awọn ọjọ. Irọrun, ifarada, ati laisi wahala.",
    service_business_title: "Iṣowo",
    service_business_desc:
      "Ojutu gbigbe ile-iṣẹ fun awọn ẹgbẹ, awọn ọkọ, ati iṣẹ-ṣiṣe ile-iṣẹ.",
    download_heading: "Ṣe igbasilẹ eto Keyen ọfẹ",
    download_subtext: "Fun ifiṣẹ ti o yara, irọrun ati awọn adehun iyasoto.",
    footer_coming_soon: "Nbọ Laipẹ",
    footer_cta_heading_1: "Jẹ Akọkọ Lati",
    footer_cta_heading_2: "Gun Pẹlu Keyen",
    footer_cta_sub:
      "Darapọ mọ ẹgbẹẹgbẹrun tẹlẹ lori atokọ idaduro. A n ṣe ifilọlẹ laipẹ — maṣe padanu aaye rẹ.",
    footer_join_waitlist: "Darapọ mọ Atokọ Idaduro",
    footer_tagline:
      "Gbigbe ati iṣipaya ti o ni agbara imọ-ẹrọ ti a kọ lati rọrun ọna ti awọn eniyan, awọn iṣowo, ati awọn agbegbe n gbe.",
    footer_rights: "Keyen Technologies Ltd. Gbogbo awọn ẹtọ wa ni aabo.",
    footer_terms: "Awọn Ofin",
    footer_privacy: "Asiri",
    footer_cookies: "Kuki",
    about_heading_small: "Nipa Keyen",
    about_heading_1: "Gbigbe Agbaye,",
    about_heading_2: "Lọna ti o gbọn",
    about_desc:
      "Keyen jẹ pẹpẹ gbigbe ati awọn eekaderi ti o ni agbara nipasẹ imọ-ẹrọ lati ṣe irọrun ọna ti eniyan, iṣowo ati agbegbe n gbe. A dapọ isọdọtun, igbẹkẹle, ati irọrun lati ṣẹda iriri gbigbe ti ko lẹgbẹ.",
    about_btn: "Ṣawari Irin-ajo Wa",
    how_small: "Gbigbe Laisi Wahala",
    how_heading_1: "Bii o ṣe",
    how_heading_2: "Nṣiṣẹ",
    how_desc:
      "Ni iriri awọn gigun ti ko ni wahala ti a fọwọsi pẹlu Keyen ni awọn igbesẹ mẹta rọrun.",
    how_step1_title: "Beere",
    how_step1_desc: "Yan iṣẹ rẹ ki o tẹ ibi ti o nlo ni awọn iṣẹju-aaya.",
    how_step2_title: "Sopọ",
    how_step2_desc: "Keyen ba ọ mu pẹlu alabaṣiṣẹ to tọ ni agbegbe rẹ.",
    how_step3_title: "Gbe",
    how_step3_desc: "Tẹle irin-ajo rẹ laaye ki o gbadun iriri alailẹgbẹ.",
    earn_heading_1: "Gba owo pẹlu",
    earn_heading_2: "Keyen",
    earn_driver_sub: "FUN AWỌN AWAKỌ",
    earn_driver_title: "Gba owo bi awakọ Keyen",
    earn_driver_desc:
      "Wakọ ki o gba owo. Darapọ mọ Keyen lati sopọ pẹlu awọn ero ki o sọ akoko ọfẹ rẹ di owo pẹlu irọrun.",
    earn_driver_btn: "Forukọsilẹ lati wakọ",
    earn_courier_sub: "FUN AWỌN ONIJIṢẸ",
    earn_courier_title: "Di alabaṣiṣẹ iṣẹ Keyen",
    earn_courier_desc:
      "Gba owo pẹlu ifijiṣẹ kọọkan. Darapọ mọ ẹgbẹ wa ki o bẹrẹ si ni gba owo nipa fifi nkan ranṣẹ ati ounjẹ kaakiri ilu rẹ.",
    earn_courier_btn: "Forukọsilẹ bi onijiṣẹ",
    waitlist_title: "Darapọ mọ Atokọ Idaduro",
    waitlist_desc:
      "Jẹ ki o wa lara awọn akọkọ ti yoo lo Keyen nigbati a ba bẹrẹ ni ilu rẹ.",
    waitlist_rider: "Mo jẹ Ero",
    waitlist_driver: "Mo jẹ Awakọ",
    waitlist_name: "Orukọ Kikun",
    waitlist_phone: "Nọmba Foonu",
    waitlist_email: "Imeeli",
    waitlist_city: "Ilu rẹ",
    waitlist_btn_join: "Darapọ mọ Atokọ",
    waitlist_btn_joining: "Ndarapọ...",
    waitlist_success_title: "O wa ninu atokọ!",
    waitlist_success_done: "Ti ṣetan",
  },

  // ─── HAUSA ─────────────────────────────────────────────────────────────────
  ha: {
    nav_ride: "Hawa",
    nav_drive: "Tuki",
    nav_earn: "Samu",
    nav_company: "Kamfani",
    nav_join_waitlist: "Shiga Jerin Jiran",
    nav_language: "HA",
    tab_ride_heading: "Sami hawa cikin minti kaɗan",
    tab_ride_desc:
      "Akwai akan yanar gizo da wayar hannu. Yi rajista don amfani da Keyen akan yanar gizo ko danna hanyoyin haɗi ƙasa don sauke aikace-aikacen wayar Keyen.",
    tab_ride_link1: "Nemi hawa",
    tab_ride_link2: "Ƙididdiga farashin",
    tab_ride_link3: "Zaɓuɓɓukan hawa",
    tab_drive_heading: "Tuki ka samu bisa sharuɗɗanka",
    tab_drive_desc:
      "Shiga al'ummarmu ta direbobi. Yi aiki bisa jadawalin ka, zama shugabanka, kuma sami biyan kuɗi da sauri tare da Keyen.",
    tab_drive_link1: "Yi rajista don tuki",
    tab_drive_link2: "Buƙatun direba",
    tab_drive_link3: "Buƙatun abin hawa",
    tab_earn_heading: "Hanyoyi da yawa don samu",
    tab_earn_desc:
      "Ko kai direba ne na fasinja, kai kaya, ko kula da motoci, Keyen yana ba da damar samu mai sassauci.",
    tab_earn_link1: "Direba na isar da kaya",
    tab_earn_link2: "Gudanarwa ta motoci",
    tab_earn_link3: "Keyen don Kasuwanci",
    tab_company_heading: "Matsar da duniya gaba",
    tab_company_desc:
      "Muna gina makomar motsi a Afirka. Koyi ƙari game da manufarmu, ƙungiyarmu, da kuma alhinin mu ga aminci.",
    tab_company_link1: "Game da mu",
    tab_company_link2: "Ayyuka",
    tab_company_link3: "Blog",
    tab_company_link4: "Aminci",
    app_available: "Akwai akan yanar gizo da wayar hannu",
    app_register_text:
      "Yi rajista don amfani da Keyen akan yanar gizo ko danna hanyoyin haɗi ƙasa don sauke aikace-aikacen wayar Keyen.",
    app_store: "App Store",
    download_on: "Sauke daga",
    get_it_on: "Samu daga",
    google_play: "Google Play",
    hero_launching: "Ana ƙaddamarwa a Legas",
    hero_headline_1: "San Wanda Kake",
    hero_headline_2: "Tafiya",
    hero_headline_accent: "Tare Da.",
    hero_subtext:
      "Kowane direba na Keyen an duba asalinsa, yana da lasisin, kuma yana da mai ba da tabbacin. Kowane fasinja ma an tabbatar da shi. Ba taken yabo ba — tsari da za ka iya tambayar mu akai.",
    hero_drive_btn: "Tuki Tare da Keyen",
    hero_ride_btn: "Hawa Tare da Keyen",
    services_heading_1: "Me ya sa zaka zaɓe mu?",
    services_heading_accent: "Mafi kyau",
    services_heading_2: "sabis a Birnin.",
    services_book_btn: "Yi Ƙaddamarwar Hawa",
    service_section_desc:
      "Daga tafiye-tafiyen yau da kullum zuwa harkokin kasuwanci, Keyen yana ba da ingantattun hanyoyin motsi don kowane buƙata.",
    service_rides_title: "Hawa",
    service_rides_desc:
      "Nemi a cikin sakanni, hawa a cikin mintuna. Tafiye-tafiye masu aminci, tabbatattu a kowane lokaci.",
    service_delivery_title: "Isar da Kaya",
    service_delivery_desc:
      "Abincin da kuke so da kaya, an isar da su cikin sauri zuwa ƙofar gidanku.",
    service_carsharing_title: "Raba Mota",
    service_carsharing_desc:
      "Raba hawa, raba kuɗi. Hanya mafi hikima ta tafiya tare.",
    service_carrent_title: "Hayar Mota",
    service_carrent_desc:
      "Haya mota na sa'o'i ko kwanaki. Mai sassauci, mai araha, kuma maras wahala.",
    service_business_title: "Kasuwanci",
    service_business_desc:
      "Hanyoyin motsi na kamfani don ƙungiyoyi, motoci, da harkokin kasuwanci.",
    download_heading: "Sauke aikace-aikacen Keyen kyauta",
    download_subtext:
      "Don ƙaddamarwa mai sauri, sauƙi da yarjeniyoyi na musamman.",
    footer_coming_soon: "Yana Zuwa Nan Ba Da Daɗewa Ba",
    footer_cta_heading_1: "Zama Na Farko Wanda Zai",
    footer_cta_heading_2: "Hawa Tare da Keyen",
    footer_cta_sub:
      "Shiga dubban da ke kan jerin jiran. Muna ƙaddamarwa nan ba da daɗewa ba — kar ka rasa wurinka.",
    footer_join_waitlist: "Shiga Jerin Jiran",
    footer_tagline:
      "Motsi da kayan aiki da ke ɗauke da ƙarfin fasaha an gina su don sauƙaƙe yadda mutane, kasuwanci, da al'ummomin ke motsi.",
    footer_rights: "Keyen Technologies Ltd. Duk haƙƙoƙi an kiyaye.",
    footer_terms: "Sharuɗɗa",
    footer_privacy: "Sirri",
    footer_cookies: "Kukis",
    about_heading_small: "Game da Keyen",
    about_heading_1: "Matsar da Duniya,",
    about_heading_2: "Cikin Hikima",
    about_desc:
      "Keyen wani dandamali ne na motsi da dabaru mai ƙarfin fasaha da aka gina don sauƙaƙe yadda mutane, kasuwanci, da al'ummomi ke motsi. Muna haɗa sabbin abubuwa, aminci, da sauƙi don ƙirƙirar ƙwarewar sufuri marar sumul.",
    about_btn: "Binciko Tafiyarmu",
    how_small: "Motsi Marar Sumul",
    how_heading_1: "Yadda Yake",
    how_heading_2: "Aiki",
    how_desc:
      "Kware tafiye-tafiye marasa wahala kuma tabbatattu tare da Keyen a matakai uku masu sauki.",
    how_step1_title: "Nema",
    how_step1_desc:
      "Zaɓi sabis ɗin ku kuma shigar da inda kuke so a cikin sakanni.",
    how_step2_title: "Haɗa",
    how_step2_desc: "Keyen zai haɗa ku da direba mafi dacewa a kusa da ku.",
    how_step3_title: "Tafi",
    how_step3_desc: "Bibiyi tafiyarku kai tsaye kuma ku ji dadin sabon salo.",
    earn_heading_1: "Samu kuɗi tare da",
    earn_heading_2: "Keyen",
    earn_driver_sub: "DON DIREBOBI",
    earn_driver_title: "Samu kuɗi a matsayin direban Keyen",
    earn_driver_desc:
      "Tuki kuma ka sami kudi. Shiga tsarin Keyen don saduwa da fasinjoji kuma ka mayar da lokacin hutunka ya zama kudi cikin sauki.",
    earn_driver_btn: "Yi rajista don tuki",
    earn_courier_sub: "DON MASU KAI KAYA",
    earn_courier_title: "Zama abokin aikin kai kaya na Keyen",
    earn_courier_desc:
      "Samu da kowane aikin kai kaya. Shiga rukuninmu kuma ka fara samun kudi ta hanyar kai kayayyaki da abinci a garinka.",
    earn_courier_btn: "Yi rajista don kai kaya",
    waitlist_title: "Shiga Jerin Jiran",
    waitlist_desc:
      "Kasance ɗaya daga cikin na farko da zasu fara amfani da Keyen idan muka fara a garinku.",
    waitlist_rider: "Ni Fasinja ne",
    waitlist_driver: "Ni Direba ne",
    waitlist_name: "Cikakken Suna",
    waitlist_phone: "Lambar Waya",
    waitlist_email: "Adireshin Imel",
    waitlist_city: "Garinku",
    waitlist_btn_join: "Shiga Jerin",
    waitlist_btn_joining: "Ana shiga...",
    waitlist_success_title: "Kuna kan jerin!",
    waitlist_success_done: "An Gama",
  },

  // ─── IGBO ──────────────────────────────────────────────────────────────────
  ig: {
    nav_ride: "Nọ n'ụgbọ",
    nav_drive: "Ụgbọ",
    nav_earn: "Nnweta",
    nav_company: "Ụlọ ọrụ",
    nav_join_waitlist: "Sonye na Ndepụta Echere",
    nav_language: "IG",
    tab_ride_heading: "Nweta njem n'ime nkeji ole na ole",
    tab_ride_desc:
      "Dị na weebụ na ekwentị. Debanye aha iji jiri Keyen na weebụ ma ọ bụ pịa njikọ ndị dị n'okpuru iji nbudata ngwa ekwentị Keyen.",
    tab_ride_link1: "Arịọ njem",
    tab_ride_link2: "Ngụkọ ọnụahịa",
    tab_ride_link3: "Nhọrọ njem",
    tab_drive_heading: "Ụgbọ ma nweta ego n'ọtụtụ ọnọdụ gị",
    tab_drive_desc:
      "Sonye n'ọgbakọ ndị ọkwọ ụgbọ anyị. Rụọ ọrụ n'usoro oge gị, bụrụ onye isi gị, wee nweta ụgwọ ọrụ ngwa ngwa site na Keyen.",
    tab_drive_link1: "Debanye aha iji ụgbọ",
    tab_drive_link2: "Ihe achọrọ ndị ọkwọ ụgbọ",
    tab_drive_link3: "Ihe achọrọ ụgbọ ala",
    tab_earn_heading: "Ọtụtụ ụzọ isi nweta ego",
    tab_earn_desc:
      "Ma ọ bụ na i na-enya ndị njem ụgbọ, na-ebu ngwongwo, ma ọ bụ na i na-achịkwa ụgbọ, Keyen na-enye ohere nnweta na nke dị mfe.",
    tab_earn_link1: "Onye ọkwọ ụgbọ nbudata",
    tab_earn_link2: "Njikwa ụgbọ",
    tab_earn_link3: "Keyen maka Azụmahịa",
    tab_company_heading: "Na-akwado ụwa n'ihu",
    tab_company_desc:
      "Anyị na-ewu ọdịnihu njem na Afrịka. Mụtakwuo banyere ọrụ anyị, ndị otu anyị, na ntọala anyị maka nchedo.",
    tab_company_link1: "Maka anyị",
    tab_company_link2: "Ọrụ",
    tab_company_link3: "Blog",
    tab_company_link4: "Nchedo",
    app_available: "Dị na weebụ na ekwentị",
    app_register_text:
      "Debanye aha iji jiri Keyen na weebụ ma ọ bụ pịa njikọ ndị dị n'okpuru iji nbudata ngwa ekwentị Keyen.",
    app_store: "App Store",
    download_on: "Nbudata na",
    get_it_on: "Nweta na",
    google_play: "Google Play",
    hero_launching: "Na-amalite na Eko",
    hero_headline_1: "Mara Onye I Na-aga",
    hero_headline_2: "Njem",
    hero_headline_accent: "Nke Ọ Bụ.",
    hero_subtext:
      "A na-enyocha ID onye ọkwọ ụgbọ Keyen ọ bụla, nwere nnata ikike, nakwa onye na-akwado ya. A na-enyocha onye njem ọ bụla otu ahụ. Ọ bụghị okwu ikwu — usoro i nwere ike ịjụ anyị maka ya.",
    hero_drive_btn: "Ụgbọ Gị na Keyen",
    hero_ride_btn: "Njem Gị na Keyen",
    services_heading_1: "Gịnị mere ị họrọ anyị?",
    services_heading_accent: "Kacha mma",
    services_heading_2: "ọrụ na Obodo.",
    services_book_btn: "Dee Njem",
    service_section_desc:
      "Site na njem ụbọchị ruo njikwa azụmahịa, Keyen na-enye ụzọ gbigbe ntụkwasị obi a na-ahazi maka mkpa ọ bụla.",
    service_rides_title: "Njem",
    service_rides_desc:
      "Rịọ na sekọnd, nọ n'ụgbọ na nkeji. Njem dị nchedo, a kwadoro mgbe ọ bụla ị chọrọ ha.",
    service_delivery_title: "Nbufe",
    service_delivery_desc:
      "Nri na ngwongwo amasị gị, a na-ebute ọsọ n'ọnụ ụzọ gị.",
    service_carsharing_title: "Ịkekọrịta Ụgbọ ala",
    service_carsharing_desc:
      "Kekọrịta njem, kekọrịta ego. Ụzọ kachasị mma iji njem ọnụ.",
    service_carrent_title: "Ịgba Ụgbọ ala",
    service_carrent_desc:
      "Gba ụgbọ ala maka awa ma ọ bụ ụbọchị. Dị mfe, nwere ọnụ ahịa dị mma, enweghị nsogbu.",
    service_business_title: "Azụmahịa",
    service_business_desc:
      "Ụzọ gbigbe ụlọ ọrụ maka ndị otu, ụgbọ ala, na njikwa azụmahịa.",
    download_heading: "Budata ngwa Keyen n'efu",
    download_subtext:
      "Maka ndeede ngwa ngwa, dị mfe nakwa nkwekọrịta pụrụ iche.",
    footer_coming_soon: "Na-abịa n'oge na-adịghị anya",
    footer_cta_heading_1: "Bụrụ Nke Mbụ",
    footer_cta_heading_2: "Iji Njem na Keyen",
    footer_cta_sub:
      "Sonye ọtụtụ puku ndị dị na ndepụta echere. Anyị na-amalite n'oge na-adịghị anya — echefula ebe gị.",
    footer_join_waitlist: "Sonye na Ndepụta Echere",
    footer_tagline:
      "Njem na ihe ngwọta na-ejide ike teknụzụ wuru ka eme njem ndị mmadụ, azụmahịa, na obodo ka mfe.",
    footer_rights: "Keyen Technologies Ltd. Ikike niile echekwara.",
    footer_terms: "Usoro",
    footer_privacy: "Nzuzo",
    footer_cookies: "Kuki",
    about_heading_small: "Banyere Keyen",
    about_heading_1: "Na-akpali Ụwa,",
    about_heading_2: "Na Amamihe",
    about_desc:
      "Keyen bụ usoro njem na ngwa agha teknụzụ iji mee ka njem ndị mmadụ, azụmahịa, na obodo dị mfe. Anyị na-ejikọta ihe ọhụrụ, ntụkwasị obi, na ịdị mma iji mepụta ahụmahụ njem enweghị nkewa.",
    about_btn: "Chọpụta Njem Anyị",
    how_small: "Njem Enweghị Nkewa",
    how_heading_1: "Otu Ọ Si",
    how_heading_2: "Arụ Ọrụ",
    how_desc:
      "Nwee ahụmahụ njem dị mfe a kwadoro na Keyen na nzọụkwụ atọ dị mfe.",
    how_step1_title: "Rịọ",
    how_step1_desc: "Họrọ ọrụ gị wee tinye ebe ị na-aga na sekọnd.",
    how_step2_title: "Jikọọ",
    how_step2_desc:
      "Keyen na-ejikọ gị na onye ọkwọ ụgbọ dị nso na ntụkwasị obi.",
    how_step3_title: "Gaa",
    how_step3_desc: "Soro njem gị ozugbo wee nụ ụtọ ahụmahụ pụrụ iche.",
    earn_heading_1: "Nweta ego na",
    earn_heading_2: "Keyen",
    earn_driver_sub: "MAKA NDỊ ỌKWỌ ỤGBỌ",
    earn_driver_title: "Nweta ego dị ka onye ọkwọ ụgbọ Keyen",
    earn_driver_desc:
      "Nye ụgbọ ma nweta ego. Sonye na usoro Keyen iji jikọọ ndị njem ma jiri oge fọrọ gị nweta ego n'ụzọ dị mfe.",
    earn_driver_btn: "Debanye aha maka ụgbọ",
    earn_courier_sub: "MAKA NDỊ NBUDATA",
    earn_courier_title: "Bụrụ onye nbudata Keyen",
    earn_courier_desc:
      "Nweta ego na nbudata ọ bụla. Sonye na ndị nbudata anyị wee bido nweta ego na ibuga ngwongwo na nri na obodo gị.",
    earn_courier_btn: "Debanye aha maka nbudata",
    waitlist_title: "Sonye na Ndepụta Echere",
    waitlist_desc:
      "Bụrụ otu n'ime ndị mbụ ga-enwe ahụmahụ Keyen mgbe anyị malitere n'obodo gị.",
    waitlist_rider: "Abụ m Onye Njem",
    waitlist_driver: "Abụ m Ọkwọ Ụgbọ",
    waitlist_name: "Aha Gị Nile",
    waitlist_phone: "Nọmba Ekwentị",
    waitlist_email: "Adreesị Email",
    waitlist_city: "Obodo Gị",
    waitlist_btn_join: "Sonye na Ndepụta",
    waitlist_btn_joining: "Na-esonye...",
    waitlist_success_title: "Ị nọ na ndepụta!",
    waitlist_success_done: "Emechaa",
  },

  // ─── FRENCH ────────────────────────────────────────────────────────────────
  fr: {
    nav_ride: "Voyager",
    nav_drive: "Conduire",
    nav_earn: "Gagner",
    nav_company: "Entreprise",
    nav_join_waitlist: "Rejoindre la liste d'attente",
    nav_language: "FR",
    tab_ride_heading: "Obtenez un trajet en quelques minutes",
    tab_ride_desc:
      "Disponible sur le web et mobile. Inscrivez-vous pour utiliser Keyen sur le web ou cliquez sur les liens ci-dessous pour télécharger l'application mobile Keyen.",
    tab_ride_link1: "Demander un trajet",
    tab_ride_link2: "Estimateur de prix",
    tab_ride_link3: "Options de trajet",
    tab_drive_heading: "Conduisez et gagnez selon vos conditions",
    tab_drive_desc:
      "Rejoignez notre communauté de chauffeurs. Travaillez selon votre propre emploi du temps, soyez votre propre patron et soyez payé rapidement avec Keyen.",
    tab_drive_link1: "S'inscrire pour conduire",
    tab_drive_link2: "Conditions chauffeur",
    tab_drive_link3: "Conditions véhicule",
    tab_earn_heading: "De multiples façons de gagner",
    tab_earn_desc:
      "Que vous transportiez des passagers, livriez des colis ou gériez une flotte, Keyen offre des opportunités de gain flexibles.",
    tab_earn_link1: "Livreur",
    tab_earn_link2: "Gestion de flotte",
    tab_earn_link3: "Keyen pour Entreprises",
    tab_company_heading: "Faire avancer le monde",
    tab_company_desc:
      "Nous construisons l'avenir de la mobilité en Afrique. En savoir plus sur notre mission, notre équipe et notre engagement envers la sécurité.",
    tab_company_link1: "À propos",
    tab_company_link2: "Carrières",
    tab_company_link3: "Blog",
    tab_company_link4: "Sécurité",
    app_available: "Disponible sur web et mobile",
    app_register_text:
      "Inscrivez-vous pour utiliser Keyen sur le web ou cliquez sur les liens ci-dessous pour télécharger l'application mobile Keyen.",
    app_store: "App Store",
    download_on: "Télécharger sur",
    get_it_on: "Disponible sur",
    google_play: "Google Play",
    hero_launching: "Lancement à Lagos",
    hero_headline_1: "Sachez Avec Qui",
    hero_headline_2: "Vous Voyagez",
    hero_headline_accent: ".",
    hero_subtext:
      "Chaque chauffeur Keyen est vérifié d'identité, licencié et cautionné. Chaque passager est également vérifié. Pas un slogan — un processus que vous pouvez réellement nous demander.",
    hero_drive_btn: "Conduire avec Keyen",
    hero_ride_btn: "Voyager avec Keyen",
    services_heading_1: "Pourquoi nous choisir?",
    services_heading_accent: "Meilleurs",
    services_heading_2: "services de la Ville.",
    services_book_btn: "Réserver un Trajet",
    service_section_desc:
      "Des trajets quotidiens à la logistique d'entreprise, Keyen offre des solutions de mobilité fiables adaptées à chaque besoin.",
    service_rides_title: "Trajets",
    service_rides_desc:
      "Demandez en secondes, voyagez en minutes. Des trajets sûrs et vérifiés quand vous en avez besoin.",
    service_delivery_title: "Livraison",
    service_delivery_desc:
      "Vos plats et colis préférés, livrés rapidement à votre porte.",
    service_carsharing_title: "Covoiturage",
    service_carsharing_desc:
      "Partagez les trajets, partagez les coûts. Une façon plus intelligente de voyager ensemble.",
    service_carrent_title: "Location de Voiture",
    service_carrent_desc:
      "Louez une voiture pour des heures ou des jours. Flexible, abordable et sans tracas.",
    service_business_title: "Entreprise",
    service_business_desc:
      "Solutions de mobilité d'entreprise pour les équipes, les flottes et la logistique.",
    download_heading: "Téléchargez l'appli Keyen gratuite",
    download_subtext:
      "Pour des réservations plus rapides, plus faciles et des offres exclusives.",
    footer_coming_soon: "Bientôt Disponible",
    footer_cta_heading_1: "Soyez le Premier à",
    footer_cta_heading_2: "Voyager avec Keyen",
    footer_cta_sub:
      "Rejoignez des milliers déjà sur la liste d'attente. Nous lançons bientôt — ne manquez pas votre place.",
    footer_join_waitlist: "Rejoindre la liste d'attente",
    footer_tagline:
      "Mobilité et logistique propulsées par la technologie, conçues pour simplifier la façon dont les personnes, les entreprises et les communautés se déplacent.",
    footer_rights: "Keyen Technologies Ltd. Tous droits réservés.",
    footer_terms: "Conditions",
    footer_privacy: "Confidentialité",
    footer_cookies: "Cookies",
    about_heading_small: "À Propos de Keyen",
    about_heading_1: "Faire Avancer le Monde,",
    about_heading_2: "Plus Intelligemment",
    about_desc:
      "Keyen est une plateforme de mobilité et de logistique propulsée par la technologie, conçue pour simplifier la façon dont les personnes, les entreprises et les communautés se déplacent. Nous combinons innovation, fiabilité et commodité.",
    about_btn: "Découvrir Notre Parcours",
    how_small: "Mobilité Fluide",
    how_heading_1: "Comment Ça",
    how_heading_2: "Marche",
    how_desc:
      "Découvrez des trajets simples et vérifiés avec Keyen en trois étapes.",
    how_step1_title: "Demander",
    how_step1_desc:
      "Choisissez votre service et entrez votre destination en quelques secondes.",
    how_step2_title: "Connecter",
    how_step2_desc:
      "Keyen vous connecte avec le bon partenaire de mobilité à proximité.",
    how_step3_title: "Se Déplacer",
    how_step3_desc:
      "Suivez votre trajet en direct et profitez d'une expérience fluide.",
    earn_heading_1: "Gagnez de l'argent avec",
    earn_heading_2: "Keyen",
    earn_driver_sub: "POUR LES CHAUFFEURS",
    earn_driver_title: "Gagnez de l'argent en tant que chauffeur",
    earn_driver_desc:
      "Conduisez et gagnez de l'argent. Rejoignez Keyen pour vous connecter aux passagers et transformer votre temps libre en revenus avec une flexibilité totale.",
    earn_driver_btn: "S'inscrire pour conduire",
    earn_courier_sub: "POUR LES LIVREURS",
    earn_courier_title: "Devenez un partenaire de livraison",
    earn_courier_desc:
      "Gagnez avec chaque livraison. Rejoignez notre réseau de livreurs et commencez à gagner en livrant des colis et des repas dans votre ville.",
    earn_courier_btn: "S'inscrire comme livreur",
    waitlist_title: "Rejoindre la liste d'attente",
    waitlist_desc:
      "Soyez parmi les premiers à expérimenter Keyen lors de notre lancement dans votre ville.",
    waitlist_rider: "Je suis Passager",
    waitlist_driver: "Je suis Chauffeur",
    waitlist_name: "Nom Complet",
    waitlist_phone: "Numéro de Téléphone",
    waitlist_email: "Adresse Email",
    waitlist_city: "Votre Ville",
    waitlist_btn_join: "Rejoindre la liste",
    waitlist_btn_joining: "Inscription...",
    waitlist_success_title: "Vous êtes sur la liste !",
    waitlist_success_done: "Terminé",
  },

  // ─── EWE ───────────────────────────────────────────────────────────────────
  ew: {
    nav_ride: "Zɔzɔ",
    nav_drive: "Xe ɖiɖi",
    nav_earn: "Wɔ ga",
    nav_company: "Kɔmpani",
    nav_join_waitlist: "Wɔ ŋu le dzesi ŋu",
    nav_language: "EW",
    tab_ride_heading: "Xɔ zɔzɔ le miniti geɖe me",
    tab_ride_desc:
      "Ɖe internet kple fon dzi. Ŋlɔ wò ŋkɔ be na zã Keyen le internet dzi alo gblɔ links si le etsɔ ɖe nu la ŋu be na ɖe Keyen fon nyawo ɖa.",
    tab_ride_link1: "Bɔ zɔzɔ",
    tab_ride_link2: "Xexlẽ ƒe gbugbɔ",
    tab_ride_link3: "Zɔzɔ ƒe dabɔdabɔwo",
    tab_drive_heading: "Xe ɖe gbɔ be na wɔ ga le wò se ŋu",
    tab_drive_desc:
      "Wɔ ŋu abe mia ƒe xexlẽwɔlawo ƒe nutifafatowo ene le mia tɔtrɔwo dome. Dɔ le wò ŋkeke domenya nu, nyɔ wò ŋkɔŋlɔla, eye woaxɔ wò xexlẽ kpokpoe kple Keyen.",
    tab_drive_link1: "Ŋlɔ wò ŋkɔ be na xe",
    tab_drive_link2: "Xexlẽwɔla ƒe dɔwɔnya",
    tab_drive_link3: "Xe ƒe dɔwɔnya",
    tab_earn_heading: "Ðeðe geɖe be na wɔ ga",
    tab_earn_desc:
      "Elabena axe agɔmewɔlawo de ɖe xexlẽ, axɔ nusiwo de ɖe, alo ati xe geɖewo ŋutɔ, Keyen fea ga wɔ ƒe ðewolawo si nyuie.",
    tab_earn_link1: "Nusiwo de ɖe ƒe xexlẽwɔla",
    tab_earn_link2: "Xegeɖewo ƒe tiatia",
    tab_earn_link3: "Keyen dɔ le susu ŋu",
    tab_company_heading: "Ðea xexlẽ ɖe ŋgɔ",
    tab_company_desc:
      "Mia le Afrɩka ƒe zɔzɔdodo ƒe ɣeyiɣi wɔm. Srɔ̃ dzi ɖe miafe dɔwɔwɔ, miafe nuxlɔ̃ɖolawo, kple miafe be wɔ to be ŋgɔdɔwɔwɔ nyui na.",
    tab_company_link1: "Mia ŋu",
    tab_company_link2: "Dɔwɔwɔwo",
    tab_company_link3: "Blog",
    tab_company_link4: "Ŋgɔdɔwɔwɔ",
    app_available: "Ɖe internet kple fon dzi",
    app_register_text:
      "Ŋlɔ wò ŋkɔ be na zã Keyen le internet dzi alo gblɔ links si le etsɔ ɖe nu la ŋu be na ɖe Keyen fon nyawo ɖa.",
    app_store: "App Store",
    download_on: "Ɖa le",
    get_it_on: "Xɔ le",
    google_play: "Google Play",
    hero_launching: "Mɔ̃ le Lagos",
    hero_headline_1: "Nya Ame Si Nèzɔ",
    hero_headline_2: "Kple",
    hero_headline_accent: "Eŋu.",
    hero_subtext:
      "Keyen ƒe xexlẽwɔla ɖeka ɖeka ame nya wɔ eŋu, ewɔ laisense, eye eŋu wɔ ame nya eŋu. Agɔmewɔla ɖeka ɖeka nya wɔ eŋu hã. Nyanyui medɔ o — ðedɔwɔwɔ si àte ŋu bɔ mia egbe.",
    hero_drive_btn: "Xe le Keyen Kple",
    hero_ride_btn: "Zɔ le Keyen Kple",
    services_heading_1: "Etɔ́ƒe mègbe nèzi mia?",
    services_heading_accent: "Sõ",
    services_heading_2: "dɔwɔwɔwo le Dukɔ la me.",
    services_book_btn: "Ŋlɔ Zɔzɔ",
    service_section_desc:
      "Tso gbesiagbe zɔzɔ va kpɔ dɔwɔƒe ƒe nusiwo de ɖe, Keyen fea mɔ̃ zɔzɔ nyui na ame si ke sia ke.",
    service_rides_title: "Zɔzɔ",
    service_rides_desc:
      "Bɔ le sekɔnd me, zɔ le miniti me. Mɔ̃ zɔzɔ nyui si wɔ ame nya eŋu ɖesiaɖe.",
    service_delivery_title: "Nuxlɔ̃ɖoɖo",
    service_delivery_desc:
      "Wò nuɖuɖu kple nusiwo nèlɔ̃, wotsɔ wɔ kpɔ́kpɔ́ va wò xɔme.",
    service_carsharing_title: "Xe Mama",
    service_carsharing_desc: "Ma xe, ma xexlẽ. Mɔ̃ nyui be na zɔ ɖeka.",
    service_carrent_title: "Xe Yaya",
    service_carrent_desc:
      "Ya xe dɔ gaƒoƒo alo ŋkeke geɖe. Nyo, xexlẽ me le me o, eye wahala me le eme o.",
    service_business_title: "Dɔwɔƒe",
    service_business_desc:
      "Mɔ̃ zɔzɔ ƒe ðeðe na asɔgbe, xe geɖewo kple dɔwɔƒe nusiwo xɔ ŋkeke.",
    download_heading: "Ɖa Keyen ƒe nyagɔ si mele xexlẽ o",
    download_subtext: "Dɔ be wɔ ŋlɔŋlɔ vovovo, nyo eye xɔ dɔwɔwɔwo si sõ.",
    footer_coming_soon: "Eva Enumake",
    footer_cta_heading_1: "Nyɔ Gaɖe Si Nàzɔ",
    footer_cta_heading_2: "le Keyen Kple",
    footer_cta_sub:
      "Wɔ ŋu kple dzradzraɖolawo geɖe si le dzesi dzi. Mia le mɔ̃ wɔm — mègblẽ wò xɔdzraɖɔ la o.",
    footer_join_waitlist: "Wɔ Ŋu le Dzesi Dzi",
    footer_tagline:
      "Dɔwɔnu ƒe teƒe kple nusiwo xɔ ŋkeke wɔ katã nugɔdɔwɔ ŋutɔ nyuie be na ðea ame, dɔwɔƒewo kple nutifafatowo zɔzɔ.",
    footer_rights: "Keyen Technologies Ltd. Nyuitatɔ katã wotsɔ wɔ.",
    footer_terms: "Sewo",
    footer_privacy: "Tsitrɔ",
    footer_cookies: "Kukiwo",
    about_heading_small: "Keyen Ŋuti nya",
    about_heading_1: "Ðea Xexeame Ŋgɔ,",
    about_heading_2: "Le Nunya Me",
    about_desc:
      "Keyen nye mɔ̃ kple nusiwo xɔ ŋkeke wɔ be na ðea ame, dɔwɔƒewo kple nutifafatowo zɔzɔ. Mia tsɔ nusiwo nyo kple nyuitatɔ be na wɔ mɔ̃ zɔzɔ nyui na ame.",
    about_btn: "Kpɔ Miafe Mɔ̃",
    how_small: "Mɔ̃ Zɔzɔ Nyui",
    how_heading_1: "Ale si wò",
    how_heading_2: "Wɔa dɔe",
    how_desc: "Kpɔ mɔ̃ zɔzɔ si nyo kple Keyen le afɔɖeɖe etɔ̃ me.",
    how_step1_title: "Biabia",
    how_step1_desc: "Tia wò dɔwɔwɔ kple ŋlɔ afisi nèle yiyim le sekɔnd me.",
    how_step2_title: "Do ƒomedzi",
    how_step2_desc: "Keyen ana xe si nyo tɔ te ɖe gbɔwò.",
    how_step3_title: "Zɔzɔ",
    how_step3_desc: "Kpɔ wò mɔ̃ zɔzɔ kple nyo eŋu.",
    earn_heading_1: "Wɔ ga kple",
    earn_heading_2: "Keyen",
    earn_driver_sub: "NA XEWƆLAWO",
    earn_driver_title: "Wɔ ga abe Keyen xe ene",
    earn_driver_desc:
      "Xe kple wɔ ga. Wɔ ŋu kple Keyen be na kpe kple zɔzɔlawo kple wɔ wò ɣeyiɣi me ga.",
    earn_driver_btn: "Ŋlɔ ŋkɔ be na xe",
    earn_courier_sub: "NA NUXLƆ̃ÐOLAWO",
    earn_courier_title: "Nyɔ Keyen nuxlɔ̃ɖola",
    earn_courier_desc:
      "Wɔ ga kple nuxlɔ̃ɖoɖo ɖesiaɖe. Wɔ ŋu kple miafe nuxlɔ̃ɖolawo kple wɔ ga.",
    earn_courier_btn: "Ŋlɔ ŋkɔ abe nuxlɔ̃ɖola ene",
    waitlist_title: "Wɔ Ŋu le Dzesi Ŋu",
    waitlist_desc: "Nɔ ame gbãtɔwo dome be na zã Keyen le wò du me.",
    waitlist_rider: "Menye Zɔzɔla",
    waitlist_driver: "Menye Xewɔla",
    waitlist_name: "Ŋkɔ Blibo",
    waitlist_phone: "Fon Nɔmba",
    waitlist_email: "Email Ŋuti nya",
    waitlist_city: "Wò Du",
    waitlist_btn_join: "Wɔ Ŋu",
    waitlist_btn_joining: "Le ŋu wɔm...",
    waitlist_success_title: "Èle dzesi la dzi!",
    waitlist_success_done: "Ewɔ",
  },

  // ─── FON ───────────────────────────────────────────────────────────────────
  fon: {
    nav_ride: "Yì",
    nav_drive: "Kpɔ́n Xwé",
    nav_earn: "Mɔ Akwɛ",
    nav_company: "Société",
    nav_join_waitlist: "Bló Gbè ɖò Liste Attente",
    nav_language: "FON",
    tab_ride_heading: "Mɔ fiɖé ɖò minute kpèɖé mɛ",
    tab_ride_desc:
      "Ɖó internet kpo telefɔni jí. Ŋlɔ wɛn towe bo zán Keyen ɖò internet jí alǒ klɛ́ links e ɖò tɛnmɛ é jí bo ji aplicasion Keyen.",
    tab_ride_link1: "Byɔ fiɖé",
    tab_ride_link2: "Dó kanbyɔ ɖó pɔtɛnsi",
    tab_ride_link3: "Ðó fiɖé lɛ",
    tab_drive_heading: "Kpɔ́n xwé bo mɔ akwɛ ɖò flǎn towe mɛ",
    tab_drive_desc:
      "Wá ɖ'emɛ asɔgbe mɛ tɔ́wun kpo xwégbɛ mǐtɔn tɔ lɛ kpó. Wà azɔ̌ ɖò hwenu e jló we é, nyí dó gɔ́n towe, bo mɔ akwɛ kpɔ́n kpɔ́n ɖó Keyen mɛ.",
    tab_drive_link1: "Ŋlɔ wɛn towe bo kpɔ́n",
    tab_drive_link2: "Nǔ e hɛn é bɔ xwégbɛ lɛ ɖó na nɔ ɖo é",
    tab_drive_link3: "Nǔ e hɛn é bɔ gbɛsɛ lɛ ɖó na nɔ ɖo é",
    tab_earn_heading: "Nùjlɛ lɛ e na kpé mǐ ɖò akwɛ mɔ jí é",
    tab_earn_desc:
      "Enyi è ɖè gbɛtɔ lɛ fɔ, è ɖè nǔ lɛ d'akpà, alǒ è ɖɔ xwégbɛ lɛ hǔn, Keyen nɔ na nùjlɛ e wà azɔ̌ lɛ na kpé na gɔ̀n mɔ akwɛ é.",
    tab_earn_link1: "Xwégbɛ fɛ́nfɛ́n tɔ",
    tab_earn_link2: "Mɔ gbejina nú xwégbɛ lɛ",
    tab_earn_link3: "Keyen nú Azɔ̌mɛ",
    tab_company_heading: "Jló bɔ gbɛ̀ ná yì ɖ'así ɖò nukɔn",
    tab_company_desc:
      "Mǐ ɖè Afrique mɛ ɖ'azɔ̌ dó fɛɛ̀ fiɖé tɔn. Mɔ wɛn tawun dó mɔ nǔ e è ɖè azɔ̌ ɖò jí é, asɔgbe mǐtɔn, kpo mǐtɔn gbejina nú lɛ dó mɔ gbɛ̀ nyanya jí é kpo dó wɛn.",
    tab_company_link1: "Mǐ dó wɛn",
    tab_company_link2: "Azɔ̌ lɛ",
    tab_company_link3: "Blog",
    tab_company_link4: "Gbɛ̀ nyanya",
    app_available: "Ɖó internet kpo telefɔni jí",
    app_register_text:
      "Ŋlɔ wɛn towe bo zán Keyen ɖò internet jí alǒ klɛ́ links e ɖò tɛnmɛ é jí bo ji aplicasion Keyen.",
    app_store: "App Store",
    download_on: "Ji ɖò",
    get_it_on: "Mɔ ɖò",
    google_play: "Google Play",
    hero_launching: "È ɖó dó Lagos mɛ",
    hero_headline_1: "Tuùn Mɛ E Na Yì",
    hero_headline_2: "Kpò",
    hero_headline_accent: "Ðò.",
    hero_subtext:
      "Xwégbɛ Keyen tɔn bǐ nɔ mɔ wɛnɖagbe tɔn, nɔ ɖó licence, bo nɔ ɖó mɛ e ɖó sín gbɛjijɔ na. Gbɛtɔ lɛ bǐ lɔ nɔ mɔ wɛnɖagbe yetɔn. Enɛ nyí nùkplɔnkplɔn kpowun o — azɔ̌wanú e é nɔ é kpé bo byɔ mǐ é.",
    hero_drive_btn: "Kpɔ́n Xwé kpo Keyen kpo",
    hero_ride_btn: "Yì kpo Keyen kpo",
    services_heading_1: "Etɛ wu è ɖó na sɔ́ mǐ?",
    services_heading_accent: "Ganji",
    services_heading_2: "azɔ̌ lɛ ɖò Toxo mɛ.",
    services_book_btn: "Ŋlɔ wɛn dó Fiɖé",
    service_section_desc:
      "Sín fiɖé gbèbígbè tɔn va kpɔ azɔ̌ ɖò dɔwɔƒe mɛ, Keyen nɔ na mɔ̃ zɔzɔ nyui e bɔ nú mɛ sia mɛ é.",
    service_rides_title: "Fiɖé",
    service_rides_desc:
      "Byɔ ɖò minute kpèɖé mɛ, yì ɖò minute kpèɖé mɛ. Fiɖé ganji e è mɔ wɛnɖagbe tɔn é.",
    service_delivery_title: "Fɛ́nfɛ́n",
    service_delivery_desc: "Nǔ e jló we lɛ, è sɛ́ dó we kpɔ́n kpɔ́n.",
    service_carsharing_title: "Gbɛsɛ Mama",
    service_carsharing_desc:
      "Ma fiɖé, ma akwɛ. Alɔ e nyo hugàn bo na yì kpɔ́ é.",
    service_carrent_title: "Gbɛsɛ Yiya",
    service_carrent_desc:
      "Yi gbɛsɛ nú ganxixo alǒ azǎn. Nɔ gbɛ̀, xɔ akwɛ, bo ma ɖó tagba.",
    service_business_title: "Azɔ̌mɛ",
    service_business_desc:
      "Fiɖé azɔ̌mɛ tɔn nú asɔgbe lɛ, gbɛsɛ lɛ, kpo dɔwɔwɔ kpo.",
    download_heading: "Ji aplicasion Keyen e dó hwɛ hwɛ é",
    download_subtext: "Dó ŋlɔ wɛn sɔhun kpɔ́n kpɔ́n, dó mɔ nǔvivɔ nukúnɖiɖo.",
    footer_coming_soon: "Ðè Wá",
    footer_cta_heading_1: "Nyí Nukɔntɔn E Na",
    footer_cta_heading_2: "Yì kpo Keyen kpo",
    footer_cta_sub:
      "Wà ɖ'emɛ mɛ mɔkpan e ɖò ɖò gbè ɖò listɛ attente lɛ. Mǐ ɖó na ɖó dó hwɛhwɛ — ma lɛ́ sú fí towe ɔ o.",
    footer_join_waitlist: "Wá ɖ'emɛ Liste Attente mɛ",
    footer_tagline:
      "Fiɖé kpo azɔ̌mɛ kpo e ɖó wɛnjlatɔ e tɔ́n zǎn é bó wà bo dó mɔ nǔ e è ɖó na kpó nú mɛ, azɔ̌mɛ, kpo asɔgbe lɛ kpó é.",
    footer_rights: "Keyen Technologies Ltd. Nǔ bǐ klán bo ɖó.",
    footer_terms: "Sewo",
    footer_privacy: "Nukɔntɔ",
    footer_cookies: "Kukis",
    about_heading_small: "Keyen tɔn mɛ",
    about_heading_1: "Nɔ wà azɔ̌ nú Gbɛ̀,",
    about_heading_2: "Kpó ganji",
    about_desc:
      "Keyen nyí fiɖé kpo azɔ̌mɛ kpo e ɖó wɛnjlatɔ e tɔ́n zǎn é bó wà bo dó mɔ nǔ e è ɖó na kpó nú mɛ, azɔ̌mɛ, kpo asɔgbe lɛ kpó é. Mǐ nɔ ɖè azɔ̌ ganji.",
    about_btn: "Kpɔ́n mǐtɔn Gbɛ̀",
    how_small: "Yì ganji",
    how_heading_1: "Lě e è nɔ",
    how_heading_2: "Wà azɔ̌ gbɔn é",
    how_desc: "Mɔ nù e è ɖó na kpó nú mɛ ganji kpó Keyen ɖò xwé atɔn mɛ.",
    how_step1_title: "Byɔ",
    how_step1_desc: "Sɔ́ azɔ̌ towe bo ŋlɔ fiɖé e a na yì é ɖò minute kpèɖé mɛ.",
    how_step2_title: "Kplé",
    how_step2_desc: "Keyen na kplé we kpó xwégbɛ e sɔgbe é.",
    how_step3_title: "Yì",
    how_step3_desc: "Kpɔ́n fiɖé towe bo mɔ nùvivɔ ganji.",
    earn_heading_1: "Mɔ akwɛ kpó",
    earn_heading_2: "Keyen",
    earn_driver_sub: "NÚ XWÉGBƐ",
    earn_driver_title: "Mɔ akwɛ lě e Keyen xwégbɛ",
    earn_driver_desc:
      "Kpɔ́n xwé bo mɔ akwɛ. Wá ɖ'emɛ Keyen mɛ bo mɔ mɛ e na yì é bo mɔ akwɛ.",
    earn_driver_btn: "Ŋlɔ wɛn towe bo kpɔ́n",
    earn_courier_sub: "NÚ XWÉGBƐ FƐ́NFƐ́N TƆ",
    earn_courier_title: "Nyí Keyen fɛ́nfɛ́n tɔ",
    earn_courier_desc:
      "Mɔ akwɛ kpó fɛ́nfɛ́n ɖokpo ɖokpo. Wá ɖ'emɛ mǐtɔn mɛ bo mɔ akwɛ.",
    earn_courier_btn: "Ŋlɔ wɛn towe bo fɛ́nfɛ́n",
    waitlist_title: "Bló Gbè ɖò Liste Attente",
    waitlist_desc:
      "Nyí nukɔntɔn e na mɔ Keyen hwenu e mǐ na wà ɖò toxo towe mɛ é.",
    waitlist_rider: "Un nyí mɛ e na yì é",
    waitlist_driver: "Un nyí Xwégbɛ",
    waitlist_name: "Nyikɔ Towe",
    waitlist_phone: "Telefɔni Nɔmba",
    waitlist_email: "Email Towe",
    waitlist_city: "Toxo Towe",
    waitlist_btn_join: "Bló Gbè",
    waitlist_btn_joining: "È ɖò blóbló wɛ...",
    waitlist_success_title: "A ɖò listɛ mɛ!",
    waitlist_success_done: "É nyí",
  },
};
