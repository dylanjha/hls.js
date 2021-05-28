/* global $, Hls, __NETLIFY__ */
/* eslint camelcase: 0 */

$(document).ready(function () {
  loadSelectedStream();
});

function loadSelectedStream() {
  console.log('debug loadSelectedStream', video.textTracks[0].mode);
  $('#statusOut,#errorOut').empty();

  if (!Hls.isSupported()) {
    handleUnsupported();
    return;
  }

  url = 'https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe.m3u8';
  self.hls = hls = new Hls();
  hls.loadSource(url);
  hls.attachMedia(video);
}
