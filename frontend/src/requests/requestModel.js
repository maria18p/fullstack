export default class RequestObject{
    constructor(type, content){
        this.params = {
            type : type,
            content: content
        };
    }

    toString(){
        return `\nREQUEST OBJECT:\n\t\ttype: ${this.params.type}\n\t\tcontent: ${this.params.content}`
    }
}