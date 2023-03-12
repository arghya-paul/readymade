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






// // import Helpers from '@Utils/Helpers';
// // import AuthService from '@Service/Auth';
// import AuthService from "../Service/Auth";

// // const BASE_URL = 'https://admin.theupgraders.app/api/';
// const BASE_URL = 'https://admin.rosettaq.app/api/';
// function get(endpoint, params,headers) {
//   return request(endpoint, params,'GET',headers);
// }

// function post(endpoint, params, headers) {
//   return request(endpoint, params, 'POST', headers);
// }

// function put(endpoint, params,headers) {
//   return request(endpoint, params, 'PUT',headers);
// }

// // function delete(endpoint, params) {
// //     return fetch(endpoint, params, "DELETE");
// // }



// async function request(endpoint, params = {}, method = 'GET', headers = {}) {
//   let token = await AuthService.getToken();

//   var xmlRequest = new XMLHttpRequest();

//   return new Promise(function (resolve, reject) {

//     xmlRequest.open(method, BASE_URL + endpoint, true);

//     console.log("url>>>>>>", BASE_URL + endpoint, method, params);
//     // console.log("params", xmlRequest);

//     xmlRequest.setRequestHeader('Accept', '*/*');
//     xmlRequest.setRequestHeader('Content-Type', 'application/json');
//     xmlRequest.setRequestHeader('Authorization', token);
//     // let headerArr = Object.keys(headers);
//     // headerArr.map((item, index) => {
//     //   xmlRequest.setRequestHeader(item, headers[item]);
//     // })

//     if (method == 'GET') {
//       xmlRequest.send();
//     } else {
//       xmlRequest.send(JSON.stringify(params));
//     }

//     xmlRequest.onreadystatechange = function () { // Call a function when the state changes.   
//       // console.log("xmlRequest.response",xmlRequest.response)  
//       // if (xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 200) {
//       //   resolve(JSON.parse(xmlRequest.response));
//       // }
//       // if (xmlRequest.readyState === XMLHttpRequest.DONE && xmlRequest.status === 400) {
//       //   resolve(JSON.parse(xmlRequest.response));
//       // }
//       if (xmlRequest.readyState === XMLHttpRequest.DONE) {
//         console.log('xmlRequest.status>>>>',xmlRequest.response)
//         if (xmlRequest.status === 200) {
//             resolve(JSON.parse(xmlRequest.response));
//         } else {
//             try {
//                 reject(JSON.parse(xmlRequest.response));
//             } catch (err) {
//                 reject({error: 'Server Error Please try again later !!!', actError: err});
//             }
//         }
//     }
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

//   return fetch(apiUrl, { headers, method: 'post', body: data, redirect: 'follow' }).then((response) =>
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







import Storage from '@Utils/Storage'
// import { MAIN_BASE_URL } from './EnvVariables';
import RNFetchBlob from 'rn-fetch-blob'
import RNFS from 'react-native-fs'
// import {axios} 
import axios from 'axios';
import NavigationService from '../Services/Navigation';


// const BASE_URL = `${MAIN_BASE_URL}/api/v1/`;
const BASE_URL = `http://43.205.232.125:8003/api/v1/`;
async function getToken() {
    return await Storage.get('token');
}

function get(endpoint, params) {
    return request(endpoint, params);
}

function post(endpoint, params) {
    return request(endpoint, params, "POST");
}

function put(endpoint, params) {
    return request(endpoint, params, "PUT");
}

function Delete(endpoint, params) {
    return request(endpoint, params, "DELETE");
}

