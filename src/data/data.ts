export interface District {
  id: string;
  name: { [key: string]: string };
  image: string;
}

export interface Hero {
  id: string;
  name: { [key: string]: string };
  description: { [key: string]: string };
  districtId: string;
  category: "Freedom Fighter" | "Poet" | "Reformer" | "Leader";
  image: string;
  location: { lat: number; lng: number };
  featured?: boolean;
  lifespan?: string;
  stats?: { label: { [key: string]: string }, value: string }[];
}

export interface Story {
  id: string;
  heroId: string;
  pages: {
    image: string;
    text: { [key: string]: string };
  }[];
}

export interface Question {
  id: string;
  heroId?: string;
  question: { [key: string]: string };
  options: { [key: string]: string[] };
  correctIndex: number;
}

export const categories = [
  { id: 'Freedom Fighter' as const, icon: '🏳️', color: '#6366F1', label: { en: 'Freedom Fighters', kn: 'ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರರು', hi: 'स्वतंत्रता सेनानी' } },
  { id: 'Poet' as const, icon: '✒️', color: '#EC4899', label: { en: 'Poets', kn: 'ಕವಿಗಳು', hi: 'कवि' } },
  { id: 'Reformer' as const, icon: '👥', color: '#F59E0B', label: { en: 'Reformers', kn: 'ಸುಧಾರಕರು', hi: 'समाज सुधारक' } },
  { id: 'Leader' as const, icon: '👑', color: '#10B981', label: { en: 'Leaders', kn: 'ನಾಯಕರು', hi: 'नेता' } },
];

