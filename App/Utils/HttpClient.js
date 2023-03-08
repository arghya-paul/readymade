// // import Helpers from '@Utils/Helpers';
// import AuthService from '@Service/Auth';

// const BASE_URL = 'https://admin.rosettaq.app/api/';

// function get(endpoint, params) {
//   return request(endpoint, params);
// }

// function post(endpoint, params) {
//   return request(endpoint, params, 'POST');
// }

// function put(endpoint, params) {
//   return request(endpoint, params, 'PUT');
// }

// // function delete(endpoint, params) {
// //     return fetch(endpoint, params, "DELETE");
// // }



// async function request(endpoint, params = {}, method = 'GET') {
//   let token = await AuthService.getToken();
//   // console.log('token', token);
//   // let token = "6qtznm&5xr_$j3%&tr9t5+_-k5t#t5x_7u7ohc8j1lq*&mznn!5o-xc#y_+1v6z@*k7_j-cswcgg7u+*y5xg~079+4gzf4!46mrtml!hmb9_ru%!jc2io1yw6b*zyw!8@@jd4u6p0ubnaunog^_u$d";
//   // var myHeaders = new Headers();
//   // myHeaders.append("authorization", token);
//   // myHeaders.append("Content-Type", "application/json");

//   // var requestOptions = {
//   //   method: method,
//   //   headers: myHeaders,
//   //   redirect: 'follow'
//   // };
//   // // console.log('config', params);
//   // if (method != 'GET' && params != null) {
//   //   requestOptions['body'] = JSON.stringify(params);
//   // }
//   // console.log('url', BASE_URL + endpoint);
//   // // console.log('requestOptions', requestOptions);

//   // return fetch(BASE_URL + endpoint, requestOptions)
//   //   .then(response => response.json())
//   //   .then(result => {return result })
//   //   .catch(error => console.log('error', error));

//   var xmlRequest = new XMLHttpRequest();

//  return new Promise(function(resolve, reject) {
  
//   xmlRequest.open(method, BASE_URL + endpoint, true);

//     console.log("url", BASE_URL + endpoint);
//     // console.log("params", xmlRequest);

//     xmlRequest.setRequestHeader('Accept', '*/*');
//     xmlRequest.setRequestHeader('Content-Type', 'application/json');
//     xmlRequest.setRequestHeader('Authorization', token);
//     if (method == "GET") {
//       xmlRequest.send();
//     } else {
//       xmlRequest.send(JSON.stringify(params));
//     }
    

//     xmlRequest.onreadystatechange = function() { // Call a function when the state changes.   
//       // console.log("xmlRequest.response",xmlRequest.response)  
//         if (xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 200) {
//             resolve(JSON.parse(xmlRequest.response));
//         }
//         if (xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 400) {
//           resolve(JSON.parse(xmlRequest.response));
//         }
//     }

//   })
  

// }
// const upload = async (file, endpoint) => {
  
//   var formdata = new FormData();
//   // let get_originalname = await getOriginalname(file.path, file.mime);
//   formdata.append('image', {
//     uri: file.path,
//     type: file.mime,
//     name: "file.path",
//   });

//   // let objArray = Object.keys(object_get);

//   // objArray.forEach((element) => {
//   //   data.append(element, object_get[element]);
//   // });
//   // console.log('data9999', data);

//   return fetch(apiUrl, {headers, method: 'post', body: data,redirect:'follow'}).then((response) =>
//     response.json(),
//   );
//   // .then(response => {
//   //     return response;
//   // });
//   // console.log("getApi", getApi)

//   // let dData = await decrypt(getApi.data);
//   // getApi.data = JSON.parse(getApi.data)
//   // return JSON.parse(getApi);
// };



// const newFileUpload = async (url, file, object_get = {}) => {
//   return new Promise(async function (resolve, reject) {
//     let apiUrl = BASE_URL + url;

//     console.log("apiUrl", apiUrl)

//     var data = new FormData();

//     let objArray = Object.keys(object_get);

//     objArray.forEach((element) => {
//       data.append(element, object_get[element]);
//     });

//     if (file.path != '') {
//       let get_originalname = await getOriginalname(file.path);
//       console.log('originalname', get_originalname);
//       data.append('image', {
//         uri: file.path,
//         type: file.mime,
//         name: get_originalname,
//       });
//     }
//     var xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;
//     xhr.onreadystatechange = function () {
//       console.log("xhr.response", xhr.response)
//       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//         resolve(JSON.parse(xhr.response));
//       }
//       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400) {
//         resolve(JSON.parse(xhr.response));
//       }
//     };

