import axios from "axios";
import RequestObject from "./requestModel";

const SERVER_IP = "http://localhost:5000";


export const sendRequest = async (type, info) => {
    const requestObject = new RequestObject(type, info)
    console.log(`SENDING GET REQUEST TO PORT 5000, PARAMS: ${requestObject.toString()}`);
    axios.get(SERVER_IP, requestObject)
    .then(res => {
        console.log(`REQUEST SENT, RESPONSE:\n\t${res}`);
    })
    .catch(err => {
        console.log("ERROR SENDING REQUEST:\n\t");
        console.log(err.message)
    });
}