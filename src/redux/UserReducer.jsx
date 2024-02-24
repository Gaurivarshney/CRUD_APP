import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const UserSlice = createSlice({
    name:"users",
    initialState:userList,
    reducers:{
        addUsers: (state, action)=>{
            state.push(action.payload)
        },
        updateUser: (state,action)=>{
            const {id,name,email}=action.payload;
            const uu= state.find(user=>user.id==id);    
            if(uu){
                uu.name=name;
                uu.email=email;
            }
        },
        deleteUser: (state,action)=>{
            const {id,email, name}= action.payload;
            const uu=state.find(user=>user.id==id);
            if(uu){
                return state.filter((u=>u.id!==id))
            }
        }
    }
})
export const {addUsers,updateUser, deleteUser} =UserSlice.actions;
export default UserSlice.reducer;
