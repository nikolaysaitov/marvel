import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';


import './style/style.scss';



// Варианты для newsApi
// marvelService.getCharacter('techcrunch').then(res => console.log(res));
// marvelService.getAllCharacters().then(res => res.articles.forEach(item => console.log(item.author)));

// const marvelService = new MarvelService();
// marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));
// marvelService.getAllCharacters().then(res => console.log(res.data.results[1]));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

