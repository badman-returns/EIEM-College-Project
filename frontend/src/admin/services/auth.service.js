import { BaseService } from "../../services/base.service";

export class AdminAuthenticationService {
    
     isLoggedIn = false;

    constructor(){
        const token = sessionStorage.getItem('token');
        if(token){
            this.isLoggedIn = true;
            const user = sessionStorage.getItem('user');
        }
    }

    login(userName,password){
        let baseService = new BaseService();
        return baseService.getClientForLogin(userName, password).get(`/admin/authentication`).then(response => {
            const token = response.headers['authorization'];
            sessionStorage.setItem('token', token);
            if (token){
                sessionStorage.setItem('user', JSON.stringify(response.data));
                this.isLoggedIn = true;
            }
            return response.data;
        })
    }

    logout(){
        return new Promise((resolve, reject) => {
            try{
                sessionStorage.clear();
                this.isLoggedIn = false;
                resolve(null);
            }
            catch(error){
                console.log(error);
                reject(error);
            }
        })
    }
}