export const querySelector = (key:string) =>{
    return <HTMLInputElement | null>document.querySelector(key);
};

export const querySelectorAll = (key:string) =>{
    return <NodeListOf<HTMLInputElement> | null>document.querySelectorAll(key); 
};

