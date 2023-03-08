import HttpClient from '@Utils/HttpClient';

async function getBanner() {
    let endpoint = 'user/podcust/banner';
    return HttpClient.get(endpoint);
}

async function getContent() {
    console.log('getContent');
    let endpoint = 'user/content';
    return HttpClient.get(endpoint);
}

async function getTypeData(id) {
    let endpoint = 'user/podcust-content/type/' + id;
    return HttpClient.get(endpoint);
}

async function AudioSingle(data) {
    let endpoint = 'user/podcust/single';
    return HttpClient.post(endpoint, data);
}

async function getAllType() {
    let endpoint = 'user/podcust-content/type-list';
    return HttpClient.get(endpoint);
}

async function getPodcastCategoryData() {
    let endpoint = 'user/podcust/categary';
    return HttpClient.get(endpoint);
}
async function getVideoCategory() {
    let endpoint = 'user/video/get-video-category';
    return HttpClient.get(endpoint);
}
async function getSingleTypeData(id) {
    let endpoint = 'user/podcust-content/singel-type/' + id;
    return HttpClient.get(endpoint);
}

async function getOttSearch(data) {
    let endpoint = 'user/podcust/search';
    return HttpClient.post(endpoint, data);
}
async function AllPodcast(data) {
    let endpoint = 'user/podcust/get-podcust';
    return HttpClient.post(endpoint, data);
}
async function NewPodcast(data) {
    let endpoint = 'user/podcust/new-prodcust';
    return HttpClient.post(endpoint, data);
}
async function PopularPodcast(data) {
    let endpoint = 'user/podcust/propular-podcust';
    return HttpClient.post(endpoint, data);
}
async function GetPodcast(data) {
    let endpoint = 'user/podcust/get-podcust';
    return HttpClient.post(endpoint, data);
}
export default {
    getBanner,
    getContent,
    getTypeData,
    AudioSingle,
    getAllType,
    getPodcastCategoryData,
    getSingleTypeData,
    getOttSearch,
    getVideoCategory,
    AllPodcast,
    NewPodcast,
    PopularPodcast,
    GetPodcast
};
