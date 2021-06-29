
export interface Store{
 screen:any;
 show:any;
 updatedShop:any;
}

export const store:Store={
    screen:localStorage.getItem('screen'),
    show:'',
    updatedShop:[{sname:"demo",location:"demo",offer:"demo",owner:"demo",products:["demo"],category:"demo"}]
}