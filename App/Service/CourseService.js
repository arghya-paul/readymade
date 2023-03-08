import HttpClient from '@Utils/HttpClient';

async function courseCategory() {
  let endpoint = 'user/course/categary';
  return HttpClient.get(endpoint);
}
async function FetchCourse(data) {
  let endpoint = 'user/course/categary-course';
  return HttpClient.post(endpoint, data);
}
async function CourseDescription(data) {
  let endpoint = 'user/course/single';
  return HttpClient.post(endpoint, data);
}
async function getdiscussion(d) {
  let endpoint = 'user/course/fetch-discuss';
  return HttpClient.post(endpoint, d);
}

async function adddiscussion(data) {
  let endpoint = 'user/course/add-discuss';
  return HttpClient.post(endpoint, data);
}
async function BuyCourse(data) {
  let endpoint = 'user/course/course-buy';
  return HttpClient.post(endpoint, data);
}
async function myCouress(data) {
  let endpoint = 'user/course/my-couress';
  return HttpClient.post(endpoint, data);
}
async function PopularCourse() {
  let endpoint = 'user/course/propular-course';
  return HttpClient.get(endpoint);
}
export default {
  courseCategory,
  FetchCourse,
  CourseDescription,
  getdiscussion,
  adddiscussion,
  BuyCourse,
  myCouress,
  PopularCourse
};
