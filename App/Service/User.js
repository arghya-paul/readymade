import HttpClient from '@Utils/HttpClient';

async function getAlluser(data) {
  let endpoint = 'user/fetch-all';
  return HttpClient.get(endpoint,data);
}


export default {
  getAlluser
};
