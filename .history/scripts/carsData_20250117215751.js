const cars = [
    {
        image: "https://testologia.ru/cars-images/1.png",
        brand: "BMW",
        model: "M4 Competition",
        description: "Идеальный баланс скорости и стиля. BMW M4 Competition — 510 л.с. и драйв, созданный для покорения трасс и городских улиц.",
        prices: [
            { period: "на 1 сутки", price: "1450 $" },
            { period: "на 1-3 суток", price: "1300 $ /сут" },
            { period: "на 3+ суток", price: "1100 $ /сут" },
        ],
    },
    {
        image: "https://testologia.ru/cars-images/2.png",
        brand: "BMW",
        model: "M5",
        description: "Бизнес-класс с душой гонщика. BMW M5: 600 л.с., интеллектуальный полный привод и комфорт для самых требовательных.",
        prices: [
            { period: "на 1 сутки", price: "1600 $" },
            { period: "на 1-3 суток", price: "1450 $ /сут" },
            { period: "на 3+ суток", price: "1250 $ /сут" },
        ],
    },
    {
        image: "https://testologia.ru/cars-images/3.png",
        brand: "Lamborghini",
        model: "Huracan Spyder Green",
        description: "Воплощение скорости и страсти. Зеленый Lamborghini Huracan Spyder — мощь 640 л.с. и открытый верх для яркихприключений.",
        prices: [
          { period: "на 1 сутки", price: "3200 $" },
          { period: "на 1-3 суток", price: "2900 $ /сут" },
          { period: "на 3+ суток", price: "2600 $ /сут" },
        ],
    },
    {
        image: "https://testologia.ru/cars-images/4.png",
        brand: "Ferrari",
        model: "F8 Spider",
        description:
          "Мечта на колесах. Ferrari F8 Spider: 720 л.с., аэродинамика F1 и открытая кабина для тех, кто живет на полной скорости.",
        prices: [
          { period: "на 1 сутки", price: "3500 $" },
          { period: "на 1-3 суток", price: "3200 $ /сут" },
          { period: "на 3+ суток", price: "2900 $ /сут" },
        ],
      },
      {
        image: "https://testologia.ru/cars-images/5.png",
        brand: "Porsche",
        model: "911 Targa 4S Yellow",
        description:
          "Элегантная мощь в ярком цвете. Porsche 911 Targa 4S: полный привод, 450 л.с. и уникальный стиль Targa.",
        prices: [
          { period: "на 1 сутки", price: "1800 $" },
          { period: "на 1-3 суток", price: "1650 $ /сут" },
          { period: "на 3+ суток", price: "1450 $ /сут" },
        ],
      },
      {
        image: "https://testologia.ru/cars-images/6.png",
        brand: "Mercedes",
        model: "SL 55 AMG",
        description:
          "Классика спортивного шика. Mercedes SL 55 AMG: роскошь, кабриолет и мощь 469 л.с. для незабываемых поездок.",
        prices: [
          { period: "на 1 сутки", price: "1700 $" },
          { period: "на 1-3 суток", price: "1550 $ /сут" },
          { period: "на 3+ суток", price: "1350 $ /сут" },
        ],
      },
      {
        image: "https://testologia.ru/cars-images/7.png",
        brand: "BMW",
        model: "Z4",
        description:
          "Компактный кабриолет для стильных путешествий. BMW Z4: идеальный союз маневренности, мощности и элегантного дизайна.",
        prices: [
          { period: "на 1 сутки", price: "1200 $" },
          { period: "на 1-3 суток", price: "1100 $ /сут" },
          { period: "на 3+ суток", price: "950 $ /сут" },
        ],
      },
      {
        image: "https://testologia.ru/cars-images/8.png",
        brand: "Mercedes",
        model: "C180 Convertible",
        description:
          "Идеальный выбор для солнечного дня. Mercedes C180 Convertible: кабриолет для легкого и комфортного вождения.",
        prices: [
          { period: "на 1 сутки", price: "1000 $" },
          { period: "на 1-3 суток", price: "900 $ /сут" },
          { period: "на 3+ суток", price: "800 $ /сут" },
        ],
      },
      {
        image: "https://testologia.ru/cars-images/9.png",
        brand: "Chevrolet",
        model: "Corvette Orange",
        description:
          "Яркий, мощный, незабываемый. Chevrolet Corvette в оранжевом цвете: 495 л.с. и стиль, который говорит сам за себя.",
        prices: [
          { period: "на 1 сутки", price: "1400 $" },
          { period: "на 1-3 суток", price: "1250 $ /сут" },
          { period: "на 3+ суток", price: "1100 $ /сут" },
        ],
      },
      {
        image: "https://testologia.ru/cars-images/10.png",
        brand: "Audi",
        model: "R8 Blue",
        description:
          "Суперкар, созданный для влюбленных в скорость. Audi R8 Blue: полный привод, 570 л.с. и потрясающий дизайн.",
        prices: [
          { period: "на 1 сутки", price: "2000 $" },
          { period: "на 1-3 суток", price: "1850 $ /сут" },
          { period: "на 3+ суток", price: "1600 $ /сут" },
        ],
      },
      {
        image: "https://testologia.ru/cars-images/11.png",
        brand: "Chevrolet",
        model: "Corvette White",
        description:
          "Классическая мощь в изысканном цвете. Chevrolet Corvette White: мощность, динамика и стиль для настоящих ценителей.",
        prices: [
          { period: "на 1 сутки", price: "1350 $" },
          { period: "на 1-3 суток", price: "1200 $ /сут" },
          { period: "на 3+ суток", price: "1000 $ /сут" },
        ],
      },
      {
        image: "https://testologia.ru/cars-images/12.png",
        brand: "Ford",
        model: "Mustang Convertible Black",
        description:
          "Легенда в открытом формате. Ford Mustang Convertible Black: 450 л.с., культовый стиль и свобода под открытым небом.",
        prices: [
          { period: "на 1 сутки", price: "1250 $" },
          { period: "на 1-3 суток", price: "1150 $ /сут" },
          { period: "на 3+ суток", price: "1000 $ /сут" },
        ],
      },
];