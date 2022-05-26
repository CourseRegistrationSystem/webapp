import { IRequest, SERVER } from '../api';
import Dates from '../__ifunc/dates'
const Package = require('../../package.json')
const APPS_AUTH_USER = '__apps__' + Package.name;
const STORAGE = 'session'; // local|session

// Auth path
const USE_AUTH = true

class Auth {
    static getAuthEnabled() {
        return USE_AUTH
    }
    static async loginByUsername(username, password) {
        return this.login({ username: username, password: password })
    }
    // static async loginByEmail(email, password) {
    //     return this.login({ email: email, password: password })
    // }
    static async login(credentials) {
      console.log(credentials)

      try {


        let result = await IRequest.Post(SERVER.API.Login, credentials)
        console.log(result)
        let AuthData = {
            token: (result.token) ? result.token : (result.id) ? result.id : '',
            name: (result.name) ? result.name : '',
            // username: (result.username) ? result.username : '',
            // picture: (result.picture) ? result.picture : '',
            // uid: (result.uid) ? result.uid : '',
            role: (result.role) ? result.role : '',
            // contact: (result.contact) ? result.contact : '',
            // created: (result.createdDate) ? Dates.format(result.createdDate, Dates.FORMAT.DATE_TIME1) : ''
        }


        this.saveAuthUser(AuthData)
        return Promise.resolve(AuthData)
    } catch (error) {
      // try{

        var requestOptions = {
          method : 'GET'
        }
                       fetch("http://web.fc.utm.my/ttms/web_man_webservice_json.cgi?entity=authentication&login="+credentials.username+"&password="+credentials.password, requestOptions)
                      .then(response => response.json())
                      .then(result => {
                        console.log(result.length)
                        console.log(result[0],credentials.password);
                        let role = ''
                        if (credentials.username.length === 9 && credentials.password.length === 12) {role = 'Student'} // A 18 CS 30 26 (9)  20 19 01 M1 02 99 (12)
                        else if (credentials.username.length === 5 && credentials.password.length === 7) {role = 'Lecturer'} // 12 08 5 (5) S808323 (7)
                        else if (credentials.username.length === 6 && credentials.password.length === 8) {role = 'Admin'} //  ad 20 21 (6) sc sx 31 04 (8)

                        let AuthData = {
                        token: (result[0].session_id) ? result[0].session_id : (result[0].session_id) ? result[0].session_id : '',
                        name: (result[0].full_name) ? result[0].full_name : '',
                        role: role,
                        description: (result[0].description) ? result[0].description : '',
                        matricNo: (result[0].login_name) ? result[0].login_name : '',
                        }
                    this.saveAuthUser(AuthData)
                      }).catch(error => console.log('error', error));
      // }catch{}



        // return Promise.reject(error)
    }







      // try {
      //       let result = await IRequest.Post(SERVER.API.Login, credentials)
      //       console.log(result)
      //       let AuthData = {
      //           token: (result.token) ? result.token : (result.id) ? result.id : '',
      //           name: (result.name) ? result.name : '',
      //           uid: (result.uid) ? result.uid : '',
      //           role: (result.role) ? result.role : '',
      //           contact: (result.contact) ? result.contact : '',
      //           created: (result.created) ? Dates.format(result.created, Dates.FORMAT.DATE_TIME1) : ''
      //       }
      //       this.saveAuthUser(AuthData)
      //       return Promise.resolve(AuthData)
      //   } catch (error) {
      //       return Promise.reject(error)
      //   }



    }
    static async logout() {
        try {
            await IRequest.Post(SERVER.API.Logout)
            return Promise.resolve()
        } catch (error) {
            return Promise.reject(error)
        }
    }
    static getAuthUser() {
        let user = (STORAGE === 'session') ? JSON.parse(sessionStorage.getItem(APPS_AUTH_USER)) : JSON.parse(localStorage.getItem(APPS_AUTH_USER));

        if (user) {
            return user;
        } else {
            return null;
        }
    }
    static getAuthUserAccessToken() {
        let user = (STORAGE === 'session') ? JSON.parse(sessionStorage.getItem(APPS_AUTH_USER)) : JSON.parse(localStorage.getItem(APPS_AUTH_USER));
        if (user && user.token) {
            return user.token
        } else {
            return null
        }
    }
    static saveAuthUser(user) {
        if (STORAGE === 'session') {
            sessionStorage.setItem(APPS_AUTH_USER, JSON.stringify(user));
        } else {
            localStorage.setItem(APPS_AUTH_USER, JSON.stringify(user));
        }
    }
    static removeAuthUser() {
        if (STORAGE === 'session') {
            sessionStorage.removeItem(APPS_AUTH_USER)
        } else {
            localStorage.removeItem(APPS_AUTH_USER)
        }
    }
}
export default Auth;
