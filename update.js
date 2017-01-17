function updatevideo (url, title, desc) {
  document.getElementById('videoplayer').setAttribute('src', 'https://www.youtube.com/embed/' + url)
  document.getElementById('titleText').innerHTML = title
  document.getElementById('descText').innerHTML = desc
}
