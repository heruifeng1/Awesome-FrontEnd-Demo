export function createElement(type:string,props?:any,...children:any) {
    return {
        type,
        props:{
            ...props,
            children:children.map(child=> typeof child === "object"
            ? child : createTextElement(child)),

        }
    }
}
const Didact = {
    createElement,
}
export function createTextElement(text:string){
    return {
        type:"Text_ELEMENT",
        props:{
            nodeValue:text,
            children: []
        }
    }
}