async function request(endpoint, params = null, method = 'GET') {
    let token = await getToken();

    var xmlRequest = new XMLHttpRequest();
    let url = BASE_URL + endpoint;

    return new Promise((resolve, reject) => {
        xmlRequest.open(method, url, true);

        xmlRequest.setRequestHeader('Accept', '/');
        xmlRequest.setRequestHeader('Content-Type', 'application/json');
        xmlRequest.setRequestHeader('Authorization', token);
        xmlRequest.setRequestHeader('userType', 'User');

        if (method == 'GET') {
            xmlRequest.send();
        } else {
            xmlRequest.send(JSON.stringify(params));
        }

        xmlRequest.onreadystatechange = function () { // Call a function when the state changes.   
            // console.log("xmlRequest.response",xmlRequest.response)  
            if (xmlRequest.readyState === XMLHttpRequest.DONE) {
                if (xmlRequest.status === 200) {
                    resolve(JSON.parse(xmlRequest.response));
                } else {
                    try {
                        reject(JSON.parse(xmlRequest.response));
                    } catch (err) {
                        reject({ error: 'Server Error Please try again later !!!', actError: err });
                    }
                }
            }
        }
    })

}

const newFileUpload = async (url, file, object_get = {}) => {
    return new Promise(async function (resolve, reject) {
        let apiUrl = BASE_URL + url;
        let token = await getToken();

        console.log("apiUrl", apiUrl)

        var data = new FormData();


        console.log({
            uri: file,
            type: 'mp4',
            name: 'newVideo.mp4'
        });
        let get_originalname = await getOriginalname(file);

        data.append('video', {
            uri: file,
            type: 'video/mp4',
            name: get_originalname
        });

        console.log(data);
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
            // resolve(toString(xhr.response));
        };

        xhr.open('POST', apiUrl);
        // xhr.setRequestHeader('Accept', '/');
        // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        // xhr.setRequestHeader('cache-control', 'no-cache');
        xhr.setRequestHeader('Authorization', token);
        xhr.send(data);
    });
}

// const FileUpload = async (url, file, object_get = {}) => {
//     return new Promise(async function (resolve, reject) {
//         let token = await getToken();
//         let apiUrl = BASE_URL + url;

//         console.log("apiUrl>>>>", apiUrl)

//         var data = new FormData();

//         let objArray = Object.keys(object_get);

//         objArray.forEach((element) => {
//             data.append(element, object_get[element]);
//         });

//         if (file.path != '') {
//             let get_originalname = await getOriginalname(file.path);
//             console.log('originalnam', get_originalname);

//             data.append('video', {
//                 uri: file.path,
//                 type: file.mime,
//                 name: get_originalname,
//             });
//         }
//         //   var xhr = new XMLHttpRequest();

//         var config = {
//             method: 'post',
//             url: apiUrl,
//             headers: {
//                 'Accept': '/',
//                 'Authorization': token,
//                 "Content-Type": 'multipart/form-data',
//                 'userType': 'User'

//             },
//             data: data
//         };
//         //   xhr.withCredentials = true;
//         axios(config).then((res) => {
//             console.log('resss>>>', res.data)

//             // NavigationService.navigate('PostPage', {
//             //     'transcode': res.data.transcoderUrl,
//             //     originalURL:res.data.originalUrl
//             // })
//         }).catch((err) => {
//             console.log('errrr', err)
//         })

//         //   xhr.onreadystatechange = function () {    
//         //     console.log("xhr.response", xhr.response)
//         //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//         //       resolve(JSON.parse(xhr.response));
//         //     }
//         //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 400) {
//         //       resolve(JSON.parse(xhr.response));
//         //     }
//         //   };


//         //   axios.open('POST', apiUrl);
//         //   axios.setRequestHeader('Authorization', token);
//         //   axios.send(data);
//     });
// }


