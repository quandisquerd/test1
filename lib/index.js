import Navigo  from "navigo";

const routes = new Navigo();
const render = (a,b)=>{
    b.innerHTML = a();
};
const useState = () =>{}
 export { routes, render,useState};