export const districts: District[] = [
  { id: "bengaluru", name: { en: "Bengaluru", kn: "ಬೆಂಗಳೂರು", hi: "बेंगलुरु" }, image: "https://images.unsplash.com/photo-1596402184320-417d717867cd?auto=format&fit=crop&q=80&w=400" },
  { id: "mysuru", name: { en: "Mysuru", kn: "ಮೈಸೂರು", hi: "मैसूर" }, image: "https://images.unsplash.com/photo-1580228514580-0a257577553b?auto=format&fit=crop&q=80&w=400" },
  { id: "belagavi", name: { en: "Belagavi", kn: "ಬೆಳಗಾವಿ", hi: "बेलगावी" }, image: "https://images.unsplash.com/photo-1623869279010-09cc5ea9e1c1?auto=format&fit=crop&q=80&w=400" },
  { id: "shivamogga", name: { en: "Shivamogga", kn: "ಶಿವಮೊಗ್ಗ", hi: "शिवमोगा" }, image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=400" },
];

export const heroes: Hero[] = [
  {
    id: "kittur-chennamma",
    name: { en: "Kittur Chennamma", kn: "ಕಿತ್ತೂರು ಚೆನ್ನಮ್ಮ", hi: "कित्तೂರು चेन्नಮ್ಮ" },
    description: { 
      en: "The brave Queen of Kittur who led an armed rebellion against the British East India Company. She is celebrated as one of the first female rulers to fight for independence.",
      kn: "ಬ್ರಿಟಿಷ್ ಈಸ್ಟ್ ಇಂಡಿಯಾ ಕಂಪನಿಯ ವಿರುದ್ಧ ಸಶಸ್ತ್ರ ದಂಗೆಯನ್ನು ಮುನ್ನಡೆಸಿದ ಕಿತ್ತೂರಿನ ರಾಣಿ. ಇವರು ಭಾರತದ ಮೊದಲ ಮಹಿಳಾ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರರಲ್ಲಿ ಒಬ್ಬರು.",
      hi: "कित्तूर की रानी जिन्होंने ब्रिटिश ईस्ट इंडिया कंपनी के खिलाफ सशस्त्र विद्रोह का नेतृत्व किया। वह स्वतंत्रता के लिए लड़ने वाली पहली महिला शासकों में से एक के रूप में मनाई जाती हैं।"
    },
    districtId: "belagavi",
    category: "Freedom Fighter",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/32f8313e-3240-410a-8bfb-9366113b2ceb.png",
    location: { lat: 15.6022, lng: 74.7868 },
    featured: true,
    lifespan: "1778 - 1829",
    stats: [
      { label: { en: "Battles", kn: "ಯುದ್ಧಗಳು", hi: "लड़ाई" }, value: "3+" },
      { label: { en: "Legacy", kn: "ಪರಂಪರೆ", hi: "विरासत" }, value: "Freedom" }
    ]
  },
  {
    id: "onake-obavva",
    name: { en: "Onake Obavva", kn: "ಒನಕೆ ಓಬವ್ವ", hi: "ओनके ओबव्वा" },
    description: { 
      en: "A legendary woman who fought Haider Ali's army single-handedly with a pestle (Onake) in Chitradurga. She is an inspiration for courage and local defense.",
      kn: "ಚಿತ್ರದುರ್ಗದಲ್ಲಿ ಹೈದರ್ ಅಲಿಯ ಸೈನ್ಯದ ವಿರುದ್ಧ ಕೇವಲ ಒಂದು ಒನಕೆಯಿಂದ ಏಕಾಂಗಿಯಾಗಿ ಹೋರಾಡಿದ ವೀರ ಮಹಿಳೆ. ಇವರು ಧೈರ್ಯಕ್ಕೆ ಒಂದು ದೊಡ್ಡ ಸ್ಫೂರ್ತಿ.",
      hi: "एक महान महिला जिसने चित्रदुर्ग में केवल एक मूसल (ओनके) के साथ हैदर अली की सेना का मुकाबला किया। वह साहस और स्थानीय सुरक्षा के लिए एक प्रेरणा हैं।"
    },
    districtId: "shivamogga", 
    category: "Freedom Fighter",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/7c216c56-f6eb-460d-8547-0639dcc6f5ac.png",
    location: { lat: 14.2251, lng: 76.3980 },
    featured: true,
    lifespan: "18th Century",
    stats: [
      { label: { en: "Weapon", kn: "ಅಸ್ತ್ರ", hi: "हथियार" }, value: "Pestle" },
      { label: { en: "Defeated", kn: "ಸೋಲಿಸಿದವರು", hi: "पराजित" }, value: "100+" }
    ]
  },
  {
    id: "rani-abbakka",
    name: { en: "Rani Abbakka", kn: "ರಾಣಿ ಅಬ್ಬಕ್ಕ", hi: "रानी अब्बक्का" },
    description: { 
      en: "The first Tuluva Queen of Ullal who successfully repelled the Portuguese for decades. She belongs to the Chowta dynasty and is known for her naval warfare skills.",
      kn: "ದಶಕಗಳ ಕಾಲ ಪೋರ್ಚುಗೀಸರನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಹಿಮ್ಮೆಟ್ಟಿಸಿದ ಉಳ್ಳಾಲದ ಮೊದಲ ತುಳುವ ರಾಣಿ. ಇವರು ಚೌಟ ವಂಶಕ್ಕೆ ಸೇರಿದವರು.",
      hi: "उल्लाल की पहली तुलुवा रानी जिन्होंने दशकों तक पुर्तगालियों को सफलतापूर्वक पीछे धकेला। वह चौटा राजवंश से संबंधित थीं।"
    },
    districtId: "mysuru", 
    category: "Leader",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/7c70ae86-50c2-4a00-ab60-14e4fe6f2f9c.png",
    location: { lat: 12.8706, lng: 74.8801 },
    featured: true,
    lifespan: "16th Century",
    stats: [
      { label: { en: "Title", kn: "ಬಿರುದು", hi: "शीर्षक" }, value: "Abhaya Rani" },
      { label: { en: "Ruled", kn: "ಆಳ್ವಿಕೆ", hi: "शासन" }, value: "40+ Yrs" }
    ]
  },
  {
    id: "krishnadevaraya",
    name: { en: "Krishnadevaraya", kn: "ಕೃಷ್ಣದೇವರಾಯ", hi: "कृष्णदेवराय" },
    description: { 
      en: "One of the greatest emperors of the Vijayanagara Empire (1471–1529), known for his patronage of arts, military brilliance, and the golden age of South India.",
      kn: "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಅತ್ಯಂತ ಶ್ರೇಷ್ಠ ಚಕ್ರವರ್ತಿ (೧೪೭೧-೧೫೨೯), ಕಲಾ ಪೋಷಣೆ ಮತ್ತು ಸಮರ್ಥ ನಾಯಕತ್ವಕ್ಕೆ ಹೆಸರಾದವರು.",
      hi: "विजयनगर साम्राज्य के सबसे महान सम्राट (1471-1529), जो अपनी सैन्य प्रतिभा और कला के संरक्षण के लिए जाने जाते हैं।"
    },
    districtId: "shivamogga", // Historically Hampi (Vijayanagara), using nearby district
    category: "Leader",
    image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800",
    location: { lat: 15.3350, lng: 76.4600 },
    featured: true,
    lifespan: "1471 - 1529",
    stats: [
      { label: { en: "Empire", kn: "ಸಾಮ್ರಾಜ್ಯ", hi: "साम्राज्य" }, value: "Vijayanagara" },
      { label: { en: "Ruled", kn: "ಆಳ್ವಿಕೆ", hi: "शासन" }, value: "20 Yrs" }
    ]
  },
  {
    id: "sangolli-rayanna",
    name: { en: "Sangolli Rayanna", kn: "ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ", hi: "संगोल्ली रायण्णा" },
    description: { 
      en: "The brave army chief of Kittur who fought for his motherland until the very end. He organized a local army and used guerrilla tactics against the British.",
      kn: "ತನ್ನ ಜೀವನದ ಕೊನೆಯವರೆಗೂ ಮಾತೃಭೂಮಿಗಾಗಿ ಹೋರಾಡಿದ ಕಿತ್ತೂರಿನ ಶೂರ ಸೇನಾಧಿಪತಿ. ಇವರು ಬ್ರಿಟಿಷರ ವಿರುದ್ಧ ಗೆರಿಲ್ಲಾ ತಂತ್ರಗಳನ್ನು ಬಳಸಿದರು.",
      hi: "कित्तूर के बहादुर सेना प्रमुख जिन्होंने अंत तक अपनी मातृभूमि के लिए लड़ाई लड़ी। उन्होंने एक स्थानीय सेना का गठन किया और अंग्रेजों के खिलाफ गुरिल्ला रणनीति का इस्तेमाल किया।"
    },
    districtId: "belagavi",
    category: "Freedom Fighter",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/065b267b-1cb8-466d-a60d-fb172c686f0c.png",
    location: { lat: 15.7500, lng: 74.8000 },
    featured: true,
    lifespan: "1798 - 1831",
    stats: [
      { label: { en: "Role", kn: "ಪಾತ್ರ", hi: "भूमिका" }, value: "Commander" },
      { label: { en: "Tactics", kn: "ತಂತ್ರಗಳು", hi: "रणनीति" }, value: "Guerrilla" }
    ]
  },
  {
    id: "dr-bendre",
    name: { en: "D.R. Bendre", kn: "ದ.ರಾ. ಬೇಂದ್ರೆ", hi: "डी.आर. बेन्द्रे" },
    description: { 
      en: "A prominent Kannada poet often referred to as 'Vara Kavi'.",
      kn: "ಕನ್ನಡದ ಪ್ರಸಿದ್ಧ ಕವಿ, ಇವರನ್ನು 'ವರಕವಿ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
      hi: "एक प्रमुख कन्नड़ कवि जिन्हें अक्सर 'वर कवि' कहा जाता है।"
    },
    districtId: "shivamogga", // Historically Dharwad, but using available districts for demo
    category: "Poet",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/9488a032-1f48-4384-90a8-b64906f366e6.png",
    location: { lat: 15.4589, lng: 75.0078 }
  },
  {
    id: "akka-mahadevi",
    name: { en: "Akka Mahadevi", kn: "ಅಕ್ಕ ಮಹಾದೇವಿ", hi: "अक्का महादेवी" },
    description: { 
      en: "A great poet and symbol of female empowerment in the 12th century.",
      kn: "೧೨ನೇ ಶತಮಾನದ ಶ್ರೇಷ್ಠ ಕವಯಿತ್ರಿ ಮತ್ತು ಮಹಿಳಾ ಸಬಲೀಕರಣದ ಸಂಕೇತ.",
      hi: "12वीं सदी की एक महान कवयित्री और महिला सशक्तिकरण की प्रतीक।"
    },
    districtId: "mysuru",
    category: "Reformer",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/76b3ea66-9bb8-4fc3-a558-f9b20755589c.png",
    location: { lat: 14.1950, lng: 75.4020 }
  },
  {
    id: "kuvempu",
    name: { en: "Kuvempu", kn: "ಕುವೆಂಪು", hi: "कुवेम्पु" },
    description: { 
      en: "Jnanapeeth awardee and the greatest Kannada poet of the 20th century.",
      kn: "ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ವಿಜೇತ ಮತ್ತು ೨೦ನೇ ಶತಮಾನದ ಅತ್ಯಂತ ಶ್ರೇಷ್ಠ ಕನ್ನಡ ಕವಿ.",
      hi: "ज्ञानपीठ पुरस्कार विजेता और 20वीं सदी के सबसे महान कन्नड़ कवि।"
    },
    districtId: "shivamogga",
    category: "Poet",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/bc447a15-0810-4742-b062-841f3d64a780.png",
    location: { lat: 13.5901, lng: 75.3970 }
  },
  {
    id: "karnad-sadashiva-rao",
    name: { en: "Karnad Sadashiva Rao", kn: "ಕರ್ನಾಡ್ ಸದಾಶಿವ ರಾವ್", hi: "कर्नाड सदाशिव राव" },
    description: { 
      en: "A dedicated freedom fighter and true follower of Gandhi, known for his selfless service and sacrifice for the nation. He worked extensively in coastal Karnataka.",
      kn: "ನಿಸ್ವಾರ್ಥ ಸೇವೆ ಮತ್ತು ದೇಶಕ್ಕಾಗಿ ಮಾಡಿದ ತ್ಯಾಗಕ್ಕೆ ಹೆಸರಾದ ಗಾಂಧೀಜಿಯವರ ನಿಷ್ಠಾವಂತ ಅನುಯಾಯಿ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರ.",
      hi: "एक समर्पित स्वतंत्रता सेनानी और गांधी के सच्चे अनुयायी, जो राष्ट्र के लिए अपनी निस्वार्थ सेवा और बलिदान के लिए जाने जाते हैं।"
    },
    districtId: "mysuru",
    category: "Freedom Fighter",
    image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=400",
    location: { lat: 12.9141, lng: 74.8560 },
    lifespan: "1881 - 1937",
    stats: [
      { label: { en: "Movement", kn: "ಚಳವಳಿ", hi: "आंदोलन" }, value: "Non-Coop" },
      { label: { en: "Region", kn: "ಪ್ರದೇಶ", hi: "क्षेत्र" }, value: "Coastal" }
    ]
  },
  {
    id: "kamaladevi-chattopadhyay",
    name: { en: "Kamaladevi Chattopadhyay", kn: "ಕಮಲಾದೇವಿ ಚಟ್ಟೋಪಾಧ್ಯಾಯ", hi: "कमलादेवी चट्टोपाध्याय" },
    description: { 
      en: "A social reformer and freedom fighter driving the handicraft and theater revival in India.",
      kn: "ಭಾರತದಲ್ಲಿ ಕರಕುಶಲ ಮತ್ತು ರಂಗಭೂಮಿಯ ಪುನರುಜ್ಜೀವನಕ್ಕೆ ಕಾರಣರಾದ ಸಮಾಜ ಸುಧಾರಕಿ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರ್ತಿ.",
      hi: "भारत में हस्तशिल्प और रंगमंच के पुनरुद्धार को बढ़ावा देने वाली समाज सुधारक और स्वतंत्रता सेनानी।"
    },
    districtId: "bengaluru",
    category: "Reformer",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/965f3d64-e40d-45f8-8a8f-2872bc97d919.png",
    location: { lat: 12.9716, lng: 77.5946 },
    featured: true
  },
  {
    id: "umabai-kundapur",
    name: { en: "Umabai Kundapur", kn: "ಉಮಾಬಾಯಿ ಕುಂದಾಪುರ", hi: "उमाबाई कुंदापुर" },
    description: { 
      en: "A fearless freedom fighter and a key woman leader who strengthened women's participation in the Indian independence movement. She was the founder of Bhagini Mandal.",
      kn: "ಭಾರತೀಯ ಸ್ವಾತಂತ್ರ್ಯ ಚಳವಳಿಯಲ್ಲಿ ಮಹಿಳೆಯರ ಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ಬಲಪಡಿಸಿದ ನಿರ್ಭೀತ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರ್ತಿ ಮತ್ತು ಪ್ರಮುಖ ಮಹಿಳಾ ನಾಯಕಿ.",
      hi: "एक निडर स्वतंत्रता सेनानी और एक प्रमुख महिला नेता जिन्होंने भारतीय स्वतंत्रता आंदोलन में महिलाओं की भागीदारी को मजबूत किया।"
    },
    districtId: "belagavi",
    category: "Freedom Fighter",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/965f3d64-e40d-45f8-8a8f-2872bc97d919.png",
    location: { lat: 15.8497, lng: 74.4977 },
    featured: true,
    lifespan: "1892 - 1992",
    stats: [
      { label: { en: "Organization", kn: "ಸಂಸ್ಥೆ", hi: "संगठन" }, value: "Seva Dal" },
      { label: { en: "Awards", kn: "ಪ್ರಶಸ್ತಿಗಳು", hi: "पुरस्कार" }, value: "Tamra Patra" }
    ]
  },
  {
    id: "gangadharrao-deshpande",
    name: { en: "Gangadharrao Deshpande", kn: "ಗಂಗಾಧರರಾವ್ ದೇಶಪಾಂಡೆ", hi: "गंगाधरराव देशपांडे" },
    description: { 
      en: "Known as 'Karnataka Simha' (Lion of Karnataka), an unconditional follower of Lokmanya Tilak and a key leader in the Khadi movement.",
      kn: "'ಕರ್ನಾಟಕ ಸಿಂಹ' ಎಂದೇ ಖ್ಯಾತರಾದ ಲೋಕಮಾನ್ಯ ತಿಲಕರ ಪರಮ ಅನುಯಾಯಿ.",
      hi: "'कर्नाटक सिंह' के रूप में जाने जाने वाले, लोकमान्य तिलक के बिना शर्त अनुयायी।"
    },
    districtId: "belagavi",
    category: "Freedom Fighter",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/32174fce-cb7c-473d-82d9-e93238da2660.png",
    location: { lat: 15.8497, lng: 74.4977 },
    lifespan: "1871 - 1960",
    stats: [
      { label: { en: "Title", kn: "ಬಿರುದು", hi: "शीर्षक" }, value: "Lion" },
      { label: { en: "Focus", kn: "ಗಮನ", hi: "ध्यान" }, value: "Khadi" }
    ]
  },
  {
    id: "ns-hardikar",
    name: { en: "N.S. Hardikar", kn: "ಎನ್.ಎಸ್. ಹರ್ಡೀಕರ್", hi: "एन.एस. हर्डीकर" },
    description: { 
      en: "Founder of Seva Dal, a freedom fighter who played a vital role in organizing the youth and disciplining the volunteers of for the freedom struggle.",
      kn: "ಸೇವಾದಳದ ಸ್ಥಾಪಕರು, ಯುವಕರನ್ನು ಸಂಘಟಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರ.",
      hi: "सेवा दल के संस्थापक, एक स्वतंत्रता सेनानी जिन्होंने युवाओं को संगठित करने में महत्वपूर्ण भूमिका निभाई।"
    },
    districtId: "shivamogga",
    category: "Freedom Fighter",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/719d20c5-559d-434a-9d26-7f411ba066e4.png",
    location: { lat: 15.3647, lng: 75.1240 },
    featured: true,
    lifespan: "1889 - 1975",
    stats: [
      { label: { en: "Founded", kn: "ಸ್ಥಾಪನೆ", hi: "स्थापित" }, value: "Seva Dal" },
      { label: { en: "Role", kn: "ಪಾತ್ರ", hi: "भूमिका" }, value: "Organizer" }
    ]
  },
  {
    id: "bellary-siddamma",
    name: { en: "Bellary Siddamma", kn: "ಬಳ್ಳಾರಿ ಸಿದ್ದಮ್ಮ", hi: "बल्लारी सिद्धम्मा" },
    description: { 
      en: "A fearless woman who participated in the Quit India Movement and was jailed. She was a major figure in the 1938 'Shivapura Dhwaja Satyagraha'.",
      kn: "ಕ್ವಿಟ್ ಇಂಡಿಯಾ ಚಳವಳಿಯಲ್ಲಿ ಭಾಗವಹಿಸಿ ಜೈಲಿಗೆ ಹೋದ ನಿರ್ಭೀತ ಮಹಿಳೆ. ಶಿವಪುರ ಧ್ವಜ ಸತ್ಯಾಗ್ರಹದಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದವರು.",
      hi: "एक निडर महिला जिन्होंने भारत छोड़ो आंदोलन में भाग लिया और जेल गईं। उन्होंने 1938 के 'शिवपुरा ध्वज सत्याग्रह' में महत्वपूर्ण भूमिका निभाई।"
    },
    districtId: "mysuru",
    category: "Freedom Fighter",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/7680072c-29f7-410c-be49-9df038df37a2.png",
    location: { lat: 15.1394, lng: 76.9214 },
    featured: true,
    lifespan: "1903 - 1981",
    stats: [
      { label: { en: "Role", kn: "ಪಾತ್ರ", hi: "भूमिका" }, value: "Satyagrahi" },
      { label: { en: "Events", kn: "ಘಟನೆಗಳು", hi: "घटनाएं" }, value: "Quit India" }
    ]
  },
  {
    id: "mailara-mahadeva",
    name: { en: "Mailara Mahadeva", kn: "ಮೈಲಾರ ಮಹಾದೇವ", hi: "मैलार महादेव" },
    description: { 
      en: "A young revolutionary who sacrificed his life during the Quit India Movement in 1943. He was a dedicated follower of Gandhi and a martyr for freedom.",
      kn: "ಕ್ವಿಟ್ ಇಂಡಿಯಾ ಚಳವಳಿಯ ಸಂದರ್ಭದಲ್ಲಿ ಪ್ರಾಣತ್ಯಾಗ ಮಾಡಿದ ಯುವ ಕ್ರಾಂತಿಕಾರಿ. ಇವರು ಗಾಂಧೀಜಿಯವರ ನಿಷ್ಠ ಅನುಯಾಯಿಗಳಲ್ಲಿ ಒಬ್ಬರಾಗಿದ್ದರು.",
      hi: "एक युवा क्रांतिकारी जिन्होंने 1943 में भारत छोड़ो आंदोलन के दौरान अपने जीवन का बलिदान दिया। वह गांधी के एक समर्पित अनुयायी थे।"
    },
    districtId: "shivamogga",
    category: "Freedom Fighter",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    location: { lat: 14.6186, lng: 75.5255 },
    lifespan: "1911 - 1943",
    stats: [
      { label: { en: "Known as", kn: "ಹೆಸರು", hi: "नाम" }, value: "Martyr" },
      { label: { en: "Movement", kn: "ಚಳವಳಿ", hi: "आंदोलन" }, value: "Quit India" }
    ]
  },
  {
    id: "aluru-venkata-rao",
    name: { en: "Aluru Venkata Rao", kn: "ಆಲೂರು ವೆಂಕಟರಾವ್", hi: "आलुरू वेंकट राव" },
    description: { 
      en: "Known as 'Karnataka Kulapurohita', the architect of the Karnataka Unification Movement. He worked tirelessly to bring together Kannada-speaking regions.",
      kn: "'ಕರ್ನಾಟಕ ಕುಲಪುರೋಹಿತ' ಎಂದೇ ಖ್ಯಾತರಾದ ಕರ್ನಾಟಕ ಏಕೀಕರಣ ಚಳವಳಿಯ ರೂವಾರಿ. ಇವರು ಕನ್ನಡ ನಾಡಿನ ಏಕೀಕರಣಕ್ಕಾಗಿ ಶ್ರಮಿಸಿದವರು.",
      hi: "'कर्नाटक कुलपुरोहित' के रूप में जाने जाने वाले, कर्नाटक एकीकरण आंदोलन के वास्तुकार। उन्होंने कन्नड़ भाषी क्षेत्रों को एक साथ लाने के लिए अथक प्रयास किया।"
    },
    districtId: "mysuru",
    category: "Leader",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/f1fd5f68-7c8a-40a2-9216-728b9cc36ef1.png",
    location: { lat: 15.4589, lng: 75.0078 },
    featured: true,
    lifespan: "1880 - 1964",
    stats: [
      { label: { en: "Title", kn: "ಬಿರುದು", hi: "शीर्षक" }, value: "Kulapurohita" },
      { label: { en: "Vision", kn: "ದೂರದೃಷ್ಟಿ", hi: "दृष्टिकोण" }, value: "Unification" }
    ]
  },
  {
    id: "adikavi-pampa",
    name: { en: "Adikavi Pampa", kn: "ಆದಿಕವಿ ಪಂಪ", hi: "आदिकवि पम्पा" },
    description: { 
      en: "The first great poet of Kannada literature, known for Vikramarjuna Vijaya.",
      kn: "ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಆದಿಕವಿ, ವಿಕ್ರಮಾರ್ಜುನ ವಿಜಯದ ಮೂಲಕ ಪ್ರಸಿದ್ಧರು.",
      hi: "कन्नड़ साहित्य के पहले महान कवि, जिन्हें विक्रार्जुन विजय के लिए जाना जाता है।"
    },
    districtId: "mysuru",
    category: "Poet",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/504c5e7b-c3fd-44c1-903b-bd93a02798f9.png",
    location: { lat: 15.8497, lng: 74.4977 }
  },
  {
    id: "gs-shivarudrappa",
    name: { en: "G.S. Shivarudrappa", kn: "ಜಿ.ಎಸ್. ಶಿವರುದ್ರಪ್ಪ", hi: "जी.एस. शिवरुद्रप्पा" },
    description: { 
      en: "A modern Kannada poet and writer who was honored as 'Rashtrakavi'.",
      kn: "ಕನ್ನಡದ ಆಧುನಿಕ ಕವಿ ಮತ್ತು ಲೇಖಕರು, ಇವರು 'ರಾಷ್ಟ್ರಕವಿ' ಬಿರುದಿಗೆ ಪಾತ್ರರಾಗಿದ್ದಾರೆ.",
      hi: "एक आधुनिक कन्नड़ कवि और लेखक जिन्हें 'राष्ट्रकवि' के रूप में सम्मानित किया गया था।"
    },
    districtId: "shivamogga",
    category: "Poet",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/18e47f7d-0a7c-4861-bfdf-7935de9d3436.png",
    location: { lat: 13.9299, lng: 75.5681 }
  },
  {
    id: "chandrashekhara-kambara",
    name: { en: "Chandrashekhara Kambara", kn: "ಚಂದ್ರಶೇಖರ ಕಂಬಾರ", hi: "चंद्रशेखर कंबारा" },
    description: { 
      en: "A Jnanpith awardee poet, playwright, and folklorist.",
      kn: "ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ವಿಜೇತ ಕವಿ, ನಾಟಕಕಾರ ಮತ್ತು ಜಾನಪದ ತಜ್ಞರು.",
      hi: "एक ज्ञानपीठ पुरस्कार विजेता कवि, नाटककार और लोकसाहित्यकार।"
    },
    districtId: "belagavi",
    category: "Poet",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/67b2d56d-e970-4965-9859-90b9b30cba22.png",
    location: { lat: 16.2160, lng: 74.7566 }
  },
  {
    id: "masti-venkatesha-iyengar",
    name: { en: "Masti Venkatesha Iyengar", kn: "ಮಾಸ್ತಿ ವೆಂಕಟೇಶ ಅಯ್ಯಂಗಾರ್", hi: "मास्ती वेंकटेश अय्यंगार" },
    description: { 
      en: "A Jnanpith awardee often called the 'Father of Kannada Short Stories'.",
      kn: "ಕನ್ನಡ ಸಣ್ಣ ಕತೆಗಳ ಜನಕ ಎಂದು ಕರೆಯಲ್ಪಡುವ ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ವಿಜೇತರು.",
      hi: "एक ज्ञानपीठ पुरस्कार विजेता जिन्हें अक्सर 'कन्नड़ लघु कथाओं के पिता' कहा जाता है।"
    },
    districtId: "mysuru",
    category: "Poet",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/55bc5156-f597-4089-a29d-472061f00b46.png",
    location: { lat: 12.9716, lng: 77.5946 }
  },
  {
    id: "ratnakaravarni",
    name: { en: "Ratnakaravarni", kn: "ರತ್ನಾಕರವರ್ಣಿ", hi: "रत्नाकरवर्णी" },
    description: { 
      en: "A 16th-century poet known for his epic 'Bharatesha Vaibhava'.",
      kn: "ತಮ್ಮ 'ಭರತೇಶ ವೈಭವ' ಮಹಾಕಾವ್ಯಕ್ಕೆ ಹೆಸರುವಾಸಿಯಾದ ೧೬ನೇ ಶತಮಾನದ ಕವಿ.",
      hi: "16वीं सदी के कवि जिन्हें उनके महाकाव्य 'भरतेश वैभव' के लिए जाना जाता है।"
    },
    districtId: "mysuru",
    category: "Poet",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/75845cce-1579-450a-9d90-090c25a1af59.png",
    location: { lat: 12.1642, lng: 76.5132 }
  },
  {
    id: "gopalakrishna-adiga",
    name: { en: "Gopalakrishna Adiga", kn: "ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ", hi: "गोपालकृष्ण अडिग" },
    description: { 
      en: "A pioneer of the Navya style of poetry in Kannada literature.",
      kn: "ಕನ್ನಡ ಸಾಹಿತ್ಯದಲ್ಲಿ ನವ್ಯ ಶೈಲಿಯ ಕಾವ್ಯದ ಪ್ರವರ್ತಕರು.",
      hi: "कन्नड़ साहित्य में कविता की नव्य शैली के अग्रदूत।"
    },
    districtId: "shivamogga",
    category: "Poet",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    location: { lat: 13.9299, lng: 75.5681 }
  },
  {
    id: "siddalingaiah",
    name: { en: "Siddalingaiah", kn: "ಸಿದ್ಧಲಿಂಗಯ್ಯ", hi: "सिद्धलिंगैया" },
    description: { 
      en: "Known as 'Dalita Kavi', a revolutionary voice in Dalit literature.",
      kn: "'ದಲಿತ ಕವಿ' ಎಂದೇ ಖ್ಯಾತರಾದ ದಲಿತ ಸಾಹಿತ್ಯದ ಕ್ರಾಂತಿಕಾರಿ ಧ್ವನಿ.",
      hi: "'दलित कवि' के रूप में जाने जाने वाले, दलित साहित्य में एक क्रांतिकारी आवाज।"
    },
    districtId: "bengaluru",
    category: "Poet",
    image: "https://images.unsplash.com/photo-1542343633-ce3256121f03?auto=format&fit=crop&q=80&w=400",
    location: { lat: 12.9716, lng: 77.5946 }
  },
  {
    id: "sarvajna",
    name: { en: "Sarvajna", kn: "ಸರ್ವಜ್ಞ", hi: "सर्वज्ञ" },
    description: { 
      en: "A 16th-century poet and philosopher famous for his tripadi verses.",
      kn: "ತಮ್ಮ ತ್ರಿಪದಿಗಳ ಮೂಲಕ ಪ್ರಸಿದ್ಧರಾದ ೧೬ನೇ ಶತಮಾನದ ಕವಿ ಮತ್ತು ದಾರ್ಶನಿಕ.",
      hi: "16वीं सदी के कवि और दार्शनिक जो अपने त्रिपदी छंदों के लिए प्रसिद्ध हैं।"
    },
    districtId: "shivamogga",
    category: "Poet",
    image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=400",
    location: { lat: 14.6186, lng: 75.5255 }
  },
  {
    id: "basavanna",
    name: { en: "Basavanna", kn: "ಬಸವಣ್ಣ", hi: "ಬಸವಣ್ಣ" },
    description: { 
      en: "A 12th-century philosopher, statesman, Kannada poet and a social reformer.",
      kn: "೧೨ನೇ ಶತಮಾನದ ದಾರ್ಶನಿಕ, ರಾಜತಾಂತ್ರಿಕ, ಕನ್ನಡ ಕವಿ ಮತ್ತು ಸಮಾಜ ಸುಧಾರಕ.",
      hi: "12वीं सदी के दार्शनिक, राजनेता, कन्नड़ कवि और समाज सुधारक।"
    },
    districtId: "belagavi",
    category: "Reformer",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/c089759d-4876-4dae-88ee-18dfec03f90e.png",
    location: { lat: 16.3315, lng: 75.8850 },
    featured: true
  },
  {
    id: "allama-prabhu",
    name: { en: "Allama Prabhu", kn: "ಅಲ್ಲಮ ಪ್ರಭು", hi: "ಅಲ್ಲಮ ಪ್ರಭು" },
    description: { 
      en: "A 12th-century mystic-saint and Vachana poet, the patron saint of the Veerashaiva movement.",
      kn: "೧೨ನೇ ಶತಮಾನದ ಅನುಭಾವಿ-ಸಂತ ಮತ್ತು ವಚನ ಕವಿ, ವೀರಶೈವ ಚಳವಳಿಯ ಪ್ರಮುಖ ಮಾರ್ಗದರ್ಶಕರು.",
      hi: "12वीं सदी के रहस्यवादी-संत और वचन कवि, वीरशैव आंदोलन के संरक्षक संत।"
    },
    districtId: "shivamogga",
    category: "Reformer",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/f0612c9b-6715-46f3-a26a-4933a38805cd.png",
    location: { lat: 14.1950, lng: 75.4020 }
  },
  {
    id: "kanaka-dasa",
    name: { en: "Kanaka Dasa", kn: "ಕನಕದಾಸರು", hi: "ಕನಕ ದಾಸ" },
    description: { 
      en: "A saint, philosopher, musician and composer from Karnataka, known for his Keertanas.",
      kn: "ಕರ್ನಾಟಕದ ಸಂತ, ದಾರ್ಶನಿಕ, ಸಂಗೀತಗಾರ ಮತ್ತು ಸಂಯೋಜಕರು, ಇವರು ತಮ್ಮ ಕೀರ್ತನೆಗಳಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದ್ದಾರೆ.",
      hi: "कर्नाटक के एक संत, दार्शनिक, संगीतकार और रचनाकार, जो अपने कीर्तनों के लिए जाने जाते हैं।"
    },
    districtId: "shivamogga",
    category: "Reformer",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/94602f37-6799-4708-8e6d-621e25ddead3.png",
    location: { lat: 14.8878, lng: 75.3970 }
  },
  {
    id: "madhavacharya",
    name: { en: "Madhavacharya", kn: "ಮಧ್ವಾಚಾರ್ಯರು", hi: "ಮಧ್ವಾಚಾರ್ಯ" },
    description: { 
      en: "A philosopher and the chief proponent of the Dvaita school of Vedanta.",
      kn: "ದಾರ್ಶನಿಕ ಮತ್ತು ವೇದಾಂತದ ದ್ವೈತ ಸಿದ್ಧಾಂತದ ಪ್ರವರ್ತಕರು.",
      hi: "एक दार्शनिक और वेदांत के द्वैत स्कूल के मुख्य प्रस्तावक।"
    },
    districtId: "mysuru",
    category: "Reformer",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/5034c44f-fd8e-49b0-bc37-fc2a417387cc.png",
    location: { lat: 13.3409, lng: 74.7421 }
  },
  {
    id: "kudmul-ranga-rao",
    name: { en: "Kudmul Ranga Rao", kn: "ಕುದ್ಮುಲ್ ರಂಗರಾವ್", hi: "ಕುದಮುುವಿನ ರಂಗ ರಾವ್" },
    description: { 
      en: "A great social reformer who worked for the education and empowerment of the depressed classes in Mangaluru.",
      kn: "ಮಂಗಳೂರಿನಲ್ಲಿ ದೀನದಲಿತರ ಶಿಕ್ಷಣ ಮತ್ತು ಸಬಲೀಕರಣಕ್ಕಾಗಿ ಶ್ರಮಿಸಿದ ಮಹಾನ್ ಸಮಾಜ ಸುಧಾರಕರು.",
      hi: "एक महान समाज सुधारक जिन्होंने मंगलुरु में दलित वर्गों की शिक्षा और सशक्तिकरण के लिए काम किया।"
    },
    districtId: "mysuru",
    category: "Reformer",
    image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/9e65e495-2ccb-449e-879e-4a6c8e32d56a.png",
    location: { lat: 12.8706, lng: 74.8801 }
  },
  {
    id: "kempe-gowda",
    name: { en: "Kempe Gowda", kn: "ಕೆಂಪೇಗೌಡ", hi: "केम्पेಗೌಡ" },
    description: { 
      en: "The legendary founder of Bengaluru who envisioned the city with four towers marking its boundaries.",
      kn: "ಬೆಂಗಳೂರು ನಗರದ ಪೌರಾಣಿಕ ಸ್ಥಾಪಕರು, ಅದರ ಗಡಿಗಳನ್ನು ಗುರುತಿಸುವ ನಾಲ್ಕು ಗೋಪುರಗಳೊಂದಿಗೆ ನಗರವನ್ನು ರೂಪಿಸಿದರು.",
      hi: "बेंगलुरु के पौराणिक संस्थापक जिन्होंने शहर की सीमाओं को चिह्नित करने वाले चार टावरों के साथ शहर की कल्पना की थी।"
    },
    districtId: "bengaluru",
    category: "Leader",
    image: "https://images.unsplash.com/photo-1596402184320-417d717867cd?auto=format&fit=crop&q=80&w=800",
    location: { lat: 12.9716, lng: 77.5946 },
    featured: true
  }
];

export const stories: Story[] = [
  {
    id: "s1",
    heroId: "kittur-chennamma",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/32f8313e-3240-410a-8bfb-9366113b2ceb.png",
        text: {
          en: "Kittur Rani Chennamma was born on 23 October 1778 in Kittur. She was trained in horse riding, sword fighting, and archery from a young age.",
          kn: "ಕಿತ್ತೂರು ರಾಣಿ ಚೆನ್ನಮ್ಮ ೧೭೭೮ರ ಅಕ್ಟೋಬರ್ ೨೩ ರಂದು ಕಿತ್ತೂರಿನಲ್ಲಿ ಜನಿಸಿದರು. ಅವರು ಚಿಕ್ಕ ವಯಸ್ಸಿನಿಂದಲೇ ಕುದುರೆ ಸವಾರಿ, ಕತ್ತಿವರಸೆ ಮತ್ತು ಬಿಲ್ಲುಗಾರಿಕೆಯಲ್ಲಿ ತರಬೇತಿ ಪಡೆದಿದ್ದರು.",
          hi: "कित्तूर रानी चेन्नम्मा का जन्म 23 अक्टूबर 1778 को कित्तूर में हुआ था। उन्हें कम उम्र से ही घुड़सवारी, तलवारबाजी और तीरंदाजी में प्रशिक्षित किया गया था।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1582555172866-f73bb126c739?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "After the death of her husband, Raja Mallasarja, the British refused to recognize her adopted son as the rightful heir under the Doctrine of Lapse.",
          kn: "ಅವರ ಪತಿ ರಾಜ ಮಲ್ಲಸರ್ಜರ ಮರಣದ ನಂತರ, ಬ್ರಿಟಿಷರು 'ದತ್ತು ಮಕ್ಕಳಿಗೆ ಹಕ್ಕಿಲ್ಲ' ಎಂಬ ನೀತಿಯಡಿ ಅವರ ದತ್ತು ಮಗನನ್ನು ಉತ್ತರಾಧಿಕಾರಿಯಾಗಿ ಗುರುತಿಸಲು ನಿರಾಕರಿಸಿದರು.",
          hi: "उनके पति, राजा मल्लसरजा की मृत्यु के बाद, अंग्रेजों ने 'डॉक्ट्रिन ऑफ लैप्स' के तहत उनके दत्तक पुत्र को वैध उत्तराधिकारी के रूप में मान्यता देने से इनकार कर दिया।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1605142105126-72433f0099e7?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Refusing to surrender her kingdom, Rani Chennamma led an armed rebellion against the British in 1824. She successfully defeated the British forces in the initial battle.",
          kn: "ತನ್ನ ಸಾಮ್ರಾಜ್ಯವನ್ನು ಬಿಟ್ಟುಕೊಡಲು ಒಪ್ಪದ ಚೆನ್ನಮ್ಮ ೧೮೨೪ರಲ್ಲಿ ಬ್ರಿಟಿಷರ ವಿರುದ್ಧ ಸಶಸ್ತ್ರ ದಂಗೆಯನ್ನು ಮುನ್ನಡೆಸಿದರು. ಆರಂಭಿಕ ಯುದ್ಧದಲ್ಲಿ ಬ್ರಿಟಿಷ್ ಪಡೆಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸೋಲಿಸಿದರು.",
          hi: "अपने राज्य को आत्मसमर्पण करने से इनकार करते हुए, रानी चेन्नम्मा ने 1824 में अंग्रेजों के खिलाफ सशस्त्र विद्रोह का नेतृत्व किया। उन्होंने शुरुआती लड़ाई में ब्रिटिश सेना को सफलतापूर्वक हरा दिया।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Although she was later captured and imprisoned, her fight against injustice made her a symbol of courage and patriotism, inspiring generations.",
          kn: "ನಂತರ ಅವರನ್ನು ಸೆರೆಹಿಡಿದು ಜೈಲಿನಲ್ಲಿರಿಸಿದರೂ, ಅನ್ಯಾಯದ ವಿರುದ್ಧದ ಅವರ ಹೋರಾಟವು ಅವರನ್ನು ಧೈರ್ಯ ಮತ್ತು ದೇಶಭಕ್ತಿಯ ಸಂಕೇತವನ್ನಾಗಿ ಮಾಡಿತು.",
          hi: "हालांकि बाद में उन्हें पकड़ लिया गया और कैद कर लिया गया, लेकिन अन्याय के खिलाफ उनकी लड़ाई ने उन्हें साहस और देशभक्ति का प्रतीक बना दिया।"
        }
      }
    ]
  },
  {
    id: "s2",
    heroId: "onake-obavva",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/7c216c56-f6eb-460d-8547-0639dcc6f5ac.png",
        text: {
          en: "In the 18th century, Haider Ali's army attacked the Chitradurga Fort. They found a secret hole in the fort walls to enter.",
          kn: "೧೮ನೇ ಶತಮಾನದಲ್ಲಿ ಹೈದರ್ ಅಲಿಯ ಸೈನ್ಯವು ಚಿತ್ರದುರ್ಗದ ಕೋಟೆಯ ಮೇಲೆ ದಾಳಿ ಮಾಡಿತು. ಅವರು ಕೋಟೆಯೊಳಗೆ ಪ್ರವೇಶಿಸಲು ಒಂದು ಗುಪ್ತ ರಂಧ್ರವನ್ನು ಕಂಡುಕೊಂಡರು.",
          hi: "18वीं शताब्दी में, हैदर अली की सेना ने चित्रदुर्ग किले पर हमला किया। उन्हें प्रवेश के लिए किले की दीवारों में एक गुप्त छेद मिला।"
        }
      },
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/7c216c56-f6eb-460d-8547-0639dcc6f5ac.png",
        text: {
          en: "Obavva, a common woman, noticed this. She used a heavy pestle (Onake) to single-handedly stop the enemy soldiers one by one.",
          kn: "ಸಾಮಾನ್ಯ ಮಹಿಳೆಯಾಗಿದ್ದ ಓಬವ್ವ ಇದನ್ನು ಗಮನಿಸಿದರು. ಅವರು ಕೇವಲ ಒಂದು ಒನಕೆಯನ್ನು ಬಳಸಿ ಶತ್ರು ಸೈನಿಕರನ್ನು ಒಬ್ಬೊಬ್ಬರಾಗಿ ಸಂಹರಿಸಿದರು.",
          hi: "ओबव्वा, एक सामान्य महिला, ने इसे देखा। उन्होंने एक भारी मूसल (ओनके) का उपयोग करके अकेले ही एक-एक करके दुश्मन सैनिकों को रोका।"
        }
      }
    ]
  },
  {
    id: "s3",
    heroId: "kuvempu",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/bc447a15-0810-4742-b062-841f3d64a780.png",
        text: {
          en: "Kuvempu was born in the beautiful Malnad region. He grew up surrounded by hills, forests, and the beauty of nature which inspired his poems.",
          kn: "ಕುವೆಂಪು ಅವರು ಸುಂದರವಾದ ಮಲೆನಾಡು ಪ್ರದೇಶದಲ್ಲಿ ಜನಿಸಿದರು. ಅವರು ಬೆಟ್ಟಗಳು, ಕಾಡುಗಳು ಮತ್ತು ಪ್ರಕೃತಿಯ ಸೌಂದರ್ಯದ ನಡುವೆ ಬೆಳೆದರು, ಇದು ಅವರ ಕವಿತೆಗಳಿಗೆ ಪ್ರೇರಣೆ ನೀಡಿತು.",
          hi: "कुवेम्पु का जन्म सुंदर मलनाड क्षेत्र में हुआ था। वह पहाड़ियों, जंगलों और प्रकृति की सुंदरता से घिरे हुए पले-बढ़े, जिसने उनकी कविताओं को प्रेरित किया।"
        }
      },
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/bc447a15-0810-4742-b062-841f3d64a780.png",
        text: {
          en: "He wrote the state anthem of Karnataka, 'Jaya Bharata Jananiya Tanujate', and became the first Kannada writer to receive the Jnanpith Award.",
          kn: "ಅವರು ಕರ್ನಾಟಕದ ನಾಡಗೀತೆ 'ಜಯ ಭಾರತ ಜನನಿಯ ತನುಜಾತೆ' ಯನ್ನು ಬರೆದರು ಮತ್ತು ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿಯನ್ನು ಪಡೆದ ಮೊದಲ ಕನ್ನಡ ಲೇಖಕರಾದರು.",
          hi: "उन्होंने कर्नाटक का राज्य गान 'जय भारत जननिया तनुजाते' लिखा और ज्ञानपीठ पुरस्कार प्राप्त करने वाले पहले कन्नड़ लेखक बने।"
        }
      }
    ]
  },
  {
    id: "s4",
    heroId: "basavanna",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/c089759d-4876-4dae-88ee-18dfec03f90e.png",
        text: {
          en: "Basavanna was a 12th-century philosopher who lived in Bagewadi. He was a great advocate of social equality and unity.",
          kn: "ಬಸವಣ್ಣ ೧೨ನೇ ಶತಮಾನದ ದಾರ್ಶನಿಕರಾಗಿದ್ದು, ಬಾಗೇವಾಡಿಯಲ್ಲಿ ವಾಸಿಸುತ್ತಿದ್ದರು. ಅವರು ಸಾಮಾಜಿಕ ಸಮಾನತೆ ಮತ್ತು ಏಕತೆಯ ಮಹಾನ್ ಪ್ರತಿಪಾದಕರಾಗಿದ್ದರು.",
          hi: "बसवण्णा 12वीं शताब्दी के दार्शनिक थे जो बागेवाड़ी में रहते थे। वह सामाजिक समानता और एकता के महान समर्थक थे।"
        }
      },
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/c089759d-4876-4dae-88ee-18dfec03f90e.png",
        text: {
          en: "He established the 'Anubhava Mantapa', a spiritual parliament for open discussion, and taught that 'Work is Worship' (Kayakave Kailasa).",
          kn: "ಅವರು ಬಹಿರಂಗ ಚರ್ಚೆಗಾಗಿ ಆಧ್ಯಾತ್ಮಿಕ ಸಂಸತ್ತಾದ 'ಅನುಭವ ಮಂಟಪ'ವನ್ನು ಸ್ಥಾಪಿಸಿದರು ಮತ್ತು 'ಕಾಯಕವೇ ಕೈಲಾಸ' ಎಂದು ಬೋಧಿಸಿದರು.",
          hi: "उन्होंने खुली चर्चा के लिए एक आध्यात्मिक संसद 'अनुभव मंटप' की स्थापना की, और सिखाया कि 'कार्य ही पूजा है' (कायकवे कैलासा)।"
        }
      }
    ]
  },
  {
    id: "s5",
    heroId: "kempe-gowda",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1596402184320-417d717867cd?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Hiriya Kempe Gowda founded Bengaluru in 1537. Legend says he chose the spot while hunting, when he saw a rabbit chase his dog, showing the 'heroic' nature of the land.",
          kn: "ಹಿರಿಯ ಕೆಂಪೇಗೌಡರು ೧೫೩೭ರಲ್ಲಿ ಬೆಂಗಳೂರನ್ನು ಸ್ಥಾಪಿಸಿದರು. ಸಾಕು ನಾಯಿಯನ್ನು ಮೊಲವೊಂದು ಅಟ್ಟಿಸಿಕೊಂಡು ಹೋಗಿದ್ದನ್ನು ಕಂಡು, ಆ ಮಣ್ಣಿನ 'ವೀರ' ಗುಣಕ್ಕೆ ಮಾರುಹೋಗಿ ಇಲ್ಲೇ ನಗರ ಕಟ್ಟಲು ನಿರ್ಧರಿಸಿದರು.",
          hi: "हिरिया केम्पेगौड़ा ने 1537 में बेंगलुरु की स्थापना की। किंवदंती है कि उन्होंने शिकार के दौरान इस स्थान को चुना था, जब उन्होंने एक खरगोश को अपने कुत्ते का पीछा करते देखा था।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1582555172866-f73bb126c739?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He built four towers to mark the limits of the city and encouraged trade and commerce, making Bengaluru a major hub in South India.",
          kn: "ನಗರದ ಗಡಿಗಳನ್ನು ಗುರುತಿಸಲು ಅವರು ನಾಲ್ಕು ಗೋಪುರಗಳನ್ನು ನಿರ್ಮಿಸಿದರು ಮತ್ತು ವ್ಯಾಪಾರ-ವಹಿವಾಟನ್ನು ಉತ್ತೇಜಿಸಿದರು, ಬೆಂಗಳೂರನ್ನು ದಕ್ಷಿಣ ಭಾರತದ ಪ್ರಮುಖ ಕೇಂದ್ರವನ್ನಾಗಿ ಮಾಡಿದರು.",
          hi: "उन्होंने शहर की सीमाओं को चिह्नित करने के लिए चार टावरों का निर्माण किया और व्यापार और वाणिज्य को प्रोत्साहित किया।"
        }
      }
    ]
  },
  {
    id: "s6",
    heroId: "krishnadevaraya",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1582555172866-f73bb126c739?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Krishnadevaraya (1471–1529) was the greatest emperor of the Vijayanagara Empire. He ruled during its golden period, remembered for strong leadership and military victories.",
          kn: "ಕೃಷ್ಣದೇವರಾಯ (೧೪೭೧-೧೫೨೯) ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಶ್ರೇಷ್ಠ ಚಕ್ರವರ್ತಿ. ಅವರ ಆಳ್ವಿಕೆಯು ಸಾಮ್ರಾಜ್ಯದ ಸುವರ್ಣ ಕಾಲವಾಗಿದ್ದು, ಅವರ ನಾಯಕತ್ವ ಮತ್ತು ವಿಜಯಗಳಿಗೆ ಸಾಕ್ಷಿಯಾಗಿದೆ.",
          hi: "कृष्णदेवराय (1471-1529) विजयनगर साम्राज्य के सबसे महान सम्राट थे। उन्होंने इसके स्वर्ण काल ​​​​के दौरान शासन किया, जिसे उनके मजबूत नेतृत्व और सैन्य जीत के लिए याद किया जाता है।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He was a great patron of literature. The famous 'Ashtadiggajas' (eight scholars) graced his court, leading to the development of both Telugu and Kannada literature.",
          kn: "ಅವರು ಸಾಹಿತ್ಯದ ಮಹಾನ್ ಪೋಷಕರು. ಅವರ ಆಸ್ಥಾನದಲ್ಲಿದ್ದ 'ಅಷ್ಟದಿಗ್ಗಜರು' ತೆಲುಗು ಮತ್ತು ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಬೆಳವಣಿಗೆಗೆ ಅಪಾರ ಕೊಡುಗೆ ನೀಡಿದರು.",
          hi: "वे साहित्य के महान संरक्षक थे। प्रसिद्ध 'अष्टदिग्गज' (आठ विद्वान) उनके दरबार की शोभा बढ़ाते थे, जिससे तेलुगु और कन्नड़ साहित्य का विकास हुआ।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He transformed Hampi into a powerful cultural and economic center. His rule is considered one of the most prosperous periods in South Indian history.",
          kn: "ಅವರು ಹಂಪಿಯನ್ನು ಪ್ರಬಲ ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಆರ್ಥಿಕ ಕೇಂದ್ರವನ್ನಾಗಿ ಮಾಡಿದರು. ಅವರ ಆಳ್ವಿಕೆಯು ದಕ್ಷಿಣ ಭಾರತದ ಇತಿಹಾಸದಲ್ಲಿ ಅತ್ಯಂತ ಸಮೃದ್ಧ ಅವಧಿಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
          hi: "उन्होंने हम्पी को एक शक्तिशाली सांस्कृतिक और आर्थिक केंद्र में बदल दिया। उनके शासन को दक्षिण भारतीय इतिहास के सबसे समृद्ध कालखंडों में से एक माना जाता है।"
        }
      }
    ]
  },
  {
    id: "s7",
    heroId: "sangolli-rayanna",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/065b267b-1cb8-466d-a60d-fb172c686f0c.png",
        text: {
          en: "Sangolli Rayanna (1798–1831) was a brave freedom fighter from Karnataka and a loyal commander of the Kittur kingdom army under Rani Chennamma.",
          kn: "ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ (೧೭೯೮–೧೮೩೧) ಕರ್ನಾಟಕದ ವೀರ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರ ಮತ್ತು ರಾಣಿ ಚೆನ್ನಮ್ಮ ಅವರ ನೇತೃತ್ವದ ಕಿತ್ತೂರು ಸಂಸ್ಥಾನದ ಸೈನ್ಯದ ನಿಷ್ಠಾವಂತ ಸೇನಾಧಿಪತಿಯಾಗಿದ್ದರು.",
          hi: "संगोल्ली रायण्णा (1798-1831) कर्नाटक के एक बहादुर स्वतंत्रता सेनानी और रानी चेन्नम्मा के अधीन कित्तूर साम्राज्य की सेना के एक वफादार कमांडर थे।"
        }
      },
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/065b267b-1cb8-466d-a60d-fb172c686f0c.png",
        text: {
          en: "After the British arrested Rani Chennamma, Rayanna continued the resistance against British rule by organizing guerrilla attacks and mobilizing local people.",
          kn: "ಬ್ರಿಟಿಷರು ರಾಣಿ ಚೆನ್ನಮ್ಮರನ್ನು ಬಂಧಿಸಿದ ನಂತರ, ರಾಯಣ್ಣ ಶತ್ರುಗಳ ವಿರುದ್ಧ ಗೆರಿಲ್ಲಾ ಮಾದರಿಯ ದಾಳಿಗಳನ್ನು ಸಂಘಟಿಸುವ ಮೂಲಕ ಹೋರಾಟವನ್ನು ಮುಂದುವರಿಸಿದರು.",
          hi: "अंग्रेजों द्वारा रानी चेन्नम्मा को गिरफ्तार किए जाने के बाद, रायण्णा ने गुरिल्ला हमलों का आयोजन करके और स्थानीय लोगों को एकजुट करके ब्रिटिश शासन के खिलाफ प्रतिरोध जारी रखा।"
        }
      },
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/065b267b-1cb8-466d-a60d-fb172c686f0c.png",
        text: {
          en: "He was captured by the British and executed in 1831, but he remains a powerful symbol of resistance in Karnataka’s freedom struggle history.",
          kn: "೧೮೩೧ರಲ್ಲಿ ಬ್ರಿಟಿಷರು ಅವರನ್ನು ಬಂಧಿಸಿ ಗಲ್ಲಿಗೇರಿಸಿದರು, ಆದರೆ ಕರ್ನಾಟಕದ ಸ್ವಾತಂತ್ರ್ಯ ಸಂಗ್ರಾಮದ ಇತಿಹಾಸದಲ್ಲಿ ಅವರು ಇಂದಿಗೂ ಪ್ರತಿರೋಧದ ಶಕ್ತಿಯುತ ಸಂಕೇತವಾಗಿ ಉಳಿದಿದ್ದಾರೆ.",
          hi: "उन्हें 1831 में अंग्रेजों द्वारा पकड़ लिया गया और फांसी दे दी गई, लेकिन वे कर्नाटक के स्वतंत्रता संग्राम के इतिहास में प्रतिरोध के एक शक्तिशाली प्रतीक बने हुए हैं।"
        }
      }
    ]
  },
  {
    id: "s8",
    heroId: "karnad-sadashiva-rao",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Karnad Sadashiva Rao (1881–1937) was a prominent freedom fighter from Karnataka, especially known for his role in the Indian independence movement in coastal Karnataka.",
          kn: "ಕರ್ನಾಡ್ ಸದಾಶಿವ ರಾವ್ (೧೮೮೧-೧೯೩೭) ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರರಾಗಿದ್ದರು, ವಿಶೇಷವಾಗಿ ಕರಾವಳಿ ಕರ್ನಾಟಕದಲ್ಲಿ ಸ್ವಾತಂತ್ರ್ಯ ಚಳವಳಿಯಲ್ಲಿ ಅವರ ಪಾತ್ರ ಮಹತ್ತರವಾದುದು.",
          hi: "कर्नाड सदाशिव राव (1881-1937) कर्नाटक के एक प्रमुख स्वतंत्रता सेनानी थे, जो विशेष रूप से तटीय कर्नाटक में भारतीय स्वतंत्रता आंदोलन में अपनी भूमिका के लिए जाने जाते हैं।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1582555172866-f73bb126c739?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He was inspired by Mahatma Gandhi and actively participated in movements like the Non-Cooperation Movement. He gave up a comfortable and wealthy life to serve the nation.",
          kn: "ಅವರು ಮಹಾತ್ಮಾ ಗಾಂಧಿಯವರಿಂದ ಪ್ರಭಾವಿತರಾಗಿದ್ದರು ಮತ್ತು ಅಸಹಕಾರ ಚಳವಳಿಯಂತಹ ಹೋರಾಟಗಳಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿ ಭಾಗವಹಿಸಿದ್ದರು. ದೇಶದ ಸೇವೆಗಾಗಿ ಅವರು ತಮ್ಮ ವೈಭೋಗದ ಜೀವನವನ್ನು ತ್ಯಜಿಸಿದರು.",
          hi: "वे महात्मा गांधी से प्रेरित थे और असहयोग आंदोलन जैसे आंदोलनों में सक्रिय रूप से भाग लिया। उन्होंने राष्ट्र की सेवा के लिए एक आरामदायक और समृद्ध जीवन त्याग दिया।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He also contributed to social service, including education, relief work, and helping the poor. He spent most of his wealth for public causes and lived a simple life.",
          kn: "ಅವರು ಶಿಕ್ಷಣ, ಪರಿಹಾರ ಕಾರ್ಯ ಮತ್ತು ಬಡವರಿಗೆ ಸಹಾಯ ಮಾಡುವುದು ಸೇರಿದಂತೆ ಸಮಾಜ ಸೇವೆಯಲ್ಲಿ ತೊಡಗಿದ್ದರು. ತಮ್ಮ ಹೆಚ್ಚಿನ ಸಂಪತ್ತನ್ನು ಸಾರ್ವಜನಿಕ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಕಳೆದರು ಮತ್ತು ಸರಳ ಜೀವನ ನಡೆಸಿದರು.",
          hi: "उन्होंने शिक्षा, राहत कार्य और गरीबों की मदद सहित समाज सेवा में भी योगदान दिया। उन्होंने अपनी अधिकांश संपत्ति सार्वजनिक कारणों के लिए खर्च की और एक साधारण जीवन व्यतीत किया।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Karnad Sadashiva Rao is remembered for his patriotism, sacrifice, and selfless service, making him an important figure in Karnataka’s freedom movement history.",
          kn: "ಕರ್ನಾಡ್ ಸದಾಶಿವ ರಾವ್ ಅವರ ದೇಶಭಕ್ತಿ, ತ್ಯಾಗ ಮತ್ತು ನಿಸ್ವಾರ್ಥ ಸೇವೆಗಾಗಿ ಅವರು ಇಂದಿಗೂ ಮನೆಮಾತಾಗಿದ್ದಾರೆ, ಇದು ಅವರನ್ನು ಕರ್ನಾಟಕದ ಸ್ವಾತಂತ್ರ್ಯ ಚಳವಳಿಯ ಇತಿಹಾಸದಲ್ಲಿ ಪ್ರಮುಖ ವ್ಯಕ್ತಿಯನ್ನಾಗಿ ಮಾಡಿದೆ.",
          hi: "कर्नाड सदाशिव राव को उनकी देशभक्ति, बलिदान और निस्वार्थ सेवा के लिए याद किया जाता है, जो उन्हें कर्नाटक के स्वतंत्रता आंदोलन के इतिहास में एक महत्वपूर्ण व्यक्ति बनाता है।"
        }
      }
    ]
  },
  {
    id: "s9",
    heroId: "umabai-kundapur",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/965f3d64-e40d-45f8-8a8f-2872bc97d919.png",
        text: {
          en: "Umabai Kundapur was a freedom fighter from Karnataka and an important woman leader in the Indian independence movement.",
          kn: "ಉಮಾಬಾಯಿ ಕುಂದಾಪುರ ಕರ್ನಾಟಕದ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರ್ತಿ ಮತ್ತು ಭಾರತೀಯ ಸ್ವಾತಂತ್ರ್ಯ ಚಳವಳಿಯ ಪ್ರಮುಖ ಮಹಿಳಾ ನಾಯಕಿಯಾಗಿದ್ದರು.",
          hi: "उमाबाई कुंदापुर कर्नाटक की एक स्वतंत्रता सेनानी और भारतीय स्वतंत्रता आंदोलन की एक महत्वपूर्ण महिला नेता थीं।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1582555172866-f73bb126c739?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "She actively participated in nationalist activities and supported the Congress Seva Dal, organizing volunteers and spreading awareness about freedom.",
          kn: "ಅವರು ರಾಷ್ಟ್ರೀಯ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿ ಭಾಗವಹಿಸಿದರು ಮತ್ತು ಕಾಂಗ್ರೆಸ್ ಸೇವಾದಳವನ್ನು ಬೆಂಬಲಿಸಿದರು, ಸ್ವಯಂಸೇವಕರನ್ನು ಸಂಘಟಿಸಲು ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯದ ಬಗ್ಗೆ ಜಾಗೃತಿ ಮೂಡಿಸಲು ಶ್ರಮಿಸಿದರು.",
          hi: "उन्होंने सक्रिय रूप से राष्ट्रवादी गतिविधियों में भाग लिया और स्वयंसेवकों को संगठित करने और स्वतंत्रता के बारे में जागरूकता फैलाने में कांग्रेस सेवा दल का समर्थन किया।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "She is remembered for her courage and leadership. She played an important role in strengthening women’s participation in the independence movement.",
          kn: "ಅವರ ಧೈರ್ಯ ಮತ್ತು ನಾಯಕತ್ವಕ್ಕಾಗಿ ಅವರನ್ನು ನೆನಪಿಸಿಕೊಳ್ಳಲಾಗುತ್ತದೆ. ಸ್ವಾತಂತ್ರ್ಯ ಚಳವಳಿಯಲ್ಲಿ ಮಹಿಳೆಯರ ಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ಬಲಪಡಿಸುವಲ್ಲಿ ಅವರು ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದ್ದಾರೆ.",
          hi: "उन्हें उनके साहस और नेतृत्व के लिए याद किया जाता है। उन्होंने स्वतंत्रता आंदोलन में महिलाओं की भागीदारी को मजबूत करने में महत्वपूर्ण भूमिका निभाई।"
        }
      }
    ]
  },
  {
    id: "s10",
    heroId: "rani-abbakka",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/7c70ae86-50c2-4a00-ab60-14e4fe6f2f9c.png",
        text: {
          en: "Rani Abbakka Chowta was the first Tuluva Queen of Ullal who fought the Portuguese in the late 16th century.",
          kn: "ರಾಣಿ ಅಬ್ಬಕ್ಕ ಚೌಟ ೧೬ನೇ ಶತಮಾನದ ಕೊನೆಯಲ್ಲಿ ಪೋರ್ಚುಗೀಸರ ವಿರುದ್ಧ ಹೋರಾಡಿದ ಉಳ್ಳಾಲದ ಮೊದಲ ತುಳುವ ರಾಣಿಯಾಗಿದ್ದರು.",
          hi: "रानी अब्बक्का चौटा उल्लाल की पहली तुलुवा रानी थीं जिन्होंने 16वीं शताब्दी के अंत में पुर्तगालियों से लड़ाई लड़ी थी।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1582555172866-f73bb126c739?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "She is known as 'Abhaya Rani' (the fearless queen) for her extraordinary courage and military tactics.",
          kn: "ಅವರ ಅಸಾಧಾರಣ ಧೈರ್ಯ ಮತ್ತು ಸೈನಿಕ ತಂತ್ರಗಳಿಗಾಗಿ ಅವರನ್ನು 'ಅಭಯ ರಾಣಿ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
          hi: "उन्हें उनके असाधारण साहस और सैन्य रणनीति के लिए 'अभय रानी' (निडर रानी) के रूप में जाना जाता है।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "She successfully repelled Portuguese attacks for over four decades, protecting the coast of Karnataka.",
          kn: "ಅವರು ನಾಲ್ಕು ದಶಕಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ ಪೋರ್ಚುಗೀಸರ ದಾಳಿಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಹಿಮ್ಮೆಟ್ಟಿಸಿದರು ಮತ್ತು ಕರ್ನಾಟಕದ ಕರಾವಳಿಯನ್ನು ರಕ್ಷಿಸಿದರು.",
          hi: "उन्होंने चार दशकों से अधिक समय तक पुर्तगाली हमलों को सफलतापूर्वक विफल किया, कर्नाटक के तट की रक्षा की।"
        }
      }
    ]
  },
  {
    id: "s11",
    heroId: "dr-bendre",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/9488a032-1f48-4384-90a8-b64906f366e6.png",
        text: {
          en: "Dattatraya Ramachandra Bendre (1896–1981) was a legendary Kannada poet, popularly known as 'Vara Kavi'.",
          kn: "ದತ್ತಾತ್ರೇಯ ರಾಮಚಂದ್ರ ಬೇಂದ್ರೆ (೧೮೯೬–೧೯೮೧) ಒಬ್ಬ ಪೌರಾಣಿಕ ಕನ್ನಡ ಕವಿ, ಇವರನ್ನು ಜನಪ್ರಿಯವಾಗಿ 'ವರಕವಿ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
          hi: "दत्तात्रेय रामचंद्र बेन्द्रे (1896-1981) एक महान कन्नड़ कवि थे, जिन्हें लोकप्रिय रूप से 'वर कवि' के रूप में जाना जाता था।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He received the Jnanpith Award for his collection of poems 'Naku Tanti'. His poetry is celebrated for its lyrical beauty.",
          kn: "ಅವರ 'ನಾಕು ತಂತಿ' ಕವನ ಸಂಕಲನಕ್ಕಾಗಿ ಅವರಿಗೆ ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ಲಭಿಸಿತು. ಇವರ ಕವಿತೆಗಳು ಅವುಗಳ ಲಯಬದ್ಧ ಸೌಂದರ್ಯಕ್ಕೆ ಹೆಸರುವಾಸಿಯಾಗಿವೆ.",
          hi: "उन्होंने अपने कविता संग्रह 'नाकू तंती' के लिए ज्ञानपीठ पुरस्कार प्राप्त किया। उनकी कविता अपनी गीतात्मक सुंदरता के लिए मनाई जाती है।"
        }
      }
    ]
  },
  {
    id: "s12",
    heroId: "akka-mahadevi",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/76b3ea66-9bb8-4fc3-a558-f9b20755589c.png",
        text: {
          en: "Akka Mahadevi was a prominent figure in the Veerashaiva Bhakti movement of the 12th century.",
          kn: "ಅಕ್ಕ ಮಹಾದೇವಿ ೧೨ನೇ ಶತಮಾನದ ವೀರಶೈವ ಭಕ್ತಿ ಚಳವಳಿಯ ಪ್ರಮುಖ ವ್ಯಕ್ತಿಯಾಗಿದ್ದರು.",
          hi: "अक्का महादेवी 12वीं शताब्दी के वीरशैव भक्ति आंदोलन की एक प्रमुख व्यक्तित्व थीं।"
        }
      },
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/76b3ea66-9bb8-4fc3-a558-f9b20755589c.png",
        text: {
          en: "She was a great poet and a symbol of female empowerment, expressing her devotion to Lord Shiva through Vachanas.",
          kn: "ಅವರು ಶ್ರೇಷ್ಠ ಕವಿ ಮತ್ತು ಮಹಿಳಾ ಸಬಲೀಕರಣದ ಸಂಕೇತವಾಗಿದ್ದರು, ವಚನಗಳ ಮೂಲಕ ಶಿವನ ಮೇಲಿನ ಭಕ್ತಿಯನ್ನು ವ್ಯಕ್ತಪಡಿಸಿದರು.",
          hi: "वे एक महान कवयित्री और महिला सशक्तिकरण की प्रतीक थीं, जिन्होंने वचनों के माध्यम से भगवान शिव के प्रति अपनी भक्ति व्यक्त की।"
        }
      }
    ]
  },
  {
    id: "s13",
    heroId: "kamaladevi-chattopadhyay",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/965f3d64-e40d-45f8-8a8f-2872bc97d919.png",
        text: {
          en: "Kamaladevi Chattopadhyay (1903–1988) was a social reformer, freedom fighter, and a key figure in the independence movement.",
          kn: "ಕಮಲಾದೇವಿ ಚಟ್ಟೋಪಾಧ್ಯಾಯ (೧೯೦೩-೧೯೮೮) ಸಮಾಜ ಸುಧಾರಕಿ, ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರ್ತಿ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯ ಚಳವಳಿಯ ಪ್ರಮುಖ ವ್ಯಕ್ತಿಯಾಗಿದ್ದರು.",
          hi: "कमलादेवी चट्टोपाध्याय (1903-1988) एक समाज सुधारक, स्वतंत्रता सेनानी और स्वतंत्रता आंदोलन की एक प्रमुख व्यक्तित्व थीं।"
        }
      },
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/965f3d64-e40d-45f8-8a8f-2872bc97d919.png",
        text: {
          en: "She played a vital role in reviving Indian handicrafts and theater, ensuring the survival of traditional arts.",
          kn: "ಅವರು ಭಾರತೀಯ ಕರಕುಶಲ ಮತ್ತು ರಂಗಭೂಮಿಯ ಪುನರುಜ್ಜೀವನದಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದರು, ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆಗಳ ಉಳಿವನ್ನು ಖಚಿತಪಡಿಸಿದರು.",
          hi: "उन्होंने भारतीय हस्तशिल्प और रंगमंच को पुनर्जीवित करने में महत्वपूर्ण भूमिका निभाई, जिससे पारंपरिक कलाओं का अस्तित्व सुनिश्चित हुआ।"
        }
      }
    ]
  },
  {
    id: "s14",
    heroId: "gangadharrao-deshpande",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Gangadharrao Deshpande (1871–1960) was a prominent leader from Belagavi, known as 'Karnataka Simha' (Lion of Karnataka).",
          kn: "ಗಂಗಾಧರರಾವ್ ದೇಶಪಾಂಡೆ (೧೮೭೧–೧೯೬೦) ಬೆಳಗಾವಿಯ ಪ್ರಮುಖ ನಾಯಕರಾಗಿದ್ದರು, ಇವರನ್ನು 'ಕರ್ನಾಟಕ ಸಿಂಹ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
          hi: "गंगाधरराव देशपांडे (1871-1960) बेलगावी के एक प्रमुख नेता थे, जिन्हें 'कर्नाटक सिंह' के रूप में जाना जाता था।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He was an unconditional follower of Lokmanya Tilak and organized the Belagavi Congress session in 1924, presided by Gandhi.",
          kn: "ಅವರು ಲೋಕಮಾನ್ಯ ತಿಲಕರ ಪರಮ ಅನುಯಾಯಿಯಾಗಿದ್ದರು ಮತ್ತು ಗಾಂಧೀಜಿಯವರ ಅಧ್ಯಕ್ಷತೆಯಲ್ಲಿ ೧೯೨೪ರಲ್ಲಿ ಬೆಳಗಾವಿ ಕಾಂಗ್ರೆಸ್ ಅಧಿವೇಶನವನ್ನು ಆಯೋಜಿಸಿದರು.",
          hi: "वे लोकमान्य तिलक के बिना शर्त अनुयायी थे और उन्होंने 1924 में बेलगावी कांग्रेस अधिवेशन का आयोजन किया, जिसकी अध्यक्षता गांधी ने की थी।"
        }
      }
    ]
  },
  {
    id: "s15",
    heroId: "ns-hardikar",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/2dbddb2a-7186-4bd2-bf9e-10bca0b1c2b5.png",
        text: {
          en: "Dr. N.S. Hardikar founded the Seva Dal to organize and discipline the youth for the freedom struggle.",
          kn: "ಡಾ. ಎನ್.ಎಸ್. ಹರ್ಡಿಕರ್ ಯುವಕರನ್ನು ಸಂಘಟಿಸಲು ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಕ್ಕಾಗಿ ಅವರನ್ನು ಸಿದ್ಧಗೊಳಿಸಲು ಸೇವಾದಳವನ್ನು ಸ್ಥಾಪಿಸಿದರು.",
          hi: "डॉ. एन.एस. हर्डीकर ने स्वतंत्रता संग्राम के लिए युवाओं को संगठित और अनुशासित करने के लिए सेवा दल की स्थापना की।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1582555172866-f73bb126c739?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He played a vital role in creating a strong volunteer base for national campaigns led by the Indian National Congress.",
          kn: "ಭಾರತೀಯ ರಾಷ್ಟ್ರೀಯ ಕಾಂಗ್ರೆಸ್ ನೇತೃತ್ವದ ರಾಷ್ಟ್ರೀಯ ಅಭಿಯಾನಗಳಿಗೆ ಪ್ರಬಲ ಸ್ವಯಂಸೇವಕರ ಪಡೆಯನ್ನು ರಚಿಸುವಲ್ಲಿ ಅವರು ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದರು.",
          hi: "उन्होंने भारतीय राष्ट्रीय कांग्रेस के नेतृत्व में राष्ट्रीय अभियानों के लिए एक मजबूत स्वयंसेवक आधार बनाने में महत्वपूर्ण भूमिका निभाई।"
        }
      }
    ]
  },
  {
    id: "s16",
    heroId: "bellary-siddamma",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/7680072c-29f7-410c-be49-9df038df37a2.png",
        text: {
          en: "Bellary Siddamma was a fearless freedom fighter who actively participated in the Quit India Movement.",
          kn: "ಬಳ್ಳಾರಿ ಸಿದ್ದಮ್ಮ ಕ್ವಿಟ್ ಇಂಡಿಯಾ ಚಳವಳಿಯಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿ ಭಾಗವಹಿಸಿದ ನಿರ್ಭೀತ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರ್ತಿ.",
          hi: "बल्लारी सिद्धम्मा एक निडर स्वतंत्रता सेनानी थीं, जिन्होंने भारत छोड़ो आंदोलन में सक्रिय रूप से भाग लिया।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "She was known for her powerful speeches and mobilization of women in the freedom struggle across Karnataka.",
          kn: "ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟದಲ್ಲಿ ಮಹಿಳೆಯರನ್ನು ಸಂಘಟಿಸಲು ಮತ್ತು ಶಕ್ತಿಯುತ ಭಾಷಣಗಳಿಗೆ ಅವರು ಹೆಸರುವಾಸಿಯಾಗಿದ್ದರು.",
          hi: "वे अपने शक्तिशाली भाषणों और कर्नाटक भर में स्वतंत्रता संग्राम में महिलाओं को संगठित करने के लिए जानी जाती थीं।"
        }
      }
    ]
  },
  {
    id: "s17",
    heroId: "mailara-mahadeva",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Mailara Mahadeva was a young revolutionary from Haveri who participated in the Dandi March with Gandhi.",
          kn: "ಮೈಲಾರ ಮಹಾದೇವ ಹಾವೇರಿಯ ಯುವ ಕ್ರಾಂತಿಕಾರಿಯಾಗಿದ್ದು, ಗಾಂಧೀಜಿಯವರೊಂದಿಗೆ ದಂಡಿ ಯಾತ್ರೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದರು.",
          hi: "मैलार महादेव हावेरी के एक युवा क्रांतिकारी थे जिन्होंने गांधी के साथ दांडी मार्च में भाग लिया था।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1582555172866-f73bb126c739?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He sacrificed his life in 1943 while attempting to hoist the national flag at a government office, resisting British rule.",
          kn: "೧೯೪೩ರಲ್ಲಿ ಬ್ರಿಟಿಷ್ ಆಳ್ವಿಕೆಯನ್ನು ಪ್ರತಿಭಟಿಸಿ ಸರ್ಕಾರಿ ಕಚೇರಿಯೊಂದರಲ್ಲಿ ರಾಷ್ಟ್ರಧ್ವಜಾರೋಹಣ ಮಾಡಲು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದಾಗ ಅವರು ತಮ್ಮ ಪ್ರಾಣವನ್ನು ಅರ್ಪಿಸಿದರು.",
          hi: "1943 में ब्रिटिश शासन का विरोध करते हुए एक सरकारी कार्यालय में राष्ट्रीय ध्वज फहराने के प्रयास में उन्होंने अपने जीवन का बलिदान दे दिया।"
        }
      }
    ]
  },
  {
    id: "s18",
    heroId: "aluru-venkata-rao",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/f1fd5f68-7c8a-40a2-9216-728b9cc36ef1.png",
        text: {
          en: "Aluru Venkata Rao is known as 'Karnataka Kulapurohita' for leading the Karnataka Unification Movement.",
          kn: "ಆಲೂರು ವೆಂಕಟರಾವ್ ಅವರನ್ನು ಕರ್ನಾಟಕ ಏಕೀಕರಣ ಚಳವಳಿಯ ನೇತೃತ್ವ ವಹಿಸಿದ್ದಕ್ಕಾಗಿ 'ಕರ್ನಾಟಕ ಕುಲಪುರೋಹಿತ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
          hi: "आलुरू वेंकट राव को कर्नाटक एकीकरण आंदोलन का नेतृत्व करने के लिए 'कर्नाटक कुलपुरोहित' के रूप में जाना जाता है।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "His book 'Karnataka Gatha Vaibhava' played a major role in reviving the pride of Kannadigas in their history.",
          kn: "ಕನ್ನಡಿಗರಿಗೆ ಅವರ ಇತಿಹಾಸದ ಬಗ್ಗೆ ಹೆಮ್ಮೆ ಮೂಡಿಸುವಲ್ಲಿ ಅವರ 'ಕರ್ನಾಟಕ ಗತ ವೈಭವ' ಪುಸ್ತಕವು ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದೆ.",
          hi: "उनकी पुस्तक 'कर्नाटक गाथा वैभव' ने कन्नड़ भाषी लोगों के इतिहास के प्रति गर्व को पुनर्जीवित करने में एक बड़ी भूमिका निभाई।"
        }
      }
    ]
  },
  {
    id: "s19",
    heroId: "adikavi-pampa",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/47ecaf25-45d6-419b-ba2d-dcbdb8006e23.png",
        text: {
          en: "Adikavi Pampa (10th Century) was the first great poet of Kannada literature, known for his epic works.",
          kn: "ಆದಿಕವಿ ಪಂಪ (೧೦ನೇ ಶತಮಾನ) ಕನ್ನಡ ಸಾಹಿತ್ಯದ ಮೊದಲ ಶ್ರೇಷ್ಠ ಕವಿಯಾಗಿದ್ದು, ತಮ್ಮ ಮಹಾಕಾವ್ಯಗಳಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದ್ದಾರೆ.",
          hi: "आदिकवि पम्पा (10वीं शताब्दी) कन्नड़ साहित्य के पहले महान कवि थे, जो अपने महाकाव्यों के लिए जाने जाते थे।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "His 'Vikramarjuna Vijaya' and 'Adipurana' set the standard for classical Kannada poetry and literature.",
          kn: "ಅವರ 'ವಿಕ್ರಮಾರ್ಜುನ ವಿಜಯ' ಮತ್ತು 'ಆದಿಪುರಾಣ' ಕೃತಿಗಳು ಶಾಸ್ತ್ರೀಯ ಕನ್ನಡ ಕವಿತೆ ಮತ್ತು ಸಾಹಿತ್ಯಕ್ಕೆ ಹೊಸ ಮೈಲಿಗಲ್ಲು ಸ್ಥಾಪಿಸಿದವು.",
          hi: "उनके 'विक्रार्जुन विजय' और 'आदिपुराण' ने शास्त्रीय कन्नड़ कविता और साहित्य के लिए मानक निर्धारित किया।"
        }
      }
    ]
  },
  {
    id: "s20",
    heroId: "gs-shivarudrappa",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/459ba402-2a7e-4054-9461-1e967a514d3a.png",
        text: {
          en: "G.S. Shivarudrappa (1926–2013) was a prominent Kannada poet, writer, and researcher.",
          kn: "ಜಿ.ಎಸ್. ಶಿವರುದ್ರಪ್ಪ (೧೯೨೬–೨೦೧೩) ಒಬ್ಬ ಪ್ರಮುಖ ಕನ್ನಡ ಕವಿ, ಲೇಖಕ ಮತ್ತು ಸಂಶೋಧಕರಾಗಿದ್ದರು.",
          hi: "जी.एस. शिवरुद्रप्पा (1926-2013) एक प्रमुख कन्नड़ कवि, लेखक और शोधकर्ता थे।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He was honored as the 'Rashtrakavi' by the Government of Karnataka in 2006 for his immense contribution.",
          kn: "ಅವರ ಅಪಾರ ಕೊಡುಗೆಗಾಗಿ ೨೦೦೬ರಲ್ಲಿ ಕರ್ನಾಟಕ ಸರ್ಕಾರದಿಂದ ಅವರಿಗೆ 'ರಾಷ್ಟ್ರಕವಿ' ಬಿರುದು ನೀಡಿ ಗೌರವಿಸಲಾಯಿತು.",
          hi: "उनके विशाल योगदान के लिए 2006 में कर्नाटक सरकार द्वारा उन्हें 'राष्ट्रकवि' के रूप में सम्मानित किया गया था।"
        }
      }
    ]
  },
  {
    id: "s21",
    heroId: "chandrashekhara-kambara",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/67b2d56d-e970-4965-9859-90b9b30cba22.png",
        text: {
          en: "Chandrashekhara Kambara is a celebrated Kannada poet, playwright, and folklorist.",
          kn: "ಚಂದ್ರಶೇಖರ ಕಂಬಾರ ಒಬ್ಬ ಖ್ಯಾತ ಕನ್ನಡ ಕವಿ, ನಾಟಕಕಾರ ಮತ್ತು ಜಾನಪದ ತಜ್ಞರು.",
          hi: "चंद्रशेखर कंबारा एक प्रसिद्ध कन्नड़ कवि, नाटककार और लोकसाहित्यकार हैं।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He is a Jnanpith awardee known for his rich use of North Karnataka dialects and folklore.",
          kn: "ಅವರು ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ವಿಜೇತರಾಗಿದ್ದು, ಉತ್ತರ ಕರ್ನಾಟಕದ ಉಪಭಾಷೆಗಳು ಮತ್ತು ಜಾನಪದದ ಶ್ರೀಮಂತ ಬಳಕೆಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದ್ದಾರೆ.",
          hi: "वे ज्ञानपीठ पुरस्कार विजेता हैं जो उत्तर कर्नाटक की बोलियों और लोककथाओं के अपने समृद्ध उपयोग के लिए जाने जाते हैं।"
        }
      }
    ]
  },
  {
    id: "s22",
    heroId: "masti-venkatesha-iyengar",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/55bc5156-f597-4089-a29d-472061f00b46.png",
        text: {
          en: "Masti Venkatesha Iyengar (1891–1986) is popularly known as 'Masti' and 'Maasti Kannada da Aasti'.",
          kn: "ಮಾಸ್ತಿ ವೆಂಕಟೇಶ ಅಯ್ಯಂಗಾರ್ (೧೮೯೧–೧೯೮೬) ಇವರನ್ನು ಜನಪ್ರಿಯವಾಗಿ 'ಮಾಸ್ತಿ' ಮತ್ತು 'ಮಾಸ್ತಿ ಕನ್ನಡದ ಆಸ್ತಿ' ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
          hi: "मास्ती वेंकटेश अय्यंगार (1891-1986) को लोकप्रिय रूप से 'मास्ती' और 'मास्ती कन्नड़ दा आस्ती' के रूप में जाना जाता है।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He was a Jnanpith awardee and is considered the 'Father of Kannada Short Stories'.",
          kn: "ಅವರು ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ವಿಜೇತರಾಗಿದ್ದು, 'ಕನ್ನಡ ಸಣ್ಣ ಕತೆಗಳ ಜನಕ' ಎಂದು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.",
          hi: "वे ज्ञानपीठ पुरस्कार विजेता थे और उन्हें 'कन्नड़ लघु कथाओं का जनक' माना जाता है।"
        }
      }
    ]
  },
  {
    id: "s23",
    heroId: "ratnakaravarni",
    pages: [
      {
        image: "https://storage.googleapis.com/test-media-6535fa/chat_attachments/ef50aa1d-7994-46a1-b44a-f73893d2864c/75845cce-1579-450a-9d90-090c25a1af59.png",
        text: {
          en: "Ratnakaravarni was a 16th-century Kannada poet known for introducing a new style in poetry.",
          kn: "ರತ್ನಾಕರವರ್ಣಿ ೧೬ನೇ ಶತಮಾನದ ಕನ್ನಡ ಕವಿಯಾಗಿದ್ದು, ಕಾವ್ಯದಲ್ಲಿ ಹೊಸ ಶೈಲಿಯನ್ನು ಪರಿಚಯಿಸಿದ್ದಕ್ಕಾಗಿ ಹೆಸರುವಾಸಿಯಾಗಿದ್ದಾರೆ.",
          hi: "रत्नाकरवर्णी 16वीं शताब्दी के कन्नड़ कवि थे जो कविता में एक नई शैली पेश करने के लिए जाने जाते थे।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "His masterpiece 'Bharatesha Vaibhava' is an epic that blends spiritual and worldly themes.",
          kn: "ಅವರ ಶ್ರೇಷ್ಠ ಕೃತಿ 'ಭರತೇಶ ವೈಭವ' ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಲೌಕಿಕ ವಿಷಯಗಳನ್ನು ಸುಂದರವಾಗಿ ಬೆರೆಸುವ ಮಹಾಕಾವ್ಯವಾಗಿದೆ.",
          hi: "उनकी उत्कृष्ट कृति 'भरतेश वैभव' एक महाकाव्य है जो आध्यात्मिक और सांसारिक विषयों को मिलाती है।"
        }
      }
    ]
  },
  {
    id: "s24",
    heroId: "gopalakrishna-adiga",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Gopalakrishna Adiga (1918–1992) was a pioneer of the 'Navya' (Modernist) movement in Kannada poetry.",
          kn: "ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ (೧೯೧೮–೧೯೯೨) ಕನ್ನಡ ಕಾವ್ಯದಲ್ಲಿ 'ನವ್ಯ' (ಆಧುನಿಕತಾವಾದಿ) ಚಳವಳಿಯ ಪ್ರವರ್ತಕರಾಗಿದ್ದರು.",
          hi: "गोपालकृष्ण अडिग (1918-1992) कन्नड़ कविता में 'नव्य' (आधुनिकतावादी) आंदोलन के अग्रदूत थे।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "His poems broke away from traditional styles, focusing on the complexities of modern existence.",
          kn: "ಅವರ ಕವಿತೆಗಳು ಸಾಂಪ್ರದಾಯಿಕ ಶೈಲಿಗಳನ್ನು ಮುರಿದು, ಆಧುನಿಕ ಅಸ್ತಿತ್ವದ ಸಂಕೀರ್ಣತೆಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಿದವು.",
          hi: "उनकी कविताओं ने पारंपरिक शैलियों को तोड़ दिया, आधुनिक अस्तित्व की जटिलताओं पर ध्यान केंद्रित किया।"
        }
      }
    ]
  },
  {
    id: "s25",
    heroId: "siddalingaiah",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1542343633-ce3256121f03?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Siddalingaiah (1954–2021) was a revolutionary Kannada poet known as 'Dalita Kavi'.",
          kn: "ಸಿದ್ಧಲಿಂಗಯ್ಯ (೧೯೫೪–೨೦೨೧) 'ದಲಿತ ಕವಿ' ಎಂದೇ ಖ್ಯಾತರಾದ ಕ್ರಾಂತಿಕಾರಿ ಕನ್ನಡ ಕವಿಯಾಗಿದ್ದರು.",
          hi: "सिद्धलिंगैया (1954-2021) एक क्रांतिकारी कन्नड़ कवि थे जिन्हें 'दलित कवि' के रूप में जाना जाता था।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "His poetry gave a powerful voice to the Dalit movement and social justice in Karnataka.",
          kn: "ಅವರ ಕವಿತೆಗಳು ಕರ್ನಾಟಕದಲ್ಲಿ ದಲಿತ ಚಳವಳಿ ಮತ್ತು ಸಾಮಾಜಿಕ ನ್ಯಾಯಕ್ಕೆ ಪ್ರಬಲ ಧ್ವನಿ ನೀಡಿದವು.",
          hi: "उनकी कविता ने कर्नाटक में दलित आंदोलन और सामाजिक न्याय को एक शक्तिशाली आवाज दी।"
        }
      }
    ]
  },
  {
    id: "s26",
    heroId: "sarvajna",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Sarvajna was a 16th-century poet and philosopher famous for his 'Tripadi' (three-line) verses.",
          kn: "ಸರ್ವಜ್ಞ ೧೬ನೇ ಶತಮಾನದ ಕವಿ ಮತ್ತು ದಾರ್ಶನಿಕರಾಗಿದ್ದು, ತಮ್ಮ 'ತ್ರಿಪದಿ'ಗಳಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದ್ದಾರೆ.",
          hi: "सर्वज्ञ 16वीं शताब्दी के कवि और दार्शनिक थे जो अपने 'त्रिपदी' (तीन-पंक्ति) छंदों के लिए प्रसिद्ध थे।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "His verses cover topics like ethics and spirituality, expressed in simple yet profound language.",
          kn: "ಅವರ ತ್ರಿಪದಿಗಳು ನೈತಿಕತೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕತೆಯಂತಹ ವಿಷಯಗಳನ್ನು ಸರಳವಾಗಿ ತಿಳಿಸುತ್ತವೆ.",
          hi: "उनके छंद नैतिकता और आध्यात्मिकता जैसे विषयों को शामिल करते हैं, जो सरल लेकिन गहन भाषा में व्यक्त किए गए हैं।"
        }
      }
    ]
  },
  {
    id: "s27",
    heroId: "allama-prabhu",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Allama Prabhu was a 12th-century mystic-saint and a prominent Vachana poet of the Veerashaiva movement.",
          kn: "ಅಲ್ಲಮ ಪ್ರಭು ೧೨ನೇ ಶತಮಾನದ ಅನುಭಾವಿ-ಸಂತ ಮತ್ತು ವೀರಶೈವ ಚಳವಳಿಯ ಪ್ರಮುಖ ವಚನ ಕವಿಯಾಗಿದ್ದರು.",
          hi: "अल्लामा प्रभु 12वीं शताब्दी के रहस्यवादी-संत और वीरशैव आंदोलन के एक प्रमुख वचन कवि थे।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He was the patron saint of the 'Anubhava Mantapa', the spiritual parliament established by Basavanna.",
          kn: "ಅವರು ಬಸವಣ್ಣನವರಿಂದ ಸ್ಥಾಪಿಸಲ್ಪಟ್ಟ ಆಧ್ಯಾತ್ಮಿಕ ಸಂಸತ್ತಾದ 'ಅನುಭವ ಮಂಟಪ'ದ ಅಧ್ಯಕ್ಷರಾಗಿದ್ದರು.",
          hi: "वे बसवण्णा द्वारा स्थापित आध्यात्मिक संसद 'अनुभव मंटप' के संरक्षक संत थे।"
        }
      }
    ]
  },
  {
    id: "s28",
    heroId: "kanaka-dasa",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Kanaka Dasa (1509–1609) was a great saint, philosopher, and composer of the Haridasa movement.",
          kn: "ಕನಕದಾಸರು (೧೫೦೯-೧೬೦೯) ಹರಿದಾಸ ಚಳವಳಿಯ ಮಹಾನ್ ಸಂತ, ದಾರ್ಶನಿಕ ಮತ್ತು ಸಂಯೋಜಕರಾಗಿದ್ದರು.",
          hi: "कनक दास (1509-1609) हरिदास आंदोलन के एक महान संत, दार्शनिक और रचनाकार थे।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He is famously remembered for the 'Kanakana Kindi' at Udupi Krishna temple, a symbol of his devotion.",
          kn: "ಉಡುಪಿಯ ಕೃಷ್ಣ ಮಂದಿರದಲ್ಲಿರುವ 'ಕನಕನ ಕಿಂಡಿ'ಗಾಗಿ ಅವರು ಪ್ರಸಿದ್ಧರಾಗಿದ್ದಾರೆ, ಇದು ಅವರ ಭಕ್ತಿಯ ಸಂಕೇತವಾಗಿದೆ.",
          hi: "उन्हें उडुपी कृष्ण मंदिर में 'कनकना किंडी' के लिए विशेष रूप से याद किया जाता है, जो उनकी भक्ति का प्रतीक है।"
        }
      }
    ]
  },
  {
    id: "s29",
    heroId: "madhavacharya",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Madhavacharya (1238–1317) was a philosopher and the founder of the Dvaita school of Vedanta.",
          kn: "ಮಧ್ವಾಚಾರ್ಯರು (೧೨೩೮–೧೩೧೭) ದಾರ್ಶನಿಕ ಮತ್ತು ವೇದಾಂತದ ದ್ವೈತ ಸಿದ್ಧಾಂತದ ಸ್ಥಾಪಕರಾಗಿದ್ದರು.",
          hi: "माधवाचार्य (1238-1317) एक दार्शनिक और वेदांत के द्वैत स्कूल के संस्थापक थे।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He emphasized the distinction between the soul and God, and his teachings had a profound impact.",
          kn: "ಅವರು ಜೀವಾತ್ಮ ಮತ್ತು ಪರಮಾತ್ಮನ ನಡುವಿನ ವ್ಯತ್ಯಾಸವನ್ನು ಒತ್ತಿಹೇಳಿದರು, ಅವರ ಬೋಧನೆಗಳು ಹೆಚ್ಚಿನ ಪ್ರಭಾವ ಬೀರಿದವು.",
          hi: "उन्होंने आत्मा और ईश्वर के बीच अंतर पर जोर दिया, और उनकी शिक्षाओं का गहरा प्रभाव पड़ा।"
        }
      }
    ]
  },
  {
    id: "s30",
    heroId: "kudmul-ranga-rao",
    pages: [
      {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "Kudmul Ranga Rao was a dedicated social reformer who worked for the empowerment of the marginalized.",
          kn: "ಕುದ್ಮುಲ್ ರಂಗರಾವ್ ಮಂಗಳೂರಿನಲ್ಲಿ ದೀನದಲಿತರ ಸಬಲೀಕರಣಕ್ಕಾಗಿ ಶ್ರಮಿಸಿದ ಮಹಾನ್ ಸಮಾಜ ಸುಧಾರಕರಾಗಿದ್ದರು.",
          hi: "कुदमुुल रंगा राव एक समर्पित समाज सुधारक थे जिन्होंने हाशिए पर रहने वाले लोगों के सशक्तिकरण के लिए काम किया।"
        }
      },
      {
        image: "https://images.unsplash.com/photo-1512820666249-f1117181c0c8?auto=format&fit=crop&q=80&w=800",
        text: {
          en: "He established missions and worked tirelessly for the education and social upliftment of the underprivileged.",
          kn: "ಅವರು ದೀನದಲಿತರ ಶಿಕ್ಷಣ ಮತ್ತು ಸಾಮಾಜಿಕ ಉನ್ನತಿಗಾಗಿ ಅವಿರತವಾಗಿ ಶ್ರಮಿಸಿದರು ಮತ್ತು ಸಂಸ್ಥೆಗಳನ್ನು ಸ್ಥಾಪಿಸಿದರು.",
          hi: "उन्होंने मिशनों की स्थापना की और वंचितों की शिक्षा और सामाजिक उत्थान के लिए अथक प्रयास किया।"
        }
      }
    ]
  }
];

