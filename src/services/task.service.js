import axios from "axios";


const baseUrl = "https://jsonplaceholder.typicode.com";

export default class TaskService{

    static async list(limit = null){
        let call = await axios.get(`${baseUrl}/todos`);

        let tasks = limit !== null ? call.data.slice(0, limit) : call.data;

        let users = await axios.get(`${baseUrl}/users`);


        for (let task of tasks) {
            for (const user of users.data) {
                if(user.id === task.userId)
                    task.user = user;
            }
        }
        return tasks
    }

    static async create(data){
        return await axios.post(`${baseUrl}/todos`, data);
    }

    static async details(id){
        return await axios.get(`${baseUrl}/todos/${id}`);
    }

    static async update(id, data){
        return await axios.put(`${baseUrl}/todos/${id}`, data);
    }

    static async delete(id){
        return await axios.delete(`${baseUrl}/todos/${id}`);
    }
}

