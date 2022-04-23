function handleClick() {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

/* -------------------------------- check ------------------------------- */

// handleClick();

/* ============================================ */
/*                 TOGGLE THEME                 */
/* ============================================ */
const theme = document.querySelector('.theme');
const colorBody = document.querySelector('body');

theme.addEventListener('click', handleTheme);

function handleTheme() {
  if (colorBody.classList.contains('light')) {
    colorBody.className = 'dark';
    theme.innerHTML = `<ion-icon class="icon" name="moon"></ion-icon>
                       <span>Dark Mode</span>`;
  } else {
    colorBody.className = 'light';
    theme.innerHTML = `<ion-icon class="icon" name="sunny"></ion-icon>
                       <span>Light Mode</span>`;
  }
}

/* ============================================ */
/*                  RENDER FLAG                 */
/* ============================================ */
const mainShow = document.querySelector('.main-show');
const linkJob = 'https://restcountries.com/v2/all';
async function fetchJob() {
  const res = await fetch(linkJob);
  const data = await res.json();

  return data;
}

function createBlock(data) {
  return (block = `<div data-name="${data.name.common}" class="country-block">
  <img src="${data.flags.png}" alt="" />
  <div class="country-detail">
    <span class="name">${data.name}</span>
    <div class="geo">
      <span
        >Population:
        <div>${data.population}</div>
      </span>
      <span>
        Region:
        <div>${data.region}</div>
      </span>
      <span>
        Capital:
        <div>${data.capital}</div>
      </span>
    </div>
  </div>
</div>`);
}

function renderBlock() {
  let listFlag = [];
  fetchJob().then((data) => {
    console.log('renderBlock -> data', data);
    data.forEach((country) => {
      listFlag += createBlock(country);
      mainShow.innerHTML = listFlag;
      clickBLock();
    });
  });
}

renderBlock();

/* ============================================ */
/*                    SEARCH                    */
/* ============================================ */

const searchText = document.querySelector('.search-text input');

searchText.addEventListener('change', handleSearch);

function handleSearch() {
  let listFlag = [];
  let a = searchText.value.toLowerCase();

  fetchJob().then((data) => {
    data.forEach((country) => {
      if (country.name.common.toLowerCase().includes(a)) {
        listFlag += createBlock(country);
        mainShow.innerHTML = listFlag;
      }
    });
  });
}

/* ============================================ */
/*                 SEARCH REGION                */
/* ============================================ */
const searchRegion = document.querySelector('.search-region select');

searchRegion.addEventListener('change', handleSearchRegion);

function handleSearchRegion() {
  let listFlag = [];
  let a = searchRegion.value.toLowerCase();

  fetchJob().then((data) => {
    data.forEach((country) => {
      if (country.region.toLowerCase().includes(a)) {
        listFlag += createBlock(country);
        mainShow.innerHTML = listFlag;
      }
    });
  });
}

/* ============================================ */
/*                  CLICK FLAG                  */
/* ============================================ */

function clickBLock() {
  const flagBlock = document.querySelectorAll('.country-block');
  flagBlock.forEach((flag) => {
    flag.addEventListener('click', () => {
      let a = flag.dataset.name;
      fetchJob().then((data) => {
        data.forEach((country) => {
          if (country.name.common == a) {
            createDetail(country);
            
          }
        });
      });
    });
  });
}

function createDetail(data) {
  return `  <div class="img-flag">
  <img src="${data.flags.png}" alt="" />
</div>

<div class="detail-flag">
  <h2>${data.name.common}</h2>

  <div class="geo-country">
    <div class="geo geo1">
      <span
        >Native Name:
        <div>${data.nativeName}</div></span
      >
      <span
        >Population:
        <div>${data.population}</div></span
      >
      <span
        >Region:
        <div>${data.region}</div></span
      >
      <span
        >Sub Region:
        <div>${data.subregion}</div></span
      >
      <span
        >Capital:
        <div>${data.capital}</div></span
      >
    </div>

    <div class="geo geo2">
      <span
        >Top Level Domain:
        <div>${data.independent}</div></span
      >
      <span
        >Currencies:
        <div>${data.currencies.forEach((key) => key.name)}</div></span
      >
      <span
        >Languages:
        <div>${data.languages.forEach((key) => key.name)}</div></span
      >
    </div>
  </div>

  <div class="border-country">
    <span class="border"> Border Countries </span>
    <div class="borderblock">
     ${createBorder(data.borders)}
    </div>
  </div>
</div>`;
}

function createBorder(data) {
  if (data) {
    let borderBlock = [];
    data.map((key) => {
      let block = ` <span>${key}</span>`;
      borderBlock += block;
    });
    console.log('createBorder -> borderBlock', borderBlock);

    return borderBlock;
  } else {
    return;
  }
}
