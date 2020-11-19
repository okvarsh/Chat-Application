export const initialState ={
    user:null,
    uid:null,
    togglerState:1,
    photoURL:""
}
//at start user is null
export const actionTypes ={
    SET_USER:"SET_USER",
    SET_SESSION:"SET_SESSION",
    SET_TOGGLER:"SET_TOGGLER"
}
//pushing user into data layer

const reducer = (state, action) => {
    console.log(action);
    //listener for action dispatched
    switch(action.type){
        case actionTypes.SET_USER:
          //  console.log(action);
            return {
                ...state,
                user:action.user
            };
        case actionTypes.SET_SESSION:
            localStorage.setItem('uid',action.uid);
            localStorage.setItem('displayName',action.displayName);
            localStorage.setItem('photoURL',action.photoURL);
            console.log('session added to storage');
           return {
               ...state,
               uid:action.uid,
               displayName:action.displayName,
               photoURL:action.photoURL
           };
           case actionTypes.SET_TOGGLER:
               return {
                   ...state,
                   togglerState:action.togglerState
               }

        default:
            return state;
    }
    
};

export default reducer;