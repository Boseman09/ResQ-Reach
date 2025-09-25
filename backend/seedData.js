// seedData.js - Initial data population
const mongoose = require('mongoose');
const Video = require('./models/Video');
const Language = require('./models/Language');
require('dotenv').config();

const seedData = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/firstaid', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🧹 Clearing existing data...');
    await Video.deleteMany({});
    await Language.deleteMany({});
    console.log('✅ Existing data cleared');

    // Language data with comprehensive translations
    const languages = [
      {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        rtl: false,
        translations: {
          common: {
            download: 'Download',
            play: 'Play',
            pause: 'Pause',
            loading: 'Loading',
            error: 'Error',
            offline: 'Offline',
            online: 'Online',
            sync: 'Sync',
            lastSync: 'Last sync',
            downloaded: 'Downloaded',
            notAvailable: 'Not available'
          },
          categories: {
            medical: 'Medical / First Aid',
            emergency: 'Emergency Action Guides'
          },
          priorities: {
            high: 'Critical',
            medium: 'Important', 
            low: 'Helpful'
          },
          messages: {
            downloadComplete: 'Download complete',
            syncComplete: 'Sync complete',
            connectionLost: 'Connection lost',
            videoNotAvailable: 'Video not available offline',
            downloadingVideos: 'Downloading videos...',
            allVideosDownloaded: 'All videos downloaded'
          },
          app: {
            title: 'First Aid & Action Guide',
            subtitle: 'Offline Emergency Videos',
            downloadCritical: 'Download Critical Videos',
            videosDownloaded: 'Videos Downloaded',
            availableOffline: 'Available Offline',
            criticalVideos: 'Critical Videos',
            currentlyDownloading: 'Currently Downloading'
          }
        }
      },
      {
        code: 'hi',
        name: 'Hindi',
        nativeName: 'हिंदी',
        rtl: false,
        translations: {
          common: {
            download: 'डाउनलोड',
            play: 'चलाएं',
            pause: 'रोकें',
            loading: 'लोड हो रहा है',
            error: 'त्रुटि',
            offline: 'ऑफ़लाइन',
            online: 'ऑनलाइन',
            sync: 'सिंक',
            lastSync: 'अंतिम सिंक',
            downloaded: 'डाउनलोड हो गया',
            notAvailable: 'उपलब्ध नहीं'
          },
          categories: {
            medical: 'चिकित्सा / प्राथमिक चिकित्सा',
            emergency: 'आपातकालीन कार्य गाइड'
          },
          priorities: {
            high: 'अत्यंत महत्वपूर्ण',
            medium: 'महत्वपूर्ण',
            low: 'उपयोगी'
          },
          messages: {
            downloadComplete: 'डाउनलोड पूरा',
            syncComplete: 'सिंक पूरा',
            connectionLost: 'कनेक्शन टूट गया',
            videoNotAvailable: 'वीडियो ऑफ़लाइन उपलब्ध नहीं',
            downloadingVideos: 'वीडियो डाउनलोड हो रहे हैं...',
            allVideosDownloaded: 'सभी वीडियो डाउनलोड हो गए'
          },
          app: {
            title: 'प्राथमिक चिकित्सा और कार्य गाइड',
            subtitle: 'ऑफ़लाइन आपातकालीन वीडियो',
            downloadCritical: 'महत्वपूर्ण वीडियो डाउनलोड करें',
            videosDownloaded: 'वीडियो डाउनलोड हुए',
            availableOffline: 'ऑफ़लाइन उपलब्ध',
            criticalVideos: 'महत्वपूर्ण वीडियो',
            currentlyDownloading: 'वर्तमान में डाउनलोड हो रहा है'
          }
        }
      },
      {
        code: 'ta',
        name: 'Tamil',
        nativeName: 'தமிழ்',
        rtl: false,
        translations: {
          common: {
            download: 'பதிவிறக்கு',
            play: 'இயக்கு',
            pause: 'இடைநிறுத்து',
            loading: 'ஏற்றுகிறது',
            error: 'பிழை',
            offline: 'இணைப்பில்லாமல்',
            online: 'இணைப்புடன்',
            sync: 'ஒத்திசை',
            lastSync: 'கடைசி ஒத்திசைவு',
            downloaded: 'பதிவிறக்கப்பட்டது',
            notAvailable: 'கிடைக்கவில்லை'
          },
          categories: {
            medical: 'மருத்துவ / முதலுதவி',
            emergency: 'அவசரகால நடவடிக்கை வழிகாட்டிகள்'
          },
          priorities: {
            high: 'மிக முக்கியமான',
            medium: 'முக்கியமான',
            low: 'பயனுள்ள'
          },
          messages: {
            downloadComplete: 'பதிவிறக்கம் முடிந்தது',
            syncComplete: 'ஒத்திசைவு முடிந்தது',
            connectionLost: 'இணைப்பு இழந்தது',
            videoNotAvailable: 'வீடியோ இணைப்பில்லாமல் கிடைக்கவில்லை',
            downloadingVideos: 'வீடியோக்கள் பதிவிறக்கப்படுகின்றன...',
            allVideosDownloaded: 'அனைத்து வீடியோக்களும் பதிவிறக்கப்பட்டன'
          },
          app: {
            title: 'முதலுதவி மற்றும் நடவடிக்கை வழிகாட்டி',
            subtitle: 'இணைப்பில்லா அவசரகால வீடியோக்கள்',
            downloadCritical: 'முக்கியமான வீடியோக்களை பதிவிறக்கு',
            videosDownloaded: 'வீடியோக்கள் பதிவிறக்கப்பட்டன',
            availableOffline: 'இணைப்பில்லாமல் கிடைக்கும்',
            criticalVideos: 'முக்கியமான வீடியோக்கள்',
            currentlyDownloading: 'தற்போது பதிவிறக்கப்படுகிறது'
          }
        }
      },
      {
        code: 'bn',
        name: 'Bengali',
        nativeName: 'বাংলা',
        rtl: false,
        translations: {
          common: {
            download: 'ডাউনলোড',
            play: 'চালু করুন',
            pause: 'বিরতি',
            loading: 'লোড হচ্ছে',
            error: 'ত্রুটি',
            offline: 'অফলাইন',
            online: 'অনলাইন',
            sync: 'সিঙ্ক',
            lastSync: 'শেষ সিঙ্ক',
            downloaded: 'ডাউনলোড হয়েছে',
            notAvailable: 'উপলব্ধ নয়'
          },
          categories: {
            medical: 'চিকিৎসা / প্রাথমিক চিকিৎসা',
            emergency: 'জরুরি কর্ম গাইড'
          },
          priorities: {
            high: 'অত্যন্ত গুরুত্বপূর্ণ',
            medium: 'গুরুত্বপূর্ণ',
            low: 'সহায়ক'
          },
          messages: {
            downloadComplete: 'ডাউনলোড সম্পূর্ণ',
            syncComplete: 'সিঙ্ক সম্পূর্ণ',
            connectionLost: 'সংযোগ হারিয়ে গেছে',
            videoNotAvailable: 'ভিডিও অফলাইনে উপলব্ধ নয়',
            downloadingVideos: 'ভিডিও ডাউনলোড হচ্ছে...',
            allVideosDownloaded: 'সব ভিডিও ডাউনলোড হয়েছে'
          },
          app: {
            title: 'প্রাথমিক চিকিৎসা এবং কর্ম গাইড',
            subtitle: 'অফলাইন জরুরি ভিডিও',
            downloadCritical: 'গুরুত্বপূর্ণ ভিডিও ডাউনলোড করুন',
            videosDownloaded: 'ভিডিও ডাউনলোড হয়েছে',
            availableOffline: 'অফলাইনে উপলব্ধ',
            criticalVideos: 'গুরুত্বপূর্ণ ভিডিও',
            currentlyDownloading: 'বর্তমানে ডাউনলোড হচ্ছে'
          }
        }
      },
      {
        code: 'te',
        name: 'Telugu',
        nativeName: 'తెలుగు',
        rtl: false,
        translations: {
          common: {
            download: 'డౌన్‌లోడ్',
            play: 'ప్లే',
            pause: 'పాజ్',
            loading: 'లోడింగ్',
            error: 'లోపం',
            offline: 'ఆఫ్‌లైన్',
            online: 'ఆన్‌లైన్',
            sync: 'సింక్',
            lastSync: 'చివరి సింక్',
            downloaded: 'డౌన్‌లోడ్ అయ్యింది',
            notAvailable: 'అందుబాటులో లేదు'
          },
          categories: {
            medical: 'వైద్య / ప్రథమ చికిత్స',
            emergency: 'అత్యవసర చర్య మార్గదర్శకాలు'
          },
          priorities: {
            high: 'అత్యంత ముఖ్యమైన',
            medium: 'ముఖ్యమైన',
            low: 'ఉపయోగకరమైన'
          },
          messages: {
            downloadComplete: 'డౌన్‌లోడ్ పూర్తయ్యింది',
            syncComplete: 'సింక్ పూర్తయ్యింది',
            connectionLost: 'కనెక్షన్ కోల్పోయింది',
            videoNotAvailable: 'వీడియో ఆఫ్‌లైన్‌లో అందుబాటులో లేదు',
            downloadingVideos: 'వీడియోలు డౌన్‌లోడ్ అవుతున్నాయి...',
            allVideosDownloaded: 'అన్ని వీడియోలు డౌన్‌లోడ్ అయ్యాయి'
          },
          app: {
            title: 'ప్రథమ చికిత్స మరియు చర్య మార్గదర్శకం',
            subtitle: 'ఆఫ్‌లైన్ అత్యవసర వీడియోలు',
            downloadCritical: 'ముఖ్యమైన వీడియోలను డౌన్‌లోడ్ చేయండి',
            videosDownloaded: 'వీడియోలు డౌన్‌లోడ్ అయ్యాయి',
            availableOffline: 'ఆఫ్‌లైన్‌లో అందుబాటులో ఉంది',
            criticalVideos: 'ముఖ్యమైన వీడియోలు',
            currentlyDownloading: 'ప్రస్తుతం డౌన్‌లోడ్ అవుతున్నది'
          }
        }
      }
    ];

    // Video data with comprehensive information
    const videos = [
      {
        id: 'bleeding-control',
        category: 'medical',
        priority: 'high',
        urls: new Map([
          ['youtube', 'https://www.youtube.com/watch?v=LkmJZ-JBWi4'],
          ['backup', 'https://cdn.firstaid.gov.in/videos/bleeding-control.mp4'],
          ['ndma', 'https://ndma.gov.in/videos/bleeding-control']
        ]),
        duration: '5:32',
        fileSize: 45.2,
        thumbnailUrl: 'https://cdn.firstaid.gov.in/thumbnails/bleeding-control.jpg',
        tags: ['bleeding', 'emergency', 'wound', 'pressure', 'bandage', 'trauma'],
        ndmaGuidelines: 'https://ndma.gov.in/guidelines/bleeding-control',
        translations: new Map([
          ['en', {
            title: 'Bleeding Control',
            description: 'Learn how to control severe bleeding and apply pressure bandages effectively to save lives in emergency situations',
            keywords: ['bleeding control', 'first aid', 'emergency', 'wound care', 'pressure bandage', 'hemorrhage']
          }],
          ['hi', {
            title: 'रक्तस्राव नियंत्रण',
            description: 'गंभीर रक्तस्राव को नियंत्रित करना और दबाव पट्टी लगाना सीखें जो आपातकालीन स्थितियों में जीवन बचा सकता है',
            keywords: ['रक्तस्राव नियंत्रण', 'प्राथमिक चिकित्सा', 'आपातकाल', 'घाव की देखभाल']
          }],
          ['ta', {
            title: 'இரத்தப்போக்கு கட்டுப்பாடு',
            description: 'கடுமையான இரத்தப்போக்கை கட்டுப்படுத்தவும் அழுத்தம் கட்டுகளை பயனுள்ள முறையில் பயன்படுத்தவும் கற்றுக்கொள்ளுங்கள்',
            keywords: ['இரத்தப்போக்கு கட்டுப்பாடு', 'முதலுதவி', 'அவசரநிலை', 'காய பராமரிப்பு']
          }],
          ['bn', {
            title: 'রক্তক্ষরণ নিয়ন্ত্রণ',
            description: 'গুরুতর রক্তক্ষরণ নিয়ন্ত্রণ করতে এবং চাপ ব্যান্ডেজ কার্যকরভাবে প্রয়োগ করতে শিখুন',
            keywords: ['রক্তক্ষরণ নিয়ন্ত্রণ', 'প্রাথমিক চিকিৎসা', 'জরুরি', 'ক্ষত পরিচর্যা']
          }],
          ['te', {
            title: 'రక్తస్రావం నియంత్రణ',
            description: 'తీవ్రమైన రక్తస్రావాన్ని నియంత్రించడం మరియు ప్రెషర్ బ్యాండేజ్‌లను ప్రభావవంతంగా వర్తింపజేయడం నేర్చుకోండి',
            keywords: ['రక్తస్రావం నియంత్రణ', 'ప్రథమ చికిత్స', 'అత్యవసర', 'గాయం సంరక్షణ']
          }]
        ])
      },
      {
        id: 'burns-treatment',
        category: 'medical',
        priority: 'high',
        urls: new Map([
          ['youtube', 'https://www.youtube.com/watch?v=i2aT5fhpvgA'],
          ['backup', 'https://cdn.firstaid.gov.in/videos/burns-treatment.mp4']
        ]),
        duration: '4:18',
        fileSize: 38.7,
        thumbnailUrl: 'https://cdn.firstaid.gov.in/thumbnails/burns-treatment.jpg',
        tags: ['burns', 'fire', 'heat', 'chemical', 'electrical', 'cooling'],
        ndmaGuidelines: 'https://ndma.gov.in/guidelines/burns-treatment',
        translations: new Map([
          ['en', {
            title: 'Burns Treatment',
            description: 'Proper first aid for different types of burns including thermal, chemical, and electrical burns',
            keywords: ['burns treatment', 'thermal burns', 'chemical burns', 'electrical burns', 'cooling', 'first aid']
          }],
          ['hi', {
            title: 'जलने का इलाज',
            description: 'विभिन्न प्रकार की जलन के लिए उचित प्राथमिक चिकित्सा जिसमें थर्मल, रासायनिक और विद्युत जलन शामिल है',
            keywords: ['जलने का इलाज', 'थर्मल जलन', 'रासायनिक जलन', 'विद्युत जलन', 'ठंडा करना']
          }],
          ['ta', {
            title: 'தீக்காயம் சிகிச்சை',
            description: 'வெப்ப, ரசாயன மற்றும் மின்சார தீக்காயங்கள் உட்பட பல்வேறு வகையான தீக்காயங்களுக்கான சரியான முதலுதவி',
            keywords: ['தீக்காயம் சிகிச்சை', 'வெப்ப தீக்காயங்கள்', 'ரசாயன தீக்காயங்கள்', 'மின்சார தீக்காயங்கள்']
          }],
          ['bn', {
            title: 'পুড়ে যাওয়ার চিকিৎসা',
            description: 'তাপীয়, রাসায়নিক এবং বৈদ্যুতিক পোড়াসহ বিভিন্ন ধরনের পোড়ার জন্য সঠিক প্রাথমিক চিকিৎসা',
            keywords: ['পোড়া চিকিৎসা', 'তাপীয় পোড়া', 'রাসায়নিক পোড়া', 'বৈদ্যুতিক পোড়া']
          }],
          ['te', {
            title: 'కాలిన గాయాల చికిత్స',
            description: 'థర్మల్, కెమికల్ మరియు ఎలక్ట్రికల్ బర్న్స్‌తో సహా వివిధ రకాల కాలిన గాయాలకు సరైన ప్రథమ చికిత్స',
            keywords: ['కాలిన గాయాల చికిత్స', 'థర్మల్ బర్న్స్', 'కెమికల్ బర్న్స్', 'ఎలక్ట్రికల్ బర్న్స్']
          }]
        ])
      },
      {
        id: 'fracture-management',
        category: 'medical',
        priority: 'medium',
        urls: new Map([
          ['youtube', 'https://www.youtube.com/watch?v=N3Mjjx6eDGk'],
          ['backup', 'https://cdn.firstaid.gov.in/videos/fracture-management.mp4']
        ]),
        duration: '6:45',
        fileSize: 56.3,
        thumbnailUrl: 'https://cdn.firstaid.gov.in/thumbnails/fracture-management.jpg',
        tags: ['fracture', 'bone', 'splint', 'immobilization', 'injury'],
        ndmaGuidelines: 'https://ndma.gov.in/guidelines/fracture-management',
        translations: new Map([
          ['en', {
            title: 'Fracture Management',
            description: 'How to stabilize and support fractures using splints and proper immobilization techniques',
            keywords: ['fracture management', 'bone fracture', 'splinting', 'immobilization', 'orthopedic first aid']
          }],
          ['hi', {
            title: 'फ्रैक्चर प्रबंधन',
            description: 'स्प्लिंट और उचित स्थिरीकरण तकनीकों का उपयोग करके फ्रैक्चर को स्थिर और सहारा देना',
            keywords: ['फ्रैक्चर प्रबंधन', 'हड्डी का फ्रैक्चर', 'स्प्लिंटिंग', 'स्थिरीकरण']
          }],
          ['ta', {
            title: 'எலும்பு முறிவு மேலாண்மை',
            description: 'ஸ்பிளிண்ட்கள் மற்றும் சரியான அசைவற்ற நுட்பங்களைப் பயன்படுத்தி எலும்பு முறிவுகளை உறுதிப்படுத்துவதும் ஆதரவு செய்வதும்',
            keywords: ['எலும்பு முறிவு மேலாண்மை', 'எலும்பு முறிவு', 'ஸ்பிளிண்டிங்', 'அசைவின்மை']
          }],
          ['bn', {
            title: 'ভাঙা হাড়ের ব্যবস্থাপনা',
            description: 'স্প্লিন্ট এবং সঠিক স্থিরীকরণ কৌশল ব্যবহার করে ভাঙা হাড়কে স্থিতিশীল এবং সহায়তা করা',
            keywords: ['ভাঙা হাড়ের ব্যবস্থাপনা', 'হাড় ভাঙা', 'স্প্লিন্টিং', 'স্থিরীকরণ']
          }],
          ['te', {
            title: 'ఫ్రాక్చర్ నిర్వహణ',
            description: 'స్ప్లింట్లు మరియు సరైన స్థిరీకరణ పద్ధతులను ఉపయోగించి ఫ్రాక్చర్లను స్థిరీకరించడం మరియు మద్దతు ఇవ్వడం',
            keywords: ['ఫ్రాక్చర్ నిర్వహణ', 'ఎముక ఫ్రాక్చర్', 'స్ప్లింటింగ్', 'స్థిరీకరణ']
          }]
        ])
      },
      {
        id: 'choking-relief',
        category: 'medical',
        priority: 'high',
        urls: new Map([
          ['youtube', 'https://www.youtube.com/watch?v=Zk-npz72GWI'],
          ['backup', 'https://cdn.firstaid.gov.in/videos/choking-relief.mp4']
        ]),
        duration: '3:42',
        fileSize: 32.1,
        thumbnailUrl: 'https://cdn.firstaid.gov.in/thumbnails/choking-relief.jpg',
        tags: ['choking', 'heimlich', 'airway', 'obstruction', 'abdominal-thrust'],
        ndmaGuidelines: 'https://ndma.gov.in/guidelines/choking-relief',
        translations: new Map([
          ['en', {
            title: 'Choking Relief',
            description: 'Heimlich maneuver and choking first aid techniques for adults, children, and infants',
            keywords: ['choking relief', 'heimlich maneuver', 'airway obstruction', 'abdominal thrust', 'back blows']
          }],
          ['hi', {
            title: 'गला घुटने की राहत',
            description: 'वयस्कों, बच्चों और शिशुओं के लिए हेमलिच मैन्युवर और गला घुटने की प्राथमिक चिकित्सा तकनीक',
            keywords: ['गला घुटने की राहत', 'हेमलिच मैन्युवर', 'वायुमार्ग में रुकावट', 'पेट का दबाव']
          }],
          ['ta', {
            title: 'மூச்சுத்திணறல் நிவாரணம்',
            description: 'பெரியவர்கள், குழந்தைகள் மற்றும் கைக்குழந்தைகளுக்கான ஹெய்ம்லிச் சூழ்ச்சி மற்றும் மூச்சுத்திணறல் முதலுதவி நுட்பங்கள்',
            keywords: ['மூச்சுத்திணறல் நிவாரணம்', 'ஹெய்ம்லிச் சூழ்ச்சி', 'காற்றுப்பாதை அடைப்பு']
          }],
          ['bn', {
            title: 'শ্বাসরোধ উপশম',
            description: 'প্রাপ্তবয়স্ক, শিশু এবং নবজাতকদের জন্য হেইমলিচ ম্যানুভার এবং শ্বাসরোধের প্রাথমিক চিকিৎসা কৌশল',
            keywords: ['শ্বাসরোধ উপশম', 'হেইমলিচ ম্যানুভার', 'শ্বাসনালী বাধা', 'পেটের চাপ']
          }],
          ['te', {
            title: 'ఉక్కిరిబిక్కిరి నుండి ఉపశమనం',
            description: 'పెద్దలు, పిల్లలు మరియు శిశువుల కోసం హెయిమ్లిచ్ మ్యానువర్ మరియు ఉక్కిరిబిక్కిరి ప్రథమ చికిత్స పద్ధతులు',
            keywords: ['ఉక్కిరిబిక్కిరి ఉపశమనం', 'హెయిమ్లిచ్ మ్యాన