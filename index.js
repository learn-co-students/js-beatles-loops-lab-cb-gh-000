function theBeatlesPlay(musicians,instruments) {
  var greatArtists = [];
  for(var i = 0; i < musicians.length; i++) {
    greatArtists.push(musicians[i] + " plays " + instruments[i]);
  }
  return greatArtists
}
