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
const linkjob = 'https://restcountries.com/v3.1/all';
async function fetchjob() {
  const res = await fetch(linkjob);
  const data = await res.json();

  return data;
}

function createBlock(data) {
  return (block = `<div class="country-block">
  <img src="${data.coatOfArms.png}" alt="" />
  <div class="country-detail">
    <span class="name">${data.name.common}</span>
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
  fetchjob().then((data) => {
    data.forEach((country) => {
      listFlag += createBlock(country);
      mainShow.innerHTML = listFlag;
    });
  });
}

renderBlock();
