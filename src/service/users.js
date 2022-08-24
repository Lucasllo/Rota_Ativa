import API from './api';

export default class UsersService{

    getUser(){
        return API.get("/api/users");
    }

}