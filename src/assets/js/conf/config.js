let prodUrl = "http://vueshop.glbuys.com";
let devUrl = "http://vueshop.glbuys.com";
let baseUrl= process.env.NODE_ENV==="development"?prodUrl:devUrl;
export default {
    baseUrl,
    path:"/",
    tokenL:"1ec949a15fb709370f"
};