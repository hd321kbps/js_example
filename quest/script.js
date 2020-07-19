// Дублирования букв
const palmTree = (n = 1) =>
  typeof n == "number" && n > 0 ? "p".repeat(n) : false;
console.log(palmTree(3));
console.log(palmTree());

// Найти слова в предложении и заменить на нужные
function autoReplace(needles, change, haystack) {
  if (!needles || !change || !haystack) return false;
  return haystack.replace(new RegExp(needles.join("|"), "gi"), change);
}
let arr = ["салат", "помидоры"],
  str = "свежие помидоры пошли в салат";
console.log(autoReplace(arr, "еда", str));

// Создает автотеги
const getAutoTags = (base = "https://mysite.local/tag/") => {
  return (str, tags, url = base) => {
    tags = "(" + tags.join("|") + ")";
    return str.replace(new RegExp(tags, "gi"), `<a href="${url}$1">@$1</a>`);
  };
};
const autoTags = getAutoTags();
console.log(autoTags("интересно изучать JS", ["html", "js"]));

// Склонение слов от количества
const genitive = (n, word) => {
  let res = word.many2;
  if (n % 100 < 5 || n % 100 > 20) {
    if (n % 10 == 1) res = word.singular;
    if (n % 10 > 1 && n % 10 < 5) res = word.many1;
  }
  return `${n} ${res}`;
};
console.log(
  genitive(5, {
    singular: "курс",
    many1: "курса",
    many2: "курсов",
  })
);

// Интерфейс класса
const classNames = {
  cname: "",
  add: function (...s) {
    let cname = this.cname.split(" ");
    let tmp = {};
    for (let i in cname) {
      tmp[cname[i]] = 1;
    }
    s.forEach(function (e) {
      tmp[e] = 1;
    });
    this.cname = "";
    for (let i in tmp) {
      this.cname += i + " ";
    }
    this.cname = this.cname.slice(0, -1);
  },
  remove: function (...s) {
    let cname = this.cname.split(" ");
    let tpm = {};
    for (let i in cname) {
      tmp[cname[i]] = 1;
    }
    s.forEach(function (e) {
      if (e in tmp) delete tmp[e];
    });
    this.cname = "";
    for (let i in tmp) {
      this.cname += i + " ";
    }
    this.cname = this.cname.slice(0, -1);
  },
  toggle: function (str, flag) {
    let cname = this.cname.split(" ");
    let tpm = {};
    for (let i in cname) {
      tmp[cname[i]] = 1;
    }
    if (str in tmp || (!flag && flag != undefined)) {
      delete tmp[str];
    } else if (!(str in tmp) || flag) {
      tmp[str] = 1;
    }
    this.cname = "";
    for (let i in tmp) {
      this.cname += i + " ";
    }
    this.cname = this.cname.slice(0, -1);
  },
};
classNames.cname = "btn";
classNames.add("btn-primary");
console.log(classNames);

// Вывод нужного количества символов из строки
const lorem = (n) => "Lorem ipsum deolor sit amet".slice(0, n);
console.log(lorem(12));

// Заменить в строке один символ на другой
const myReplace = (s, k, m) => s.split(k).join(m);
console.log(myReplace("Ехал Грека, через реку", "р", "л"));

