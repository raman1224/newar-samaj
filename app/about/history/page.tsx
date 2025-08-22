"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";

// Define types for our content structure
type TabKey = 'ancient' | 'medieval' | 'shah' | 'modern' | 'festivals' | 'architecture' | 'cuisine';

interface SectionContent {
  title: string;
  content: string[];
}

interface TabContent {
  [key: string]: SectionContent;
}

interface LanguageContent {
  title: string;
  subtitle: string;
  tabs: Record<TabKey, string>;
  sections: TabContent;
}

interface ContentStructure {
  en: LanguageContent;
  np: LanguageContent;
  newa: LanguageContent;
}

export default function HistoryPage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>('ancient');

  const content: ContentStructure = {
    en: {
      title: "Our History & Heritage",
      subtitle: "The Rich Cultural Legacy of the Newar People",
      tabs: {
        ancient: "Ancient Era",
        medieval: "Medieval Period",
        shah: "Shah Dynasty",
        modern: "Modern Times",
        festivals: "Festivals",
        architecture: "Architecture",
        cuisine: "Cuisine"
      },
      sections: {
        ancient: {
          title: "Ancient Period (Before 1200 CE)",
          content: [
            "The Newar people are the indigenous inhabitants of the Kathmandu Valley, with a history spanning over 2000 years.",
            "Archaeological evidence suggests continuous settlement since at least the Licchavi period (c. 400-750 CE), with some findings pointing to even earlier habitation.",
            "The Newars developed a sophisticated urban civilization with advanced systems of water management, agriculture, and trade.",
            "They established the unique Newa civilization which became the cultural and economic hub of the Himalayan region.",
            "The Sanskrit name 'Nepal' is believed to have been derived from 'Newar', highlighting their central role in the region's history."
          ]
        },
        medieval: {
          title: "Medieval Malla Period (1200-1768 CE)",
          content: [
            "The Malla period marked a golden age for Newar culture, with extraordinary achievements in art, architecture, and literature.",
            "The valley was divided into three kingdoms: Kathmandu, Patan, and Bhaktapur, each competing to build more magnificent temples and palaces.",
            "Newar artisans developed distinctive architectural styles like the pagoda design, which later influenced building styles across Asia.",
            "This era saw the flourishing of Newar Buddhism and Hinduism coexisting harmoniously, with many syncretic practices emerging.",
            "The Malla kings were great patrons of the arts, leading to the creation of exquisite metalwork, woodcarving, and stone sculptures that remain cultural treasures today."
          ]
        },
        shah: {
          title: "Shah Dynasty Period (1768-2008 CE)",
          content: [
            "After Prithvi Narayan Shah's conquest of the valley in 1768, Newars adapted to the new political structure while preserving their cultural identity.",
            "Newar administrators played crucial roles in the Shah administration, contributing to governance, diplomacy, and economic management.",
            "Despite political changes, Newar merchants maintained extensive trade networks with Tibet and India, facilitating cultural exchange.",
            "The Rana period (1846-1951) saw both challenges and opportunities for Newars, with some families gaining prominence while others faced land reforms.",
            "Throughout this period, Newars continued to celebrate their festivals, maintain their language, and practice their unique customs, ensuring cultural continuity."
          ]
        },
        modern: {
          title: "Modern Era (2008-Present)",
          content: [
            "With the establishment of a democratic federal republic in 2008, Newars have gained official recognition as an indigenous nationality (Adivasi Janajati).",
            "Newar language (Nepal Bhasa) is now taught in schools and used in media, helping to revitalize the linguistic heritage.",
            "Urbanization and globalization present both challenges and opportunities for preserving Newar culture in the Kathmandu Valley.",
            "Newar diaspora communities around the world have established cultural associations to maintain their heritage abroad.",
            "Digital platforms and social media are being used to promote Newar culture, language, and traditions to younger generations."
          ]
        },
        festivals: {
          title: "Cultural Festivals & Traditions",
          content: [
            "Indra Jatra: An eight-day festival honoring Lord Indra, featuring the Kumari Jatra procession and masked dances.",
            "Bisket Jatra: New Year celebration in Bhaktapur involving chariot processions and tug-of-war rituals.",
            "Mohani: The most important Newar festival (Dashain), celebrating the victory of goddess Durga over demons.",
            "Swin: Newar Buddhism's festival of lights, similar to Diwali but with distinct rituals and significance.",
            "Gunla: A sacred month for Newar Buddhists featuring daily pilgrimages to Swayambhunath and other holy sites.",
            "Yomari Punhi: Harvest festival dedicated to the rice cake delicacy called yomari, celebrating agricultural abundance."
          ]
        },
        architecture: {
          title: "Architectural Heritage",
          content: [
            "Pagoda Style: Multi-tiered temples with intricately carved wooden struts and toranas (tympanums), influencing architecture across Asia.",
            "Bahi and Bahal: Buddhist monastic courtyards that serve as centers of learning, meditation, and community gathering.",
            "Newar Houses: Traditional brick buildings with carved wooden windows, courtyards, and multiple stories oriented around a central quadrangle.",
            "Stone Waterspouts: Hitis, the ancient water supply system featuring beautifully carved stone spouts and reservoirs.",
            "Stupas: Buddhist monuments like Swayambhunath and Boudhanath with unique Newar architectural elements and symbolism.",
            "Durbar Squares: The royal squares of Kathmandu, Patan, and Bhaktapur showcasing the pinnacle of Newar architectural achievement."
          ]
        },
        cuisine: {
          title: "Culinary Traditions",
          content: [
            "Newa Cuisine: A diverse culinary tradition with over 200 dishes, many tied to festivals and rituals.",
            "Baji: Beaten rice, the staple food, served with various accompaniments like lentils, vegetables, and meats.",
            "Choila: Grilled buffalo meat marinated in spices, a must-have at festivals and celebrations.",
            "Yomari: Steamed rice flour dumplings filled with molasses and sesame seeds, associated with the Yomari Punhi festival.",
            "Juju Dhau: 'King of Yogurts', a creamy, sweet yogurt traditionally made in Bhaktapur.",
            "Samay Baji: A ritual platter consisting of baji, choila, boiled egg, black soybeans, ginger, and other items, used in ceremonies.",
            "Aila: Home-distilled liquor, traditionally consumed during festivals and special occasions."
          ]
        }
      }
    },
    np: {
      title: "हाम्रो इतिहास र सम्पदा",
      subtitle: "नेवार जनजातिको समृद्ध सांस्कृतिक विरासत",
      tabs: {
        ancient: "प्राचीन काल",
        medieval: "मध्यकालीन",
        shah: "शाह वंश",
        modern: "आधुनिक काल",
        festivals: "चाडपर्व",
        architecture: "वास्तुकला",
        cuisine: "खानपान"
      },
      sections: {
        ancient: {
          title: "प्राचीन काल (१२०० ईस्वी पूर्व)",
          content: [
            "नेवार जनजाति काठमाडौं उपत्यकाका आदिवासी बासिन्दा हुन्, जसको इतिहास २००० वर्ष भन्दा बढी पुरानो छ।",
            "पुरातात्विक प्रमाणहरूले कम्तीमा लिच्छवि काल (४००-७५० ईस्वी) देखि निरन्तर बस्तीको संकेत गर्दछ, केही भेटहरू यसभन्दा पहिलेको बासस्थानलाई जनाउँछन्।",
            "नेवारहरूले उन्नत जल प्रबन्धन, कृषि र व्यापार प्रणालीहरूको साथ एक विकसित सहरी सभ्यता विकसित गरे।",
            "उनीहरूले अद्वितीय नेवा सभ्यता स्थापित गरे जो हिमालय क्षेत्रको सांस्कृतिक र आर्थिक केन्द्र बन्यो।",
            "मानिन्छ कि संस्कृत नाम 'नेपाल' 'नेवार' बाट लिइएको हो, जसले क्षेत्रको इतिहासमा उनीहरूको केन्द्रीय भूमिकालाई उजागर गर्दछ।"
          ]
        },
        medieval: {
          title: "मध्यकालीन मल्ल काल (१२००-१७६८ ईस्वी)",
          content: [
            "मल्ल कालले नेवार संस्कृतिको लागि स्वर्ण युगको सुरूवात गर्यो, जसले कला, वास्तुकला र साहित्यमा असाधारण उपलब्धिहरू प्राप्त गर्यो।",
            "उपत्यका तीन राज्यहरूमा विभाजित थियो: काठमाडौं, पाटन र भक्तपुर, प्रत्येकले अधिक भव्य मन्दिरहरू र दरबारहरू निर्माण गर्न प्रतिस्पर्धा गर्थे।",
            "नेवार कारीगरहरूले पगोडा डिजाइन जस्ता विशिष्ट वास्तुकला शैलीहरू विकसित गरे, जसले पछि सम्पूर्ण एसियामा भवन निर्माण शैलीलाई प्रभावित गर्यो।",
            "यस युगमा नेवार बौद्ध धर्म र हिन्दू धर्मको सहअस्तित्वले समृद्धि पायो, साथै धेरै समन्वयकारी प्रथाहरू उत्पन्न भए।",
            "मल्ल राजाहरू कलाका महान संरक्षक थिए, जसले उत्कृष्ट धातुकला, काठको नक्कली काम र पत्थरको मूर्तिहरूको सृष्टि गरे जो आज सम्म सांस्कृतिक सम्पदाहरू हुन्।"
          ]
        },
        shah: {
          title: "शाह वंश काल (१७६८-२००८ ईस्वी)",
          content: [
            "सन् १७६८ मा पृथ्वीनारायण शाहले उपत्यकाको विजय पछि, नेवारहरूले आफ्नो सांस्कृतिक पहिचान कायम राख्दै नयाँ राजनीतिक संरचनामा ढाल्नु पर्यो।",
            "नेवार प्रशासकहरूले शाह प्रशासनमा महत्वपूर्ण भूमिका खेले, शासन, कूटनीति र आर्थिक व्यवस्थापनमा योगदान पुर्याए।",
            "राजनीतिक परिवर्तनहरूको बावजुद, नेवार व्यापारीहरूले तिब्बत र भारतसँग व्यापक व्यापार नेटवर्कहरू कायम राखे, सांस्कृतिक आदानप्रदानलाई सुविधाजनक बनाए।",
            "रणा काल (१८४६-१९५१) मा नेवारहरूको लागि चुनौतीहरू र अवसरहरू देखियो, केही परिवारहरूले प्रमुखता प्राप्त गरे भने अन्यहरूले जमीन सुधारको सामना गरे।",
            "यस पूर्ण अवधिमा, नेवारहरूले आफ्ना चाडपर्वहरू मनाउने, आफ्नो भाषा कायम राख्ने र आफ्ना अनौठो चलनहरूको अभ्यास गर्न जारी राखे, सांस्कृतिक निरन्तरता सुनिश्चित गरे।"
          ]
        },
        modern: {
          title: "आधुनिक युग (२००८-वर्तमान)",
          content: [
            "सन् २००८ मा लोकतान्त्रिक संघीय गणतन्त्रको स्थापना सँगै, नेवारहरूले आदिवासी जनजाति (आदिवासी जनजाति) को रूपमा आधिकारिक मान्यता प्राप्त गरे।",
            "नेवार भाषा (नेपाल भाषा) अहिले स्कूलहरूमा पढाइन्छ र मिडियामा प्रयोग गरिन्छ, जसले भाषिक सम्पदालाई पुनर्जीवित गर्न मद्दत गर्दछ।",
            "शहरीकरण र भूमण्डलीकरणले काठमाडौं उपत्यकामा नेवार संस्कृतिलाई संरक्षण गर्न चुनौतीहरू र अवसरहरू प्रस्तुत गर्दछ।",
            "विश्वभरिका नेवार प्रवासी समुदायहरूले विदेशमा आफ्नो विरासत कायम राख्न सांस्कृतिक संघहरू स्थापना गरेका छन्।",
            "डिजिटल प्लेटफर्महरू र सोशल मिडियालाई नेवार संस्कृति, भाषा र परम्पराहरूलाई युवा पुस्ताहरूमा प्रवर्धन गर्न प्रयोग गरिँदैछ।"
          ]
        },
        festivals: {
          title: "सांस्कृतिक चाडपर्व र परम्पराहरू",
          content: [
            "इन्द्र जात्रा: देवता इन्द्रलाई सम्मान गर्ने आठ दिने चाड, जसमा कुमारी जात्रा जुलूस र मुखौटा नाचहरू समावेश छन्।",
            "बिस्केट जात्रा: भक्तपुरमा मनाइने नयाँ बर्षको उत्सव, जसमा रथयात्रा र रस्साकर्षण समारोहहरू समावेश छन्।",
            "मोहनी: सबैभन्दा महत्वपूर्ण नेवार पर्व (दशैं), जुन देवी दुर्गाले राक्षसहरूमाथि गरेको विजयको सम्झनामा मनाइन्छ।",
            "स्विन: नेवार बौद्धहरूको दीपावलीको पर्व, दिवालीजस्तै तर विशिष्ट रीतिरिवाज र महत्वको साथ।",
            "गुन्ला: नेवार बौद्धहरूको लागि पवित्र महिना, जसमा स्वयम्भूनाथ र अन्य पवित्र स्थलहरूमा दैनिक तीर्थयात्रा समावेश छ।",
            "योमरी पुन्ही: योमरी भनिने चामलको पकौडाको लागि समर्पित कृषि पर्व, कृषिको प्रचुरतालाई मनाउने।"
          ]
        },
        architecture: {
          title: "वास्तुकला सम्पदा",
          content: [
            "पगोडा शैली: बारीकै नक्कली काठका स्ट्रटहरू र तोरणहरू भएका बहु-स्तरीय मन्दिरहरू, जसले सम्पूर्ण एसियाको वास्तुकलालाई प्रभावित गरेको छ।",
            "बही र बहाल: बौद्ध मठीय courtyards जुन शिक्षा, ध्यान र सामुदायिक सभाको केन्द्रको रूपमा काम गर्दछ।",
            "नेवार घरहरू: नक्कली काठका झ्यालहरू, courtyards र केन्द्रीय चौक वरिपरि अभिमुखित बहु-तलाहरू भएका पारंपरिक ईंटका भवनहरू।",
            "पत्थरका धाराहरू: हितिहरू, प्राचीन जलापूर्ति प्रणाली जसमा सुन्दर नक्कली पत्थरका धाराहरू र जलाशयहरू समावेश छन्।",
            "स्तुपहरू: स्वयम्भूनाथ र बौद्धनाथ जस्ता बौद्ध monuments जसमा अद्वितीय नेवार वास्तुशिल्प तत्वहरू र प्रतीकवाद छ।",
            "दरबार क्षेत्रहरू: काठमाडौं, पाटन र भक्तपुरका राजदरबार क्षेत्रहरू जसले नेवार वास्तुशिल्प उपलब्धिको चरमोत्कर्ष देखाउँछन्।"
          ]
        },
        cuisine: {
          title: "पाक परम्पराहरू",
          content: [
            "नेवा खानपान: २०० भन्दा बढी व्यंजनहरू भएको विविध पाक परम्परा, जुन धेरै चाडपर्व र रीतिरिवाजहरूसँग जोडिएका छन्।",
            "बजी: चामललाई पिटेर बनाइने खाना, जुन विभिन्न सहयोगी खाद्यपदार्थहरू जस्तै दाल, तरकारी र मासुको साथ परोसिन्छ।",
            "चोइला: मसलामा मारिने गरी गरिएको राँगाको मासु, चाडपर्व र उत्सवहरूमा आवश्यक।",
            "योमरी: चामलको पीठोबाट बनाइने भापमा पकाइएको मिठाई, जसभित्र मोलासेस र तिल हालिन्छ, योमरी पुन्हीको चाडसँग सम्बन्धित।",
            "जुजु धौ: 'दहीको राजा', भक्तपुरमा पारंपरिक रूपमा बनाइने मलाईदार, गुलियो दही।",
            "समय बजी: एउटा अनुष्ठानिक थाल जसमा बजी, चोइला, उसिनeko अण्डा, कालो भटमास, अदुवा र अन्य वस्तुहरू समावेश छन्, समारोहहरूमा प्रयोग गरिन्छ।",
            "अइला: घरमा बनाइने मदिरा, पारंपरिक रूपमा चाडपर्व र विशेष अवसरहरूमा खाने गरिन्छ।"
          ]
        }
      }
    },
    newa: {
      title: "झी इतिहास व सम्पदा",
      subtitle: "नेवा: मनुतये धनी सांस्कृतिक विरासत",
      tabs: {
        ancient: "पुरातन युग",
        medieval: "मध्यकालीन",
        shah: "शाह वंश",
        modern: "आधुनिक युग",
        festivals: "चहड्",
        architecture: "वास्तुकला",
        cuisine: "न्हापिंगु"
      },
      sections: {
        ancient: {
          title: "पुरातन युग (१२०० ईस्वी यापू)",
          content: [
            "नेवा: मनुतये काठमाडौं उपत्यकाया मूल बासिन्दा खः, जुया इतिहास २००० बर्ष भन्दा बढी पुरानो दु।",
            "पुरातात्विक प्रमाणहरूले कम्तीमा लिच्छवि काल (४००-७५० ईस्वी) देखि निरन्तर बस्ती जनाउदु, केही भेटहरू यसभन्दा पहिलेको बासस्थान लखंदु。",
            "नेवा:तये उन्नत जल प्रबन्धन, कृषि व व्यापार प्रणालीतये साथ विकसित सहरी सभ्यता विकास यानादिगु।",
            "तेगु अद्वितीय नेवा सभ्यता स्थापना यानादिगु जे हिमालय क्षेत्रया सांस्कृतिक व आर्थिक केन्द्र जुगु।",
            "मखुगु संस्कृत नाम 'नेपाल' 'नेवार' नं ल्हातदिगु, जे क्षेत्रया इतिहासय् तेगु केन्द्रीय भूमिका उजागर यानादिगु。"
          ]
        },
        medieval: {
          title: "मध्यकालीन मल्ल काल (१२००-१७६८ ईस्वी)",
          content: [
            "मल्ल कालं नेवा संस्कृतिका निम्ति स्वर्ण युगया सुरूवात यानादिगु, जे कला, वास्तुकला व साहित्यय् असाधारण उपलब्धिहरू प्राप्त यानादिगु。",
            "उपत्यका तीन राज्यय् विभाजित खः: ये, यल व ख्वप, प्रत्येकं अधिक भव्य द्यः व लाय्कु निर्माण याये प्रतिस्पर्धा यानादिगु。",
            "नेवा: कारीगरतये पगोडा डिजाइन कथंया विशिष्ट वास्तुकला शैलीहरू विकास यानादिगु, जे पश्चात् सम्पूर्ण एसियाया भवन निर्माण शैली प्रभावित यानादिगु。",
            "हां बर्सय् नेवा बौद्ध धर्म व हिन्दू धर्मया सहअस्तित्वं समृद्धि म्हो यानादिगु, साथै गुकिय् धेरै समन्वयकारी प्रथाहरू उत्पन्न जुगु。",
            "मल्ल राजातये कलाया महान संरक्षक खः, जे उत्कृष्ट धातुकला, सःया नक्कली काम व द्यूया मूर्तिहरूया सृष्टि यानादिगु जे दंयागु सांस्कृतिक सम्पदा खः。"
          ]
        },
        shah: {
          title: "शाह वंश काल (१७६८-२००८ ईस्वी)",
          content: [
            "सन् १७६८ य् पृथ्वीनारायण शाहं उपत्यकाको विजय पश्चात्, नेवा:तये आफुनिया सांस्कृतिक पहिचान थें न्ह्याना नवीन राजनीतिक संरचनाय् ढाल्नु पर्यादिगु。",
            "नेवा: प्रशासकतये शाह प्रशासनय् महत्वपूर्ण भूमिका म्हो यानादिगु, शासन, कूटनीति व आर्थिक व्यवस्थापनय् योगदान पुयादिगु。",
            "राजनीतिक परिवर्तनतये बावजुद, नेवा: व्यापारीतये तिब्बत व भारतसँग व्यापक व्यापार नेटवर्क थें न्ह्यानादिगु, सांस्कृतिक आदानप्रदान सुविधाजनक यानादिगु。",
            "रणा काल (१८४६-१९५१) य् नेवा:तये निम्ति चुनौतीहरू व अवसरहरू ल्हाइदिगु, च्वापु परिवारतये प्रमुखता प्राप्त यानादिगु भं अरूतये जमीन सुधारया सामना यानादिगु。",
            "हां पूर्ण अवधिय्, नेवा:तये आफुनिया चहड्तये मनाउने, आफुनिया भाषा थें न्ह्याने व आफुनिया अनौठो चलनतये अभ्यास याना थें न्ह्यानादिगु, सांस्कृतिक निरन्तरता सुनिश्चित यानादिगु。"
          ]
        },
        modern: {
          title: "आधुनिक युग (२००८-दानी)",
          content: [
            "सन् २००८ य् लोकतान्त्रिक संघीय गणतन्त्रया स्थापना सँगै, नेवा:तये आदिवासी जनजाति (आदिवासी जनजाति)या रूपय् आधिकारिक मान्यता प्राप्त यानादिगु。",
            "नेवा: भाषा (नेपाल भाषा) आः स्कूलतयेय् पढाइदु व मिडियाय् प्रयोग यानादिगु, जे भाषिक सम्पदा पुनर्जीवित याये मद्दत यानादिगु。",
            "शहरीकरण व भूमण्डलीकरणं काठमाडौं उपत्यकाय् नेवा संस्कृतिलाई संरक्षण याये चुनौतीहरू व अवसरहरू प्रस्तुत यानादिगु。",
            "विश्वभरिया नेवा: प्रवासी समुदायतये विदेशय् आफुनिया विरासत थें न्ह्याना सांस्कृतिक संघतये स्थापना यानादिगु。",
            "डिजिटल प्लेटफर्महरू व सोशल मिडियालाई नेवा संस्कृति, भाषा व परम्परातयेलाई युवा पुस्तातयेय् प्रवर्धन याये प्रयोग यानादिगु。"
          ]
        },
        festivals: {
          title: "सांस्कृतिक चहड् व परम्पराहरू",
          content: [
            "इन्द्र जात्रा: देवता इन्द्रलाई सम्मान याना आठ दिने चहड्, जेय् कुमारी जात्रा जुलूस व मुखौटा नाचहरू समावेश दु。",
            "बिस्केट जात्रा: ख्वपय् मनाइगु न्हुगु बर्षया उत्सव, जेय् रथयात्रा व रस्साकर्षण समारोहहरू समावेश दु。",
            "मोहनी: सकलय् महत्वपूर्ण नेवा: पर्व (दशैं), जे देवी दुर्गाये राक्षसतयेमाथि म्हो याना विजयया सम्झनाय् मनाइगु。",
            "स्विन: नेवा: बौद्धतयेया दीपावलीया पर्व, दिवाली कथं तर विशिष्ट रीतिरिवाज व महत्वया साथ。",
            "गुन्ला: नेवा: बौद्धतयेया निम्ति पवित्र मा:, जेय् स्वयम्भूनाथ व अरू पवित्र स्थलतयेय् दैनिक तीर्थयात्रा समावेश दु。",
            "योमरी पुन्ही: योमरी ल्हुइगु चामलया पकौडाया निम्ति समर्पित कृषि पर्व, कृषिया प्रचुरतालाई मनाउगु。"
          ]
        },
        architecture: {
          title: "वास्तुकला सम्पदा",
          content: [
            "पगोडा शैली: बारीकै नक्कली सःया स्ट्रटतये व तोरणतये भाया बहु-स्तरीय द्यःतये, जे सम्पूर्ण एसियाया वास्तुकलालाई प्रभावित यानादिगु。",
            "बही व बहाल: बौद्ध मठीय courtyards जे शिक्षा, ध्यान व सामुदायिक सभाया केन्द्रया रूपय् काम यानादिगु。",
            "नेवा: छे:तये: नक्कली सःया झ्यालतये, courtyards व केन्द्रीय चौक वरिपरि अभिमुखित बहु-तलातये भाया पारंपरिक ईंटया भवनतये。",
            "द्यूया धारातये: हितितये, प्राचीन जलापूर्ति प्रणाली जेय् सुन्दर नक्कली द्यूया धारातये व जलाशयतये समावेश दु。",
            "स्तुपतये: स्वयम्भूनाथ व बौद्धनाथ कथंया बौद्ध monuments जेय् अद्वितीय नेवा वास्तुशिल्प तत्वतये व प्रतीकवाद दु。",
            "दरबार क्षेत्रतये: ये, यल व ख्वपया राजदरबार क्षेत्रतये जे नेवा वास्तुशिल्प उपलब्धिया चरमोत्कर्ष लखंदिगु。"
          ]
        },
        cuisine: {
          title: "पाक परम्पराहरू",
          content: [
            "नेवा न्हापिंगु: २०० निसें बढी व्यंजनतये भाया विविध पाक परम्परा, जे धेरै चहड् व रीतिरिवाजतयेसँग जोडियागु दु。",
            "बजी: चामललाई पिटेर बनाइगु खाना, जे विभिन्न सहयोगी खाद्यपदार्थतये जथें दाल, तरकारी व मासुया साथ परोसिदु。",
            "चोइला: मसलाय् मारिनागु गरिगु राँगाया मासु, चहड् व उत्सवतयेय् आवश्यक。",
            "योमरी: चामलया पीठोबाट बनाइगु भापय् पकाइगु मिठाई, जेभित्र मोलासेस व तिल हालिगु, योमरी पुन्हीया चहड्सँग सम्बन्धित。",
            "जुजु धौ: 'दहीया राजा', ख्वपय् पारंपरिक रूपय् बनाइगु मलाईदार, गुलियो दही。",
            "समय बजी: गुगु अनुष्ठानिक थाल जेय् बजी, चोइला, उसिनेको अण्डा, कालो भटमास, अदुवा व अरू वस्तुतये समावेश दु, समारोहतयेय् प्रयोग यानादिगु。",
            "अइला: छे:य् बनाइगु मदिरा, पारंपरिक रूपय् चहड् व विशेष अवसरतयेय् खानागु。"
          ]
        }
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4 font-serif">
            {currentContent.title}
          </h1>
          <p className="text-xl md:text-2xl text-amber-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto mb-8 pb-2 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            {Object.entries(currentContent.tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as TabKey)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium whitespace-nowrap transition-colors ${
                  activeTab === key
                    ? "bg-amber-600 text-white"
                    : "bg-white text-amber-700 hover:bg-amber-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-6">
            {currentContent.sections[activeTab].title}
          </h2>
          
          <div className="space-y-4">
            {currentContent.sections[activeTab].content.map((paragraph: string, index: number) => (
              <p key={index} className="text-gray-700 leading-relaxed text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Cultural Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-amber-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              {language === "en" ? "12 Major Festivals" : language === "np" ? "१२ प्रमुख चाडपर्व" : "१२ प्रमुख चहड्"}
            </h3>
            <p className="text-amber-700">
              {language === "en" 
                ? "Celebrated throughout the year" 
                : language === "np" 
                ? "वर्षभरि मनाइन्छ" 
                : "बर्साभरि मनाइगु"}
            </p>
          </div>

          <div className="bg-red-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0h-2m2 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-red-800 mb-2">
              {language === "en" ? "7 UNESCO Sites" : language === "np" ? "७ युनेस्को स्थलहरू" : "७ युनेस्को स्थलतये"}
            </h3>
            <p className="text-red-700">
              {language === "en" 
                ? "World Heritage sites in Kathmandu Valley" 
                : language === "np" 
                ? "काठमाडौं उपत्यकामा विश्व सम्पदा स्थलहरू" 
                : "काठमाडौं उपत्यकाय् विश्व सम्पदा स्थलतये"}
            </p>
          </div>

          <div className="bg-green-100 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {language === "en" ? "200+ Unique Dishes" : language === "np" ? "२००+ अनौठो व्यंजनहरू" : "२००+ अनौठो व्यंजनतये"}
            </h3>
            <p className="text-green-700">
              {language === "en" 
                ? "In Newar culinary tradition" 
                : language === "np" 
                ? "नेवार पाक परम्परामा" 
                : "नेवा: पाक परम्पराय्"}
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-amber-700 italic border-t border-amber-200 pt-6">
          {language === "en" 
            ? "The Newar community continues to preserve its rich heritage while adapting to modern times." 
            : language === "np" 
            ? "नेवार समुदायले आधुनिक समयमा ढाल्दै आफ्नो समृद्ध विरासत संरक्षण गरिरहेको छ।" 
            : "नेवा: समुदायं आधुनिक समयय् ढाल्दिया आफुनिया धनी विरासत संरक्षण यानादिगु。"}
        </div>
      </div>
    </div>
  );
}