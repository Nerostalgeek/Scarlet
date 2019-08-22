import axios from "axios";
const config = require('../config.default');


const headers = {
    "Content-Type":"application/json"
}

export default {
    login: function(email, password) {
        return axios.post(
            `${config.apiUrl}/login`,
            {
                email, password
            },
            {
                headers
            }
        )
    }
};