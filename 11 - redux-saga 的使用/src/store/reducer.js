import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionsTypes'

const defaultState={
    inputValue:'123',
    list:['wade','kobe','lbj']
}
export default (state=defaultState,action)=>{

    if(action.type===CHANGE_INPUT_VALUE) {
        const newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
         return newState
    }

    if(action.type===ADD_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }


    if(action.type===DELETE_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }

    if(action.type===INIT_LIST_ACTION){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list=action.value
        return newState
    }


    return state
}
