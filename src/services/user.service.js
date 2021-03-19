import axios from "axios";


const baseUrl = "https://jsonplaceholder.typicode.com";

export class UserService{

    static async list(){
        let response = await axios.get(`${baseUrl}/users`);
        let users = response.data;

        for (let user of users) {
            let responseTodo = await axios.get(`${baseUrl}/users/${user.id}/todos`);
            let todos = responseTodo.data;
            user.nbrTasks = todos.length;
        }
        return users;
    }

    static async details(id){
        return await axios.get(`${baseUrl}/users/${id}`);
    }

    static async create(data){
        return await axios.post(`${baseUrl}/users`, data);
    }

    static async update(id, data){
        return await axios.put(`${baseUrl}/users/${id}`, data);
    }

    static async delete(id){
        return await axios.delete(`${baseUrl}/users/${id}`);
    }
}
