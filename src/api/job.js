import fetch from '../common/js/fetch.js';


let jobServer = process.env.JOB_URL;

/***********************登陆注册************************/
export const signInAPI= data=>{return fetch(jobServer+'/api/login/in', data, 'POST')}; //登录
export const personSignUpAPI= data=>{return fetch(jobServer+'/api/login/register/person', data, 'POST')}; //true 已被使用
export const companySignUpAPI= data=>{return fetch(jobServer+'/api/login/register/company', data, 'POST')}; //true 已被使用
export const signOutAPI= data=>{return fetch(jobServer+'/api/login/out', data, 'POST')}; //注销
export const getCodeAPI= data=>{return fetch(jobServer+'/api/login/code/send', data, 'POST')}; //获取验证码
export const checkEmailAPI= data=>{return fetch(jobServer+'/api/login/isExist', data, 'POST')}; //true 已被使用
export const checkCodeAPI= data=>{return fetch(jobServer+'/api/login/code/check/', data, 'POST')}; //true 已被使用
/*************************用户相关******************************/

export const userPageFindAPI= data=>{return fetch(jobServer+'/api/user/pageFind', data, 'POST',"")}; //true 用户分页查询
export const deleteUserAPI= data=>{return fetch(jobServer+'/api/user', data, 'DELETE',"")}; //true 删除用户
/***********************下拉列表************************/
export const dropListOneGetApi= data=>{return fetch(jobServer+'/api/drop/one', data, 'GET',"")}; //获取下拉列表


/*******************************************************/
export const getCompanyKanBanOne = data=>{return fetch(jobServer+'/api/companyKanBan/one', data, 'GET')};
export const addOrEditCompanyKanBan = data=>{return fetch(jobServer+'/api/companyKanBan/', data, 'POST')};
/*******************************************************/
