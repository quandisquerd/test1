function unstate (check){
    let state = check;
    function getState (){
        return state;
    }
    function setState (newstate){
        return state = newstate;
    }
    return [getState,setState];
}
const  [count , setcount]= unstate(10);

console.log ("count cu" , count());
setcount(30);
console.log ("count moi" , count());