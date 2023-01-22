const paragraphs = [
  "Çoğu zaman, birisinin veya bir şeyin bir eylemde bulunduğunu düşündüğümüzde, bir insanın veya bir nesnenin görevi yerine getirdiğini hayal ederiz. Bununla birlikte, bazı durumlarda, eylemin tamamen bir makine gibi başka bir şey tarafından yapıldığını düşünmek yararlı olabilir. Bu makalede, makineleri içeren bazı farklı eylem örneklerini ve bunların aracılık ve niyetlilik gibi kavramları göstermek için nasıl kullanılabileceğini inceleyeceğiz.",
  "Fiil konjugasyonu herhangi bir dilin önemli bir parçasıdır ve aynı zamanda yeni başlayanlar için öğrenmesi zor olabilen bir şeydir. Çünkü hatırlanması gereken birçok kural vardır ve bu kurallar kullandığınız zamana bağlı olarak değişir. Ama merak etme! Yardım etmek için buradayız. Bu makalede, karşılaşmanız muhtemel tüm farklı zamanları kapsayan fiil konjugasyonu için kapsamlı bir kılavuz sunacağız.",
  "Nesneler, öznenin hareket ettiği şeylerdir. Fiziksel ya da fiziksel olmayan, cansız ya da hareketli olabilirler. Nesneler, farkında olsak da olmasak da etrafımızda bulunabilir. Küçük bir şey olabilirler, kaya gibi, ya da büyük bir şey, ağaç gibi. Birçok farklı nesne türü vardır ve her birinin kendine has özellikleri ve özellikleri vardır.",
  "Bağlayıcılar cümleleri birbirine bağlayan kelimelerdir. Fiiller, sıfatlar, isimler veya bir konektör görevi görebilecek başka herhangi bir kelime olabilirler. Bunlar önemlidir çünkü okuyucunun metinde neler olduğunu anlamasına yardımcı olurlar. İyi bir bağlantı, okuyucuların kendilerini hikayenin bir parçasıymış gibi hissetmelerini sağlayacaktır.",
  "Klozlar, bir konu ve fiil içeren kelime gruplarıdır. Bir veya daha fazla maddeden oluşurlar ve bir düşünceyi veya fikri iletmek için kullanılabilirler. Birçok farklı madde türü vardır ve bunlar çeşitli şekillerde kullanılabilir. Bazı ortak maddeler ana maddeleri, alt maddeleri, giriş maddelerini, kesin maddeleri ve ilgili maddeleri içerir.",
  "Rastgele paragraf da yaratıcılığa ilham vermeye yardımcı olabilir. Bu araç, yeni bir konsept, fikir veya içerik bulmaya çalışıyorsanız dikkate almamış olabileceğiniz belirli özellikleri bulmanıza yardımcı olabilir. Bu web sitesine geldiyseniz, büyük olasılıkla rastgele bir paragraf aradığınız içindir. Rastgele bir cümle her zaman yeterli değildir. Burada rastgele paragraf üreteci çok yardımcı olur.",
  "Gördüm gül teldeki domates sinema masanın filmini mi düşünüyor gördüm sinema. Bilgisayarı mutlu oldular orta camisi umut lambadaki de göze çarpan koyun mıknatıslı okuma sayfası sarmal açılmadan dolayı gül karşıdakine domates. Bilgisayarı yapacakmış yazın çakıl bahar öyle ki hesap makinesi orta camisi patlıcan düşünüyor. Gitti mıknatıslı okuma sayfası un değirmeni gülüyorum. ",
  "Beğendim şafak ama masaya doğru sevindi ona doğru bilgiyasayarı ekşili çorba teldeki ışık dağılımı. Batarya kutusu şafak gül eve doğru kapının kulu domates adanaya umut umut cesurca yaptı. Anlamsız uzattı duyulmamış şafak telefonu türemiş sıfat ekşili çorba dergi cezbelendi ama domates yapacakmış lambadaki. Hesap makinesi eve doğru çobanın gazete sinema de ama domates eve doğru sıradanlıktan. ",
  "Bilgisayarı sarmal açılmadan dolayı bilgisayarı domates ışık dağılımı ama ona doğru anlamsız uzattı duyulmamış. Filmini mi dışarı çıktılar umut türemiş sıfat masanın gitti yapacakmış bahar adanaya ama. Balıkhaneye gidecekmiş türemiş sıfat cesurca yaptı sıradanlıktan batarya kutusu. Sarmal açılmadan dolayı un değirmeni gidecekmiş sıradanlıktan kapının kulu mutlu oldular mutlu oldular. ",
  "Karşıdakine öyle ki kalemi koştum dışarı çıktılar ötekinden dolayı teldeki değerli olduğu için teldeki un değirmeni. Ve yapacakmış patlıcan sokaklarda anlamsız. Gülüyorum gördüm uzattı sıradanlıktan gidecekmiş masaya doğru. Teldeki çakıl çünkü türemiş sıfat türemiş sıfat. Mıknatıslı okuma sayfası sıla teldeki eve doğru bahar. Teldeki ve domates gidecekmiş lakin hesap makinesi çobanın.",
  "Çakıl masaya doğru bilgisayarı gazete kapının kulu göze çarpan telefonu ekşili çorba türemiş sıfat türemiş sıfat. Koyun sokaklarda öyle ki karşıdakine mutlu oldular çobanın tv umut adanaya beğendim şafak bahar ona doğru çünkü. Filmini mi cezbelendi göze çarpan ekşili çorba çobanın beğendim beğendim gördüm bilgiyasayarı. Cezbelendi yazın umut ışık dağılımı otobüs beğendim düşünüyor gördüm duyulmamış düşünüyor.",
  "Öyle ki çakıl filmini mi gülüyorum masanın batarya kutusu. Gidecekmiş gidecekmiş tv sıla biber çobanın yapacakmış kapının kulu un değirmeni düşünüyor. Un değirmeni koşuyorlar anlamsız ve karşıdakine sıradanlıktan duyulmamış lakin koyun telefonu. Ama çakıl şafak sinema adresini kapının kulu. Ona doğru çakıl sandalye masaya doğru sokaklarda patlıcan lakin lakin umut orta camisi sevindi teldeki. ",
  "Sandalye ona doğru koyun lambadaki eve doğru de sıla şafak masanın bilgisayarı. Biber dışarı çıktılar ötekinden dolayı kalemi koştum. Işık dağılımı sevindi uzattı mıknatıslı okuma sayfası domates sokaklarda cesurca yaptı değerli olduğu için sokaklarda. Adanaya çünkü gördüm ve masaya doğru sarmal açılmadan dolayı ötekinden dolayı tv batarya kutusu adresini domates sıradanlıktan.",
  "Şafak ekşili çorba yazın göze çarpan gitti yazın bilgiyasayarı duyulmamış çobanın. De orta camisi orta camisi gülüyorum yapacakmış göze çarpan anlamsız sıla duyulmamış teldeki telefonu sandalye teldeki. Koştum dışarı çıktılar tv hesap makinesi karşıdakine biber lakin koştum gül. Un değirmeni değerli olduğu için kapının kulu koyun yapacakmış sevindi gül mıknatıslı okuma sayfası. ",
  "Gül bahar beğendim koyun mıknatıslı okuma sayfası otobüs sevindi masanın cesurca yaptı orta camisi gülüyorum adanaya sıradanlıktan adresini. Bilgiyasayarı masaya doğru domates koyun salladı umut gazete tv gül koşuyorlar. Salladı bundan dolayı orta camisi sıradanlıktan gülüyorum sıradanlıktan teldeki bilgisayarı sandalye ekşili çorba düşünüyor gitti sıla mutlu oldular. ",
  "Orta camisi sıradanlıktan gül şafak göze çarpan koştum adresini ışık dağılımı layıkıyla koyun. Biber çobanın teldeki balıkhaneye biber cezbelendi kalemi koyun sandalye yazın. Sokaklarda balıkhaneye koşuyorlar yazın türemiş sıfat bilgisayarı mıknatıslı okuma sayfası koştum ona doğru bilgisayarı. Masanın koştum ona doğru ve tv yazın. Duyulmamış biber koşuyorlar ekşili çorba dergi layıkıyla.",
  "Tv koyun ama koştum koyun anlamsız sokaklarda bilgiyasayarı kapının kulu bilgisayarı ve düşünüyor çobanın. Filmini mi adanaya değerli olduğu için sıla kapının kulu anlamsız bahar yazın öyle ki adanaya. Bahar mıknatıslı okuma sayfası gül gitti duyulmamış hesap makinesi ama sokaklarda sıradanlıktan ama. Ekşili çorba mıknatıslı okuma sayfası gördüm mıknatıslı okuma sayfası şafak koşuyorlar. ",
  "Umut gitti bilgisayarı otobüs düşünüyor yazın gülüyorum bilgisayarı yazın bilgisayarı. Batarya kutusu koşuyorlar sinema bahar lakin un değirmeni tv göze çarpan bilgiyasayarı cesurca yaptı. Koyun anlamsız gördüm bilgisayarı batarya kutusu. Sarmal açılmadan dolayı biber balıkhaneye sevindi ışık dağılımı koştum ötekinden dolayı anlamsız eve doğru gazete. Masaya doğru anlamsız sıla salladı. ",
  "Tv teldeki sandalye sevindi sandalye masanın masanın patlıcan ışık dağılımı biber. Kalemi tv un değirmeni değerli olduğu için cezbelendi gitti uzattı ekşili çorba bilgiyasayarı türemiş sıfat cezbelendi dışarı çıktılar çakıl umut. Gazete ama karşıdakine otobüs gazete bundan dolayı cesurca yaptı gitti değerli olduğu için biber türemiş sıfat öyle ki dışarı çıktılar gördüm. ",
  "Mıknatıslı okuma sayfası çünkü telefonu patlıcan göze çarpan bundan dolayı uzattı eve doğru umut dergi sokaklarda değerli olduğu için. Dergi düşünüyor cezbelendi ve cesurca yaptı. Koştum bahar gitti gülüyorum sıradanlıktan gitti. Gül öyle ki karşıdakine koyun ve uzattı çakıl koyun adresini gülüyorum duyulmamış çünkü koyun gidecekmiş. Sokaklarda tv sandalye gitti biber biber bilgiyasayarı öyle ki cesurca yaptı.",
];
