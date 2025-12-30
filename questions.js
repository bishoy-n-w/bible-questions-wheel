const gameData = {
    // ==========================================
    // ARABIC (Full 100 Questions)
    // ==========================================
    ar: [
        {id:1,t:"من هو النبي الذي ابتلعه الحوت؟",o:["موسى","يونان","إشعياء","دانيال"],c:1,l:1,r:"\"وَأَمَّا الرَّبُّ فَأَعَدَّ حُوتًا عَظِيمًا لِيَبْتَلِعَ يُونَانَ.\" (يونان 1: 17)"},
        {id:2,t:"كم عدد أسباط إسرائيل؟",o:["٧","١٠","١٢","٤٠"],c:2,l:1,r:"\"جَمِيعُ هؤُلاَءِ هُمْ أَسْبَاطُ إِسْرَائِيلَ الاثْنَا عَشَرَ.\" (تكوين 49: 28)"},
        {id:3,t:"في أي مدينة ولد السيد المسيح؟",o:["الناصرة","أورشليم","بيت لحم","كفرناحوم"],c:2,l:1,r:"\"وَلَمَّا وُلِدَ يَسُوعُ فِي بَيْتِ لَحْمِ الْيَهُودِيَّةِ...\" (متى 2: 1)"},
        {id:4,t:"ما هو أول سفر في الكتاب المقدس؟",o:["الخروج","التكوين","المزامير","الرؤيا"],c:1,l:1,r:"\"فِي الْبَدْءِ خَلَقَ اللهُ السَّمَاوَاتِ وَالأَرْضَ.\" (تكوين 1: 1)"},
        {id:5,t:"من هو التلميذ الذي أنكر المسيح ثلاث مرات؟",o:["يهوذا","يوحنا","بطرس","توما"],c:2,l:1,r:"\"فَتَذَكَّرَ بُطْرُسُ كَلاَمَ يَسُوعَ... إِنَّكَ... تُنْكِرُنِي ثَلاَثَ مَرَّاتٍ.\" (متى 26: 75)"},
        {id:6,t:"ماذا خلق الله في اليوم الرابع؟",o:["النور","الجلد","الشمس والقمر","الحيوانات"],c:2,l:1,r:"\"فَعَمِلَ اللهُ النُّورَيْنِ الْعَظِيمَيْنِ... وَالنُّجُومَ.\" (تكوين 1: 16)"},
        {id:7,t:"من هو الرجل الذي عاش أطول عمر في الكتاب المقدس؟",o:["نوح","آدم","متوشالح","إبراهيم"],c:2,l:1,r:"\"فَكَانَتْ كُلُّ أَيَّامِ مَتُوشَالَحَ تِسْعَمِئَةٍ وَتِسْعًا وَسِتِّينَ سَنَةً.\" (تكوين 5: 27)"},
        {id:8,t:"ما هي المهنة التي كان يعمل بها داود قبل الملك؟",o:["نجار","راعي غنم","صياد","جابي ضرائب"],c:1,l:1,r:"\"بَقِيَ بَعْدُ الصَّغِيرُ وَهُوَذَا هُوَ يَرْعَى الْغَنَمَ.\" (صموئيل الأول 16: 11)"},
        {id:9,t:"كم يوماً صام السيد المسيح في البرية؟",o:["٣ أيام","٧ أيام","٣٠ يوماً","٤٠ يوماً"],c:3,l:1,r:"\"فَبَعْدَ مَا صَامَ أَرْبَعِينَ نَهَارًا وَأَرْبَعِينَ لَيْلَةً، جَاعَ أَخِيرًا.\" (متى 4: 2)"},
        {id:10,t:"من الذي بنى الفلك؟",o:["إبراهيم","موسى","نوح","يعقوب"],c:2,l:1,r:"\"اِصْنَعْ لِنَفْسِكَ فُلْكًا مِنْ خَشَبِ جُفْرٍ.\" (تكوين 6: 14)"},
        {id:11,t:"من هو الصبي الذي هزم العملاق جليات؟",o:["شاول","يوناثان","داود","شمشون"],c:2,l:1,r:"\"فَتَمَكَّنَ دَاوُدُ مِنَ الْفِلِسْطِينِيِّ بِالْمِقْلاَعِ وَالْحَجَرِ.\" (صموئيل الأول 17: 50)"},
        {id:12,t:"ما هو اسم أول إنسان خلقه الله؟",o:["نوح","إبراهيم","آدم","قايين"],c:2,l:1,r:"\"وَجَبَلَ الرَّبُّ الإِلهُ آدَمَ تُرَابًا مِنَ الأَرْضِ.\" (تكوين 2: 7)"},
        {id:13,t:"ماذا فعل يسوع في عرس قانا الجليل؟",o:["مشى على الماء","حول الماء إلى خمر","شفى الأبرص","أشبع الجموع"],c:1,l:1,r:"\"فَلَمَّا ذَاقَ الرَّئِيسُ الْمُتَّكَإِ الْمَاءَ الْمُتَحَوِّلَ خَمْرًا...\" (يوحنا 2: 9)"},
        {id:14,t:"من هو النبي الذي استلم الوصايا العشر؟",o:["إبراهيم","إسحاق","يعقوب","موسى"],c:3,l:1,r:"\"ثُمَّ أَعْطَى مُوسَى... لَوْحَيِ الشَّهَادَةِ.\" (خروج 31: 18)"},
        {id:15,t:"كم عدد أناجيل العهد الجديد؟",o:["٣","٤","٥","٦"],c:1,l:1,r:"(متى، مرقس، لوقا، يوحنا)."},
        {id:16,t:"ما هي العلامة التي أعطاها الله لنوح بعد الطوفان؟",o:["عمود النار","قوس قزح","النجمة","العليقة"],c:1,l:1,r:"\"وَضَعْتُ قَوْسِي فِي السَّحَابِ فَتَكُونُ عَلاَمَةَ مِيثَاق...\" (تكوين 9: 13)"},
        {id:17,t:"من هو الذي باعه إخوته للمصريين؟",o:["بنيامين","يوسف","رأوبين","لاوي"],c:1,l:1,r:"\"فَبَاعُوا يُوسُفَ لِلإِسْمَاعِيلِيِّينَ... فَأَتَوْا بِيُوسُفَ إِلَى مِصْرَ.\" (تكوين 37: 28)"},
        {id:18,t:"ما هي أقصر آية في الكتاب المقدس؟",o:["الله محبة","افرحوا","بكى يسوع","صلوا"],c:2,l:1,r:"\"بَكَى يَسُوعُ.\" (يوحنا 11: 35)"},
        {id:19,t:"من هي والدة صموئيل النبي؟",o:["حنة","فننة","راحيل","ليئة"],c:0,l:1,r:"\"وَدَعَتِ اسْمَهُ صَمُوئِيلَ قَائِلَةً: لأَنِّي مِنَ الرَّبِّ سَأَلْتُهُ.\" (صموئيل الأول 1: 20)"},
        {id:20,t:"كيف مات يهوذا الإسخريوطي؟",o:["رجموه","ضربه السيف","شنق نفسه","مات بالمرض"],c:2,l:1,r:"\"وَمَضَى وَخَنَقَ نَفْسَهُ.\" (متى 27: 5)"},
        {id:21,t:"ماذا كان طعام يوحنا المعمدان؟",o:["خبز","من وسلوى","جراد وعسل بري","تين"],c:2,l:1,r:"\"وَكَانَ طَعَامُهُ جَرَادًا وَعَسَلاً بَرِّيًّا.\" (متى 3: 4)"},
        {id:22,t:"من هو الذي لقبه الرب بـ 'صخرة'؟",o:["يوحنا","يعقوب","بطرس","أندراوس"],c:2,l:1,r:"\"أَنْتَ بُطْرُسُ، وَعَلَى هذِهِ الصَّخْرَةِ أَبْنِي كَنِيسَتِي.\" (متى 16: 18)"},
        {id:23,t:"في أي نهر اعتمد السيد المسيح؟",o:["النيل","الفرات","الأردن","دجلة"],c:2,l:1,r:"\"وَاعْتَمَدَ مِنْ يُوحَنَّا فِي الأُرْدُنِّ.\" (مرقس 1: 9)"},
        {id:24,t:"من هو الملك الذي ألقى دانيال في جب الأسود؟",o:["نبوخذنصر","داريوس","هيرودس","فرعون"],c:1,l:1,r:"\"حِينَئِذٍ أَمَرَ الْمَلِكُ... وَطَرَحُوهُ فِي جُبِّ الأُسُودِ.\" (دانيال 6: 16)"},
        {id:25,t:"ما هو آخر سفر في العهد القديم؟",o:["تكوين","ملاخي","رؤيا","خروج"],c:1,l:1,r:"(ترتيب الأسفار الكنسي)."},
        // ... (Keep the rest of your 100 Arabic questions here) ...
    ],

    // ==========================================
    // ENGLISH (Sample 25 Questions)
    // ==========================================
    en: [
        {id:1, t:"Who was swallowed by a great fish?", o:["Moses","Jonah","Isaiah","Daniel"], c:1, l:1, r:"\"Now the Lord provided a huge fish to swallow Jonah.\" (Jonah 1:17)"},
        {id:2, t:"How many tribes of Israel were there?", o:["7","10","12","40"], c:2, l:1, r:"\"All these are the twelve tribes of Israel.\" (Genesis 49:28)"},
        {id:3, t:"In which city was Jesus born?", o:["Nazareth","Jerusalem","Bethlehem","Capernaum"], c:2, l:1, r:"\"After Jesus was born in Bethlehem in Judea...\" (Matthew 2:1)"},
        {id:4, t:"What is the first book of the Bible?", o:["Exodus","Genesis","Psalms","Revelation"], c:1, l:1, r:"\"In the beginning God created the heavens and the earth.\" (Genesis 1:1)"},
        {id:5, t:"Which disciple denied Jesus three times?", o:["Judas","John","Peter","Thomas"], c:2, l:1, r:"\"Then Peter remembered... 'you will disown me three times.'\" (Matthew 26:75)"},
        {id:6, t:"What did God create on the fourth day?", o:["Light","Sky","Sun, Moon, Stars","Animals"], c:2, l:1, r:"\"God made two great lights... He also made the stars.\" (Genesis 1:16)"},
        {id:7, t:"Who lived the longest life in the Bible?", o:["Noah","Adam","Methuselah","Abraham"], c:2, l:1, r:"\"Altogether, Methuselah lived a total of 969 years.\" (Genesis 5:27)"},
        {id:8, t:"What was David's job before becoming King?", o:["Carpenter","Shepherd","Fisherman","Tax Collector"], c:1, l:1, r:"\"There is still the youngest... he is tending the sheep.\" (1 Samuel 16:11)"},
        {id:9, t:"How many days did Jesus fast in the wilderness?", o:["3 days","7 days","30 days","40 days"], c:3, l:1, r:"\"After fasting forty days and forty nights, he was hungry.\" (Matthew 4:2)"},
        {id:10, t:"Who built the Ark?", o:["Abraham","Moses","Noah","Jacob"], c:2, l:1, r:"\"So make yourself an ark of cypress wood.\" (Genesis 6:14)"},
        {id:11, t:"Who defeated the giant Goliath?", o:["Saul","Jonathan","David","Samson"], c:2, l:1, r:"\"So David triumphed over the Philistine with a sling and a stone.\" (1 Samuel 17:50)"},
        {id:12, t:"Who was the first man created by God?", o:["Noah","Abraham","Adam","Cain"], c:2, l:1, r:"\"Then the Lord God formed a man from the dust of the ground.\" (Genesis 2:7)"},
        {id:13, t:"What was Jesus' first miracle at Cana?", o:["Walked on water","Water into wine","Healed a leper","Fed the multitude"], c:1, l:1, r:"\"...the master of the banquet tasted the water that had been turned into wine.\" (John 2:9)"},
        {id:14, t:"Who received the Ten Commandments?", o:["Abraham","Isaac","Jacob","Moses"], c:3, l:1, r:"\"He gave Moses... the two tablets of the covenant law.\" (Exodus 31:18)"},
        {id:15, t:"How many Gospels are in the New Testament?", o:["3","4","5","6"], c:1, l:1, r:"(Matthew, Mark, Luke, John)."},
        {id:16, t:"What sign did God give Noah after the flood?", o:["Pillar of fire","Rainbow","Star","Burning bush"], c:1, l:1, r:"\"I have set my rainbow in the clouds...\" (Genesis 9:13)"},
        {id:17, t:"Who was sold by his brothers to Egypt?", o:["Benjamin","Joseph","Reuben","Levi"], c:1, l:1, r:"\"So they sold Joseph for twenty shekels of silver.\" (Genesis 37:28)"},
        {id:18, t:"What is the shortest verse in the Bible?", o:["God is love","Rejoice","Jesus wept","Pray"], c:2, l:1, r:"\"Jesus wept.\" (John 11:35)"},
        {id:19, t:"Who was the mother of Samuel?", o:["Hannah","Peninnah","Rachel","Leah"], c:0, l:1, r:"\"She named him Samuel, saying, 'Because I asked the Lord for him.'\" (1 Samuel 1:20)"},
        {id:20, t:"How did Judas Iscariot die?", o:["Stoned","Sword","Hanged himself","Illness"], c:2, l:1, r:"\"Then he went away and hanged himself.\" (Matthew 27:5)"},
        {id:21, t:"What did John the Baptist eat?", o:["Bread","Manna","Locusts and wild honey","Figs"], c:2, l:1, r:"\"His food was locusts and wild honey.\" (Matthew 3:4)"},
        {id:22, t:"Who did Jesus call the 'Rock'?", o:["John","James","Peter","Andrew"], c:2, l:1, r:"\"And I tell you that you are Peter, and on this rock I will build my church.\" (Matthew 16:18)"},
        {id:23, t:"In which river was Jesus baptized?", o:["Nile","Euphrates","Jordan","Tigris"], c:2, l:1, r:"\"Jesus was baptized by John in the Jordan.\" (Mark 1:9)"},
        {id:24, t:"Who threw Daniel into the lion's den?", o:["Nebuchadnezzar","Darius","Herod","Pharaoh"], c:1, l:1, r:"\"So the king gave the order, and they brought Daniel and threw him into the lions' den.\" (Daniel 6:16)"},
        {id:25, t:"What is the last book of the Old Testament?", o:["Genesis","Malachi","Revelation","Exodus"], c:1, l:1, r:"(Canonical order)."}
    ],

    // ==========================================
    // FRENCH (Sample 25 Questions)
    // ==========================================
    fr: [
        {id:1, t:"Quel prophète a été avalé par un grand poisson ?", o:["Moïse","Jonas","Isaïe","Daniel"], c:1, l:1, r:"\"L'Éternel fit venir un grand poisson pour engloutir Jonas.\" (Jonas 1:17)"},
        {id:2, t:"Combien y a-t-il de tribus d'Israël ?", o:["7","10","12","40"], c:2, l:1, r:"\"Ce sont là tous ceux qui forment les douze tribus d'Israël.\" (Genèse 49:28)"},
        {id:3, t:"Dans quelle ville Jésus est-il né ?", o:["Nazareth","Jérusalem","Bethléem","Capharnaüm"], c:2, l:1, r:"\"Jésus étant né à Bethléhem en Judée...\" (Matthieu 2:1)"},
        {id:4, t:"Quel est le premier livre de la Bible ?", o:["Exode","Genèse","Psaumes","Apocalypse"], c:1, l:1, r:"\"Au commencement, Dieu créa les cieux et la terre.\" (Genèse 1:1)"},
        {id:5, t:"Quel disciple a renié Jésus trois fois ?", o:["Judas","Jean","Pierre","Thomas"], c:2, l:1, r:"\"Alors Pierre se souvint... tu me renieras trois fois.\" (Matthieu 26:75)"},
        {id:6, t:"Qu'est-ce que Dieu a créé le quatrième jour ?", o:["La lumière","Le ciel","Soleil, Lune, Étoiles","Les animaux"], c:2, l:1, r:"\"Dieu fit les deux grands luminaires... il fit aussi les étoiles.\" (Genèse 1:16)"},
        {id:7, t:"Qui a vécu le plus longtemps dans la Bible ?", o:["Noé","Adam","Mathusalem","Abraham"], c:2, l:1, r:"\"Tous les jours de Metuschélah furent de neuf cent soixante-neuf ans.\" (Genèse 5:27)"},
        {id:8, t:"Quel était le métier de David avant d'être roi ?", o:["Charpentier","Berger","Pêcheur","Collecteur d'impôts"], c:1, l:1, r:"\"Il reste encore le plus jeune, mais il fait paître les brebis.\" (1 Samuel 16:11)"},
        {id:9, t:"Combien de jours Jésus a-t-il jeûné dans le désert ?", o:["3 jours","7 jours","30 jours","40 jours"], c:3, l:1, r:"\"Après avoir jeûné quarante jours et quarante nuits...\" (Matthieu 4:2)"},
        {id:10, t:"Qui a construit l'Arche ?", o:["Abraham","Moïse","Noé","Jacob"], c:2, l:1, r:"\"Fais-toi une arche de bois de gopher.\" (Genèse 6:14)"},
        {id:11, t:"Qui a vaincu le géant Goliath ?", o:["Saül","Jonathan","David","Samson"], c:2, l:1, r:"\"Ainsi, avec une fronde et une pierre, David fut plus fort que le Philistin.\" (1 Samuel 17:50)"},
        {id:12, t:"Quel est le nom du premier homme créé par Dieu ?", o:["Noé","Abraham","Adam","Caïn"], c:2, l:1, r:"\"L'Éternel Dieu forma l'homme de la poussière de la terre.\" (Genèse 2:7)"},
        {id:13, t:"Qu'a fait Jésus aux noces de Cana ?", o:["Marché sur l'eau","L'eau en vin","Guéri un lépreux","Nourri la foule"], c:1, l:1, r:"\"Quand l'ordonnateur du repas eut goûté l'eau changée en vin...\" (Jean 2:9)"},
        {id:14, t:"Qui a reçu les Dix Commandements ?", o:["Abraham","Isaac","Jacob","Moïse"], c:3, l:1, r:"\"Il donna à Moïse... les deux tables du témoignage.\" (Exode 31:18)"},
        {id:15, t:"Combien d'Évangiles y a-t-il dans le Nouveau Testament ?", o:["3","4","5","6"], c:1, l:1, r:"(Matthieu, Marc, Luc, Jean)."},
        {id:16, t:"Quel signe Dieu a-t-il donné à Noé après le déluge ?", o:["Colonne de feu","Arc-en-ciel","Étoile","Buisson ardent"], c:1, l:1, r:"\"J'ai placé mon arc dans la nue...\" (Genèse 9:13)"},
        {id:17, t:"Qui a été vendu par ses frères en Égypte ?", o:["Benjamin","Joseph","Ruben","Lévi"], c:1, l:1, r:"\"Ils vendirent Joseph aux Ismaélites pour vingt sicles d'argent.\" (Genèse 37:28)"},
        {id:18, t:"Quel est le verset le plus court de la Bible ?", o:["Dieu est amour","Réjouissez-vous","Jésus pleura","Priez"], c:2, l:1, r:"\"Jésus pleura.\" (Jean 11:35)"},
        {id:19, t:"Qui était la mère de Samuel ?", o:["Anne","Peninna","Rachel","Léa"], c:0, l:1, r:"\"Elle lui donna le nom de Samuel, car, dit-elle, je l'ai demandé à l'Éternel.\" (1 Samuel 1:20)"},
        {id:20, t:"Comment Judas Iscariote est-il mort ?", o:["Lapidé","Épée","Pendu","Maladie"], c:2, l:1, r:"\"Il jeta les pièces d'argent... et alla se pendre.\" (Matthieu 27:5)"},
        {id:21, t:"Que mangeait Jean-Baptiste ?", o:["Pain","Manne","Sauterelles et miel","Figues"], c:2, l:1, r:"\"Sa nourriture était des sauterelles et du miel sauvage.\" (Matthieu 3:4)"},
        {id:22, t:"Qui Jésus a-t-il appelé 'le Roc' (Pierre) ?", o:["Jean","Jacques","Pierre","André"], c:2, l:1, r:"\"Et moi, je te dis que tu es Pierre, et que sur cette pierre je bâtirai mon Église.\" (Matthieu 16:18)"},
        {id:23, t:"Dans quel fleuve Jésus a-t-il été baptisé ?", o:["Nil","Euphrate","Jourdain","Tigre"], c:2, l:1, r:"\"Jésus... fut baptisé par Jean dans le Jourdain.\" (Marc 1:9)"},
        {id:24, t:"Qui a jeté Daniel dans la fosse aux lions ?", o:["Nabuchodonosor","Darius","Hérode","Pharaon"], c:1, l:1, r:"\"Alors le roi donna l'ordre qu'on amenât Daniel, et qu'on le jetât dans la fosse aux lions.\" (Daniel 6:16)"},
        {id:25, t:"Quel est le dernier livre de l'Ancien Testament ?", o:["Genèse","Malachie","Apocalypse","Exode"], c:1, l:1, r:"(Ordre canonique)."}
    ]
};