// Возвращает число в виде текста
const genitive2 = (n, word) => {
  let res = word.many2;
  if (n % 100 < 5 || n % 100 > 20) {
    if (n % 10 == 1) res = word.singular;
    if (n % 10 > 1 && n % 10 < 5) res = word.many1;
  }
  return `${res}`;
};
const getPhraseByNum = (n) => {
  let res = "";
  if (n > 999) {
    let t = +n.toString()[0];
    switch (t) {
      case 1:
        res += "одна ";
        break;
      case 2:
        res += "две ";
        break;
      case 3:
        res += "три ";
        break;
      case 4:
        res += "четыре ";
        break;
      case 5:
        res += "пять ";
        break;
      case 6:
        res += "шесть ";
        break;
      case 7:
        res += "семь ";
        break;
      case 8:
        res += "восемь ";
        break;
      case 9:
        res += "девять ";
        break;
    }
    res +=
      genitive2(t, {
        singular: "тысяча",
        many1: "тысячи",
        many2: "тысяч",
      }) + " ";
  }
  if (n % 1000 > 99) {
    let t = +n.toString().slice(-3, -2);
    switch (t) {
      case 1:
        res += "сто ";
        break;
      case 2:
        res += "двести ";
        break;
      case 3:
        res += "триста ";
        break;
      case 4:
        res += "четыреста ";
        break;
      case 5:
        res += "пятьсот ";
        break;
      case 6:
        res += "шестьсот ";
        break;
      case 7:
        res += "семьсот ";
        break;
      case 8:
        res += "восемьсот ";
        break;
      case 9:
        res += "девятьсот ";
        break;
    }
  }
  if (n % 1000 > 19) {
    let t = +n.toString().slice(-2, -1);
    switch (t) {
      case 2:
        res += "двадцать ";
        break;
      case 3:
        res += "тридцать ";
        break;
      case 4:
        res += "сорок ";
        break;
      case 5:
        res += "пятьдесят ";
        break;
      case 6:
        res += "шестьдесят ";
        break;
      case 7:
        res += "семьдесят ";
        break;
      case 8:
        res += "восемьдесят ";
        break;
      case 9:
        res += "девяносто ";
        break;
    }
  }
  if (n % 100 > 9 && n % 100 < 20) {
    let t = +n.toString().slice(-2);
    switch (t) {
      case 10:
        res += "десять ";
        break;
      case 11:
        res += "одиннадцать ";
        break;
      case 12:
        res += "двенадцать ";
        break;
      case 13:
        res += "тринадцать ";
        break;
      case 14:
        res += "четырнадцать ";
        break;
      case 15:
        res += "пятнадцать ";
        break;
      case 16:
        res += "шестнадцать ";
        break;
      case 17:
        res += "семнадцать ";
        break;
      case 18:
        res += "восемнадцать ";
        break;
      case 19:
        res += "девятнадцать ";
        break;
    }
  } else
    switch (n % 10) {
      case 1:
        res += "один ";
        break;
      case 2:
        res += "два ";
        break;
      case 3:
        res += "три ";
        break;
      case 4:
        res += "четыре ";
        break;
      case 5:
        res += "пять ";
        break;
      case 6:
        res += "шесть ";
        break;
      case 7:
        res += "семь ";
        break;
      case 8:
        res += "восемь ";
        break;
      case 9:
        res += "девять ";
        break;
    }
  if (!n) res = "ноль ";
  return res.slice(0, -1);
};
console.log(getPhraseByNum(2310));

// По коду символа выводит сам символ с текстом
const directionByKeyCode = (keyCode) =>
  ({
    "87": "вверх ⬆",
    "65": "влево ⬅",
    "68": "вправо ➡",
    "83": "вниз ⬇",
  }[keyCode]);
console.log(directionByKeyCode(68));

// Сортировка массива чисел по убыванию
const byDesc = (arr) => arr.sort((a, b) => b - a);
console.log(byDesc([3, 10, 2, 7]));

// Сортировка массива числа (четные и не четные)
const oddity = (a) => a.sort((a, b) => (b % 2 ? 1 : -1));
console.log(oddity([3, 10, 2, 7]));

// Сортировка массива по длине строк
const byLength = (s) => s.sort((a, b) => b.length - a.length);
const arr1 = byLength(["колхоз", "гладиолус", "вода", "книга"]);
console.log(arr1);

// Сортировка объектов по нужному свойству (не работает)
const sortBy = (u, p) => u.sort((a, b) => b[p] < a[p]);
const users = [
  {
    name: "Василий",
    lang: "JavaScript",
    age: 23,
  },
  {
    name: "Яна",
    lang: "Java",
    age: 19,
  },
  {
    name: "Олег",
    lang: "Python",
    age: 28,
  },
  {
    name: "Наталья",
    lang: "Ruby",
    age: 20,
  },
  {
    name: "Ольга",
    lang: "PHP",
    age: 26,
  },
];
console.log(sortBy(users, "name"));
console.log(sortBy(users, "age"));

// Сортировка email (не работает)
const sortEmail = (arr) =>
  arr.sort((a, b) =>
    a.slice(a.indexOf("@") + 1) > b.slice(b.indexOf("@") + 1) ? 1 : 0
  );
let check = [
  "support@igormarchuk.ru",
  "vtfak@yandex.ru",
  "hd321kbps@yandex.ru",
];
console.log(sortEmail(check));

// Создаем количество шагов между числами
const stepByStep = (num1, num2, step) => {
  let tmp = [];
  for (let i = 0; i <= step; i++) tmp[i] = num1 + (i * (num2 - num1)) / step;
  return tmp;
};
console.log(stepByStep(20, 40, 5));

