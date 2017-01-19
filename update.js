function updatevideo (url, title, desc) {
  document.getElementById('videoplayer').setAttribute('src', 'https://www.youtube.com/embed/' + url)
  document.getElementById('titleText').innerHTML = title
  document.getElementById('descText').innerHTML = desc
  var windowh = window.innerHeight
  var videoh = window.innerWidth * 0.36
  var scroll = 321 - (windowh - videoh) / 2
  if (window.innerWidth > 700) {
    window.scrollTo(0, scroll)
  } else {
    window.scrollTo(0, 0)
  }
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
