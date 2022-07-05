"use strict";

const genre = document.querySelector(".promo__genre");
const movieList = document.querySelector(".promo__interactive-list");
const promoWrapper = document.querySelectorAll(".promo__adv img");
console.log(promoWrapper);
const addNewFilmBtn = document.querySelector(".yes").nextElementSibling;
const addInput = document.querySelector(".adding__input");
const favoriteMovieCheck =
  document.querySelector(".adding__input").nextElementSibling
    .nextElementSibling;

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

genre.textContent = "Драма";

document.querySelector(".promo__bg").style.backgroundImage =
  "url(../img/bg.jpg)";

promoWrapper.forEach((element) => {
  element.remove();
});

const cutMovieLongName = (movieName) => {
  let resultStr = `...${movieName.substring(0, 5)}`;
  return resultStr;
};

const refreshMovieList = () => {
  movieDB.movies.sort();
  movieList.innerHTML = "";
  movieDB.movies.forEach(function (element, index) {
    movieList.innerHTML += `<li class="promo__interactive-item" data-current="${index}">
  ${index + 1}. ${element}
  <div class="delete" onclick="deleteMovie(${index})"></div>
</li>`;
  });
};

addNewFilmBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (addInput.value == "") {
    alert("нельзя вводить пустое значение");
  } else if (addInput.value.length > 20) {
    movieDB.movies.push(cutMovieLongName(addInput.value));
    refreshMovieList();
    addInput.value = "";
  } else {
    movieDB.movies.push(addInput.value);
    refreshMovieList();
    addInput.value = "";
  }
});

favoriteMovieCheck.addEventListener("click", function () {
  if (this.checked == true) {
    alert("выбран!");
  } else alert("не выбран!");
});

function deleteMovie(index) {
  delete movieDB.movies[index];
  document.querySelector(`[data-current="${index}"]`).remove();
}
