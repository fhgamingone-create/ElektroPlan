const STORAGE_KEY="elektroplan_at_v1";
function defaultData(){return{project:{name:"",customer:"",location:"",country:"Österreich"},rooms:["Wohnzimmer"],doses:[]};}
function loadData(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||defaultData();}catch{return defaultData();}}
function storeData(data){localStorage.setItem(STORAGE_KEY,JSON.stringify(data));}