// Переход от одного цвета к другому
function gradient(color1, color2, step) {
  const w = (c, m, k) => parseInt(c.slice(m, k), 16);
  let r1 = w(color1, 1, 3),
    g1 = w(color1, 3, 5),
    b1 = w(color1, 5);
  let r2 = w(color2, 1, 3),
    g2 = w(color2, 3, 5),
    b2 = w(color2, 5);
  let arr = [];
  let r, g, b;
  for (let i = 0; i <= step; i++) {
    r = Math.round(r1 + (i * (r2 - r1)) / step);
    g = Math.round(g1 + (i * (g2 - g1)) / step);
    b = Math.round(b1 + (i * (b2 - b1)) / step);
    arr.push(`rgb(${r}, ${g}, ${b})`);
  }
  return arr;
}
console.log(gradient("#336699", "#89ef12", 5));

// Случайное число в определенном диапазоне
const randRange = (n1, n2) => Math.round(Math.random() * (n2 - n1)) + n1;
// Очистить консоль
console.clear();
console.log(randRange(0, 100));
console.log(randRange(0, 100));

// Индекс ближайшей точки
const nearestDistance = (p, ps) => {
  let t = ps.map((e, i) => ((e.x - p.x) ** 2 + (e.y - p.y) ** 2) ** 0.5);
  return t.indexOf(Math.min(...t));
};
console.log(
  nearestDistance(
    {
      x: 0,
      y: 0,
    },
    [
      {
        x: 10,
        y: 10,
      },
      {
        x: 2,
        y: 5,
      },
      {
        x: 3,
        y: 4,
      },
    ]
  )
);

// Хлебные крошки
const category = (cat) => {
  let res = "";
  do res += cat.category + "/";
  while ((cat = cat.next));
  return res.slice(0, -1);
};
const categories = {
  category: "Компьютер",
  next: {
    category: "Все ноутбуки",
    next: {
      category: "Игровые",
      next: null,
    },
  },
};
console.log(category(categories));

// Разбить сумму на различные купюры
const search = (n) => {
  let res = {},
    tmp,
    par = [5000, 2000, 1000, 500, 200, 100, 50];
  par.forEach((e) => {
    tmp = n % e;
    if ((n - tmp) / e) res[`${e}`] = (n - tmp) / e;
    n = tmp;
  });
  return res;
};
console.log(search(12150));

// Статистика использование слов в тексте
const getWordStat = (str) => {
  let res = {};
  str.split(/[,. :!?]/g).forEach((e) => {
    if (!e) return;
    if (!(e in res)) res[e] = 0;
    res[e]++;
  });
  return res;
};
console.log(getWordStat("Ехал Грека, через реку реку реку"));

// Вернуть массив значений поля из массива
const extractProps = (arrObjects, prop) => {
  let res = [];
  arrObjects.forEach((e) => {
    prop in e ? res.push(e[prop]) : 0;
  });
  return res;
};
console.log(
  extractProps(
    [
      {
        name: "Василий",
        age: 34,
      },
      {
        name: "Наталья",
        age: 27,
      },
      {
        name: "Джон",
        age: 19,
      },
    ],
    "age"
  )
);

// Вычисление индекс массы тела
const bmi = (m, h) => +(m / h ** 2).toFixed(2);
console.log(bmi(100, 1.8));

// Неограниченное количество аргументов
const guadro = (...a) => a.map((e) => e * e);
console.log(guadro(2, 6, 10, 4));

// Числа фибоначи с 0
const fib = (n) => {
  let res = [0, 1];
  for (let i = 2; i < n; i++) res[i] = res[i - 1] + res[i - 2];
  return res;
};
console.log(fib(10));

// Найти элемент фибоначи по его номеру
const fibNthElement = (n) => {
  const s = 5 ** 0.5;
  return Math.round((((1 + s) / 2) ** n - ((1 - s) / 2) ** n) / s);
};
console.log(fibNthElement(7));

// Возращаем значение из последовательностей
const sequence = (numArr) => {
  let i = 0;
  return () => numArr[i++];
};
let some = sequence([10, 5, 2, 1]);
console.log(some());
console.log(some());
console.log(some());
console.log(some());

// Количество дней до нового года
const days = () => {
  let curr = new Date(),
    next = new Date(curr.getFullYear() + 1, 0),
    diff = next - curr;
  diff /= 1000 * 60 * 60 * 24;
  return Math.floor(diff);
};
console.log(new Date());
console.log(days());

