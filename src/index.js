// const base_url = 'http://api.weatherapi.com/v1';
// const KEY = '4202b3fa59ea4adf832162138221110';
// const container = document.querySelector('.list');
// const cityName = document.querySelector('.city');
// const form = document.querySelector('form');

import { apiRings } from './apiRings';

const heroList = document.querySelector('.heroList');

apiRings().then(console.log),
  function renderHeroes(heroes) {
    const markup = users
      .map(hero => {
        return `<li>
        <p><b>Name</b>: ${hero.name}</p>
        <p><b>Race</b>: ${hero.race}</p>
        <p><b>Gender</b>: ${hero.gender}</p>
        </li>
        `;
      })
      .join('');
    heroList.innerHTML = markup;
  };
