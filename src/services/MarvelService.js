class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";

  _apiKey = "apikey=43561f6432be6dac1b10e566585192fb";

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(
      `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
    );
    return res.data.results.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    return this._transformCharacter(res.data.results[0]);
  };

  _transformCharacter = (char) => {
    return {
      name: char.name,
      description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
      thumbnail:
      char.thumbnail.path +
        "." +
        char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    };
  };
}

export default MarvelService;

// Этот вариант не тестировал
// class MarvelService {
//     _apiBase = 'https://newsapi.org/v2/';
//     _apiKey = 'apiKey=49395fb2b3e749a19a3411d320719f10'

//   getResource = async (url) => {
//     let res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }
//     return await res.json();
//   };

//   getAllCharacters = () => {
//     return this.getResource(
//       `${this._apiBase}everything?q=tesla&from=2022-11-15&sortBy=publishedAt&${this._apiKey}`
//     );
//   };

//   getCharacter = (id) => {
//     return this.getResource(
//       `${this._apiBase}top-headlines?sources=${id}&${this._apiKey}`
//     );
//   };
// }

// export default MarvelService;

// //Этот вариант работал:

// import md5 from "blueimp-md5";

// class MarvelService {
//   getResource = async (url) => {
//     let res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }
//     return await res.json();
//   };

//   getHash = (timeStamp) => {
//     return md5(
//       timeStamp +
//         "333ef5f47aa933a5cf50f7f73943e0521a505164" +
//         "d6da9592eb070370d2a58b1e2a1433da"
//     );
//   };

//   getAllCharacters = () => {
//     const timeStamp = +new Date();
//     const hash = this.getHash(timeStamp);
//     return this.getResource(
//       "https://gateway.marvel.com:443/v1/public/characters?" +
//         "&ts=" +
//         timeStamp +
//         "&apikey=d6da9592eb070370d2a58b1e2a1433da" +
//         "&hash=" +
//         hash
//     );
//   };
// }

// export default MarvelService;

// c5d6fc8b83116d92ed468ce36bac6c62 ключ петриченко

// Этот не тестировал
// import md5 from "blueimp-md5";

// class MarvelService {
//     _apiBase = 'https://gateway.marvel.com:443/v1/public/';
//     _apiKey = 'apiKey=43561f6432be6dac1b10e566585192fb';
//     _privateKey = '075f05bd8f47755c0291f0c0e5ad2fbe74b82fd7';

//   getResource = async (url) => {
//     let res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//     }
//     return await res.json();
//   };

//   getAllCharacters = async () => {
//     const ts = Number(new Date());
//     const hash = md5.create();
//     hash.update(ts + this._privateKey + this.apiKey);
//     const url = `${this._apiBase}characters?ts=${ts}limit=9&offset=210&apikey=${this._apiKey}&hash=${hash.hex()}`
//     console.log(url)
//     const res = await this.getResource(`${this._apiBase}characters?ts=${ts}limit=9&offset=210&apikey=${this._apiKey}&hash=${hash.hex()}`)
//     return res.data.result.map(this._transformCharacter)

//   };

//   getCharacter = async (id) => {
//       const res = await this.getResource(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`)
//       return this._transformCharacter(res.data.results[0]);
//   }
// }

// export default MarvelService;
