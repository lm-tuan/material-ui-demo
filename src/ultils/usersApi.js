import AxiosService from './../commons/AxiosService';
const url = "http://5d969d14a824b400141d27b4.mockapi.io/demo-api/test-api";
const urlAuth = 'https://authentication-movation.herokuapp.com/api/auth/login';

// function registerUser() {
//   return AxiosService.get(url);
// }

// register
function registerUser(body) {
  return AxiosService.post(url,body)
}

//login

function authorize(body) {
  return AxiosService.post(urlAuth,body)
}



// // delete
// function deleteTaskAPI(param) {
//   return AxiosService.delete(`${url}/${param}`);
// }

// //update
// function updateTaskAPI(body) {
//   return AxiosService.put(`${url}/${body._id}`,body)
// }

export const usersApi = {
    registerUser,
    authorize
};