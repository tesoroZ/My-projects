/* Sarcini pentru lecție:

1) Eliminați toate unitățile de anunțuri din pagină (partea dreaptă a site-ului)

2) Schimbați genul filmului, schimbați „comedie” în „dramă”

3) Schimbați fundalul posterului filmului la imaginea „bg.jpg”. Este în folderul img.
Implementați numai cu JS

4) Formați lista de filme de pe pagină pe baza datelor din acest fișier JS.
Sortați-le alfabetic

5) Adăugați numerotarea filmelor de ieșire */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
/* subiectul 1) */
const ads = document.querySelectorAll(".promo__adv img");
  
    ads.forEach(item => {
        item.remove();
    });

/* subiectul 2) */

const genre = document.querySelector(".promo__genre");
    console.log(genre);

    genre.textContent = "Drama";

/*subiectul 3) */

const poster = document.querySelector(".promo__bg");

    poster.style.backgroundImage = "URL('./img/bg.jpg')" ;




    

