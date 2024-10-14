const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
menu.onclick = () => {
	menu.classList.toggle("active");
	navigation.classList.toggle("active");
};

const keywordDictionary = {
  "Туры путёвки путевки ОАЭ Дубай Турция Каппадокия Италия Венеция Китай Япония Австралия Франция Испания": "https://vamaryk.github.io/vamaryk.AdventureTime.io/tours",
  "Туры путёвки путевки ОАЭ Дубай Турция Каппадокия Италия Венеция о компании Популярные направления Франция Часто посещаемое преимущества компании": "https://vamaryk.github.io/vamaryk.AdventureTime.io/",
  "Регистрация, создать аккаунт": "https://vamaryk.github.io/vamaryk.AdventureTime.io/registration",
  "о компании преимущества компании": "https://vamaryk.github.io/vamaryk.AdventureTime.io/aboutUs",
  "Контакты": "https://vamaryk.github.io/vamaryk.AdventureTime.io/contacts",
  "Китай Япония Австралия Франция Турция Италия Испания ОАЭ": "https://vamaryk.github.io/vamaryk.AdventureTime.io/countries",
  "Новости": "https://vamaryk.github.io/vamaryk.AdventureTime.io/news",
  // ...
};

const customKeywords = {
  "путевки": ["Посмотреть туры, приобрести путёвки", "AdventureTime"],
  "путёвки": ["Посмотреть туры, приобрести путёвки", "AdventureTime"],
  "туры": ["Посмотреть туры, приобрести путёвки", "AdventureTime"],
  "оаэ": ["Посмотреть туры, приобрести путёвки", "AdventureTime", "Страны, в которые Вы можете отправиться"],
  "дубай": ["Посмотреть туры, приобрести путёвки", "AdventureTime"],
  "турция": ["Посмотреть туры, приобрести путёвки", "AdventureTime", "Страны, в которые Вы можете отправиться"],
  "каппадокия": ["Посмотреть туры, приобрести путёвки", "AdventureTime"],
  
  "китай": ["Посмотреть туры, приобрести путёвки", "Страны, в которые Вы можете отправиться"],
  "япония": ["Посмотреть туры, приобрести путёвки", "Страны, в которые Вы можете отправиться"],
  "австралия": ["Посмотреть туры, приобрести путёвки", "Страны, в которые Вы можете отправиться"],
  "франция": ["Посмотреть туры, приобрести путёвки", "Страны, в которые Вы можете отправиться"],
  "испания": ["Посмотреть туры, приобрести путёвки", "Страны, в которые Вы можете отправиться"],
  
  "италия": ["Посмотреть туры, приобрести путёвки", "AdventureTime", "Страны, в которые Вы можете отправиться"],
  "венеция": ["Посмотреть туры, приобрести путёвки", "AdventureTime"],
  
  "о компании": ["AdventureTime", "О компании, преимущества"],
  "преимущества": ["AdventureTime", "О компании, преимущества"],
  "преимущества компании": ["AdventureTime", "О компании, преимущества"],
  "популярные направления": ["AdventureTime"],
  "франция": ["AdventureTime"],
  "часто посещаемое": ["AdventureTime"],
  // ...
};

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[type="text"]');
const searchResultsContainer = document.querySelector('.search-results');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchQuery = searchInput.value.trim().toLowerCase();
  const searchResults = [];

  for (const keyword in keywordDictionary) {
    if (keyword.toLowerCase().includes(searchQuery)) {
      searchResults.push({
        keyword,
        page: keywordDictionary[keyword],
      });
    }
  }

  displaySearchResults(searchResults, searchQuery);
});

function displaySearchResults(searchResults, searchQuery) {
  if (!searchQuery) {
    console.error("searchQuery is undefined");
    return;
  }

  searchResultsContainer.innerHTML = '';

  const searchWords = searchQuery.split(' ');
  const filteredResults = searchResults.filter((result) => {
    const keyword = result.keyword.toLowerCase();
    return searchWords.some((word) => keyword.includes(word));
  });

  if (filteredResults.length === 0) {
    searchResultsContainer.innerHTML = 'Результаты не найдены';
    return;
  }

  const olElement = document.createElement('ol');
  filteredResults.forEach((result, index) => {
    let customKeyword;
    if (customKeywords[searchQuery]) {
      customKeyword = customKeywords[searchQuery][index % customKeywords[searchQuery].length];
    } else {
      customKeyword = result.keyword;
    }

    const liElement = document.createElement('li');
    liElement.innerHTML = `
      <span>${customKeyword}</span>
      <br>
      <a href="${result.page}">${result.page}</a>
    `;
    olElement.appendChild(liElement);
  });
  searchResultsContainer.appendChild(olElement);
}
