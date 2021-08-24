export const AddTask = (data) =>{
    return{
        type:'ADD_TO_DO',
        payload:data
    }
};

export const UpdateTask = (data) =>{
    return{
        type:'UPDATE_TO_DO',
        payload:data
    }
}