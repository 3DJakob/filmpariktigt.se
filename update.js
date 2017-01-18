function updatevideo (url, title, desc) {
  document.getElementById('videoplayer').setAttribute('src', 'https://www.youtube.com/embed/' + url)
  document.getElementById('titleText').innerHTML = title
  document.getElementById('descText').innerHTML = desc
}
var nav = true
function navbar () {
  if (nav) {
    document.getElementById('navcontainer').style.height = 'auto'
  } else {
    document.getElementById('navcontainer').style.height = '0'
  }
  nav =! nav
}
