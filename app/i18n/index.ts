import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "new_product": "NEW PRODUCT",
        "experience": "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
        "see_product": "SEE PRODUCT",
        "home": "HOME",
        "headphones": "HEADPHONES",
        "speakers": "SPEAKERS",
        "earphones": "EARPHONES",
        "upgrade_speakers": "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
        "shop": "SHOP",
        "bringing_you_the": "BRINGING YOU THE",
        "best": "BEST",
        "audio_gear": "AUDIO GEAR",
        "slogan_text": "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
        "footer_text": "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.",
        "go_back": "Go back",
        "add_to_cart": "ADD TO CART",
        "features": "FEATURES",
        "in_the_box": "IN THE BOX",
        "you_may_also_like": "YOU MAY ALSO LIKE",
      }
    },
    ge: {
      translation: {
        "new_product": "ახალი პროდუქტი",
        "experience": "გამოცადეთ ბუნებრივი, რეალისტური აუდიო და გამორჩეული ხარისხი, შექმნილი მუსიკის მოყვარულთათვის.",
        "see_product": "პროდუქტის ნახვა",
        "home": "მთავარი",
        "headphones": "ყურსასმენები",
        "speakers": "დინამიკები",
        "earphones": "პატარა ყურსასმენები",
        "upgrade_speakers": "გააუმჯობესეთ პრემიუმ დინამიკებით, რომლებიც ფენომენალურად აშენებულია და უზრუნველყოფს მართლაც გამორჩეულ ხმას.",
        "shop": "ყიდვა",
        "bringing_you_the": "გთავაზობთ",
        "best": "საუკეთესო",
        "audio_gear": "აუდიო აღჭურვილობას",
        "slogan_text": "ნიუ-იორკის გულში მდებარე Audiophile არის მაღალტექნოლოგიური ყურსასმენების, ყურსასმენების, დინამიკების და აუდიო აქსესუარების მთავარი მაღაზია. ჩვენ გვაქვს დიდი შოურუმი და ფუფუნების დემონსტრაციის ოთახები, სადაც შეგიძლიათ დაათვალიეროთ და გამოსცადოთ ჩვენი პროდუქციის ფართო სპექტრი. ეწვიეთ ჩვენს მაღაზიას, რათა შეხვდეთ რამდენიმე შესანიშნავ ადამიანს, რომლებიც Audiophile-ს საუკეთესო ადგილად აქცევენ თქვენი პორტატული აუდიო აღჭურვილობის შესაძენად.",
        "footer_text": "Audiophile არის ყველაფერი ერთ ადგილას, რომელიც დააკმაყოფილებს თქვენს აუდიო მოთხოვნებს. ჩვენ ვართ პატარა გუნდი მუსიკის მოყვარულებისა და ხმის სპეციალისტებისგან, რომლებიც მიეძღვნებიან იმას, რომ მაქსიმალურად მიიღოთ სარგებელი პირადი აუდიოდან. გთხოვთ, ეწვიეთ ჩვენს დემო-ფასილიტეს - ჩვენ ვართ ღია კვირის 7 დღის განმავლობაში.",
        "go_back": "უკან დაბრუნება",
        "add_to_cart": "კალათში დამატება",
        "features": "ფუნქციები",
        "in_the_box": "ასევე მოყვება",
        "you_may_also_like": "თქვენ შეიძლება ასევე მოგეწონოთ",
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;