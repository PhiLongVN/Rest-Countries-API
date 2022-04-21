function handleClick() {
  fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

/* -------------------------------- check ------------------------------- */

handleClick();
/* --- SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS -- */

const theme = document.querySelector('.theme');
//lấy thằng input toggle để check
const checkBox = document.querySelector("");

checkBox.onchange = () => {
  document.body.classList.toggle("active");
};

// CSS THÊM FILTER VÀO BODY
// body.active {
//   filter: invert(1) hue-rotate(180deg);
// }

// muốn giữ lại màu cho img
// body.active img {
//   filter: invert(1) hue-rotate(180deg);
// }
