import HttpClient from '@Utils/HttpClient';

async function getBanner() {
    let endpoint = 'user/news/banner';
    return HttpClient.get(endpoint);
}

async function getNews() {
    let endpoint = 'user/news/category-wize';
    return HttpClient.get(endpoint);
}
async function singlenews(d) {
    let endpoint = 'user/news/single';
    return HttpClient.post(endpoint,d);
}
async function addlikes(d) {
    let endpoint = 'user/news/add-like';
    return HttpClient.post(endpoint,d);
}

async function addcomments(data) {
    let endpoint = 'user/news/add-comment';
    return HttpClient.post(endpoint,data);
}
async function addwatchlist(data) {
    let endpoint = 'user/course/add-wishlist';
    return HttpClient.post(endpoint,data);
}
async function fetchwatchlist() {
    let endpoint = 'user/course/fetch-wishlist';
    return HttpClient.get(endpoint);
}
export default {
    getBanner,
    getNews,
    singlenews,
    addlikes,
    addcomments,
    addwatchlist,
    fetchwatchlist
}
