import HttpClient from '@Utils/HttpClient';

async function fetchData() {
    let endpoint = 'common/terms-and-condition';
    return HttpClient.get(endpoint);
}
async function fetchPrivacy() {
    let endpoint = 'common/privecy-policy';
    return HttpClient.get(endpoint);
}
async function getfaq() {
    let endpoint = 'common/faq';
    return HttpClient.get(endpoint);
}
export default {
    fetchData,
    fetchPrivacy,
    getfaq
}