//     xhr.open('POST', apiUrl);
//     xhr.setRequestHeader('Accept', '/');
//     xhr.setRequestHeader('Content-Type', 'multipart/form-data');
//     xhr.setRequestHeader('cache-control', 'no-cache');
//     xhr.send(data);
//   });
// }

// const getOriginalname = async (data) => {
//   let arr = data.split('/');
//   let lent = Number(arr.length - 1);
//   return arr[lent];
// };



// export default {
//   get,
//   post,
//   put,
//   // delete,
//   upload,
//   newFileUpload
// };











// import Helpers from '@Utils/Helpers';
// import AuthService from '@Service/Auth';
import AuthService from "../Service/Auth";

// const BASE_URL = 'https://admin.theupgraders.app/api/';
const BASE_URL = 'https://admin.rosettaq.app/api/';
function get(endpoint, params,headers) {
  return request(endpoint, params,'GET',headers);
}

function post(endpoint, params, headers) {
  return request(endpoint, params, 'POST', headers);
}

function put(endpoint, params,headers) {
  return request(endpoint, params, 'PUT',headers);
}

// function delete(endpoint, params) {
//     return fetch(endpoint, params, "DELETE");
// }



async function request(endpoint, params = {}, method = 'GET', headers = {}) {
  let token = await AuthService.getToken();

  var xmlRequest = new XMLHttpRequest();

  return new Promise(function (resolve, reject) {

    xmlRequest.open(method, BASE_URL + endpoint, true);

    console.log("url>>>>>>", BASE_URL + endpoint, method, params);
    // console.log("params", xmlRequest);

    xmlRequest.setRequestHeader('Accept', '*/*');
    xmlRequest.setRequestHeader('Content-Type', 'application/json');
    xmlRequest.setRequestHeader('Authorization', token);
    // let headerArr = Object.keys(headers);
    // headerArr.map((item, index) => {
    //   xmlRequest.setRequestHeader(item, headers[item]);
    // })

    if (method == 'GET') {
      xmlRequest.send();
    } else {
      xmlRequest.send(JSON.stringify(params));
    }

    xmlRequest.onreadystatechange = function () { // Call a function when the state changes.   
      // console.log("xmlRequest.response",xmlRequest.response)  
      // if (xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 200) {
      //   resolve(JSON.parse(xmlRequest.response));
      // }
      // if (xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 400) {
      //   resolve(JSON.parse(xmlRequest.response));
      // }
      if (xmlRequest.readyState === XMLHttpRequest.DONE) {
        console.log('xmlRequest.status>>>>',xmlRequest.response)
        if (xmlRequest.status === 200) {
            resolve(JSON.parse(xmlRequest.response));
        } else {
            try {
                reject(JSON.parse(xmlRequest.response));
            } catch (err) {
                reject({error: 'Server Error Please try again later !!!', actError: err});
            }
        }
    }
    }



  })


}
const upload = async (file, endpoint) => {

  var formdata = new FormData();
  // let get_originalname = await getOriginalname(file.path, file.mime);
  formdata.append('image', {
    uri: file.path,
    type: file.mime,
    name: "file.path",
  });

  // let objArray = Object.keys(object_get);

  // objArray.forEach((element) => {
  //   data.append(element, object_get[element]);
  // });
  // console.log('data9999', data);

  return fetch(apiUrl, { headers, method: 'post', body: data, redirect: 'follow' }).then((response) =>
    response.json(),
  );
  // .then(response => {
  //     return response;
  // });
  // console.log("getApi", getApi)

  // let dData = await decrypt(getApi.data);
  // getApi.data = JSON.parse(getApi.data)
  // return JSON.parse(getApi);
};



const newFileUpload = async (url, file, object_get = {}) => {
  return new Promise(async function (resolve, reject) {
    let apiUrl = BASE_URL + url;

    console.log("apiUrl", apiUrl)

    var data = new FormData();

    let objArray = Object.keys(object_get);

    objArray.forEach((element) => {
      data.append(element, object_get[element]);
    });

    if (file.path != '') {
      let get_originalname = await getOriginalname(file.path);
      console.log('originalname', get_originalname);
      data.append('image', {
        uri: file.path,
        type: file.mime,
        name: get_originalname,
      });
    }
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
      console.log("xhr.response", xhr.response)
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      }
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400) {
        resolve(JSON.parse(xhr.response));
      }
    };

    xhr.open('POST', apiUrl);
    xhr.setRequestHeader('Accept', '/');
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.setRequestHeader('cache-control', 'no-cache');
    xhr.send(data);
  });
}

const getOriginalname = async (data) => {
  let arr = data.split('/');
  let lent = Number(arr.length - 1);
  return arr[lent];
};



export default {
  get,
  post,
  put,
  // delete,
  upload,
  newFileUpload
};

