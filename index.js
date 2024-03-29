let quotes = [
    "Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл, журналист и писатель",
    "Стремитесь не к успеху, а к ценностям, которые он дает​. Альберт Эйнштейн",
    "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других. Флоренс Найтингейл",
    "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан",
    "Сложнее всего начать действовать, все остальное зависит только от упорства. Амелия Эрхарт",
    "Надо любить жизнь больше, чем смысл жизни. Федор Достоевский",
    "Жизнь - это то, что с тобой происходит, пока ты строишь планы. Джон Леннон",
    "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно. Альберт Эйнштейн",
    "Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте! Марк Твен",
    "Начинать всегда стоит с того, что сеет сомнения.     Борис Стругацкий",
    "Настоящая ответственность бывает только личной. Фазиль Искандер",
    "Неосмысленная жизнь не стоит того, чтобы жить. Сократ",
    "80% успеха - это появиться в нужном месте в нужное время. Вуди Аллен",
    "Ваше время ограничено, не тратьте его, живя чужой жизнью. Стив Джобс",
    "Победа - это еще не все, все - это постоянное желание побеждать. Винс Ломбарди, тренер по американскому футболу",
    "Наука — это организованные знания, мудрость — это организованная жизнь. Иммануил Кант",
    "В моем словаре нет слова «невозможно». Наполеон Бонапарт",
    "Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду. Христофор Колумб",
    "Свобода ничего не стоит, если она не включает в себя свободу ошибаться. Махатма Ганди",
    "Либо вы управляете вашим днем, либо день управляет вами. Джим Рон, оратор и бизнес-тренер",
    "Если вы думаете, что на что-то способны, вы правы; если думаете, что у вас ничего не получится - вы тоже правы. Генри Форд",
    "Два самых важных дня в твоей жизни: день, когда ты появился на свет, и день, когда понял, зачем. Марк Твен",
    "Начинайте делать все, что вы можете сделать – и даже то, о чем можете хотя бы мечтать. В смелости гений, сила и магия. Иоганн Вольфганг Гете",
    "Лучшая месть – огромный успех. Фрэнк Синатра",
    "Зачастую говорят, что мотивации хватает ненадолго. Но то же самое происходит и с освежающим душем, поэтому и рекомендуют его принимать ежедневно. Зиг Зиглар, писатель, бизнесмен и консультант по маркетингу",
    "Слабые люди всю жизнь стараются быть не хуже других. Сильным во что бы то ни стало нужно стать лучше всех. Борис Акунин",
    "Все дело в мыслях. Мысль — начало всего. И мыслями можно управлять. И поэтому главное дело совершенствования: работать над мыслями. Лев Толстой",
    "Есть только один способ избежать критики: ничего не делайте, ничего не говорите и будьте никем. Аристотель",
    "Человек, которым вам суждено стать – это только тот человек, которым вы сами решите стать. Ральф Уолдо Эмерсон, эссеист, поэт и философ",
    "Идите уверенно по направлению к мечте. Живите той жизнью, которую вы сами себе придумали.Генри Дэвид Торо, писатель, мыслитель, натуралист",
    "Надеюсь, что в конце своих дней, когда я предстану перед Богом, у меня не останется ни капли таланта, чтобы я могла сказать ему: “Я использовала все, что ты дал мне”. Эрма Бомбек, писатель, журналист",
    "Лучше быть уверенным в хорошем результате, чем надеяться на отличный. Уоррен Баффет",
    "Некоторые вещи могут завладеть вашим вниманием, но сосредоточьтесь лучше на тех, что завладевают вашим сердцем. Индийская поговорка",
    "Стоит только поверить, что вы можете – и вы уже на полпути к цели. Теодор Рузвельт",
    "Не стоит винить ребенка за то, что он боится темноты. Настоящая трагедия – это когда взрослый человек боится света. Платон",
    "Научитесь говорить “Я не знаю”, и это уже будет прогресс. Моисей Маймонид, еврейский философ и богослов",
    "Начните оттуда, где вы сейчас находитесь. Используйте то, что у вас есть и делайте все, что можете. Артур Эш, теннисист",
    "Когда мне было 5 лет, мама всегда говорила, что главное в жизни – счастье. Когда я пошел в школу, на вопрос, кем я хочу быть, когда вырасту, я ответил “счастливым человеком”. Мне тогда сказали, что я не понимаю вопроса, а я ответил, что это они не понимают жизни. Джон Леннон",
    "Упади семь раз и восемь раз поднимись. Японская поговорка",
    "Когда закрывается одна дверь к счастью, тут же открывается другая. Но мы часто так долго смотрим на первую, что не замечаем вторую. Элен Келлер, писательница, лектор, политическая активистка",
    "У всего есть своя красота, но не каждый может ее увидеть. Конфуций",
    "Как прекрасно, что не нужно ждать ни минуты, чтобы начать делать мир лучше. Анна Франк",
    "Когда я освобождаюсь от того, кто я есть, я становлюсь тем, кем я могу быть. Лао Цзы",
    "Счастье – это не нечто готовое. Счастье зависит только от ваших действий. Далай Лама",
    "Если вам предлагают место в ракетоносителе, не спрашивайте, что за место! Просто займите его.  Шерил Сэндберг, операционный директор Facebook",
    "Сначала определитесь со своим идеалом: поставьте цель. Потом запаситесь необходимыми средствами для её достижения: мудростью, деньгами, методами и материалами. И, наконец, используйте все свои средства для достижения цели. Аристотель",
    "Если нет ветра, беритесь за вёсла. Латинская поговорка",
    "Всегда опирайтесь на мысль о том, что ваше собственное решение добиться успеха намного важнее всего другого. Авраам Линкольн",
    "Успех — это способность идти от поражения к поражению, не теряя оптимизма. Уинстон Черчилль",
    "Они спрашивают: «Как ты можешь управиться со всеми делами за пятнадцать минут?» Я отвечаю: «Это просто. Надо не терять ни единой секунды». Ричард Брэнсон, британский предприниматель, основатель корпорации Virgin",
  ]; // Остановился на 50 цитате форбс

module.exports.handler = async (event, context) => {
  const { version, session, request } = event;


  let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

  let text = `Привет! Замечательно, что ты стремишься сделать свой день более продуктивным! Этот навык создан, чтобы поддерживать тебя и вдохновлять каждый день цитатами успешных людей! Если у тебя есть предложения по его улучшению, не стесняйся делиться своим мнением в отзывах! Чтобы услышать цитату, просто скажите "цитата" или "далее".`;
  let tts = text;

  if (request["command"] === "цитата") {
    text = randomQuotes;
    tts = text;
  }

  if (request["command"] === "далее") {
    text = randomQuotes;
    tts = text;
  }


  return {
    // Отправка на сервер
    version,
    session,
    response: {
      text: text,
      tts: tts,
      end_session: false, // ( если true диолог закончитаься, false продолжиться )
    },
  };
};