export const quizQuestions: Question[] = [
  {
    id: "q1",
    heroId: "kittur-chennamma",
    question: { en: "Who was the Queen of Kittur?", kn: "ಕಿತ್ತೂರಿನ ರಾಣಿ ಯಾರು?", hi: "कित्तूर की रानी कौन थी?" },
    options: { 
      en: ["Onake Obavva", "Kittur Chennamma", "Rani Abbakka"],
      kn: ["ಒನಕೆ ಓಬವ್ವ", "ಕಿತ್ತೂರು ಚೆನ್ನಮ್ಮ", "ರಾಣಿ ಅಬ್ಬಕ್ಕ"],
      hi: ["ओनके ओबव्वा", "कित्तूर चेन्नम्मा", "रानी अब्बक्का"]
    },
    correctIndex: 1
  },
  {
    id: "q2",
    heroId: "kittur-chennamma",
    question: { en: "Where was Chennamma born?", kn: "ಚೆನ್ನಮ್ಮ ಎಲ್ಲಿ ಜನಿಸಿದರು?", hi: "चेन्नम्मा का जन्म कहाँ हुआ था?" },
    options: {
      en: ["Kakati", "Mysuru", "Kittur"],
      kn: ["ಕಾಕತಿ", "ಮೈಸೂರು", "ಕಿತ್ತೂರು"],
      hi: ["काकती", "मैसूर", "कित्तूर"]
    },
    correctIndex: 0
  },
  {
    id: "q3",
    heroId: "onake-obavva",
    question: { en: "What weapon did Obavva use to fight?", kn: "ಓಬವ್ವ ಹೋರಾಡಲು ಯಾವ ಆಯುಧವನ್ನು ಬಳಸಿದರು?", hi: "ओबव्वा ने लड़ने के लिए किस हथियार का इस्तेमाल किया?" },
    options: {
      en: ["Sword", "Pestle (Onake)", "Bow and Arrow"],
      kn: ["ಕತ್ತಿ", "ಒನಕೆ", "ಬಿಲ್ಲು ಮತ್ತು ಬಾಣ"],
      hi: ["तलवार", "मूसल (ओनके)", "धनुष और बाण"]
    },
    correctIndex: 1
  },
  {
    id: "q4",
    heroId: "onake-obavva",
    question: { en: "Whose army did Obavva fight single-handedly?", kn: "ಓಬವ್ವ ಯಾರ ಸೈನ್ಯದ ವಿರುದ್ಧ ಏಕಾಂಗಿಯಾಗಿ ಹೋರಾಡಿದರು?", hi: "ओबव्वा ने अकेले ही किसकी सेना का मुकाबला किया?" },
    options: {
      en: ["British", "Haider Ali", "Portuguese"],
      kn: ["ಬ್ರಿಟಿಷ್", "ಹೈದರ್ ಅಲಿ", "ಪೋರ್ಚುಗೀಸ್"],
      hi: ["ब्रिटिश", "हैदर अली", "पुर्तगाली"]
    },
    correctIndex: 1
  },
  {
    id: "q5",
    heroId: "kuvempu",
    question: { en: "Where was Kuvempu born?", kn: "ಕುವೆಂಪು ಎಲ್ಲಿ ಜನಿಸಿದರು?", hi: "कुवेम्पु का जन्म कहाँ हुआ था?" },
    options: {
      en: ["Mysuru", "Shivamogga", "Bengaluru"],
      kn: ["ಮೈಸೂರು", "ಶಿವಮೊಗ್ಗ", "ಬೆಂಗಳೂರು"],
      hi: ["मैसूर", "शिवमोगा", "बेंगलुरु"]
    },
    correctIndex: 1
  },
  {
    id: "q6",
    heroId: "kuvempu",
    question: { en: "What was Kuvempu's famous title?", kn: "ಕುವೆಂಪು ಅವರ ಪ್ರಸಿದ್ಧ ಬಿರುದು ಯಾವುದು?", hi: "कुवेम्पु की प्रसिद्ध उपाधि क्या थी?" },
    options: {
      en: ["Vara Kavi", "Rashtrakavi", "Dalita Kavi"],
      kn: ["ವರಕವಿ", "ರಾಷ್ಟ್ರಕವಿ", "ದಲಿತ ಕವಿ"],
      hi: ["वर कवि", "राष्ट्रकवि", "दलित कवि"]
    },
    correctIndex: 1
  },
  {
    id: "q7",
    heroId: "basavanna",
    question: { en: "In which century did Basavanna live?", kn: "ಬಸವಣ್ಣ ಎಷ್ಟು ಶತಮಾನದಲ್ಲಿ ಬದುಕಿದ್ದರು?", hi: "बसवण्णा किस शताब्दी में रहते थे?" },
    options: {
      en: ["10th Century", "12th Century", "15th Century"],
      kn: ["೧೦ನೇ ಶತಮಾನ", "೧೨ನೇ ಶತಮಾನ", "೧೫ನೇ ಶತಮಾನ"],
      hi: ["10वीं शताब्दी", "12वीं शताब्दी", "15वीं शताब्दी"]
    },
    correctIndex: 1
  },
  {
    id: "q8",
    heroId: "kempe-gowda",
    question: { en: "Who founded the city of Bengaluru?", kn: "ಬೆಂಗಳೂರು ನಗರವನ್ನು ಸ್ಥಾಪಿಸಿದವರು ಯಾರು?", hi: "बेंगलुरु शहर की स्थापना किसने की?" },
    options: {
      en: ["Krishnadevaraya", "Hiriya Kempe Gowda", "Hyder Ali"],
      kn: ["ಕೃಷ್ಣದೇವರಾಯ", "ಹಿರಿಯ ಕೆಂಪೇಗೌಡ", "ಹೈದರ್ ಅಲಿ"],
      hi: ["कृष्णदेवराय", "हिरिया केम्पेगौड़ा", "हैदर अली"]
    },
    correctIndex: 1
  },
  {
    id: "q9",
    heroId: "krishnadevaraya",
    question: { en: "Who were the group of eight famous scholars in Krishnadevaraya's court?", kn: "ಕೃಷ್ಣದೇವರಾಯನ ಆಸ್ಥಾನದಲ್ಲಿದ್ದ ಎಂಟು ಪ್ರಸಿದ್ಧ ವಿದ್ವಾಂಸರ ಗುಂಪನ್ನು ಏನೆಂದು ಕರೆಯುತ್ತಿದ್ದರು?", hi: "कृष्णदेवराय के दरबार में आठ प्रसिद्ध विद्वानों के समूह को क्या कहा जाता था?" },
    options: {
      en: ["Navaratnas", "Ashtadiggajas", "Saptharishis"],
      kn: ["ನವರತ್ನಗಳು", "ಅಷ್ಟದಿಗ್ಗಜರು", "ಸಪ್ತರ್ಷಿಗಳು"],
      hi: ["नवरत्न", "अष्टदिग्गज", "सप्तर्षि"]
    },
    correctIndex: 1
  },
  {
    id: "q10",
    heroId: "sangolli-rayanna",
    question: { en: "Who was the loyal commander of Kittur army who fought alongside Rani Chennamma?", kn: "ರಾಣಿ ಚೆನ್ನಮ್ಮ ಅವರ ಸೇನೆಯಲ್ಲಿ ನಿಷ್ಠಾವಂತ ಸೇನಾಧಿಪತಿಯಾಗಿ ಕೆಲಸ ಮಾಡಿದವರು ಯಾರು?", hi: "रानी चेन्नम्मा की सेना के वफादार कमांडर कौन थे जिन्होंने उनके साथ लड़ाई लड़ी?" },
    options: {
      en: ["Hyder Ali", "Sangolli Rayanna", "Mailara Mahadeva"],
      kn: ["ಹೈದರ್ ಅಲಿ", "ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ", "ಮೈಲಾರ ಮಹಾದೇವ"],
      hi: ["हैदर अली", "संगोल्ली रायण्णा", "मैलार महादेव"]
    },
    correctIndex: 1
  },
  {
    id: "q11",
    heroId: "karnad-sadashiva-rao",
    question: { en: "Who was Karnad Sadashiva Rao a devoted follower of?", kn: "ಕರ್ನಾಡ್ ಸದಾಶಿವ ರಾವ್ ಅವರು ಯಾರ ನಿಷ್ಠಾವಂತ ಅನುಯಾಯಿಯಾಗಿದ್ದರು?", hi: "कर्नाड सदाशिव राव किसके समर्पित अनुयायी थे?" },
    options: {
      en: ["Subhash Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
      kn: ["ಸುಭಾಷ್ ಚಂದ್ರ ಬೋಸ್", "ಮಹಾತ್ಮಾ ಗಾಂಧಿ", "ಭಗತ್ ಸಿಂಗ್"],
      hi: ["सुभाष चंद्र बोस", "महात्मा गांधी", "भगत सिंह"]
    },
    correctIndex: 1
  },
  {
    id: "q12",
    heroId: "umabai-kundapur",
    question: { en: "Which organization's women's wing did Umabai Kundapur lead?", kn: "ಉಮಾಬಾಯಿ ಕುಂದಾಪುರ ಅವರು ಯಾವ ಸಂಸ್ಥೆಯ ಮಹಿಳಾ ವಿಭಾಗವನ್ನು ಮುನ್ನಡೆಸಿದರು?", hi: "उमाबाई कुंदापुर ने किस संगठन की महिला विंग का नेतृत्व किया?" },
    options: {
      en: ["Seva Dal", "Ina", "Navjivan"],
      kn: ["ಸೇವಾದಳ", "ಐಎನ್ಎ", "ನವಜೀವನ"],
      hi: ["सेवा दल", "आईएनए", "नवजीवन"]
    },
    correctIndex: 0
  },
  {
    id: "q13",
    heroId: "rani-abbakka",
    question: { en: "By what name is Rani Abbakka Chowta popularly known?", kn: "ರಾಣಿ ಅಬ್ಬಕ್ಕ ಚೌಟ ಅವರನ್ನು ಜನಪ್ರಿಯವಾಗಿ ಯಾವ ಹೆಸರಿನಿಂದ ಕರೆಯಲಾಗುತ್ತದೆ?", hi: "रानी अब्बक्का चौटा को लोकप्रिय रूप से किस नाम से जाना जाता है?" },
    options: {
      en: ["Veera Rani", "Abhaya Rani", "Kittur Rani"],
      kn: ["ವೀರ ರಾಣಿ", "ಅಭಯ ರಾಣಿ", "ಕಿತ್ತೂರು ರಾಣಿ"],
      hi: ["वीर रानी", "अभय रानी", "कित्तूर रानी"]
    },
    correctIndex: 1
  },
  {
    id: "q14",
    heroId: "dr-bendre",
    question: { en: "For which collection of poems did D.R. Bendre receive the Jnanpith Award?", kn: "ದ.ರಾ. ಬೇಂದ್ರೆಯವರು ಯಾವ ಕವನ ಸಂಕಲನಕ್ಕಾಗಿ ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ಪಡೆದರು?", hi: "डी.आर. बेन्द्रे को उनके किस कविता संग्रह के लिए ज्ञानपीठ पुरस्कार मिला?" },
    options: {
      en: ["Naku Tanti", "Gari", "Aralu Maralu"],
      kn: ["ನಾಕು ತಂತಿ", "ಗರಿ", "ಅರಳೂ ಮರಳೂ"],
      hi: ["नाकू तंती", "गरी", "अरलु मरलु"]
    },
    correctIndex: 0
  },
  {
    id: "q15",
    heroId: "akka-mahadevi",
    question: { en: "To which deity was Akka Mahadevi deeply devoted?", kn: "ಅಕ್ಕ ಮಹಾದೇವಿಯವರು ಯಾವ ದೇವರಿಗೆ ಪರಮ ಭಕ್ತರಾಗಿದ್ದರು?", hi: "अक्का महादेवी किस देवता की परम भक्त थीं?" },
    options: {
      en: ["Lord Shiva", "Lord Vishnu", "Lord Ganesha"],
      kn: ["ಶಿವ", "ವಿಷ್ಣು", "ಗಣೇಶ"],
      hi: ["भगवान शिव", "भगवान विष्णु", "भगवान गणेश"]
    },
    correctIndex: 0
  },
  {
    id: "q16",
    heroId: "kamaladevi-chattopadhyay",
    question: { en: "Which field did Kamaladevi Chattopadhyay work to revive in India?", kn: "ಭಾರತದಲ್ಲಿ ಯಾವ ಕ್ಷೇತ್ರವನ್ನು ಪುನರುಜ್ಜೀವನಗೊಳಿಸಲು ಕಮಲಾದೇವಿ ಚಟ್ಟೋಪಾಧ್ಯಾಯ ಶ್ರಮಿಸಿದರು?", hi: "कमलादेवी चट्टोपाध्याय ने भारत में किस क्षेत्र को पुनर्जीवित करने के लिए काम किया?" },
    options: {
      en: ["Handicrafts and Theater", "Agriculture", "Information Technology"],
      kn: ["ಕರಕುಶಲ ಮತ್ತು ರಂಗಭೂಮಿ", "ಕೃಷಿ", "ಮಾಹಿತಿ ತಂತ್ರಜ್ಞಾನ"],
      hi: ["हस्तशिल्प और रंगमंच", "कृषि", "सूचना प्रौद्योगिकी"]
    },
    correctIndex: 0
  },
  {
    id: "q17",
    heroId: "gangadharrao-deshpande",
    question: { en: "What title was Gangadharrao Deshpande honored with?", kn: "ಗಂಗಾಧರರಾವ್ ದೇಶಪಾಂಡೆ ಅವರಿಗೆ ನೀಡಲಾದ ಬಿರುದು ಯಾವುದು?", hi: "गंगाधरराव देशपांडे को किस उपाधि से सम्मानित किया गया था?" },
    options: {
      en: ["Karnataka Kesari", "Karnataka Simha", "Karnataka Ratna"],
      kn: ["ಕರ್ನಾಟಕ ಕೇಸರಿ", "ಕರ್ನಾಟಕ ಸಿಂಹ", "ಕರ್ನಾಟಕ ರತ್ನ"],
      hi: ["कर्नाटक केसरी", "कर्नाटक सिंह", "कर्नाटक रत्न"]
    },
    correctIndex: 1
  },
  {
    id: "q18",
    heroId: "ns-hardikar",
    question: { en: "Which organization did Dr. N.S. Hardikar found?", kn: "ಡಾ. ಎನ್.ಎಸ್. ಹರ್ಡಿಕರ್ ಅವರು ಯಾವ ಸಂಸ್ಥೆಯನ್ನು ಸ್ಥಾಪಿಸಿದರು?", hi: "डॉ. एन.एस. हर्डीकर ने किस संगठन की स्थापना की?" },
    options: {
      en: ["Seva Dal", "Navjivan", "Young India"],
      kn: ["ಸೇವಾದಳ", "ನವಜೀವನ", "ಯಂಗ್ ಇಂಡಿಯಾ"],
      hi: ["सेवा दल", "नवजीवन", "यंग इंडिया"]
    },
    correctIndex: 0
  },
  {
    id: "q19",
    heroId: "bellary-siddamma",
    question: { en: "In which major movement did Bellary Siddamma actively participate?", kn: "ಬಳ್ಳಾರಿ ಸಿದ್ದಮ್ಮ ಅವರು ಯಾವ ಪ್ರಮುಖ ಚಳವಳಿಯಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿ ಭಾಗವಹಿಸಿದ್ದರು?", hi: "बल्लारी सिद्धम्मा ने किस प्रमुख आंदोलन में सक्रिय रूप से भाग लिया?" },
    options: {
      en: ["Non-Cooperation Movement", "Quit India Movement", "Civil Disobedience"],
      kn: ["ಅಸಹಕಾರ ಚಳವಳಿ", "ಕ್ವಿಟ್ ಇಂಡಿಯಾ ಚಳವಳಿ", "ನಾಗರಿಕ ಅಸಹಕಾರ"],
      hi: ["असहयोग आंदोलन", "भारत छोड़ो आंदोलन", "सविनय अवज्ञा"]
    },
    correctIndex: 1
  },
  {
    id: "q20",
    heroId: "mailara-mahadeva",
    question: { en: "Mailara Mahadeva participated in which famous march with Gandhi?", kn: "ಮೈಲಾರ ಮಹಾದೇವ ಅವರು ಗಾಂಧೀಜಿಯವರೊಂದಿಗೆ ಯಾವ ಪ್ರಸಿದ್ಧ ಯಾತ್ರೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದರು?", hi: "मैलार महादेव ने गांधी के साथ किस प्रसिद्ध मार्च में भाग लिया था?" },
    options: {
      en: ["Dandi March", "Belagavi March", "Mysuru March"],
      kn: ["ದಂಡಿ ಯಾತ್ರೆ", "ಬೆಳಗಾವಿ ಯಾತ್ರೆ", "ಮೈಸೂರು ಯಾತ್ರೆ"],
      hi: ["दांडी मार्च", "बेलगावी मार्च", "मैसूर मार्च"]
    },
    correctIndex: 0
  },
  {
    id: "q21",
    heroId: "aluru-venkata-rao",
    question: { en: "What is Aluru Venkata Rao known as?", kn: "ಆಲೂರು ವೆಂಕಟರಾವ್ ಅವರನ್ನು ಏನೆಂದು ಕರೆಯಲಾಗುತ್ತದೆ?", hi: "आलुरू वेंकट राव को किस नाम से जाना जाता है?" },
    options: {
      en: ["Karnataka Kesari", "Karnataka Kulapurohita", "Karnataka Ratna"],
      kn: ["ಕರ್ನಾಟಕ ಕೇಸರಿ", "ಕರ್ನಾಟಕ ಕುಲಪುರೋಹಿತ", "ಕರ್ನಾಟಕ ರತ್ನ"],
      hi: ["कर्नाटक केसरी", "कर्नाटक कुलपुरोहित", "कर्नाटक रत्न"]
    },
    correctIndex: 1
  },
  {
    id: "q22",
    heroId: "adikavi-pampa",
    question: { en: "Who is considered the 'Adikavi' of Kannada literature?", kn: "ಕನ್ನಡ ಸಾಹಿತ್ಯದ 'ಆದಿಕವಿ' ಎಂದು ಯಾರನ್ನು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ?", hi: "कन्नड़ साहित्य का 'आदिकवि' किसे माना जाता है?" },
    options: {
      en: ["Pampa", "Ranna", "Ponna"],
      kn: ["ಪಂಪ", "ರನ್ನ", "ಪೊನ್ನ"],
      hi: ["पम्पा", "रन्ना", "पोन्ना"]
    },
    correctIndex: 0
  },
  {
    id: "q23",
    heroId: "gs-shivarudrappa",
    question: { en: "Which title was G.S. Shivarudrappa honored with?", kn: "ಜಿ.ಎಸ್. ಶಿವರುದ್ರಪ್ಪ ಅವರಿಗೆ ನೀಡಲಾದ ಬಿರುದು ಯಾವುದು?", hi: "जी.एस. शिवरुद्रप्पा को किस उपाधि से सम्मानित किया गया था?" },
    options: {
      en: ["Vara Kavi", "Rashtrakavi", "Dalita Kavi"],
      kn: ["ವರಕವಿ", "ರಾಷ್ಟ್ರಕವಿ", "ದಲಿತ ಕವಿ"],
      hi: ["वर कवि", "राष्ट्रकवि", "दलित कवि"]
    },
    correctIndex: 1
  },
  {
    id: "q24",
    heroId: "chandrashekhara-kambara",
    question: { en: "Which award did Chandrashekhara Kambara receive for his contribution to literature?", kn: "ಚಂದ್ರಶೇಖರ ಕಂಬಾರ ಅವರು ಸಾಹಿತ್ಯಕ್ಕೆ ನೀಡಿದ ಕೊಡುಗೆಗಾಗಿ ಯಾವ ಪ್ರಶಸ್ತಿಯನ್ನು ಪಡೆದರು?", hi: "चंद्रशेखर कंबारा को साहित्य में उनके योगदान के लिए कौन सा पुरस्कार मिला?" },
    options: {
      en: ["Jnanpith Award", "Sahitya Akademi", "Pampa Award"],
      kn: ["ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ", "ಸಾಹಿತ್ಯ ಅಕಾಡೆಮಿ", "ಪಂಪ ಪ್ರಶಸ್ತಿ"],
      hi: ["ज्ञानपीठ पुरस्कार", "साहित्य अकादमी", "पम्पा पुरस्कार"]
    },
    correctIndex: 0
  },
  {
    id: "q25",
    heroId: "masti-venkatesha-iyengar",
    question: { en: "Who is known as the 'Father of Kannada Short Stories'?", kn: "ಕನ್ನಡ ಸಣ್ಣ ಕತೆಗಳ ಜನಕ ಎಂದು ಯಾರನ್ನು ಕರೆಯಲಾಗುತ್ತದೆ?", hi: "कन्नड़ लघु कथाओं के पिता के रूप में किसे जाना जाता है?" },
    options: {
      en: ["Kuvempu", "Masti Venkatesha Iyengar", "D.R. Bendre"],
      kn: ["ಕುವೆಂಪು", "ಮಾಸ್ತಿ ವೆಂಕಟೇಶ ಅಯ್ಯಂಗಾರ್", "ದ.ರಾ. ಬೇಂದ್ರೆ"],
      hi: ["कुवेम्पु", "मास्ती वेंकटेश अय्यंगार", "डी.आर. बेन्द्रे"]
    },
    correctIndex: 1
  },
  {
    id: "q26",
    heroId: "ratnakaravarni",
    question: { en: "Which epic work is Ratnakaravarni famous for?", kn: "ರತ್ನಾಕರವರ್ಣಿ ಯಾವ ಮಹಾಕಾವ್ಯಕ್ಕೆ ಪ್ರಸಿದ್ಧರಾಗಿದ್ದಾರೆ?", hi: "रत्नाकरवर्णी किस महाकाव्य के लिए प्रसिद्ध हैं?" },
    options: {
      en: ["Bharatesha Vaibhava", "Adipurana", "Pampa Bharata"],
      kn: ["ಭರತೇಶ ವೈಭವ", "ಆದಿಪುರಾಣ", "ಪಂಪ ಭಾರತ"],
      hi: ["भरतेश वैभव", "आदिपुराण", "पम्पा भारत"]
    },
    correctIndex: 0
  },
  {
    id: "q27",
    heroId: "gopalakrishna-adiga",
    question: { en: "Gopalakrishna Adiga was a pioneer of which movement in Kannada poetry?", kn: "ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ ಅವರು ಕನ್ನಡ ಕಾವ್ಯದ ಯಾವ ಚಳವಳಿಯ ಪ್ರವರ್ತಕರಾಗಿದ್ದರು?", hi: "गोपालकृष्ण अडिग कन्नड़ कविता के किस आंदोलन के अग्रदूत थे?" },
    options: {
      en: ["Navodaya", "Navya", "Dalita"],
      kn: ["ನವೋದಯ", "ನವ್ಯ", "ದಲಿತ"],
      hi: ["नवोदय", "नव्य", "दलित"]
    },
    correctIndex: 1
  },
  {
    id: "q28",
    heroId: "siddalingaiah",
    question: { en: "What title is Siddalingaiah popularly known by?", kn: "ಸಿದ್ಧಲಿಂಗಯ್ಯ ಅವರನ್ನು ಜನಪ್ರಿಯವಾಗಿ ಯಾವ ಹೆಸರಿನಿಂದ ಕರೆಯಲಾಗುತ್ತದೆ?", hi: "सिद्धलिंगैया को लोकप्रिय रूप से किस नाम से जाना जाता है?" },
    options: {
      en: ["Vara Kavi", "Dalita Kavi", "Rashtrakavi"],
      kn: ["ವರಕವಿ", "ದಲಿತ ಕವಿ", "ರಾಷ್ಟ್ರಕವಿ"],
      hi: ["वर कवि", "दलित कवि", "राष्ट्रकवि"]
    },
    correctIndex: 1
  },
  {
    id: "q29",
    heroId: "sarvajna",
    question: { en: "Sarvajna is famous for which type of verses?", kn: "ಸರ್ವಜ್ಞ ಅವರು ಯಾವ ರೀತಿಯ ಪದ್ಯಗಳಿಗೆ ಪ್ರಸಿದ್ಧರಾಗಿದ್ದಾರೆ?", hi: "सर्वज्ञ किस प्रकार के छंदों के लिए प्रसिद्ध हैं?" },
    options: {
      en: ["Vachana", "Tripadi", "Keertana"],
      kn: ["ವಚನ", "ತ್ರಿಪದಿ", "ಕೀರ್ತನೆ"],
      hi: ["वचन", "त्रिपदी", "कीर्तन"]
    },
    correctIndex: 1
  },
  {
    id: "q30",
    heroId: "allama-prabhu",
    question: { en: "Allama Prabhu was the patron of which spiritual parliament?", kn: "ಅಲ್ಲಮ ಪ್ರಭು ಅವರು ಯಾವ ಆಧ್ಯಾತ್ಮಿಕ ಸಂಸತ್ತಿನ ಅಧ್ಯಕ್ಷರಾಗಿದ್ದರು?", hi: "अल्लामा प्रभु किस आध्यात्मिक संसद के संरक्षक थे?" },
    options: {
      en: ["Anubhava Mantapa", "Vidhana Soudha", "Sabha"],
      kn: ["ಅನುಭವ ಮಂಟಪ", "ವಿಧಾನ ಸೌಧ", "ಸಭೆ"],
      hi: ["अनुभव मंटप", "विधान सौध", "सभा"]
    },
    correctIndex: 0
  },
  {
    id: "q31",
    heroId: "kanaka-dasa",
    question: { en: "Which famous window in Udupi temple is associated with Kanaka Dasa?", kn: "ಉಡುಪಿ ದೇವಸ್ಥಾನದ ಯಾವ ಪ್ರಸಿದ್ಧ ಕಿಟಕಿ ಕನಕದಾಸರ ಹೆಸರಿನೊಂದಿಗೆ ಸಂಬಂಧಿಸಿದೆ?", hi: "उडुपी मंदिर की कौन सी प्रसिद्ध खिड़की कनक दास से जुड़ी है?" },
    options: {
      en: ["Kanakana Kindi", "Krishna Kindi", "Surya Kindi"],
      kn: ["ಕನಕನ ಕಿಂಡಿ", "ಕೃಷ್ಣನ ಕಿಂಡಿ", "ಸೂರ್ಯ ಕಿಂಡಿ"],
      hi: ["कनकना किंडी", "कृष्णा किंडी", "सूर्य किंडी"]
    },
    correctIndex: 0
  },
  {
    id: "q32",
    heroId: "madhavacharya",
    question: { en: "Which school of Vedanta did Madhavacharya found?", kn: "ಮಧ್ವಾಚಾರ್ಯರು ವೇದಾಂತದ ಯಾವ ಸಿದ್ಧಾಂತವನ್ನು ಸ್ಥಾಪಿಸಿದರು?", hi: "माधवाचार्य ने वेदांत के किस संप्रदाय की स्थापना की?" },
    options: {
      en: ["Advaita", "Dvaita", "Vishishtadvaita"],
      kn: ["ಅದ್ವೈತ", "ದ್ವೈತ", "ವಿಶಿಷ್ಟಾದ್ವೈತ"],
      hi: ["अद्वैत", "द्वैत", "विशिष्टाद्वैत"]
    },
    correctIndex: 1
  },
  {
    id: "q33",
    heroId: "kudmul-ranga-rao",
    question: { en: "In which city did Kudmul Ranga Rao primarily work for social reform?", kn: "ಕುದ್ಮುಲ್ ರಂಗರಾವ್ ಅವರು ಮುಖ್ಯವಾಗಿ ಯಾವ ನಗರದಲ್ಲಿ ಸಮಾಜ ಸುಧಾರಣೆಗಾಗಿ ಕೆಲಸ ಮಾಡಿದರು?", hi: "कुदमुुल रंगा राव ने मुख्य रूप से किस शहर में समाज सुधार के लिए काम किया?" },
    options: {
      en: ["Bengaluru", "Mysuru", "Mangaluru"],
      kn: ["ಬೆಂಗಳೂರು", "ಮೈಸೂರು", "ಮಂಗಳೂರು"],
      hi: ["बेंगलुरु", "मैसूर", "मंगलुरु"]
    },
    correctIndex: 2
  },
  // Kittur Chennamma Additional Questions
  {
    id: "q34",
    heroId: "kittur-chennamma",
    question: { en: "In which year did Rani Chennamma lead the rebellion against the British?", kn: "ರಾಣಿ ಚೆನ್ನಮ್ಮ ಯಾವ ವರ್ಷ ಬ್ರಿಟಿಷರ ವಿರುದ್ಧ ದಂಗೆಯನ್ನು ಮುನ್ನಡೆಸಿದರು?", hi: "रानी चेन्नम्मा ने किस वर्ष अंग्रेजों के खिलाफ विद्रोह का नेतृत्व किया था?" },
    options: { en: ["1824", "1857", "1942"], kn: ["೧೮೨೪", "೧೮೫೭", "೧೯೪೨"], hi: ["1824", "1857", "1942"] },
    correctIndex: 0
  },
  {
    id: "q35",
    heroId: "kittur-chennamma",
    question: { en: "Who was Rani Chennamma's husband?", kn: "ರಾಣಿ ಚೆನ್ನಮ್ಮನ ಪತಿ ಯಾರು?", hi: "रानी चेन्नम्मा के पति कौन थे?" },
    options: { en: ["Raja Mallasarja", "Sangolli Rayanna", "Shivappa Nayaka"], kn: ["ರಾಜ ಮಲ್ಲಸರ್ಜ", "ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ", "ಶಿವಪ್ಪ ನಾಯಕ"], hi: ["राजा मल्लसरजा", "संगोल्ली रायण्णा", "शिवप्पा नायक"] },
    correctIndex: 0
  },
  {
    id: "q36",
    heroId: "kittur-chennamma",
    question: { en: "In which month was Rani Chennamma born?", kn: "ರಾಣಿ ಚೆನ್ನಮ್ಮ ಯಾವ ತಿಂಗಳಲ್ಲಿ ಜನಿಸಿದರು?", hi: "रानी चेन्नम्मा का जन्म किस महीने में हुआ था?" },
    options: { en: ["August", "October", "December"], kn: ["ಆಗಸ್ಟ್", "ಅಕ್ಟೋಬರ್", "ಡಿಸೆಂಬರ್"], hi: ["अगस्त", "अक्तूबर", "दिसंबर"] },
    correctIndex: 1
  },
  {
    id: "q37",
    heroId: "kittur-chennamma",
    question: { en: "The British used which policy to refuse Chennamma's adopted son as heir?", kn: "ಯಾವ ನೀತಿಯಡಿಯಲ್ಲಿ ಬ್ರಿಟಿಷರು ಚೆನ್ನಮ್ಮ ಅವರ ದತ್ತುಪುತ್ರನ ಹಕ್ಕನ್ನು ನಿರಾಕರಿಸಿದರು?", hi: "अंग्रेजों ने किस नीति का उपयोग करके चेन्नम्मा के दत्तक पुत्र को उत्तराधिकारी मानने से इनकार कर दिया था?" },
    options: { en: ["Doctrine of Lapse", "Subsidiary Alliance", "Divide and Rule"], kn: ["ದತ್ತು ಮಕ್ಕಳಿಗೆ ಹಕ್ಕಿಲ್ಲ", "ಸಹಾಯಕ ಸೈನ್ಯ ಪದ್ಧತಿ", "ಒಡೆದು ಆಳುವ ನೀತಿ"], hi: ["व्यपगत का सिद्धांत", "सहायक संधि", "बांटो और राज करो"] },
    correctIndex: 0
  },
  // Onake Obavva Additional Questions
  {
    id: "q38",
    heroId: "onake-obavva",
    question: { en: "Which fort did Onake Obavva defend?", kn: "ಒನಕೆ ಓಬವ್ವ ಯಾವ ಕೋಟೆಯನ್ನು ರಕ್ಷಿಸಿದರು?", hi: "ओनके ओबव्वा ने किस किले की रक्षा की थी?" },
    options: { en: ["Bengaluru Fort", "Chitradurga Fort", "Bidar Fort"], kn: ["ಬೆಂಗಳೂರು ಕೋಟೆ", "ಚಿತ್ರದುರ್ಗ ಕೋಟೆ", "ಬೀದರ್ ಕೋಟೆ"], hi: ["बेंगलुरु किला", "चित्रदुर्ग किला", "बीदर किला"] },
    correctIndex: 1
  },
  {
    id: "q39",
    heroId: "onake-obavva",
    question: { en: "In which century did Onake Obavva live?", kn: "ಒನಕೆ ಓಬವ್ವ ಯಾವ ಶತಮಾನದಲ್ಲಿ ಬದುಕಿದ್ದರು?", hi: "ओनके ओबव्वा किस शताब्दी में रहती थीं?" },
    options: { en: ["16th Century", "17th Century", "18th Century"], kn: ["೧೬ನೇ ಶತಮಾನ", "೧೭ನೇ ಶತಮಾನ", "೧೮ನೇ ಶತಮಾನ"], hi: ["16वीं शताब्दी", "17वीं शताब्दी", "18वीं शताब्दी"] },
    correctIndex: 2
  },
  {
    id: "q40",
    heroId: "onake-obavva",
    question: { en: "How did the enemy soldiers try to enter the fort?", kn: "ಶತ್ರು ಸೈನಿಕರು ಕೋಟೆಯೊಳಗೆ ಪ್ರವೇಶಿಸಲು ಹೇಗೆ ಪ್ರಯತ್ನಿಸಿದರು?", hi: "दुश्मन सैनिकों ने किले में प्रवेश करने की कोशिश कैसे की?" },
    options: { en: ["Main Gate", "Secret Hole", "Scaling Walls"], kn: ["ಮುಖ್ಯ ದ್ವಾರ", "ಗುಪ್ತ ರಂಧ್ರ", "ಗೋಡೆ ಏರುವುದು"], hi: ["मुख्य द्वार", "गुप्त छिद्र", "दीवारों पर चढ़ना"] },
    correctIndex: 1
  },
  // Kuvempu Additional Questions
  {
    id: "q41",
    heroId: "kuvempu",
    question: { en: "Which region's beauty inspired Kuvempu's poems?", kn: "ಯಾವ ಪ್ರದೇಶದ ಸೌಂದರ್ಯವು ಕುವೆಂಪು ಅವರ ಕವಿತೆಗಳಿಗೆ ಪ್ರೇರಣೆ ನೀಡಿತು?", hi: "किस क्षेत्र की सुंदरता ने कुवेम्पु की कविताओं को प्रेरित किया?" },
    options: { en: ["Coastal", "Malnad", "Bayaluseeme"], kn: ["ಕರಾವಳಿ", "ಮಲೆನಾಡು", "ಬಯಲುಸೀಮೆ"], hi: ["तटीय", "मलनाड", "बायलुसीमे"] },
    correctIndex: 1
  },
  {
    id: "q42",
    heroId: "kuvempu",
    question: { en: "What is the name of Karnataka's state anthem written by Kuvempu?", kn: "ಕುವೆಂಪು ಬರೆದ ಕರ್ನಾಟಕದ ನಾಡಗೀತೆಯ ಹೆಸರೇನು?", hi: "कुवेम्पु द्वारा लिखित कर्नाटक के राज्य गान का नाम क्या है?" },
    options: { en: ["Jaya Bharata Jananiya Tanujate", "Vande Mataram", "Sare Jahan Se Achha"], kn: ["ಜಯ ಭಾರತ ಜನನಿಯ ತನುಜಾತೆ", "ವಂದೇ ಮಾತರಂ", "ಸಾರೇ ಜಹಾಂ ಸೇ ಅಚ್ಛಾ"], hi: ["जय भारत जननिया तनुजाते", "वंदे मातरम", "सारे जहाँ से अच्छा"] },
    correctIndex: 0
  },
  {
    id: "q43",
    heroId: "kuvempu",
    question: { en: "Who was the first Kannada writer to receive the Jnanpith Award?", kn: "ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ಪಡೆದ ಮೊದಲ ಕನ್ನಡ ಲೇಖಕ ಯಾರು?", hi: "ज्ञानपीठ पुरस्कार प्राप्त करने वाले पहले कन्नड़ लेखक कौन थे?" },
    options: { en: ["Kuvempu", "Bendre", "Masti"], kn: ["ಕುವೆಂಪು", "ಬೇಂದ್ರೆ", "ಮಾಸ್ತಿ"], hi: ["कुवेम्पु", "बेन्द्रे", "मास्ती"] },
    correctIndex: 0
  },
  // Basavanna Additional Questions
  {
    id: "q44",
    heroId: "basavanna",
    question: { en: "What does 'Kayakave Kailasa' mean?", kn: "'ಕಾಯಕವೇ ಕೈಲಾಸ' ಎಂದರೆ ಏನು?", hi: "'कायकवे कैलासा' का क्या अर्थ है?" },
    options: { en: ["Knowledge is Power", "Work is Worship", "Truth is God"], kn: ["ಜ್ಞಾನವೇ ಶಕ್ತಿ", "ಕಾಯಕವೇ ಕೈಲಾಸ (ಕೆಲಸವೇ ಪೂಜೆ)", "ಸತ್ಯವೇ ದೇವರು"], hi: ["ज्ञान ही शक्ति है", "कार्य ही पूजा है", "सत्य ही ईश्वर है"] },
    correctIndex: 1
  },
  {
    id: "q45",
    heroId: "basavanna",
    question: { en: "Which revolutionary social institution did Basavanna found?", kn: "ಬಸವಣ್ಣನವರು ಸ್ಥಾಪಿಸಿದ ಕ್ರಾಂತಿಕಾರಿ ಸಾಮಾಜಿಕ ಸಂಸ್ಥೆ ಯಾವುದು?", hi: "बसवण्णा ने किस क्रांतिकारी सामाजिक संस्थान की स्थापना की थी?" },
    options: { en: ["Anubhava Mantapa", "Vidhana Soudha", "Sabha"], kn: ["ಅನುಭವ ಮಂಟಪ", "ವಿಧಾನ ಸೌಧ", "ಸಭೆ"], hi: ["अनुभव मंटप", "विधान सौध", "सभा"] },
    correctIndex: 0
  },
  // Kempe Gowda Additional Questions
  {
    id: "q46",
    heroId: "kempe-gowda",
    question: { en: "In which year was Bengaluru founded?", kn: "ಬೆಂಗಳೂರು ಯಾವ ವರ್ಷದಲ್ಲಿ ಸ್ಥಾಪನೆಯಾಯಿತು?", hi: "बेंगलुरु की स्थापना किस वर्ष हुई थी?" },
    options: { en: ["1537", "1947", "1111"], kn: ["೧೫೩೭", "೧೯೪೭", "೧೧೧೧"], hi: ["1537", "1947", "1111"] },
    correctIndex: 0
  },
  {
    id: "q47",
    heroId: "kempe-gowda",
    question: { en: "How many watchtowers did Kempe Gowda build to mark basic boundaries?", kn: "ಮೂಲ ಗಡಿಗಳನ್ನು ಗುರುತಿಸಲು ಕೆಂಪೇಗೌಡರು ಎಷ್ಟು ಗೋಪುರಗಳನ್ನು ನಿರ್ಮಿಸಿದರು?", hi: "बुनियादी सीमाओं को चिह्नित करने के लिए केम्पेगौड़ा ने कितने वॉचटॉवर बनाए थे?" },
    options: { en: ["Two", "Four", "One"], kn: ["ಎರಡು", "ನಾಲ್ಕು", "ಒಂದು"], hi: ["दो", "चार", "एक"] },
    correctIndex: 1
  },
  // Krishnadevaraya Additional Questions
  {
    id: "q48",
    heroId: "krishnadevaraya",
    question: { en: "Krishnadevaraya belonged to which empire?", kn: "ಕೃಷ್ಣದೇವರಾಯ ಯಾವ ಸಾಮ್ರಾಜ್ಯಕ್ಕೆ ಸೇರಿದವರು?", hi: "कृष्णदेवराय किस साम्राज्य के थे?" },
    options: { en: ["Vijayanagara Empire", "Mysuru Kingdom", "Kadamba Empire"], kn: ["ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ", "ಮೈಸೂರು ಸಂಸ್ಥಾನ", "ಕದಂಬ ಸಾಮ್ರಾಜ್ಯ"], hi: ["विजयनगर साम्राज्य", "मैसूर साम्राज्य", "कदंब साम्राज्य"] },
    correctIndex: 0
  },
  {
    id: "q49",
    heroId: "krishnadevaraya",
    question: { en: "Which capital city did Krishnadevaraya transform?", kn: "ಕೃಷ್ಣದೇವರಾಯ ಯಾವ ರಾಜಧಾನಿ ನಗರವನ್ನು ಬದಲಾಯಿಸಿದರು?", hi: "कृष्णदेवराय ने किस राजधानी शहर को बदल दिया?" },
    options: { en: ["Mysuru", "Hampi", "Badami"], kn: ["ಮೈಸೂರು", "ಹಂಪಿ", "ಬಾದಾಮಿ"], hi: ["मैसूर", "हम्पी", "बादामी"] },
    correctIndex: 1
  },
  // Sangolli Rayanna Additional Questions
  {
    id: "q50",
    heroId: "sangolli-rayanna",
    question: { en: "Rayanna was a loyal commander of which kingdom?", kn: "ರಾಯಣ್ಣ ಯಾವ ಸಾಮ್ರಾಜ್ಯದ ನಿಷ್ಠಾವಂತ ಸೇನಾಧಿಪತಿಯಾಗಿದ್ದರು?", hi: "रायण्णा किस साम्राज्य के वफादार कमांडर थे?" },
    options: { en: ["Kittur", "Mysuru", "Bidar"], kn: ["ಕಿತ್ತೂರು", "ಮೈಸೂರು", "ಬೀದರ್"], hi: ["कित्तूर", "मैसूर", "बीदर"] },
    correctIndex: 0
  },
  {
    id: "q51",
    heroId: "sangolli-rayanna",
    question: { en: "What type of warfare did Rayanna use against the British?", kn: "ಬ್ರಿಟಿಷರ ವಿರುದ್ಧ ರಾಯಣ್ಣ ಯಾವ ರೀತಿಯ ಯುದ್ಧ ತಂತ್ರವನ್ನು ಬಳಸಿದರು?", hi: "रायण्णा ने अंग्रेजों के खिलाफ किस प्रकार के युद्ध का उपयोग किया?" },
    options: { en: ["Frontal Attack", "Guerrilla Attacks", "Naval Battle"], kn: ["ನೇರ ದಾಳಿ", "ಗೆರಿಲ್ಲಾ ದಾಳಿ", "ನೌಕಾ ಯುದ್ಧ"], hi: ["सीधा हमला", "गुरिल्ला हमला", "नौसैनिक युद्ध"] },
    correctIndex: 1
  },
  // Karnad Sadashiva Rao Additional Questions
  {
    id: "q52",
    heroId: "karnad-sadashiva-rao",
    question: { en: "Karnad Sadashiva Rao was active in which region of Karnataka?", kn: "ಕರ್ನಾಡ್ ಸದಾಶಿವ ರಾವ್ ಕರ್ನಾಟಕದ ಯಾವ ಭಾಗದಲ್ಲಿ ಸಕ್ರಿಯರಾಗಿದ್ದರು?", hi: "कर्नाड सदाशिव राव कर्नाटक के किस क्षेत्र में सक्रिय थे?" },
    options: { en: ["Coastal Karnataka", "North Karnataka", "South Karnataka"], kn: ["ಕರಾವಳಿ ಕರ್ನಾಟಕ", "ಉತ್ತರ ಕರ್ನಾಟಕ", "ದಕ್ಷಿಣ ಕರ್ನಾಟಕ"], hi: ["तटीय कर्नाटक", "उत्तर कर्नाटक", "दक्षिण कर्नाटक"] },
    correctIndex: 0
  },
  {
    id: "q53",
    heroId: "karnad-sadashiva-rao",
    question: { en: "In which year did Karnad Sadashiva Rao pass away?", kn: "ಕರ್ನಾಡ್ ಸದಾಶಿವ ರಾವ್ ಯಾವ ವರ್ಷದಲ್ಲಿ ನಿಧನರಾದರು?", hi: "कर्नाड सदाशिव राव का निधन किस वर्ष हुआ था?" },
    options: { en: ["1937", "1947", "1950"], kn: ["೧೯೩೭", "೧೯೪೭", "೧೯೫೦"], hi: ["1937", "1947", "1950"] },
    correctIndex: 0
  },
  // Umabai Kundapur Additional Questions
  {
    id: "q54",
    heroId: "umabai-kundapur",
    question: { en: "Umabai Kundapur is known for strengthening whose participation in the freedom movement?", kn: "ಸ್ವಾತಂತ್ರ್ಯ ಚಳವಳಿಯಲ್ಲಿ ಯಾರ ಭಾಗವಹಿಸುವಿಕೆಯನ್ನು ಬಲಪಡಿಸಿದ್ದಕ್ಕಾಗಿ ಉಮಾಬಾಯಿ ಕುಂದಾಪುರ ಪ್ರಸಿದ್ಧರು?", hi: "उमाबाई कुंदापुर को स्वतंत्रता आंदोलन में किसकी भागीदारी को मजबूत करने के लिए जाना जाता है?" },
    options: { en: ["Youth", "Women", "Farmers"], kn: ["ಯುವಕರು", "ಮಹಿಳೆಯರು", "ರೈತರು"], hi: ["युवा", "महिलाएं", "किसान"] },
    correctIndex: 1
  },
  {
    id: "q55",
    heroId: "umabai-kundapur",
    question: { en: "What role did Umabai Kundapur play in nationalist activities?", kn: "ರಾಷ್ಟ್ರೀಯ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ಉಮಾಬಾಯಿ ಕುಂದಾಪುರ ಅವರ ಪಾತ್ರವೇನು?", hi: "राष्ट्रवादी गतिविधियों में उमाबाई कुंदापुर की क्या भूमिका थी?" },
    options: { en: ["Soldier", "Leader & Organizer", "Spy"], kn: ["ಸೈನಿಕ", "ನಾಯಕಿ ಮತ್ತು ಸಂಘಟಕಿ", "ಗೂಢಚಾರಿ"], hi: ["सैनिक", "नेता और आयोजक", "जासूस"] },
    correctIndex: 1
  },
  // Rani Abbakka Additional Questions
  {
    id: "q56",
    heroId: "rani-abbakka",
    question: { en: "Which foreign power did Rani Abbakka fight against?", kn: "ರಾಣಿ ಅಬ್ಬಕ್ಕ ಯಾವ ವಿದೇಶಿ ಶಕ್ತಿಯ ವಿರುದ್ಧ ಹೋರಾಡಿದರು?", hi: "रानी अब्बक्का ने किस विदेशी शक्ति के खिलाफ लड़ाई लड़ी?" },
    options: { en: ["British", "Portuguese", "French"], kn: ["ಬ್ರಿಟಿಷ್", "ಪೋರ್ಚುಗೀಸ್", "ಫ್ರೆಂಚ್"], hi: ["ब्रिटिश", "पुर्तगाली", "फ्रांसीसी"] },
    correctIndex: 1
  },
  {
    id: "q57",
    heroId: "rani-abbakka",
    question: { en: "For how many decades did Rani Abbakka repel Portuguese attacks?", kn: "ರಾಣಿ ಅಬ್ಬಕ್ಕ ಎಷ್ಟು ದಶಕಗಳ ಕಾಲ ಪೋರ್ಚುಗೀಸರ ದಾಳಿಯನ್ನು ಹಿಮ್ಮೆಟ್ಟಿಸಿದರು?", hi: "रानी अब्बक्का ने कितने दशकों तक पुर्तगाली हमलों को विफल किया?" },
    options: { en: ["Two", "Four", "Ten"], kn: ["ಎರಡು", "ನಾಲ್ಕು", "ಹತ್ತು"], hi: ["दो", "चार", "दस"] },
    correctIndex: 1
  },
  // D.R. Bendre Additional Questions
  {
    id: "q58",
    heroId: "dr-bendre",
    question: { en: "D.R. Bendre is popularly known by which title?", kn: "ದ.ರಾ. ಬೇಂದ್ರೆಯವರನ್ನು ಯಾವ ಬಿರುದಿನಿಂದ ಕರೆಯಲಾಗುತ್ತದೆ?", hi: "डी.आर. बेन्द्रे लोकप्रिय रूप से किस उपाधि से जाने जाते हैं?" },
    options: { en: ["Rashtrakavi", "Vara Kavi", "Adikavi"], kn: ["ರಾಷ್ಟ್ರಕವಿ", "ವರಕವಿ", "ಆದಿಕವಿ"], hi: ["राष्ट्रकवि", "वर कवि", "आदिकवि"] },
    correctIndex: 1
  },
  {
    id: "q59",
    heroId: "dr-bendre",
    question: { en: "In which year was D.R. Bendre born?", kn: "ದ.ರಾ. ಬೇಂದ್ರೆ ಯಾವ ವರ್ಷದಲ್ಲಿ ಜನಿಸಿದರು?", hi: "डी.आर. बेन्द्रे का जन्म किस वर्ष हुआ था?" },
    options: { en: ["1896", "1900", "1920"], kn: ["೧೮೯೬", "೧೯೦೦", "೧೯೨೦"], hi: ["1896", "1900", "1920"] },
    correctIndex: 0
  },
  // Akka Mahadevi Additional Questions
  {
    id: "q60",
    heroId: "akka-mahadevi",
    question: { en: "In which movement did Akka Mahadevi play a prominent role?", kn: "ಅಕ್ಕ ಮಹಾದೇವಿ ಯಾವ ಚಳವಳಿಯಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದ್ದರು?", hi: "अक्का महादेवी ने किस आंदोलन में प्रमुख भूमिका निभाई थी?" },
    options: { en: ["Freedom struggle", "Bhakti movement", "Socialist movement"], kn: ["ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟ", "ಭಕ್ತಿ ಚಳವಳಿ", "ಸಮಾಜವಾದಿ ಚಳವಳಿ"], hi: ["स्वतंत्रता संग्राम", "भक्ति आंदोलन", "समाजवादी आंदोलन"] },
    correctIndex: 1
  },
  {
    id: "q61",
    heroId: "akka-mahadevi",
    question: { en: "Through what literary form did Akka Mahadevi express her devotion?", kn: "ಅಕ್ಕ ಮಹಾದೇವಿ ಯಾವ ಸಾಹಿತ್ಯ ರೂಪದ ಮೂಲಕ ತಮ್ಮ ಭಕ್ತಿಯನ್ನು ವ್ಯಕ್ತಪಡಿಸಿದರು?", hi: "अक्का महादेवी ने किस साहित्यिक रूप के माध्यम से अपनी भक्ति व्यक्त की?" },
    options: { en: ["Poems", "Vachanas", "Short stories"], kn: ["ಕವನಗಳು", "ವಚನಗಳು", "ಸಣ್ಣ ಕತೆಗಳು"], hi: ["कविताएँ", "वचन", "लघु कथाएँ"] },
    correctIndex: 1
  },
  // Kamaladevi Chattopadhyay Additional Questions
  {
    id: "q62",
    heroId: "kamaladevi-chattopadhyay",
    question: { en: "Kamaladevi Chattopadhyay was born in which year?", kn: "ಕಮಲಾದೇವಿ ಚಟ್ಟೋಪಾಧ್ಯಾಯ ಯಾವ ವರ್ಷದಲ್ಲಿ ಜನಿಸಿದರು?", hi: "कमलादेवी चट्टोपाध्याय का जन्म किस वर्ष हुआ था?" },
    options: { en: ["1903", "1947", "1857"], kn: ["೧೯೦೩", "೧೯೪೭", "೧೮೫೭"], hi: ["1903", "1947", "1857"] },
    correctIndex: 0
  },
  {
    id: "q63",
    heroId: "kamaladevi-chattopadhyay",
    question: { en: "What did Kamaladevi Chattopadhyay strive to revive besides handicrafts?", kn: "ಕರಕುಶಲ ವಸ್ತುಗಳ ಹೊರತಾಗಿ ಕಮಲಾದೇವಿ ಚಟ್ಟೋಪಾಧ್ಯಾಯ ಏನನ್ನು ಪುನರುಜ್ಜೀವನಗೊಳಿಸಲು ಶ್ರಮಿಸಿದರು?", hi: "हस्तशिल्प के अलावा कमलादेवी चट्टोपाध्याय ने किस चीज़ को पुनर्जीवित करने का प्रयास किया?" },
    options: { en: ["Cinema", "Theater", "Painting"], kn: ["ಸಿನೆಮಾ", "ರಂಗಭೂಮಿ", "ಚಿತ್ರಕಲೆ"], hi: ["सिनेमा", "रंगमंच", "पेंटिंग"] },
    correctIndex: 1
  },
  // Gangadharrao Deshpande Additional Questions
  {
    id: "q64",
    heroId: "gangadharrao-deshpande",
    question: { en: "Gangadharrao Deshpande organized which session of Congress in 1924?", kn: "೧೯೨೪ರಲ್ಲಿ ಗಂಗಾಧರರಾವ್ ದೇಶಪಾಂಡೆ ಕಾಂಗ್ರೆಸ್‌ನ ಯಾವ ಅಧಿವೇಶನವನ್ನು ಆಯೋಜಿಸಿದರು?", hi: "गंगाधरराव देशपांडे ने 1924 में कांग्रेस के किस अधिवेशन का आयोजन किया था?" },
    options: { en: ["Bengaluru", "Belagavi", "Mysuru"], kn: ["ಬೆಂಗಳೂರು", "ಬೆಳಗಾವಿ", "ಮೈಸೂರು"], hi: ["बेंगलुरु", "बेलगावी", "मैसूर"] },
    correctIndex: 1
  },
  {
    id: "q65",
    heroId: "gangadharrao-deshpande",
    question: { en: "Who presided over the 1924 Belagavi Congress session?", kn: "೧೯೨೪ರ ಬೆಳಗಾವಿ ಕಾಂಗ್ರೆಸ್ ಅಧಿವೇಶನದ ಅಧ್ಯಕ್ಷತೆ ವಹಿಸಿದವರು ಯಾರು?", hi: "1924 के बेलगावी कांग्रेस अधिवेशन की अध्यक्षता किसने की थी?" },
    options: { en: ["Nehru", "Gandhi", "Tilak"], kn: ["ನೆಹರು", "ಗಾಂಧಿ", "ತಿಲಕ್"], hi: ["नेहरू", "गांधी", "तिलक"] },
    correctIndex: 1
  },
  // N.S. Hardikar Additional Questions
  {
    id: "q66",
    heroId: "ns-hardikar",
    question: { en: "Why did Dr. N.S. Hardikar found the Seva Dal?", kn: "ಡಾ. ಎನ್.ಎಸ್. ಹರ್ಡಿಕರ್ ಸೇವಾದಳವನ್ನು ಏಕೆ ಸ್ಥಾಪಿಸಿದರು?", hi: "डॉ. एन.एस. हर्डीकर ने सेवा दल की स्थापना क्यों की?" },
    options: { en: ["For health service", "To organize youth", "For recreation"], kn: ["ಆರೋಗ್ಯ ಸೇವೆಗಾಗಿ", "ಯುವಕರನ್ನು ಸಂಘಟಿಸಲು", "ಮನರಂಜನೆಗಾಗಿ"], hi: ["स्वास्थ्य सेवा के लिए", "युवाओं को संगठित करने के लिए", "मनोरंजन के लिए"] },
    correctIndex: 1
  },
  {
    id: "q67",
    heroId: "ns-hardikar",
    question: { en: "Seva Dal was a volunteer base for which organization?", kn: "ಸೇವಾದಳವು ಯಾವ ಸಂಸ್ಥೆಯ ಸ್ವಯಂಸೇವಕ ಪಡೆಯಾಗಿತ್ತು?", hi: "सेवा दल किस संगठन का स्वयंसेवक आधार था?" },
    options: { en: ["Indian National Congress", "British Army", "League of Nations"], kn: ["ಭಾರತೀಯ ರಾಷ್ಟ್ರೀಯ ಕಾಂಗ್ರೆಸ್", "ಬ್ರಿಟಿಷ್ ಸೇನೆ", "ಲೀಗ್ ಆಫ್ ನೇಷನ್ಸ್"], hi: ["भारतीय राष्ट्रीय कांग्रेस", "ब्रिटिश सेना", "लीग ऑफ नेशंस"] },
    correctIndex: 0
  },
  // Bellary Siddamma Additional Questions
  {
    id: "q68",
    heroId: "bellary-siddamma",
    question: { en: "Bellary Siddamma was known for mobilizing which group?", kn: "ಬಳ್ಳಾರಿ ಸಿದ್ದಮ್ಮ ಯಾವ ಗುಂಪನ್ನು ಸಂಘಟಿಸಿದ್ದಕ್ಕಾಗಿ ಹೆಸರುವಾಸಿಯಾಗಿದ್ದರು?", hi: "बल्लारी सिद्धम्मा को किस समूह को संगठित करने के लिए जाना जाता था?" },
    options: { en: ["Traders", "Women", "Scientists"], kn: ["ವ್ಯಾಪಾರಿಗಳು", "ಮಹಿಳೆಯರು", "ವಿಜ್ಞಾನಿಗಳು"], hi: ["व्यापारी", "महिलाएं", "वैज्ञानिक"] },
    correctIndex: 1
  },
  {
    id: "q69",
    heroId: "bellary-siddamma",
    question: { en: "In which movement did Bellary Siddamma fearlessly participate?", kn: "ಬಳ್ಳಾರಿ ಸಿದ್ದಮ್ಮ ಯಾವ ಚಳವಳಿಯಲ್ಲಿ ನಿರ್ಭೀತವಾಗಿ ಭಾಗವಹಿಸಿದರು?", hi: "बल्लारी सिद्धम्मा ने किस आंदोलन में निडर होकर भाग लिया?" },
    options: { en: ["Quit India", "Khilafat", "Bhoodan"], kn: ["ಕ್ವಿಟ್ ಇಂಡಿಯಾ", "ಖಿಲಾಫತ್", "ಭೂದಾನ"], hi: ["भारत छोड़ो", "खिलाफत", "भूदान"] },
    correctIndex: 0
  },
  // Mailara Mahadeva Additional Questions
  {
    id: "q70",
    heroId: "mailara-mahadeva",
    question: { en: "From which district was Mailara Mahadeva?", kn: "ಮೈಲಾರ ಮಹಾದೇವ ಯಾವ ಜಿಲ್ಲೆಯವರು?", hi: "मैलार महादेव किस जिले से थे?" },
    options: { en: ["Dharwad", "Haveri", "Belagavi"], kn: ["ಧಾರವಾಡ", "ಹಾವೇರಿ", "ಬೆಳಗಾವಿ"], hi: ["धारवाड़", "हावेरी", "बेलगावी"] },
    correctIndex: 1
  },
  {
    id: "q71",
    heroId: "mailara-mahadeva",
    question: { en: "What was Mailara Mahadeva trying to do when he sacrificed his life?", kn: "ಮೈಲಾರ ಮಹಾದೇವ ಪ್ರಾಣತ್ಯಾಗ ಮಾಡುವಾಗ ಏನು ಮಾಡಲು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದರು?", hi: "अपने जीवन का बलिदान देते समय मैलार महादेव क्या करने की कोशिश कर रहे थे?" },
    options: { en: ["Break Jail", "Hoist National Flag", "Capture Fort"], kn: ["ಜೈಲು ಒಡೆಯುವುದು", "ರಾಷ್ಟ್ರಧ್ವಜಾರೋಹಣ", "ಕೋಟೆ ವಶಪಡಿಸಿಕೊಳ್ಳುವುದು"], hi: ["जेल तोड़ना", "राष्ट्रीय ध्वज फहराना", "किले पर कब्जा करना"] },
    correctIndex: 1
  },
  // Aluru Venkata Rao Additional Questions
  {
    id: "q72",
    heroId: "aluru-venkata-rao",
    question: { en: "Which movement did Aluru Venkata Rao lead?", kn: "ಆಲೂರು ವೆಂಕಟರಾವ್ ಯಾವ ಚಳವಳಿಯ ನೇತೃತ್ವ ವಹಿಸಿದ್ದರು?", hi: "आलुरू वेंकट राव ने किस आंदोलन का नेतृत्व किया था?" },
    options: { en: ["Unification of Karnataka", "Silent Valley", "Farmers Rebellion"], kn: ["ಕರ್ನಾಟಕ ಏಕೀಕರಣ", "ಸೈಲೆಂಟ್ ವ್ಯಾಲಿ", "ರೈತರ ಬಂಡಾಯ"], hi: ["कर्नाटक का एकीकरण", "साइलेंट वैली", "किसान विद्रोह"] },
    correctIndex: 0
  },
  {
    id: "q73",
    heroId: "aluru-venkata-rao",
    question: { en: "What is the name of the famous book written by Aluru Venkata Rao?", kn: "ಆಲೂರು ವೆಂಕಟರಾವ್ ಬರೆದ ಪ್ರಸಿದ್ಧ ಪುಸ್ತಕ ಯಾವುದು?", hi: "आलुरू वेंकट राव द्वारा लिखित प्रसिद्ध पुस्तक का नाम क्या है?" },
    options: { en: ["Karnataka Gatha Vaibhava", "Mookajjiya Kanasugalu", "Vachana Sahitya"], kn: ["ಕರ್ನಾಟಕ ಗತ ವೈಭವ", "ಮೂಕಜ್ಜಿಯ ಕನಸುಗಳು", "ವಚನ ಸಾಹಿತ್ಯ"], hi: ["कर्नाटक गाथा वैभव", "मूकज्जिया कनासुगलु", "वचन साहित्य"] },
    correctIndex: 0
  },
  // Adikavi Pampa Additional Questions
  {
    id: "q74",
    heroId: "adikavi-pampa",
    question: { en: "In which century did Adikavi Pampa live?", kn: "ಆದಿಕವಿ ಪಂಪ ಯಾವ ಶತಮಾನದಲ್ಲಿ ಬದುಕಿದ್ದರು?", hi: "आदिकवि पम्पा किस शताब्दी में रहते थे?" },
    options: { en: ["5th Century", "10th Century", "15th Century"], kn: ["೫ನೇ ಶತಮಾನ", "೧೦ನೇ ಶತಮಾನ", "೧೫ನೇ ಶತಮಾನ"], hi: ["5वीं शताब्दी", "10वीं शताब्दी", "15वीं शताब्दी"] },
    correctIndex: 1
  },
  {
    id: "q75",
    heroId: "adikavi-pampa",
    question: { en: "Vikramarjuna Vijaya is a work by which poet?", kn: "'ವಿಕ್ರಮಾರ್ಜುನ ವಿಜಯ' ಯಾವ ಕವಿಯ ಕೃತಿ?", hi: "'विक्रार्जुन विजय' किस कवि की रचना है?" },
    options: { en: ["Pampa", "Ranna", "Ponna"], kn: ["ಪಂಪ", "ರನ್ನ", "ಪೊನ್ನ"], hi: ["पम्पा", "रन्ना", "पोन्ना"] },
    correctIndex: 0
  },
  // G.S. Shivarudrappa Additional Questions
  {
    id: "q76",
    heroId: "gs-shivarudrappa",
    question: { en: "In which year did G.S. Shivarudrappa receive the Rashtrakavi title?", kn: "ಜಿ.ಎಸ್. ಶಿವರುದ್ರಪ್ಪ ಅವರಿಗೆ ಯಾವ ವರ್ಷದಲ್ಲಿ ರಾಷ್ಟ್ರಕವಿ ಬಿರುದು ನೀಡಲಾಯಿತು?", hi: "जी.एस. शिवरुद्रप्पा को किस वर्ष राष्ट्रकवि की उपाधि मिली थी?" },
    options: { en: ["2000", "2006", "2013"], kn: ["೨೦೦೦", "೨೦೦೬", "೨೦೧೩"], hi: ["2000", "2006", "2013"] },
    correctIndex: 1
  },
  {
    id: "q77",
    heroId: "gs-shivarudrappa",
    question: { en: "G.S. Shivarudrappa was also known for his work in which field?", kn: "ಜಿ.ಎಸ್. ಶಿವರುದ್ರಪ್ಪ ತಮ್ಮ ಯಾವ ಕ್ಷೇತ್ರದ ಕೆಲಸಕ್ಕಾಗಿ ಹೆಸರುವಾಸಿಯಾಗಿದ್ದಾರೆ?", hi: "जी.एस. शिवरुद्रप्पा को किस क्षेत्र में उनके काम के लिए भी जाना जाता था?" },
    options: { en: ["Music", "Research", "Sports"], kn: ["ಸಂಗೀತ", "ಸಂಶೋಧನೆ", "ಕ್ರೀಡೆ"], hi: ["संगीत", "अनुसंधान", "खेल"] },
    correctIndex: 1
  },
  // Chandrashekhara Kambara Additional Questions
  {
    id: "q78",
    heroId: "chandrashekhara-kambara",
    question: { en: "Chandrashekhara Kambara is known for using which region's dialect?", kn: "ಚಂದ್ರಶೇಖರ ಕಂಬಾರ ಯಾವ ಪ್ರದೇಶದ ಉಪಭಾಷೆಯನ್ನು ಬಳಸುವುದಕ್ಕೆ ಪ್ರಸಿದ್ಧರು?", hi: "चंद्रशेखर कंबारा किस क्षेत्र की बोली का उपयोग करने के लिए जाने जाते हैं?" },
    options: { en: ["South Karnataka", "North Karnataka", "Coastal Karnataka"], kn: ["ದಕ್ಷಿಣ ಕರ್ನಾಟಕ", "ಉತ್ತರ ಕರ್ನಾಟಕ", "ಕರಾವಳಿ ಕರ್ನಾಟಕ"], hi: ["दक्षिण कर्नाटक", "उत्तर कर्नाटक", "तटीय कर्नाटक"] },
    correctIndex: 1
  },
  {
    id: "q79",
    heroId: "chandrashekhara-kambara",
    question: { en: "Kambara is specifically celebrated for his work in which field?", kn: "ಕಂಬಾರರನ್ನು ವಿಶೇಷವಾಗಿ ಯಾವ ಕ್ಷೇತ್ರದಲ್ಲಿನ ಅವರ ಕೆಲಸಕ್ಕಾಗಿ ಅಭಿನಂದಿಸಲಾಗುತ್ತದೆ?", hi: "कंबारा को विशेष रूप से किस क्षेत्र में उनके काम के लिए सराहा जाता है?" },
    options: { en: ["Folklore", "Astronomy", "Botany"], kn: ["ಜಾನಪದ", "ಖಗೋಳವಿಜ್ಞಾನ", "ಸಸ್ಯಶಾಸ್ತ್ರ"], hi: ["लोक-साहित्य", "खगोल विज्ञान", "वनस्पति विज्ञान"] },
    correctIndex: 0
  },
  // Masti Venkatesha Iyengar Additional Questions
  {
    id: "q80",
    heroId: "masti-venkatesha-iyengar",
    question: { en: "What was Masti Venkatesha Iyengar's popular pen name?", kn: "ಮಾಸ್ತಿ ವೆಂಕಟೇಶ ಅಯ್ಯಂಗಾರ್ ಅವರ ಜನಪ್ರಿಯ ಕಾವ್ಯನಾಮ ಯಾವುದು?", hi: "मास्ती वेंकटेश अय्यंगार का लोकप्रिय उपनाम क्या था?" },
    options: { en: ["Kuvempu", "Masti", "Bendre"], kn: ["ಕುವೆಂಪು", "ಮಾಸ್ತಿ", "ಬೇಂದ್ರೆ"], hi: ["कुवेम्पु", "मास्ती", "बेन्द्रे"] },
    correctIndex: 1
  },
  {
    id: "q81",
    heroId: "masti-venkatesha-iyengar",
    question: { en: "Masti was honored with which prestigious award in index literature?", kn: "ಮಾಸ್ತಿ ಅವರಿಗೆ ಸಾಹಿತ್ಯ ಕ್ಷೇತ್ರದಲ್ಲಿ ಯಾವ ಪ್ರತಿಷ್ಠಿತ ಪ್ರಶಸ್ತಿಯನ್ನು ನೀಡಲಾಯಿತು?", hi: "मास्ती को साहित्य क्षेत्र में किस प्रतिष्ठित पुरस्कार से सम्मानित किया गया था?" },
    options: { en: ["Nobel", "Jnanpith", "Oscar"], kn: ["ನೋಬೆಲ್", "ಜ್ಞಾನಪೀಠ", "ಆಸ್ಕರ್"], hi: ["नोबेल", "ज्ञानपीठ", "ऑस्कर"] },
    correctIndex: 1
  },
  // Ratnakaravarni Additional Questions
  {
    id: "q82",
    heroId: "ratnakaravarni",
    question: { en: "Ratnakaravarni was known for introducing what in his poetry?", kn: "ರತ್ನಾಕರವರ್ಣಿ ತಮ್ಮ ಸಾಹಿತ್ಯದಲ್ಲಿ ಏನನ್ನು ಪರಿಚಯಿಸಿದ್ದಕ್ಕೆ ಪ್ರಸಿದ್ಧರು?", hi: "रत्नाकरवर्णी अपनी कविता में क्या पेश करने के लिए जाने जाते थे?" },
    options: { en: ["Old vocabulary", "New style", "Abstract art"], kn: ["ಹಳೆಯ ಶಬ್ದಕೋಶ", "ಹೊಸ ಶೈಲಿ", "ಅಮೂರ್ತ ಕಲೆ"], hi: ["पुरानी शब्दावली", "नई शैली", "अमूर्त कला"] },
    correctIndex: 1
  },
  {
    id: "q83",
    heroId: "ratnakaravarni",
    question: { en: "Masterpiece 'Bharatesha Vaibhava' covers which themes?", kn: "ಅವರ ಶ್ರೇಷ್ಠ ಕೃತಿ 'ಭರತೇಶ ವೈಭವ' ಯಾವ ವಿಷಯಗಳನ್ನು ಒಳಗೊಂಡಿದೆ?", hi: "उनकी उत्कृष्ट कृति 'भरतेश वैभव' किन विषयों को कवर करती है?" },
    options: { en: ["Only Spiritual", "Only Worldly", "Both Spiritual and Worldly"], kn: ["ಕೇವಲ ಆಧ್ಯಾತ್ಮಿಕ", "ಕೇವಲ ಲೌಕಿಕ", "ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಲೌಕಿಕ"], hi: ["केवल आध्यात्मिक", "केवल सांसारिक", "आध्यात्मिक और सांसारिक दोनों"] },
    correctIndex: 2
  },
  // Gopalakrishna Adiga Additional Questions
  {
    id: "q84",
    heroId: "gopalakrishna-adiga",
    question: { en: "In which year was Gopalakrishna Adiga born?", kn: "ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ ಯಾವ ವರ್ಷದಲ್ಲಿ ಜನಿಸಿದರು?", hi: "गोपालकृष्ण अडिग का जन्म किस वर्ष हुआ था?" },
    options: { en: ["1918", "1950", "1992"], kn: ["೧೯೧೮", "೧೯೫೦", "೧೯೯೨"], hi: ["1918", "1950", "1992"] },
    correctIndex: 0
  },
  {
    id: "q85",
    heroId: "gopalakrishna-adiga",
    question: { en: "Adiga's poems focused on which aspect of existence?", kn: "ಅಡಿಗರ ಕವಿತೆಗಳು ಅಸ್ತಿತ್ವದ ಯಾವ ಅಂಶದ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಿದ್ದವು?", hi: "अडिग की कविताएँ अस्तित्व के किस पहलू पर केंद्रित थीं?" },
    options: { en: ["Ancient Simple life", "Modern Complexities", "Nature only"], kn: ["ಪ್ರಾಚೀನ ಸರಳ ಜೀವನ", "ಆಧುನಿಕ ಸಂಕೀರ್ಣತೆಗಳು", "ಕೇವಲ ಪ್ರಕೃತಿ"], hi: ["प्राचीन सरल जीवन", "आधुनिक जटिलताएँ", "केवल प्रकृति"] },
    correctIndex: 1
  },
  // Siddalingaiah Additional Questions
  {
    id: "q86",
    heroId: "siddalingaiah",
    question: { en: "Siddalingaiah gave a voice to which movement in Karnataka?", kn: "ಸಿದ್ಧಲಿಂಗಯ್ಯ ಕರ್ನಾಟಕದ ಯಾವ ಚಳವಳಿಗೆ ಶಕ್ತಿಯುತ ಧ್ವನಿ ನೀಡಿದರು?", hi: "सिद्धलिंगैया ने कर्नाटक में किस आंदोलन को आवाज दी?" },
    options: { en: ["Dalit Movement", "Environmental Movement", "Music Movement"], kn: ["ದಲಿತ ಚಳವಳಿ", "ಪರಿಸರ ಚಳವಳಿ", "ಸಂಗೀತ ಚಳವಳಿ"], hi: ["दलित आंदोलन", "पर्यावरण आंदोलन", "संगीत आंदोलन"] },
    correctIndex: 0
  },
  {
    id: "q87",
    heroId: "siddalingaiah",
    question: { en: "What title is associated with Siddalingaiah?", kn: "ಸಿದ್ಧಲಿಂಗಯ್ಯ ಅವರಿಗೆ ಯಾವ ಬಿರುದು ನೀಡಲಾಗಿದೆ?", hi: "सिद्धलिंगैया के साथ कौन सी उपाधि जुड़ी हुई है?" },
    options: { en: ["Vara Kavi", "Dalita Kavi", "Adikavi"], kn: ["ವರಕವಿ", "ದಲಿತ ಕವಿ", "ಆದಿಕವಿ"], hi: ["वर कवि", "दलित कवि", "आदिकवि"] },
    correctIndex: 1
  },
  // Sarvajna Additional Questions
  {
    id: "q88",
    heroId: "sarvajna",
    question: { en: "Sarvajna's verses cover which topics?", kn: "ಸರ್ವಜ್ಞ ಅವರ ತ್ರಿಪದಿಗಳು ಯಾವ ವಿಷಯಗಳನ್ನು ಒಳಗೊಂಡಿವೆ?", hi: "सर्वज्ञ के छंद किन विषयों को कवर करते हैं?" },
    options: { en: ["Ethics and Spirituality", "Physics", "Chemistry"], kn: ["ನೈತಿಕತೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕತೆ", "ಭೌತಶಾಸ್ತ್ರ", "ರಸಾಯನಶಾಸ್ತ್ರ"], hi: ["नैतिकता और आध्यात्मिकता", "भौतिक विज्ञान", "रसायन विज्ञान"] },
    correctIndex: 0
  },
  {
    id: "q89",
    heroId: "sarvajna",
    question: { en: "How many lines are in a 'Tripadi' verse?", kn: "'ತ್ರಿಪದಿ' ಪದ್ಯದಲ್ಲಿ ಎಷ್ಟು ಸಾಲಿರುತ್ತವೆ?", hi: "'त्रिपदी' छंद में कितनी पंक्तियाँ होती हैं?" },
    options: { en: ["Two", "Three", "Four"], kn: ["ಎರಡು", "ಮೂರು", "ನಾಲ್ಕು"], hi: ["दो", "तीन", "चार"] },
    correctIndex: 1
  },
  // Allama Prabhu Additional Questions
  {
    id: "q90",
    heroId: "allama-prabhu",
    question: { en: "Allama Prabhu was a leading poet of which movement?", kn: "ಅಲ್ಲಮ ಪ್ರಭು ಯಾವ ಚಳವಳಿಯ ಪ್ರಮುಖ ಕವಿಯಾಗಿದ್ದರು?", hi: "अल्लामा प्रभु किस आंदोलन के प्रमुख कवि थे?" },
    options: { en: ["Veerashaiva", "Brahmo Samaj", "Arya Samaj"], kn: ["ವೀರಶೈವ", "ಬ್ರಹ್ಮ ಸಮಾಜ", "ಆರ್ಯ ಸಮಾಜ"], hi: ["वीरशैव", "ब्रह्म समाज", "आर्य समाज"] },
    correctIndex: 0
  },
  {
    id: "q91",
    heroId: "allama-prabhu",
    question: { en: "What was Allama Prabhu's role in Anubhava Mantapa?", kn: "ಅನುಭವ ಮಂಟಪದಲ್ಲಿ ಅಲ್ಲಮ ಪ್ರಭು ಅವರ ಪಾತ್ರವೇನು?", hi: "अनुभव मंटप में अल्लामा प्रभु की क्या भूमिका थी?" },
    options: { en: ["Student", "President/Patron", "Scribe"], kn: ["ವಿದ್ಯಾರ್ಥಿ", "ಅಧ್ಯಕ್ಷ/ಪೋಷಕ", "ಲೇಖಕ"], hi: ["छात्र", "अध्यक्ष/संरक्षक", "लेखक"] },
    correctIndex: 1
  },
  // Kanaka Dasa Additional Questions
  {
    id: "q92",
    heroId: "kanaka-dasa",
    question: { en: "Kanaka Dasa was a part of which movement?", kn: "ಕನಕದಾಸರು ಯಾವ ಚಳವಳಿಯ ಭಾಗವಾಗಿದ್ದರು?", hi: "कनक दास किस आंदोलन का हिस्सा थे?" },
    options: { en: ["Haridasa movement", "Independence movement", "Navya movement"], kn: ["ಹರಿದಾಸ ಚಳವಳಿ", "ಸ್ವಾತಂತ್ರ್ಯ ಚಳವಳಿ", "ನವ್ಯ ಚಳವಳಿ"], hi: ["हरिदास आंदोलन", "स्वतंत्रता आंदोलन", "नव्य आंदोलन"] },
    correctIndex: 0
  },
  {
    id: "q93",
    heroId: "kanaka-dasa",
    question: { en: "Kanaka Dasa is known for his musical compositions called?", kn: "ಕನಕದಾಸರ ಸಂಗೀತ ರಚನೆಗಳನ್ನು ಏನೆಂದು ಕರೆಯುತ್ತಾರೆ?", hi: "कनक दास की संगीत रचनाओं को क्या कहा जाता है?" },
    options: { en: ["Vachanas", "Keertanas", "Tripadis"], kn: ["ವಚನಗಳು", "ಕೀರ್ತನೆಗಳು", "ತ್ರಿಪದಿಗಳು"], hi: ["वचन", "कीर्तन", "त्रिपदी"] },
    correctIndex: 1
  },
  // Madhavacharya Additional Questions
  {
    id: "q94",
    heroId: "madhavacharya",
    question: { en: "Madhavacharya founded the Dvaita school of?", kn: "ಮಧ್ವಾಚಾರ್ಯರು ಯಾವುದರ ದ್ವೈತ ಸಿದ್ಧಾಂತವನ್ನು ಸ್ಥಾಪಿಸಿದರು?", hi: "माधवाचार्य ने किसके द्वैत स्कूल की स्थापना की?" },
    options: { en: ["Vedanta", "History", "Science"], kn: ["ವೇದಾಂತ", "ಇತಿಹಾಸ", "ವಿಜ್ಞಾನ"], hi: ["वेदांत", "इतिहास", "विज्ञान"] },
    correctIndex: 0
  },
  {
    id: "q95",
    heroId: "madhavacharya",
    question: { en: "What did Madhavacharya's teachings emphasize?", kn: "ಮಧ್ವಾಚಾರ್ಯರ ಬೋಧನೆಗಳು ಏನನ್ನು ಒತ್ತಿಹೇಳಿದವು?", hi: "माधवाचार्य की शिक्षाओं ने किस बात पर जोर दिया?" },
    options: { en: ["Unity of soul and God", "Distinction between soul and God", "No existence of God"], kn: ["ಜೀವಾತ್ಮ ಮತ್ತು ಪರಮಾತ್ಮ ಒಂದೇ", "ಜೀವಾತ್ಮ ಮತ್ತು ಪರಮಾತ್ಮ ಬೇರೆ", "ದೇವರೇ ಇಲ್ಲ"], hi: ["आत्मा और ईश्वर की एकता", "आत्मा और ईश्वर के बीच अंतर", "ईश्वर का कोई अस्तित्व नहीं"] },
    correctIndex: 1
  },
  // Kudmul Ranga Rao Additional Questions
  {
    id: "q96",
    heroId: "kudmul-ranga-rao",
    question: { en: "Kudmul Ranga Rao worked for the upliftment of?", kn: "ಕುದ್ಮುಲ್ ರಂಗರಾವ್ ಯಾರ ಉದ್ಧಾರಕ್ಕಾಗಿ ಶ್ರಮಿಸಿದರು?", hi: "कुदमुुल रंगा राव ने किसके उत्थान के लिए काम किया?" },
    options: { en: ["Underprivileged", "Rich traders", "Colonial officers"], kn: ["ದೀನದಲಿತರು (ಅಶಕ್ತರು)", "ಶ್ರೀಮಂತ ವ್ಯಾಪಾರಿಗಳು", "ವಸಾಹತುಶಾಹಿ ಅಧಿಕಾರಿಗಳು"], hi: ["वंचित", "अमीर व्यापारी", "औपनिवेशिक अधिकारी"] },
    correctIndex: 0
  },
  {
    id: "q97",
    heroId: "kudmul-ranga-rao",
    question: { en: "What did Kudmul Ranga Rao establish to help the marginalized?", kn: "ದೀನದಲಿತರಿಗೆ ಸಹಾಯ ಮಾಡಲು ಕುದ್ಮುಲ್ ರಂಗರಾವ್ ಏನನ್ನು ಸ್ಥಾಪಿಸಿದರು?", hi: "हाशिए पर रहने वाले लोगों की मदद के लिए कुदमुुल रंगा राव ने क्या स्थापित किया?" },
    options: { en: ["Missions & Schools", "Factories", "Courts"], kn: ["ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಶಾಲೆಗಳು", "ಕಾರ್ಖಾನೆಗಳು", "ನ್ಯಾಯಾಲಯಗಳು"], hi: ["मिशन और स्कूल", "कारखाने", "अदालतें"] },
    correctIndex: 0
  },
  // Final batch to ensure 5+ questions for ALL heroes
  {
    id: "q98",
    heroId: "onake-obavva",
    question: { en: "What is the name of the narrow passage Obavva guarded?", kn: "ಓಬವ್ವ ಕಾಯುತ್ತಿದ್ದ ಕಿರಿದಾದ ದಾರಿಯ ಹೆಸರೇನು?", hi: "उस संकीर्ण मार्ग का नाम क्या है जिसकी ओबव्वा ने रक्षा की थी?" },
    options: { en: ["Obavvana Kindi", "Huli Hejje", "Raja Maarga"], kn: ["ಓಬವ್ವನ ಕಿಂಡಿ", "ಹುಲಿ ಹೆಜ್ಜೆ", "ರಾಜ ಮಾರ್ಗ"], hi: ["ओबव्वाना किंडी", "हुली हेज्जे", "राज मार्ग"] },
    correctIndex: 0
  },
  {
    id: "q99",
    heroId: "rani-abbakka",
    question: { en: "Rani Abbakka was the queen of which place?", kn: "ರಾಣಿ ಅಬ್ಬಕ್ಕ ಯಾವ ಪ್ರದೇಶದ ರಾಣಿಯಾಗಿದ್ದರು?", hi: "रानी अब्बक्का कहाँ की रानी थीं?" },
    options: { en: ["Ullal", "Kittur", "Mysuru"], kn: ["ಉಳ್ಳಾಲ", "ಕಿತ್ತೂರು", "ಮೈಸೂರು"], hi: ["उल्लाल", "कित्तूर", "मैसूर"] },
    correctIndex: 0
  },
  {
    id: "q100",
    heroId: "rani-abbakka",
    question: { en: "Abbakka is often called by which title honoring her bravery?", kn: "ಅಬ್ಬಕ್ಕ ಅವರ ಶೌರ್ಯವನ್ನು ಗೌರವಿಸುವ ಯಾವ ಬಿರುದಿನಿಂದ ಕರೆಯಲಾಗುತ್ತದೆ?", hi: "अब्बक्का को उनकी बहादुरी के सम्मान में अक्सर किस उपाधि से पुकारा जाता है?" },
    options: { en: ["Abhaya Rani", "Veera Rani", "Shanta Rani"], kn: ["ಅಭಯ ರಾಣಿ", "ವೀರ ರಾಣಿ", "ಶಾಂತ ರಾಣಿ"], hi: ["अभय रानी", "वीर रानी", "शांता रानी"] },
    correctIndex: 0
  },
  {
    id: "q101",
    heroId: "krishnadevaraya",
    question: { en: "Who was the famous court poet and jester in Krishnadevaraya's court?", kn: "ಕೃಷ್ಣದೇವರಾಯನ ಆಸ್ಥಾನದಲ್ಲಿದ್ದ ಪ್ರಸಿದ್ಧ ಹಾಸ್ಯಕವಿ ಯಾರು?", hi: "कृष्णदेवराय के दरबार में प्रसिद्ध दरबारी कवि और विदूषक कौन थे?" },
    options: { en: ["Tenali Rama", "Birbal", "Kalidasa"], kn: ["ತೆನಾಲಿ ರಾಮ", "ಬೀರಬಲ್", "ಕಾಳಿದಾಸ"], hi: ["तेनाली रामा", "बीरबल", "कालिदास"] },
    correctIndex: 0
  },
  {
    id: "q102",
    heroId: "krishnadevaraya",
    question: { en: "What was the name of Krishnadevaraya's famous book on statecraft?", kn: "ರಾಜ್ಯಶಾಸ್ತ್ರದ ಕುರಿತಾದ ಕೃಷ್ಣದೇವರಾಯನ ಪ್ರಸಿದ್ಧ ಪುಸ್ತಕದ ಹೆಸರೇನು?", hi: "शासन कला पर कृष्णदेवराय की प्रसिद्ध पुस्तक का नाम क्या था?" },
    options: { en: ["Amuktamalyada", "Arthashastra", "Rajatarangini"], kn: ["ಆಮುಕ್ತಮಾಲ್ಯದ", "ಅರ್ಥಶಾಸ್ತ್ರ", "ರಾಜತರಂಗಿಣಿ"], hi: ["आमुक्तमाल्यदा", "अर्थशास्त्र", "राजतरंगिणी"] },
    correctIndex: 0
  },
  {
    id: "q103",
    heroId: "sangolli-rayanna",
    question: { en: "Where was Sangolli Rayanna executed by the British?", kn: "ಬ್ರಿಟಿಷರು ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣನನ್ನು ಎಲ್ಲಿ ಗಲ್ಲಿಗೇರಿಸಿದರು?", hi: "संगोल्ली रायण्णा को अंग्रेजों ने कहाँ फाँसी दी थी?" },
    options: { en: ["Nandagad", "Belagavi", "Kittur"], kn: ["ನಂದಗಡ", "ಬೆಳಗಾವಿ", "ಕಿತ್ತೂರು"], hi: ["नंदगढ़", "बेलगावी", "कित्तूर"] },
    correctIndex: 0
  },
  {
    id: "q104",
    heroId: "sangolli-rayanna",
    question: { en: "Which village did Rayanna belong to?", kn: "ರಾಯಣ್ಣ ಯಾವ ಗ್ರಾಮಕ್ಕೆ ಸೇರಿದವರು?", hi: "रायण्णा किस गाँव के थे?" },
    options: { en: ["Sangolli", "Kittur", "Kakati"], kn: ["ಸಂಗೊಳ್ಳಿ", "ಕಿತ್ತೂರು", "ಕಾಕತಿ"], hi: ["संगोल्ली", "कित्तूर", "काकती"] },
    correctIndex: 0
  },
  {
    id: "q105",
    heroId: "dr-bendre",
    question: { en: "For which collection of poems did Bendre receive the Jnanpith Award?", kn: "ಬೇಂದ್ರೆಯವರ ಯಾವ ಕವನ ಸಂಕಲನಕ್ಕೆ ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ಲಭಿಸಿತು?", hi: "बेन्द्रे को उनके किस कविता संग्रह के लिए ज्ञानपीठ पुरस्कार मिला था?" },
    options: { en: ["Naaku Tanti", "Gari", "Aralu Maralu"], kn: ["ನಾಕು ತಂತಿ", "ಗರಿ", "ಅರಳು ಮರಳು"], hi: ["नाकु तंति", "गारी", "अरालु मारलु"] },
    correctIndex: 0
  },
  {
    id: "q106",
    heroId: "dr-bendre",
    question: { en: "What was Bendre's pen name?", kn: "ಬೇಂದ್ರೆಯವರ ಕಾವ್ಯನಾಮ ಯಾವುದು?", hi: "बेन्द्रे का उपनाम क्या था?" },
    options: { en: ["Ambikatanayadatta", "Vinayaka", "Kuvempu"], kn: ["ಅಂಬಿಕಾತನಯದತ್ತ", "ವಿನಾಯಕ", "ಕುವೆಂಪು"], hi: ["अंबिकातनयदत्त", "विनायक", "कुवेम्पु"] },
    correctIndex: 0
  },
  {
    id: "q107",
    heroId: "akka-mahadevi",
    question: { en: "Whom did Akka Mahadevi consider as her divine husband?", kn: "ಅಕ್ಕ ಮಹಾದೇವಿ ಯಾರನ್ನು ತಮ್ಮ ದೈವಿಕ ಪತಿ ಎಂದು ಪರಿಗಣಿಸಿದ್ದರು?", hi: "अक्का महादेवी किसे अपना दिव्य पति मानती थीं?" },
    options: { en: ["Chennamallikarjuna", "Basavanna", "Allama Prabhu"], kn: ["ಚೆನ್ನಮಲ್ಲಿಕಾರ್ಜುನ", "ಬಸವಣ್ಣ", "ಅಲ್ಲಮ ಪ್ರಭು"], hi: ["चेन्नमल्लिकार्जुन", "बसवण्णा", "अल्लामा प्रभु"] },
    correctIndex: 0
  },
  {
    id: "q108",
    heroId: "akka-mahadevi",
    question: { en: "Akka Mahadevi was born in which place?", kn: "ಅಕ್ಕ ಮಹಾದೇವಿ ಎಲ್ಲಿ ಜನಿಸಿದರು?", hi: "अक्का महादेवी का जन्म कहाँ हुआ था?" },
    options: { en: ["Udugani", "Kalyana", "Basavana Bagewadi"], kn: ["ಉಡುತಡಿ (ಉಡುಗಣಿ)", "ಕಲ್ಯಾಣ", "ಬಸವನ ಬಾಗೇವಾಡಿ"], hi: ["उडुगणि", "कल्याण", "बसवना बागेवाड़ी"] },
    correctIndex: 0
  },
  {
    id: "q109",
    heroId: "kuvempu",
    question: { en: "In which village was Kuvempu born?", kn: "ಕುವೆಂಪು ಯಾವ ಗ್ರಾಮದಲ್ಲಿ ಜನಿಸಿದರು?", hi: "कुवेम्पु का जन्म किस गाँव में हुआ था?" },
    options: { en: ["Kuppali", "Tirthahalli", "Shimoga"], kn: ["ಕುಪ್ಪಳಿ", "ತೀರ್ಥಹಳ್ಳಿ", "ಶಿವಮೊಗ್ಗ"], hi: ["कुप्पली", "तीर्थहल्ली", "शिमोगा"] },
    correctIndex: 0
  },
  {
    id: "q110",
    heroId: "karnad-sadashiva-rao",
    question: { en: "What was Sadashiva Rao's profession before he turned to freedom struggle?", kn: "ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಕ್ಕೆ ಸೇರುವ ಮೊದಲು ಸದಾಶಿವ ರಾವ್ ಅವರ ವೃತ್ತಿ ಯಾವುದು?", hi: "स्वतंत्रता संग्राम में शामिल होने से पहले सदाशिव राव का पेशा क्या था?" },
    options: { en: ["Lawyer", "Doctor", "Teacher"], kn: ["ವಕೀಲ", "ವೈದ್ಯ", "ಶಿಕ್ಷಕ"], hi: ["वकील", "डॉक्टर", "शिक्षक"] },
    correctIndex: 0
  },
  {
    id: "q111",
    heroId: "kamaladevi-chattopadhyay",
    question: { en: "Kamaladevi was the first woman in India to run for what?", kn: "ಕಮಲಾದೇವಿ ಯಾವ ಹುದ್ದೆಗೆ ಸ್ಪರ್ಧಿಸಿದ ಭಾರತದ ಮೊದಲ ಮಹಿಳೆ?", hi: "कमलादेवी भारत की पहली महिला थीं जिन्होंने किस पद के लिए चुनाव लड़ा था?" },
    options: { en: ["Legislative seat", "Gram Panchayat", "UN Representative"], kn: ["ಶಾಸಕಾಂಗ ಸ್ಥಾನ", "ಗ್ರಾಮ ಪಂಚಾಯತ್", "ವಿಶ್ವಸಂಸ್ಥೆಯ ಪ್ರತಿನಿಧಿ"], hi: ["विधायी सीट", "ग्राम पंचायत", "संयुक्त राष्ट्र प्रतिनिधि"] },
    correctIndex: 0
  },
  {
    id: "q112",
    heroId: "kamaladevi-chattopadhyay",
    question: { en: "Which world-famous award did she receive for community leadership?", kn: "ಸಮುದಾಯ ನಾಯಕತ್ವಕ್ಕಾಗಿ ಅವರು ಯಾವ ವಿಶ್ವಪ್ರಸಿದ್ಧ ಪ್ರಶಸ್ತಿಯನ್ನು ಪಡೆದರು?", hi: "सामुदायिक नेतृत्व के लिए उन्हें कौन सा विश्व प्रसिद्ध पुरस्कार मिला?" },
    options: { en: ["Ramon Magsaysay", "Nobel Peace Prize", "Pulitzer"], kn: ["ರಾಮನ್ ಮ್ಯಾಗ್ಸೆಸೆ", "ನೋಬೆಲ್ ಶಾಂತಿ ಪ್ರಶಸ್ತಿ", "ಪುಲಿಟ್ಜೆರ್"], hi: ["रमन मैग्सेसे", "नोबेल शांति पुरस्कार", "पुलित्जर"] },
    correctIndex: 0
  },
  {
    id: "q113",
    heroId: "umabai-kundapur",
    question: { en: "Where did Umabai Kundapur spend most of her later years in service?", kn: "ಉಮಾಬಾಯಿ ಕುಂದಾಪುರ ತಮ್ಮ ನಂತರದ ಜೀವನದ ಹೆಚ್ಚಿನ ಸಮಯವನ್ನು ಎಲ್ಲಿ ಸೇವೆಯಲ್ಲಿ ಕಳೆದರು?", hi: "उमाबाई कुंदापुर ने अपने बाद के अधिकांश वर्ष सेवा में कहाँ बिताए?" },
    options: { en: ["Hubli", "Bengaluru", "Mysuru"], kn: ["ಹುಬ್ಬಳ್ಳಿ", "ಬೆಂಗಳೂರು", "ಮೈಸೂರು"], hi: ["हुबली", "बेंगलुरु", "मैसूर"] },
    correctIndex: 0
  },
  {
    id: "q114",
    heroId: "umabai-kundapur",
    question: { en: "Umabai Kundapur's work was deeply inspired by whom?", kn: "ಉಮಾಬಾಯಿ ಕುಂದಾಪುರ ಅವರ ಕಾರ್ಯವು ಯಾರಿಂದ ಆಳವಾಗಿ ಪ್ರೇರಿತವಾಗಿತ್ತು?", hi: "उमाबाई कुंदापुर का कार्य किससे गहराई से प्रेरित था?" },
    options: { en: ["Mahatma Gandhi", "Subhash Chandra Bose", "Lal Bahadur Shastri"], kn: ["ಮಹಾತ್ಮ ಗಾಂಧಿ", "ಸುಭಾಷ್ ಚಂದ್ರ ಬೋಸ್", "ಲಾಲ್ ಬಹದ್ದೂರ್ ಶಾಸ್ತ್ರಿ"], hi: ["महात्मा गांधी", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"] },
    correctIndex: 0
  },
  {
    id: "q115",
    heroId: "gangadharrao-deshpande",
    question: { en: "Gangadharrao Deshpande was known by which popular title?", kn: "ಗಂಗಾಧರರಾವ್ ದೇಶಪಾಂಡೆಯವರನ್ನು ಯಾವ ಜನಪ್ರಿಯ ಬಿರುದಿನಿಂದ ಕರೆಯಲಾಗುತ್ತಿತ್ತು?", hi: "गंगाधरराव देशपांडे को किस लोकप्रिय उपाधि से जाना जाता था?" },
    options: { en: ["Karnataka Lion (Kesari)", "Karnataka Tiger", "Karnataka Ratna"], kn: ["ಕರ್ನಾಟಕ ಕೇಸರಿ", "ಕರ್ನಾಟಕದ ಹುಲಿ", "ಕರ್ನಾಟಕ ರತ್ನ"], hi: ["कर्नाटक केसरी", "कर्नाटक का बाघ", "कर्नाटक रत्न"] },
    correctIndex: 0
  },
  {
    id: "q116",
    heroId: "gangadharrao-deshpande",
    question: { en: "In which year did Gangadharrao start his patriotic work?", kn: "ಗಂಗಾಧರರಾವ್ ತಮ್ಮ ದೇಶಭಕ್ತಿಯ ಕಾರ್ಯವನ್ನು ಯಾವ ವರ್ಷದಲ್ಲಿ ಪ್ರಾರಂಭಿಸಿದರು?", hi: "गंगाधरराव ने किस वर्ष अपना देशभक्तिपूर्ण कार्य शुरू किया था?" },
    options: { en: ["Early 1900s", "1940s", "1850s"], kn: ["೧೯೦೦ ರ ದಶಕದ ಆರಂಭ", "೧೯೪೦ ರ ದಶಕ", "೧೮೫೦ ರ ದಶಕ"], hi: ["1900 के दशक की शुरुआत", "1940 के दशक", "1850 के दशक"] },
    correctIndex: 0
  },
  {
    id: "q117",
    heroId: "ns-hardikar",
    question: { en: "In which country did N.S. Hardikar study medicine?", kn: "ಎನ್.ಎಸ್. ಹರ್ಡಿಕರ್ ಯಾವ ದೇಶದಲ್ಲಿ ವೈದ್ಯಕೀಯ ಶಿಕ್ಷಣ ಪಡೆದರು?", hi: "एन.एस. हर्डीकर ने किस देश में चिकित्सा की पढ़ाई की थी?" },
    options: { en: ["USA", "England", "Germany"], kn: ["ಅಮೇರಿಕಾ", "ಇಂಗ್ಲೆಂಡ್", "ಜರ್ಮನಿ"], hi: ["अमरीका", "इंग्लैंड", "जर्मनी"] },
    correctIndex: 0
  },
  {
    id: "q118",
    heroId: "bellary-siddamma",
    question: { en: "Bellary Siddamma was imprisoned for participating in which movement?", kn: "ಯಾವ ಚಳವಳಿಯಲ್ಲಿ ಭಾಗವಹಿಸಿದ್ದಕ್ಕಾಗಿ ಬಳ್ಳಾರಿ ಸಿದ್ದಮ್ಮ ಜೈಲುವಾಸ ಅನುಭವಿಸಿದರು?", hi: "बल्लारी सिद्धम्मा को किस आंदोलन में भाग लेने के कारण जेल हुई थी?" },
    options: { en: ["Satyagraha", "1857 Revolt", "Sepoy Mutiny"], kn: ["ಸತ್ಯಾಗ್ರಹ", "೧೮೫೭ ರ ದಂಗೆ", "ಸಿಪಾಯಿ ದಂಗೆ"], hi: ["सत्याग्रह", "1857 का विद्रोह", "सिपाही विद्रोह"] },
    correctIndex: 0
  },
  {
    id: "q119",
    heroId: "mailara-mahadeva",
    question: { en: "Mailara Mahadeva was strongly influenced by whose principles?", kn: "ಮೈಲಾರ ಮಹಾದೇವ ಯಾರ ತತ್ವಗಳಿಂದ ಬಲವಾಗಿ ಪ್ರಭಾವಿತರಾಗಿದ್ದರು?", hi: "मैलार महादेव किसके सिद्धांतों से गहराई से प्रभावित थे?" },
    options: { en: ["Mahatma Gandhi", "Bhagat Singh", "Sardar Patel"], kn: ["ಮಹಾತ್ಮ ಗಾಂಧಿ", "ಭಗತ್ ಸಿಂಗ್", "ಸರ್ದಾರ್ ಪಟೇಲ್"], hi: ["महात्मा गांधी", "भगत सिंह", "सरदार पटेल"] },
    correctIndex: 0
  },
  {
    id: "q120",
    heroId: "aluru-venkata-rao",
    question: { en: "Aluru Venkata Rao is called by which honorary title?", kn: "ಆಲೂರು ವೆಂಕಟರಾವ್ ಅವರನ್ನು ಯಾವ ಗೌರವದ ಬಿರುದಿನಿಂದ ಕರೆಯಲಾಗುತ್ತದೆ?", hi: "आलुरू वेंकट राव को किस सम्मानजनक उपाधि से पुकारा जाता है?" },
    options: { en: ["Karnataka Kulapurohita", "Karnataka Ratna", "Karnataka Kesari"], kn: ["ಕರ್ನಾಟಕ ಕುಲಪುರೋಹಿತ", "ಕರ್ನಾಟಕ ರತ್ನ", "ಕರ್ನಾಟಕ ಕೇಸರಿ"], hi: ["कर्नाटक कुलपुरोहित", "कर्नाटक रत्न", "कर्नाटक केसरी"] },
    correctIndex: 0
  },
  {
    id: "q121",
    heroId: "aluru-venkata-rao",
    question: { en: "In which year was Aluru Venkata Rao born?", kn: "ಆಲೂರು ವೆಂಕಟರಾವ್ ಯಾವ ವರ್ಷದಲ್ಲಿ ಜನಿಸಿದರು?", hi: "आलुरू वेंकट राव का जन्म किस वर्ष हुआ था?" },
    options: { en: ["1880", "1900", "1920"], kn: ["೧೮೮೦", "೧೯೦೦", "೧೯೨೦"], hi: ["1880", "1900", "1920"] },
    correctIndex: 0
  },
  {
    id: "q122",
    heroId: "adikavi-pampa",
    question: { en: "Pampa was the court poet of which king?", kn: "ಪಂಪ ಯಾವ ರಾಜನ ಆಸ್ಥಾನ ಕವಿಯಾಗಿದ್ದರು?", hi: "पम्पा किस राजा के दरबारी कवि थे?" },
    options: { en: ["Arikesari II", "Pulakeshin II", "Vikramaditya"], kn: ["ಇಮ್ಮಡಿ ಅರಿಕೇಸರಿ", "ಇಮ್ಮಡಿ ಪುಲಿಕೇಶಿ", "ವಿಕ್ರಮಾದಿತ್ಯ"], hi: ["अरीकेसरी द्वितीय", "पुलकेशिन द्वितीय", "विक्रमादित्य"] },
    correctIndex: 0
  },
  {
    id: "q123",
    heroId: "gs-shivarudrappa",
    question: { en: "Which famous poetry collection did Shivarudrappa write?", kn: "ಶಿವರುದ್ರಪ್ಪ ಬರೆದ ಪ್ರಸಿದ್ಧ ಕವನ ಸಂಕಲನ ಯಾವುದು?", hi: "शिवरुद्रप्पा ने कौन सा प्रसिद्ध कविता संग्रह लिखा था?" },
    options: { en: ["Saamagaana", "Naaku Tanti", "Gari"], kn: ["ಸಾಮಗಾನ", "ನಾಕು ತಂತಿ", "ಗರಿ"], hi: ["सामगान", "नाकु तंति", "गारी"] },
    correctIndex: 0
  },
  {
    id: "q124",
    heroId: "chandrashekhara-kambara",
    question: { en: "What title did Kambara hold at Hampi University?", kn: "ಹಂಪಿ ವಿಶ್ವವಿದ್ಯಾಲಯದಲ್ಲಿ ಕಂಬಾರರು ಯಾವ ಹುದ್ದೆಯನ್ನು ಹೊಂದಿದ್ದರು?", hi: "हम्पी विश्वविद्यालय में कंबारा किस पद पर थे?" },
    options: { en: ["Vice Chancellor", "Student", "Registrar"], kn: ["ಕುಲಪತಿ", "ವಿದ್ಯಾರ್ಥಿ", "ಕುಲಸಚಿವ"], hi: ["कुलपति", "छात्र", "कुलसचिव"] },
    correctIndex: 0
  },
  {
    id: "q125",
    heroId: "masti-venkatesha-iyengar",
    question: { en: "Masti was known as the father of what in Kannada literature?", kn: "ಕನ್ನಡ ಸಾಹಿತ್ಯದಲ್ಲಿ ಮಾಸ್ತಿಯವರನ್ನು ಯಾವುದರ ಪಿತಾಮಹ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ?", hi: "कन्नड़ साहित्य में मास्ती को किसका जनक माना जाता है?" },
    options: { en: ["Short Stories", "Novels", "Dramas"], kn: ["ಸಣ್ಣ ಕಥೆಗಳ ಪಿತಾಮಹ", "ಕಾದಂಬರಿಗಳು", "ನಾಟಕಗಳು"], hi: ["लघु कथाओं के जनक", "उपन्यास", "नाटक"] },
    correctIndex: 0
  },
  {
    id: "q126",
    heroId: "ratnakaravarni",
    question: { en: "To which religious path did Ratnakaravarni belong?", kn: "ರತ್ನಾಕರವರ್ಣಿ ಯಾವ ಧರ್ಮಕ್ಕೆ ಸೇರಿದವರು?", hi: "रत्नाकरवर्णी किस धर्म के थे?" },
    options: { en: ["Jainism", "Lingayatism", "Vaishnavism"], kn: ["ಜೈನ ಧರ್ಮ", "ಲಿಂಗಾಯತ ಧರ್ಮ", "ವೈಷ್ಣವ ಧರ್ಮ"], hi: ["जैन धर्म", "लिंगायत धर्म", "वैष्णव धर्म"] },
    correctIndex: 0
  },
  {
    id: "q127",
    heroId: "gopalakrishna-adiga",
    question: { en: "Gopalakrishna Adiga was a pioneer of which literature movement?", kn: "ಗೋಪಾಲಕೃಷ್ಣ ಅಡಿಗ ಯಾವ ಸಾಹಿತ್ಯ ಚಳವಳಿಯ ಪ್ರವರ್ತಕರು?", hi: "गोपालकृष्ण अडिग किस साहित्य आंदोलन के अग्रदूत थे?" },
    options: { en: ["Navya (Modernist)", "Navodaya", "Dalita"], kn: ["ನವ್ಯ", "ನವೋದಯ", "ದಲಿತ"], hi: ["नव्य (आधुनिकतावादी)", "नवोदय", "दलित"] },
    correctIndex: 0
  },
  {
    id: "q128",
    heroId: "siddalingaiah",
    question: { en: "What is the name of Siddalingaiah's famous autobiography?", kn: "ಸಿದ್ಧಲಿಂಗಯ್ಯನವರ ಪ್ರಸಿದ್ಧ ಆತ್ಮಚರಿತ್ರೆಯ ಹೆಸರೇನು?", hi: "सिद्धलिंगैया की प्रसिद्ध आत्मकथा का नाम क्या है?" },
    options: { en: ["Ooru Keri", "Naaku Tanti", "Kuppali"], kn: ["ಊರು ಕೇರಿ", "ನಾಕು ತಂತಿ", "ಕುಪ್ಪಳಿ"], hi: ["ऊरु केरी", "नाकु तंति", "कुप्पली"] },
    correctIndex: 0
  },
  {
    id: "q129",
    heroId: "sarvajna",
    question: { en: "In which district was Sarvajna born?", kn: "ಸರ್ವಜ್ಞ ಎಲ್ಲಿ ಜನಿಸಿದರು?", hi: "सर्वज्ञ का जन्म किस जिले में हुआ था?" },
    options: { en: ["Haveri", "Mysuru", "Udupi"], kn: ["ಹಾವೇರಿ", "ಮೈಸೂರು", "ಉಡುಪಿ"], hi: ["हावेरी", "मैसूर", "उडुपी"] },
    correctIndex: 0
  },
  {
    id: "q130",
    heroId: "basavanna",
    question: { en: "Who was the prime minister to King Bijjala in the 12th century?", kn: "೧೨ನೇ ಶತಮಾನದಲ್ಲಿ ಬಿಜ್ಜಳ ರಾಜನ ಪ್ರಧಾನ ಮಂತ್ರಿ ಯಾರಾಗಿದ್ದರು?", hi: "12वीं शताब्दी में राजा बिज्जल के प्रधानमंत्री कौन थे?" },
    options: { en: ["Basavanna", "Allama Prabhu", "Madhavacharya"], kn: ["ಬಸವಣ್ಣ", "ಅಲ್ಲಮ ಪ್ರಭು", "ಮಧ್ವಾಚಾರ್ಯ"], hi: ["बसवण्णा", "अल्लामा प्रभु", "माधवाचार्य"] },
    correctIndex: 0
  },
  {
    id: "q131",
    heroId: "allama-prabhu",
    question: { en: "What is the key characteristic of Allama Prabhu's vachanas?", kn: "ಅಲ್ಲಮ ಪ್ರಭು ವಚನಗಳ ಪ್ರಮುಖ ಲಕ್ಷಣ ಯಾವುದು?", hi: "अल्लामा प्रभु के वचनों की मुख्य विशेषता क्या है?" },
    options: { en: ["Metaphorical (Bedagu)", "Simple lyrics", "War stories"], kn: ["ಬೆಡಗಿನ ವಚನಗಳು", "ಸರಳ ಸಾಹಿತ್ಯ", "ಯುದ್ಧ ಕಥೆಗಳು"], hi: ["रूपक (बेदगु)", "सरल बोल", "युद्ध की कहानियाँ"] },
    correctIndex: 0
  },
  {
    id: "q132",
    heroId: "kanaka-dasa",
    question: { en: "Which Lord was Kanaka Dasa a great devotee of?", kn: "ಕನಕದಾಸರು ಯಾವ ದೇವರ ಮಹಾನ್ ಭಕ್ತರಾಗಿದ್ದರು?", hi: "कनक दास किस भगवान के महान भक्त थे?" },
    options: { en: ["Lord Krishna (Udupi)", "Lord Shiva", "Lord Ganesha"], kn: ["ಉಡುಪಿ ಶ್ರೀಕೃಷ್ಣ", "ಶಿವ", "ಗಣೇಶ"], hi: ["भगवान कृष्ण (उडुपी)", "भगवान शिव", "भगवान गणेश"] },
    correctIndex: 0
  },
  {
    id: "q133",
    heroId: "madhavacharya",
    question: { en: "Madhavacharya founded 8 monasteries (Mathas) in which temple town?", kn: "ಮಧ್ವಾಚಾರ್ಯರು ಯಾವ ದೇವಾಲಯದ ಪಟ್ಟಣದಲ್ಲಿ ೮ ಮಠಗಳನ್ನು (ಅಷ್ಟಮಠ) ಸ್ಥಾಪಿಸಿದರು?", hi: "माधवाचार्य ने किस मंदिर शहर में 8 मठों की स्थापना की थी?" },
    options: { en: ["Udupi", "Sringeri", "Mantralaya"], kn: ["ಉಡುಪಿ", "ಶೃಂಗೇರಿ", "ಮಂತ್ರಾಲಯ"], hi: ["उडुपी", "शृंगेरी", "मंत्रालय"] },
    correctIndex: 0
  },
  {
    id: "q134",
    heroId: "kudmul-ranga-rao",
    question: { en: "Which great Indian leader visited Kudmul Ranga Rao for his social service?", kn: "ರಂಗರಾವ್ ಅವರ ಸಮಾಜ ಸೇವೆಯನ್ನು ಕಂಡು ಯಾವ ಭಾರತದ ಮಹಾನ್ ನಾಯಕರು ಇಲ್ಲಿಗೆ ಭೇಟಿ ನೀಡಿದ್ದರು?", hi: "किस महान भारतीय नेता ने कुदमुुल रंगा राव की समाज सेवा के लिए उनसे मुलाकात की थी?" },
    options: { en: ["Mahatma Gandhi", "Nehru", "Patel"], kn: ["ಮಹಾತ್ಮ ಗಾಂಧಿ", "ನೆಹರು", "ಪಟೇಲ್"], hi: ["महात्मा गांधी", "नेहरू", "पटेल"] },
    correctIndex: 0
  },
  {
    id: "q135",
    heroId: "kempe-gowda",
    question: { en: "The Bengaluru International Airport is named after which hero?", kn: "ಬೆಂಗಳೂರು ಅಂತರಾಷ್ಟ್ರೀಯ ವಿಮಾನ ನಿಲ್ದಾಣಕ್ಕೆ ಯಾವ ವೀರನ ಹೆಸರನ್ನು ಇಡಲಾಗಿದೆ?", hi: "बेंगलुरु अंतर्राष्ट्रीय हवाई अड्डे का नाम किस नायक के नाम पर रखा गया है?" },
    options: { en: ["Kempe Gowda", "Kuvempu", "Basavanna"], kn: ["ಕೆಂಪೇಗೌಡ", "ಕುವೆಂಪು", "ಬಸವಣ್ಣ"], hi: ["केम्पेगौड़ा", "कुवेम्पु", "बसवण्णा"] },
    correctIndex: 0
  },
  {
    id: "q136",
    heroId: "kempe-gowda",
    question: { en: "Which fort did Kempe Gowda build using mud in 1537?", kn: "೧೫೩೭ ರಲ್ಲಿ ಕೆಂಪೇಗೌಡರು ಮಣ್ಣಿನಿಂದ ಯಾವ ಕೋಟೆಯನ್ನು ನಿರ್ಮಿಸಿದರು?", hi: "केम्पेगौड़ा ने 1537 में मिट्टी का उपयोग करके किस किले का निर्माण किया था?" },
    options: { en: ["Bengaluru Fort", "Bidar Fort", "Bellary Fort"], kn: ["ಬೆಂಗಳೂರು ಕೋಟೆ", "ಬೀದರ್ ಕೋಟೆ", "ಬಳ್ಳಾರಿ ಕೋಟೆ"], hi: ["बेंगलुरु किला", "बीदर किला", "बल्लारी किला"] },
    correctIndex: 0
  },
  {
    id: "q137",
    heroId: "kempe-gowda",
    question: { en: "Kempe Gowda was a chieftain under which empire?", kn: "ಕೆಂಪೇಗೌಡರು ಯಾವ ಸಾಮ್ರಾಜ್ಯದ ಅಡಿಯಲ್ಲಿ ಪಾಳೆಯಗಾರರಾಗಿದ್ದರು?", hi: "केम्पेगौड़ा किस साम्राज्य के अधीन सरदार थे?" },
    options: { en: ["Vijayanagara Empire", "Mysuru Kingdom", "Kadamba Empire"], kn: ["ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ", "ಮೈಸೂರು ಸಂಸ್ಥಾನ", "ಕದಂಬ ಸಾಮ್ರಾಜ್ಯ"], hi: ["विजयनगर साम्राज्य", "मैसूर साम्राज्य", "कदंब साम्राज्य"] },
    correctIndex: 0
  },
  {
    id: "q138",
    heroId: "ns-hardikar",
    question: { en: "Which organization bestowed the honorary title on Dr. Hardikar for his selfless service?", kn: "ಡಾ. ಹರ್ಡಿಕರ್ ಅವರ ನಿಸ್ವಾರ್ಥ ಸೇವೆಗಾಗಿ ಅವರಿಗೆ ಗೌರವದ ಬಿರುದನ್ನು ನೀಡಿದ ಸಂಸ್ಥೆ ಯಾವುದು?", hi: "डॉ. हर्डीकर की निस्वार्थ सेवा के लिए किस संगठन ने उन्हें मानद उपाधि से सम्मानित किया था?" },
    options: { en: ["All India Seva Dal", "British Government", "UNICEF"], kn: ["ಅಖಿಲ ಭಾರತ ಸೇವಾದಳ", "ಬ್ರಿಟಿಷ್ ಸರ್ಕಾರ", "ಯುನಿಸೆಫ್"], hi: ["अखिल भारतीय सेवा दल", "ब्रिटिश सरकार", "यूनिसेफ"] },
    correctIndex: 0
  },
  {
    id: "q139",
    heroId: "bellary-siddamma",
    question: { en: "Bellary Siddamma was mentored by which local leader in her early days?", kn: "ಬಳ್ಳಾರಿ ಸಿದ್ದಮ್ಮ ಅವರ ಆರಂಭಿಕ ದಿನಗಳಲ್ಲಿ ಯಾವ ಸ್ಥಳೀಯ ನಾಯಕರಿಂದ ಪ್ರಭಾವಿತರಾಗಿದ್ದರು?", hi: "बल्लारी सिद्धम्मा को उनके शुरुआती दिनों में किस स्थानीय नेता ने सलाह दी थी?" },
    options: { en: ["Her Husband", "Sangolli Rayanna", "Rani Abbakka"], kn: ["ಅವರ ಪತಿ", "ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ", "ರಾಣಿ ಅಬ್ಬಕ್ಕ"], hi: ["उनके पति", "संगोल्ली रायण्णा", "रानी अब्बक्का"] },
    correctIndex: 0
  },
  {
    id: "q140",
    heroId: "mailara-mahadeva",
    question: { en: "In which taluk of Haveri district was Mailara Mahadeva born?", kn: "ಹಾವೇರಿ ಜಿಲ್ಲೆಯ ಯಾವ ತಾಲ್ಲೂಕಿನಲ್ಲಿ ಮೈಲಾರ ಮಹಾದೇವ ಜನಿಸಿದರು?", hi: "हावेरी जिले के किस तालुका में मैलार महादेव का जन्म हुआ था?" },
    options: { en: ["Havery", "Byadgi", "Motebennur"], kn: ["ಹಾವೇರಿ", "ಬ್ಯಾಡಗಿ", "ಮೋಟೆಬೆನ್ನೂರು"], hi: ["हावेरी", "ब्यादगी", "मोटेबेन्नूर"] },
    correctIndex: 2
  },
  {
    id: "q141",
    heroId: "adikavi-pampa",
    question: { en: "Pampa is known as the 'Adikavi' of which language?", kn: "ಪಂಪ ಯಾವ ಭಾಷೆಯ 'ಆದಿಕವಿ' ಎಂದು ಕರೆಯಲ್ಪಡುತ್ತಾರೆ?", hi: "पम्पा को किस भाषा का 'आदिकवि' माना जाता है?" },
    options: { en: ["Kannada", "Sanskrit", "Telugu"], kn: ["ಕನ್ನಡ", "ಸಂಸ್ಕೃತ", "ತೆಲುಗು"], hi: ["कन्नड़", "संस्कृत", "तेलुगु"] },
    correctIndex: 0
  },
  {
    id: "q142",
    heroId: "gs-shivarudrappa",
    question: { en: "Shivarudrappa's works emphasized which major value?", kn: "ಶಿವರುದ್ರಪ್ಪ ಅವರ ಕೃತಿಗಳು ಯಾವ ಪ್ರಮುಖ ಮೌಲ್ಯವನ್ನು ಒತ್ತಿಹೇಳಿದವು?", hi: "शिवरुद्रप्पा के कार्यों ने किस प्रमुख मूल्य पर जोर दिया?" },
    options: { en: ["Humanism", "War", "Wealth"], kn: ["ಮಾನವೀಯತೆ", "ಯುದ್ಧ", "ಸಂಪತ್ತು"], hi: ["मानवतावाद", "युद्ध", "धन"] },
    correctIndex: 0
  },
  {
    id: "q143",
    heroId: "chandrashekhara-kambara",
    question: { en: "Chandrashekhara Kambara's work 'Singarevva Mattu Aramane' is in which form?", kn: "ಚಂದ್ರಶೇಖರ ಕಂಬಾರರ 'ಸಿಂಗಾರೆವ್ವ ಮತ್ತು ಅರಮನೆ' ಯಾವ ಸಾಹಿತ್ಯ ರೂಪದಲ್ಲಿದೆ?", hi: "चंद्रशेखर कंबारा की कृति 'सिंगरेववा मट्टू अरामने' किस रूप में है?" },
    options: { en: ["Novel", "Poem", "Short Story"], kn: ["ಕಾದಂಬರಿ", "ಕವನ", "ಸಣ್ಣ ಕಥೆ"], hi: ["उपन्यास", "कविता", "लघु कथा"] },
    correctIndex: 0
  },
  {
    id: "q144",
    heroId: "masti-venkatesha-iyengar",
    question: { en: "To which government service did Masti belong?", kn: "ಮಾಸ್ತಿ ಯಾವ ಸರ್ಕಾರಿ ಸೇವೆಯಲ್ಲಿದ್ದರು?", hi: "मास्ती किस सरकारी सेवा से संबंधित थे?" },
    options: { en: ["Mysore Civil Service", "British Army", "Police"], kn: ["ಮೈಸೂರು ನಾಗರಿಕ ಸೇವೆ", "ಬ್ರಿಟಿಷ್ ಸೈನ್ಯ", "ಪೊಲೀಸ್"], hi: ["मैसूर सिविल सेवा", "ब्रिटिश सेना", "पुलिस"] },
    correctIndex: 0
  },
  {
    id: "q145",
    heroId: "ratnakaravarni",
    question: { en: "Which unique meter (Chhandasu) did Ratnakaravarni use in his masterpiece?", kn: "ರತ್ನಾಕರವರ್ಣಿ ತಮ್ಮ ಶ್ರೇಷ್ಠ ಕೃತಿಯಲ್ಲಿ ಯಾವ ವಿಶಿಷ್ಟ ಛಂದಸ್ಸನ್ನು ಬಳಸಿದ್ದಾರೆ?", hi: "रत्नाकरवर्णी ने अपनी उत्कृष्ट कृति में किस अनूठे छंद (छंदसु) का उपयोग किया था?" },
    options: { en: ["Sangatya", "Shatpadi", "Kanda"], kn: ["ಸಾಂಗತ್ಯ", "ಷಟ್ಪದಿ", "ಕಂದ"], hi: ["सांगत्य", "षटपदी", "कंद"] },
    correctIndex: 0
  },
  {
    id: "q146",
    heroId: "gopalakrishna-adiga",
    question: { en: "Adiga served as a professor in which university city?", kn: "ಅಡಿಗ ಅವರು ಯಾವ ವಿಶ್ವವಿದ್ಯಾಲಯದ ನಗರದಲ್ಲಿ ಪ್ರಾಧ್ಯಾಪಕರಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಿದರು?", hi: "अडिग ने किस विश्वविद्यालय शहर में प्रोफेसर के रूप में कार्य किया?" },
    options: { en: ["Mysuru", "Udupi", "Sagar"], kn: ["ಮೈಸೂರು", "ಉಡುಪಿ", "ಸಾಗರ"], hi: ["मैसूर", "उडुपी", "सागर"] },
    correctIndex: 2
  },
  {
    id: "q147",
    heroId: "siddalingaiah",
    question: { en: "Siddalingaiah was a co-founder of which revolutionary group in 1974?", kn: "೧೯೭೪ರಲ್ಲಿ ಸಿದ್ಧಲಿಂಗಯ್ಯ ಯಾವ ಕ್ರಾಂತಿಕಾರಿ ಗುಂಪಿನ ಸಹ-ಸ್ಥಾಪಕರಾಗಿದ್ದರು?", hi: "सिद्धलिंगैया 1974 में किस क्रांतिकारी समूह के सह-संस्थापक थे?" },
    options: { en: ["Dalit Sangharsha Samiti", "Farmers Association", "League of Writers"], kn: ["ದಲಿತ ಸಂಘರ್ಷ ಸಮಿತಿ", "ರೈತ ಸಂಘ", "ಲೇಖಕರ ಸಂಘ"], hi: ["दलित संघर्ष समिति", "किसान संघ", "लेखक संघ"] },
    correctIndex: 0
  },
  {
    id: "q148",
    heroId: "sarvajna",
    question: { en: "In his verses, Sarvajna often critiques which social evil?", kn: "ತಮ್ಮ ತ್ರಿಪದಿಗಳಲ್ಲಿ ಸರ್ವಜ್ಞ ಹೆಚ್ಚಾಗಿ ಯಾವ ಸಾಮಾಜಿಕ ಪಿಡುಗನ್ನು ಟೀಕಿಸುತ್ತಾರೆ?", hi: "अपने छंदों में सर्वज्ञ अक्सर किस सामाजिक बुराई की आलोचना करते हैं?" },
    options: { en: ["Caste system", "Reading", "Tradition"], kn: ["ಜಾತಿ ಪದ್ಧತಿ", "ಓದುವಿಕೆ", "ಸಂಪ್ರದಾಯ"], hi: ["जाति व्यवस्था", "पढ़ना", "परंपरा"] },
    correctIndex: 0
  },
  {
    id: "q149",
    heroId: "allama-prabhu",
    question: { en: "In vachana literature, who is associated with the term 'Shunya Sampadane'?", kn: "ವಚನ ಸಾಹಿತ್ಯದಲ್ಲಿ 'ಶೂನ್ಯ ಸಂಪಾದನೆ' ಎಂಬ ಪದ ಯಾರಿಗೆ ಸಂಬಂಧಿಸಿದೆ?", hi: "वचन साहित्य में 'शून्य संपादन' शब्द किससे जुड़ा है?" },
    options: { en: ["Allama Prabhu", "Akka Mahadevi", "Basavanna"], kn: ["ಅಲ್ಲಮ ಪ್ರಭು", "ಅಕ್ಕ ಮಹಾದೇವಿ", "ಬಸವಣ್ಣ"], hi: ["अल्लामा प्रभु", "अक्का महादेवी", "बसवण्णा"] },
    correctIndex: 0
  },
  {
    id: "q150",
    heroId: "madhavacharya",
    question: { en: "Madhavacharya is believed to be an incarnation of which deity?", kn: "ಮಧ್ವಾಚಾರ್ಯರು ಯಾವ ದೇವತೆಯ ಅವತಾರವೆಂದು ನಂಬಲಾಗಿದೆ?", hi: "माधवाचार्य को किस देवता का अवतार माना जाता है?" },
    options: { en: ["Vayu (Wind God)", "Agni", "Indra"], kn: ["ವಾಯುದೇವರು", "ಅಗ್ನಿ", "ಇಂದ್ರ"], hi: ["वायु (पवन देव)", "अग्नि", "इंद्र"] },
    correctIndex: 0
  },
  {
    id: "q151",
    heroId: "kudmul-ranga-rao",
    question: { en: "Ranga Rao distributed which basic necessary items to poor students?", kn: "ರಂಗರಾವ್ ಅವರು ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಯಾವ ಮೂಲಭೂತ ಅವಶ್ಯಕ ವಸ್ತುಗಳನ್ನು ವಿತರಿಸುತ್ತಿದ್ದರು?", hi: "रंगा राव गरीब छात्रों को कौन सी बुनियादी आवश्यक वस्तुएँ वितरित करते थे?" },
    options: { en: ["Clothing and Books", "Toys", "Gold Coins"], kn: ["ಬಟ್ಟೆ ಮತ್ತು ಪುಸ್ತಕಗಳು", "ಆಟಿಕೆಗಳು", "ಚಿನ್ನದ ನಾಣ್ಯಗಳು"], hi: ["कपड़े और किताबें", "खिलौने", "सोने के सिक्के"] },
    correctIndex: 0
  }
];
