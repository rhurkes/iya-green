var imageBase = 'http://climate.cod.edu/data/satellite/{scale}/{region}/{type}/{region}.{type}.{date}.{time}.gif';
var staticOverlayBase = 'http://climate.cod.edu/data/satellite/{scale}/{region}/maps/{region}_map.gif';
var timestamps = [];
var codImages = [];
var maxAttempts = 4;
var maxImageCount = 4;
var failedAttempts = 0;
var lastSuccessTs;
var updateInterval = 60 * 1000 * 10;
var updateTimer;
var interval;
var codViewer = document.createElement('div');
codViewer.classList.add('page');
codViewer.id = 'cod-viewer';
document.body.appendChild(codViewer);
// TODO turn off updateTimer

// ELEMENTS
const scaleEl = document.getElementById('cod-scale');
const typeEl = document.getElementById('cod-type');
const region1kmEl = document.getElementById('cod-1kmregion');
const countEl = document.getElementById('cod-count');
const notifyEl = document.getElementById('cod-notify');
const updateEl = document.getElementById('cod-update');

document.getElementById('cod-view').addEventListener('click', function () {
  attmpts = 0;
  var type = typeEl.value;
  switch (type) {
    case 'vis':
      interval = 15;
      break;
    case 'rad':
      interval = 5;
      break;
  }

  timestamps = buildCodImages(interval);
  fetchImage(codImages[0]);
  if (updateEl.value) initUpdates();
  switchPage('cod-viewer');
});

function initUpdates() {
  updateTimer = setInterval(function() {
    timestamps = buildCodImages(interval);
    var updateTsList = timestamps.slice(0, timestamps.indexOf(lastSuccessTs));
    console.log('attempting to fetch for ts: ' + new Date(updateTsList[0]));
    if (updateTsList.length && updateTsList[0] !== lastSuccessTs) fetchImage(updateTsList[0]);
  }, updateInterval);
}

function imageLoad() {
  var ts = this.getAttribute('data-ts');
  console.log('img loaded: ' + ts);
  if (ts !== lastSuccessTs) {
    lastSuccessTs = this.getAttribute('data-ts');
    console.log('we have a new image! ts: ' + lastSuccessTs);
    if (iya.settings.audioNotification) chime.play();
  }
}

function imageError() {
  failedAttempts++;
  var ts = parseInt(this.getAttribute('data-ts'));
  this.style.display = 'none';
  var ci = codImages.find((a) => a.ts === ts);
  if (ci) ci.failed = true;
  if (failedAttempts < maxAttempts) {
    ci = codImages.find((x) => typeof x.elementRef === 'undefined');
    if (ci) fetchImage(ci);
  }
}

function fetchImage(ci) {
  var scale = scaleEl.value,
    type = typeEl.value,
    count = countEl.value,
    notify = notifyEl.value,
    region;

  switch (scale) {
    case '1km':
      region = region1kmEl.value;
      break;
  }

  var mapOverlay = staticOverlayBase.replace('{scale}', scale).replace(/{region}/g, region);
  var overlays = [mapOverlay];
  var dt = new Date(ci.ts);
  var date = dt.getUTCFullYear() + padZero(dt.getUTCMonth() + 1) + padZero(dt.getUTCDate());
  var time = padZero(dt.getUTCHours()) + padZero(dt.getUTCMinutes());
  var url = imageBase.replace('{scale}', scale).replace(/{region}/g, region).replace(/{type}/g, type).replace('{date}', date).replace('{time}', time);
  var title = 'CoD ' + scale + ' ' + type + ' ' + region;

  var img = new Image();
  img.onload = imageLoad;
  img.onerror = imageError;
  img.setAttribute('data-ts', ci.ts);
  codViewer.appendChild(img);
  ci.elementRef = img;
  img.src = url;
}

function buildCodImages(interval) {
  var tsList = codImages.map((c) => c.ts);
  var now = new Date();
  now.setMinutes(now.getMinutes() + interval);
  var newTs = [];
  for (var i = 0; i < maxImageCount; i++) {
    var diff = now.getMinutes() % interval;
    now.setMinutes(now.getMinutes() - (diff + interval));
    now.setSeconds(0);
    now.setMilliseconds(0);
    newTs.unshift(now.getTime());
  }
  newTs.forEach(function(ts) {
    if (tsList.indexOf(ts) === -1) {
      now = new Date(ts);
      var date = now.getUTCFullYear() + padZero(now.getUTCMonth() + 1) + padZero(now.getUTCDate());
      var time = padZero(now.getUTCHours()) + padZero(now.getUTCMinutes());
      var ci = { ts: ts, time: time, date: date, elementRef: undefined };
      codImages.unshift(ci);
    }
  });
}

function seeImages() {
  codImages.forEach(function(i) {
    console.log(i);
  });
}