const FileUpload = async (url, file, object_get = {}) => {
    return new Promise(async function (resolve, reject) {
      let token = await getToken();
      let apiUrl = BASE_URL + url;

      console.log("apiUrl", apiUrl)

      var data = new FormData();

      let objArray = Object.keys(object_get);

      objArray.forEach((element) => {
        data.append(element, object_get[element]);
      });

      if (file.path != '') {
        let get_originalname = await getOriginalname(file.path);
        console.log('originalnam', get_originalname);

        data.append('video', {
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
      xhr.setRequestHeader('Authorization', token);
      xhr.send(data);
    });
  }




// const FileUpload = async (endpoint, files, imageFieldName = 'img', object_get = {}) => {
//     let token = await getToken();
//     let url = BASE_URL + endpoint;
// console.log('files.path', files.path);

//     let get_originalname = await getOriginalname(files.path);
// // return
//     let Base64Image = await RNFS.readFile(files.path, 'base64')

//     console.log(files.mime);
//     // return

//     console.log('url', url);
//     console.log(get_originalname);
//     console.log("Base64Image", `data:${files.mime};base64,${Base64Image}`)
//     return new Promise((resolve, reject) => {
//         RNFetchBlob.fetch('POST', url, {
//             "Accept": '/',
//             'Content-Type': 'application/octet-stream',
//             'cache-control': 'no-cache',
//             'Authorization': token,
//             'originalname': get_originalname,
//             'minetype': `${files.mime}`,
//             'replacetype': `data${files.mime}base64`
//         }, `data:${files.mime};base64,${Base64Image}`)
//         .uploadProgress((item)=>{
//             console.log(item);
//         })
//             .then((result) => {
//                 try {
//                     console.log(result);
//                     resolve(JSON.parse(result.data));
//                 } catch (error) {
//                     reject(error);
//                 }
//             })
//             .catch((error) => {
//                 reject(error);
//             })
//     })
// };

const imageUpload = async (endpoint, files, imageFieldName = 'img', object_get = {}) => {
    let token = await getToken();
    let url = BASE_URL + endpoint;
    console.log('filessssss>>',files)

    let get_originalname = await getOriginalname(files.path);

    let Base64Image = await RNFS.readFile(files.path, 'base64')
    console.log('url', url);
    console.log(get_originalname);
    // console.log("Base64Image", `data:${files.mime};base64,${Base64Image}`)
    return new Promise((resolve, reject) => {
        RNFetchBlob.fetch('POST', url, {
            "Accept": '/',
            'Content-Type': 'application/octet-stream',
            'cache-control': 'no-cache',
            'Authorization': token,
            'originalname': get_originalname,
            'minetype': `${files.mime}`,
            'replacetype': `data${files.mime}base64`
        }, `data:${files.mime};base64,${Base64Image}`)
            .then((result) => {
                try {
                    resolve(JSON.parse(result.data));
                } catch (error) {
                    reject(error);
                }
            })
            .catch((error) => {
                reject(error);
            })
    })
};


async function multiupload(endpoint, method, files = [], object_get = {}) {
    let token = await getToken();

    var xmlRequest = new XMLHttpRequest();
    let url = BASE_URL + endpoint;

    var data = new FormData();

    let objArray = Object.keys(object_get);
    objArray.forEach((element) => {
        data.append(element, object_get[element]);
    });

    files.forEach(async (element) => {
        let get_originalname = await getOriginalname(element.path);
        data.append(element.key, {
            uri: element.path,
            type: felementile.mime,
            name: get_originalname,
        });
    })

    return new Promise((resolve, reject) => {
        xmlRequest.open(method, url, true);

        xmlRequest.setRequestHeader('Accept', '/');
        xmlRequest.setRequestHeader('Content-Type', 'multipart/form-data');
        xmlRequest.setRequestHeader('cache-control', 'no-cache');
        xmlRequest.setRequestHeader('Authorization', token);

        xmlRequest.send(data);

        xmlRequest.onreadystatechange = function () { // Call a function when the state changes.   
            if (xmlRequest.readyState === XMLHttpRequest.DONE) {
                if (xmlRequest.status === 200) {
                    resolve(JSON.parse(xmlRequest.response));
                } else {
                    try {
                        reject(JSON.parse(xmlRequest.response));
                    } catch (err) {
                        reject({ error: 'Server Error Please try again later !!!', actError: err });
                    }
                }
            }
        }
    })
}

async function getOriginalname(data) {
    let arr = data.split("/");
    let lent = Number(arr.length - 1);
    return arr[lent];
}

const HttpClient = {
    get,
    post,
    put,
    Delete,
    multiupload,
    newFileUpload,
    FileUpload,
    imageUpload
}

export default HttpClient





