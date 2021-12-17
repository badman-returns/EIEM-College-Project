import axios from "axios";
import { baseAPIURL } from "../configs";

export class BaseService {

     getClientForLogin = (userName, password) => {
        let client = axios.create({
            baseURL: baseAPIURL,
            auth: {
                username: userName,
                password: password,
            },
        });
        let isBackground;
        client.interceptors.request.use((config) => {
            isBackground = config.headers.hasOwnProperty('X-IS-BACKGROUND');
            if (isBackground) {
                delete config.headers['X-IS-BACKGROUND'];
            }
            if (!isBackground) {
                // apply spinner
            }
            return config;
        },
            (error) => {
                if (!isBackground) {
                    // hide spinner
                }
                return Promise.reject(error);
            });
        client.interceptors.response.use((response) => {
            // hide spinner
            return response;
        }, (error => {
            // hide spinner
            return Promise.reject(error.response);
        }));

        return client;
    }

     getUnAuthorizationClient = () => {
        let client = axios.create({
            baseURL: baseAPIURL
        });
        let isBackground;
        client.interceptors.request.use((config) => {
            isBackground = config.headers.hasOwnProperty('X-IS-BACKGROUND');
            if (isBackground) {
                delete config.headers['X-IS-BACKGROUND'];
            }
            if (!isBackground) {
                // apply splinner
                //   this.spinner.show();
            }
            return config;
        },
            (error) => {
                if (!isBackground) {
                    // apply splinner
                    //   this.spinner.hide();
                }
                return Promise.reject(error);
            });
        client.interceptors.response.use((response) => {
            // apply splinner
            //   this.spinner.hide();
            return response;
        }, (error => {
            // apply splinner
            //   this.spinner.hide();
            return Promise.reject(error);
        }));

        return client;
    };

     getAuthorizationClient = () => {
        const sessionToken = sessionStorage.getItem('token');
        let headers;
        headers['Authorization'] = `bearer ${sessionToken}`;

        let client = axios.create({
            baseURL: baseAPIURL,
            headers: headers,
        });
        let isBackground;
        client.interceptors.request.use((config) => {
            isBackground = config.headers.hasOwnProperty('X-IS-BACKGROUND') && config.headers['X-IS-BACKGROUND'];
            if (isBackground) {
                delete config.headers['X-IS-BACKGROUND'];
            }
            if (!isBackground) {
                // apply spinner
                //   this.spinner.show();
            }
            return config;
        },
            (error) => {
                if (!isBackground) {
                    // apply spinner
                    //   this.spinner.hide();
                }
                return Promise.reject(error);
            });
        client.interceptors.response.use((response) => {
            if (!isBackground) {
                // apply spinner
                // this.spinner.hide();
            }
            return response;
        }, (error => {
            if (!isBackground) {
                // apply spinner
                // this.spinner.hide();
            }
            if (error.response.status === 401) {
                // Clear Session and redirect to login page
                sessionStorage.clear();
                //  history.pushState(['admin', 'login'])
                window.location.replace('/admin/login');
            } else if (error.response.status === 400) {

            }
            return Promise.reject(error);
        }));

        return client;
    };
}