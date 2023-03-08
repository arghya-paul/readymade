import HttpClient from '@Utils/HttpClient';

async function loyaltypoint() {
  let endpoint = 'user/loyalty/get-all';
  return HttpClient.post(endpoint);
}

async function loyaltypointget() {
  let endpoint = 'user/loyalty/own';
  return HttpClient.post(endpoint);
}

async function loyaltyAdd(data) {
  let endpoint = 'user/loyalty/loyalty-add';
  return HttpClient.post(endpoint, data);
}

async function getScratchCard() {
  let endpoint = 'user/scrach-card';
  return HttpClient.get(endpoint);
}
async function compleateScrath(data) {
  let endpoint = 'user/scrach-card/use-scratch-card';
  return HttpClient.post(endpoint,data);
}
async function winningList() {
  let endpoint = 'user/scrach-card/wining-list';
  return HttpClient.get(endpoint);
}

async function referHistory() {
  let endpoint = 'user/loyalty/refer-history';
  return HttpClient.get(endpoint);
}


async function loyaltyHistory() {
  let endpoint = 'user/loyalty/loyalty-history';
  return HttpClient.get(endpoint);
}
async function getloyaltypoint(data) {
  let endpoint = 'user/loyalty/get-type-point';
  return HttpClient.post(endpoint, data);
}

export default {
    loyaltypoint,
    loyaltyAdd,
    loyaltypointget ,
    getScratchCard,
    compleateScrath,
    winningList,
    referHistory,
    loyaltyHistory,
    getloyaltypoint
};
