import home from './modul/home';
import  modul  from './modul/contact';
import { routes,render } from './lib';
import block from './modul/block';
const app =document.querySelector("#app");
routes.on("/", ()=>render(home,app));
routes.on("/ho",()=>render(modul,app));
routes.resolve();