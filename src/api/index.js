import axios from "../utils/http"
import base from "./base"

const api = {
    getLogin(params){
        return axios.post(base.baseUrl + base.login ,params);
    },
    getSelectTbItemAllByPage(params){
        return axios.get(base.egoBaseUrl + base.selectTbItemAllByPage,{
            params:params
        })
    }
}

export default api;