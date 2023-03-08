import HttpClient from '@Utils/HttpClient';
// import Storage from '@Utils/Storage';

async function register(data) {
  let endpoint = 'user/register';
  return HttpClient.post(endpoint, data);
}
async function updateprofile(data) {
  let endpoint = 'user/update';
  return HttpClient.post(endpoint, data);
}
async function login(data) {
  let endpoint = 'user/login';
  return HttpClient.post(endpoint, data);
}

async function getAccount() {
  return await Storage.get('account');
}

async function setAccount(data) {
  return await Storage.set('account', data);
}

async function getToken() {
  return await Storage.get('token');
}

async function setToken(data) {
  return await Storage.set('token', data);
}

async function logout() {
  return await Storage.set('account', null);
}
async function setWatchlist(data) {
  return await Storage.set('watchList', data);
}

async function getWatchList() {
  return await Storage.get('watchList');
}
async function getFavorite() {
  return await Storage.get('favorites');
}

async function setFavorite(data) {
  return await Storage.set('favorites', data);
}
async function getPodcastFavorite() {
  return await Storage.get('podcastfavorites');
}

async function setPodcastFavorite(data) {
  return await Storage.set('podcastfavorites', data);
}
async function getVideo(d) {
  let endpoint = 'user/get-intro-video';
  return HttpClient.post(endpoint,d);
}
async function changepass(data) {
  let endpoint = 'user/update-pass';
  return HttpClient.post(endpoint, data);
}
async function forgetPass(data) {
  let endpoint = 'user/forget-password';
  return HttpClient.post(endpoint, data);
}
async function getqrprofile(data) {
  let endpoint = 'user/profile/qrcode';
  return HttpClient.post(endpoint, data);
}
export default {
  register,
  updateprofile,
  login,
  logout,
  getAccount,
  setAccount,
  getToken,
  setToken,
  setWatchlist,
  getWatchList,
  getFavorite,
  setFavorite,
  getPodcastFavorite,
  setPodcastFavorite,
  getVideo,
  changepass,
  forgetPass,
  getqrprofile
};