// Сколько дней между датами
const differentDays = (d1, d2) => Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
console.log(differentDays(new Date(2018, 9, 5), new Date(2019, 9, 5)));

// Сколько времени между датами
const differentTimes = (d1, d2) => {
  let diff = (d2 - d1) / 1000,
    str = "",
    hours,
    minutes;
  hours = Math.floor(diff / 3600);
  str += hours;
  diff -= hours * 3600;
  minutes = Math.floor(diff / 60);
  if (minutes < 10) minutes = "0" + minutes;
  str += ":" + minutes;
  diff -= minutes * 60;
  if (diff < 10) diff = "0" + diff;
  str += ":" + diff;
  return str;
};
console.log(
  differentTimes(
    new Date(2018, 9, 7, 10, 10, 20),
    new Date(2018, 9, 7, 12, 13, 24)
  )
);

// Валидация телефона
const validPhone = (phone) => {
  if (!/^\+\d{0,11}$/.test(phone)) return false;
  let res = "+___________".split("");
  res.splice(0, phone.length, phone);
  return res.join("");
};
console.log(validPhone("+7495"));
console.log(validPhone("+74952323216"));

// Сколько прошло дней после даты
const genitive3 = (n, word) => {
  let res = word.many2;
  if (n % 100 < 5 || n % 100 > 20) {
    if (n % 10 == 1) res = word.singular;
    if (n % 10 > 1 && n % 10 < 5) res = word.many1;
  }
  return `${n} ${res}`;
};
const daysAgo = (dataObject) => {
  let diff = Math.round((dataObject - new Date()) / (1000 * 3600 * 24));
  return (
    genitive3(diff, {
      singular: "день",
      many1: "дня",
      many2: "дней",
    }) + " назад"
  );
};
console.log(
  daysAgo(new Date(new Date().getTime() + 1000 * 3600 * 24 * 17 + 1000))
);

// Сколько прошло времени после даты
const genitive4 = (n, word) => {
  let res = word.many2;
  if (n % 100 < 5 || n % 100 > 20) {
    if (n % 10 == 1) res = word.singular;
    if (n % 10 > 1 && n % 10 < 5) res = word.many1;
  }
  return `${n} ${res}`;
};
const timeAgo = (d0) => {
  let res;
  const w = " назад",
    hour = 1000 * 3600;
  d0 = d0 - new Date();
  switch (true) {
    case (res = d0 / (hour * 24 * 365)) > 1:
      return (
        genitive4(Math.floor(res), {
          singular: "год",
          many1: "года",
          many2: "лет",
        }) + w
      );
    case (res = d0 / (hour * 24 * 31)) > 1:
      return (
        genitive4(Math.floor(res), {
          singular: "месяц",
          many1: "месяца",
          many2: "месяцев",
        }) + w
      );
    case (res = d0 / (hour * 24 * 7)) > 1:
      return (
        genitive4(Math.floor(res), {
          singular: "неделя",
          many1: "недели",
          many2: "недель",
        }) + w
      );
    case (res = d0 / (hour * 24)) > 1:
      return (
        genitive4(Math.floor(res), {
          singular: "день",
          many1: "дня",
          many2: "дней",
        }) + w
      );
    case (res = d0 / hour) > 1:
      return (
        genitive4(Math.floor(res), {
          singular: "час",
          many1: "часа",
          many2: "часов",
        }) + w
      );
  }
  return false;
};
let curr = new Date(new Date().getTime() + 2 * 3600 * 1000);
console.log(timeAgo(curr));

// Четное (1) или не четное число (0) через прототип
Number.prototype.even = function () {
  return this % 2 ? 0 : 1;
};
console.log((34).even());
console.log((27).even());

// Метод умножение чисел массива на 2 через прототип
Array.prototype.mul = function (n) {
  return this.map((e) => e * n);
};
console.log([34, 5].mul(2).join());
console.log([34, 5].mul(2));

// Создания метода CSS
class CSS {
  static rgb(...c) {
    c = c.map((n) => (n < 0 ? 0 : n > 255 ? 255 : Math.round(n)));
    let [r, g, b] = c;
    return `rgb(${r}, ${g}, ${b})`;
  }
}
console.log(CSS.rgb(23, 56, 100));

// Фунция возращает значени из массива
const nextNumber = (arr, n = 0) => () => {
  let res = arr[(n = n % arr.length)];
  n++;
  return res;
};
const test = nextNumber([1, 2, 3], 2);
console.log(test());
console.log(test());
console.log(test());
console.log(test());
