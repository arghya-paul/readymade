import HttpClient from '@Utils/HttpClient';

async function fetchProgram(data) {
    let endpoint = 'user/cooching';
    return HttpClient.post(endpoint,data);
}
async function singleProgram(data) {
    let endpoint = 'user/cooching/single-cooching';
    return HttpClient.post(endpoint,data);
}
export default {
    fetchProgram,
    singleProgram
}
