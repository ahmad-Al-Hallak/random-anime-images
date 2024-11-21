function nameArtist(artist_href, artist_name) {

  document.getElementById('link').href = artist_href;
  document.getElementById('artistName-p').innerText = ' ' + artist_name;

  if (document.getElementById('artistName-div').style.display === 'none') {

    document.getElementById('artistName-div').style.display = 'block';
    document.getElementById('animeName-div').style.display = 'none';
  };
};

function nameAnime(anime_name) {

  document.getElementById('animeName-p').innerText = 'Anime: ' + anime_name;

  if (document.getElementById('animeName-div').style.display === 'none') {

    document.getElementById('artistName-div').style.display = 'none';
    document.getElementById('animeName-div').style.display = 'block';
  };
};

function verificationOption(option) {
  if (option === 'Neko' || option === 'Waifu' || option === 'Kitsune' || option === 'Husbando') {
    return true;
  }
  else {
    return false;
  }
};

function RandomImage() {
  
  document.getElementById('placeholder').style.display = 'block';
  document.getElementById('image').style.display = 'none';

  let optionSelected = document.getElementById('selection').value;

  fetch('https://nekos.best/api/v2/' + optionSelected)
    .then(response => response.json())
    .then(json => {
      const imageUrl = json.results[0].url;

      if (verificationOption(optionSelected))
      {
        nameArtist(json.results[0].artist_href, json.results[0].artist_name);
      }
      else
      {
        nameAnime(json.results[0].anime_name);
      }
  
      document.getElementById('image').src = imageUrl;
      document.getElementById('placeholder').style.display = 'none';
      document.getElementById('image').style.display = 'block';
    })
};