/*
An action is method which returns an object 
usually action is invoked because of an event in a component to which it is connected
action will be always followed execution of all reducers
*/

export const messageAction = ()=>{
   
    let messages = ["Hello World!!!", "Java Message", "React Redux Message","Johny Johny Johny!!",
"Hey Man!!!", "Wierd World!!!","Clear Things!!!!!"];

    return {
        type: "MESSAGE_ACTION",
        data: messages[Math.round(Math.random()*6)]
    }
}