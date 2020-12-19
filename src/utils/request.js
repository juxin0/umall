import axios from "axios"
import qs from "qs"
import { errorAlert } from "./alert"
import Vue from "vue"

//开发环境中使用 localhost:8080
let baseUrl = "/api"
Vue.prototype.$imgPre = "http://localhost:3000"

//生产环境 打包 
// let baseUrl = ""
// Vue.prototype.$imgPre=""


//响应拦截
axios.interceptors.response.use(res => {
    console.log("本次请求的地址是：" + res.config.url)
    console.log(res);
    //失败了，统一弹失败的弹框
    if (res.data.code !== 200) {
        errorAlert(res.data.msg)
    }
    return res;
})

//菜单添加
export const reqMenuAdd = (form) => {
    return axios({
        url: baseUrl + "/api/menuadd",
        method: "post",
        data: qs.stringify(form)
    })
}
//菜单详情 一条
export const reqMenuDetail = (id) => {
    return axios({
        url: baseUrl + "/api/menuinfo",
        method: "get",
        params: {
            id: id
        }
    })
}
//菜单更新
export const reqMenuUpdate = (form) => {
    return axios({
        url: baseUrl + "/api/menuedit",
        method: "post",
        data: qs.stringify(form)
    })
}
//菜单删除
export const reqMenuDel = (id) => {
    return axios({
        url: baseUrl + "/api/menudelete",
        method: "post",
        data: qs.stringify({
            id: id
        })
    })
}
//菜单列表
export const reqMenuList = () => {
    return axios({
        url: baseUrl + "/api/menulist",
        method: "get",
        params: {
            istree: true
        }
    })
}

//角色的添加
export const reqRoleAdd = (form) => {
    return axios({
        url: baseUrl + "/api/roleadd",
        method: "post",
        data: qs.stringify(form)
    })
}

//菜单列表
export const reqRoleList = () => {
    return axios({
        url: baseUrl + "/api/rolelist",
        method: "get"
    })
}

//角色的详情 1条
export const reqRoleDetail = (id) => {
    return axios({
        url: baseUrl + "/api/roleinfo",
        method: "get",
        params: {
            id: id
        }
    })
}
//角色的修改
export const reqRoleUpdate = (form) => {
    return axios({
        url: baseUrl + "/api/roleedit",
        method: "post",
        data: qs.stringify(form)
    })
}

//角色的删除
export const reqRoleDel = (id) => {
    return axios({
        url: baseUrl + "/api/roledelete",
        method: "post",
        data: qs.stringify({
            id: id
        })
    })
}

//管理员添加
export const reqManageAdd = (form) => {
    return axios({
        url: baseUrl + "/api/useradd",
        method: "post",
        data: qs.stringify(form)
    })
}

//管理员列表 params={page:1,size:10}
export const reqManageList = (params) => {
    return axios({
        url: baseUrl + "/api/userlist",
        method: "get",
        params: params
    })
}

//管理员详情 1条
export const reqManageDetail = (uid) => {
    return axios({
        url: baseUrl + "/api/userinfo",
        method: "get",
        params: {
            uid: uid
        }
    })
}

//管理员修改
export const reqManageUpdate = (form) => {
    return axios({
        url: baseUrl + "/api/useredit",
        method: "post",
        data: qs.stringify(form)
    })
}

//管理员删除
export const reqManageDel = (uid) => {
    return axios({
        url: baseUrl + "/api/userdelete",
        method: "post",
        data: qs.stringify({
            uid: uid
        })
    })
}

//管理员总数
export const reqManageCount = () => {
    return axios({
        url: baseUrl + "/api/usercount",
        method: "get",
    })
}

//分类添加
export const reqCateAdd = (data) => {
    return axios({
        url: baseUrl + "/api/cateadd",
        method: "post",
        data: data
    })
}

//分类list
export const reqCateList = () => {
    return axios({
        url: "/api" + "/api/catelist",
        method: "get",
        params: {
            istree: true
        }
    })
}

//分类删除
export const reqCateDel = (id) => {
    return axios({
        url: "/api" + "/api/catedelete",
        method: "post",
        data: qs.stringify({
            id: id
        })
    })
}

//分类详情
export const reqCateDetail=(id)=>{
    return axios({
        url:baseUrl+"/api/cateinfo",
        method:"get",
        params:{
            id:id
        }
    })
}

//分类修改
export const reqCateUpdate = (data) => {
    return axios({
        url: baseUrl + "/api/cateedit",
        method: "post",
        data: data
    })
}

//规格----------------------------------------------------
//规格添加
export const reqSpecAdd = (form) => {
    return axios({
        url: baseUrl + "/api/specsadd",
        method: "post",
        data: qs.stringify(form)
    })
}

//规格列表 params={page:1,size:10}
export const reqSpecList = (params) => {
    return axios({
        url: baseUrl + "/api/specslist",
        method: "get",
        params: params
    })
}

//规格详情 1条
export const reqSpecDetail = (uid) => {
    return axios({
        url: baseUrl + "/api/specsinfo",
        method: "get",
        params: {
            id: uid
        }
    })
}

//规格修改
export const reqSpecUpdate = (form) => {
    return axios({
        url: baseUrl + "/api/specsedit",
        method: "post",
        data: qs.stringify(form)
    })
}

//规格删除
export const reqSpecDel = (uid) => {
    return axios({
        url: baseUrl + "/api/specsdelete",
        method: "post",
        data: qs.stringify({
            id: uid
        })
    })
}

//规格总数
export const reqSpecCount = () => {
    return axios({
        url: baseUrl + "/api/specscount",
        method: "get",
    })
}

