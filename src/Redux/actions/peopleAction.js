import Request from "axios"

function peopleAction(data){

    return {
        type : "PEOPLE_ACTION",
        data : data
    }
}


export const asyncPeople=  ()=>{

    return  async (dispatch)=>{
        try{
            let response = await Request.get("http://ec2-52-14-233-222.us-east-2.compute.amazonaws.com:8090/api/people")
            dispatch(peopleAction(response.data))
        }
        catch{
            dispatch(peopleAction([]))
        }
    }
}

export const addPerson = (person) =>{
    
    return  async (dispatch)=>{
        try{
            await Request.post("http://ec2-52-14-233-222.us-east-2.compute.amazonaws.com:8090/api/people",person)
            alert("Added!!!")
            dispatch(asyncPeople());
        }
        catch{
            dispatch(peopleAction([]))
        }
    }
}
// This is for SAGA FLOW
export const addNewPerson = (person) =>{
    return {
        type: "NEW_PERSON",
        data: person
    }
}