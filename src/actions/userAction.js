export function change_name(name){
    return {
        type : "change_name",
        payload:name,
    }
}
export function change_age(age){
    return {
        type : "change_age",
        payload:age,
    }
}

export function get_data(data=[]){
        return {
            type : "get_data",
            payload:data,
        }
}