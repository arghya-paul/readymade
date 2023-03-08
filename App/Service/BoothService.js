import HttpClient from '@Utils/HttpClient';


async function getbooth(d) {
  let endpoint = 'user/booth/get-all';
  return HttpClient.post(endpoint,d);
}
async function singlebooth(data) {
  let endpoint = 'user/booth/single';
  return HttpClient.post(endpoint,data);
}
export default {
    getbooth,
    singlebooth,
};
