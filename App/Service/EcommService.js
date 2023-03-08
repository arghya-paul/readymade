import HttpClient from '@Utils/HttpClient';

async function banner(d) {
  let endpoint = 'user/banner';
  return HttpClient.post(endpoint, d);
}
async function fetchcategory() {
  let endpoint = 'user/categary';
  return HttpClient.get(endpoint);
}
async function product(data) {
  let endpoint = 'user/product';
  return HttpClient.post(endpoint, data);
}
async function Singleproduct(data) {
  let endpoint = 'user/categary/singel-product';
  return HttpClient.post(endpoint, data);
}
async function CategoryProduct(data) {
  let endpoint = 'user/categary/category-product';
  return HttpClient.post(endpoint, data);
}
async function addcart(data) {
  let endpoint = 'user/product/addtocart';
  return HttpClient.post(endpoint, data);
}
async function fetchcart(data) {
  let endpoint = 'user/product/fetchcart';
  return HttpClient.post(endpoint, data);
}
async function cartcount(data) {
  let endpoint = 'user/product/cartcount';
  return HttpClient.post(endpoint, data);
}
async function deletecart(data) {
  let endpoint = 'user/product/deletecart';
  return HttpClient.post(endpoint, data);
}
async function checkout(data) {
  let endpoint = 'user/checkout';
  return HttpClient.post(endpoint, data);
}
async function orderhistory(data) {
  let endpoint = 'user/checkout/history';
  return HttpClient.post(endpoint, data);
}
async function saveaddress(data) {
  let endpoint = '/user/address';
  return HttpClient.post(endpoint, data);
}
async function getaddress() {
  let endpoint = '/user/address';
  return HttpClient.get(endpoint);
}
async function fetchsubcategory(data) {
  let endpoint = 'user/product/get-subcategory';
  return HttpClient.post(endpoint, data);
}
async function CatProduct(data) {
  let endpoint = 'user/product/category-product';
  return HttpClient.post(endpoint, data);
}
async function SendFeedBack(data) {
  let endpoint = 'user/product/send-feadback';
  return HttpClient.post(endpoint, data);
}
async function fetchFeedBack(data) {
  let endpoint = 'user/product/get-feadback';
  return HttpClient.post(endpoint, data);
}
async function deleteaddress(data) {
  let endpoint = 'user/address/delete';
  return HttpClient.post(endpoint,data);
}
export default {
  banner,
  fetchcategory,
  product,
  CategoryProduct,
  Singleproduct,
  addcart,
  fetchcart,
  cartcount,
  deletecart,
  checkout,
  orderhistory,
  saveaddress,
  getaddress,
  fetchsubcategory,
  CatProduct,
  SendFeedBack,
  fetchFeedBack,
  deleteaddress
};
