var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  $("#tabs a").on("click",openTab2);

  eduGames = new YT.Player('eduGames', {
    height: '233',
    width: '465',
    videoId: 'YyUligs3DJM'
  });
  adverGames = new YT.Player('adverGames', {
    height: '233',
    width: '465',
    videoId: '_PUx3CYDQrY'
  });
  indiGames = new YT.Player('indiGames', {
    height: '233',
    width: '465',
    videoId: 'wMYBiWkjT7g'
  });
  tableGames = new YT.Player('tableGames', {
    height: '233',
    width: '465',
    videoId: 'ZNiDq8sFfMw'
  });
}

function openTab2() {
  eduGames.stopVideo();
  adverGames.stopVideo();
  indiGames.stopVideo();
  tableGames.stopVideo();
}