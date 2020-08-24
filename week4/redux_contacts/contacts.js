const redux = require("redux");


function addNewContact(contact) {
    return {
        type: "ADD_NEW_CONTACT",
        payload: contact
    }
}

function removeContact(contact) {
    return {
        type: "REMOVE_CONTACT",
        payload: contact
    }
}

const initialState = {
    contactList: [],
    contacts: 
    {
        name: "",
        phone: "",
        email: ""
    }

}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_NEW_CONTACT":
            return {
                ...state,
            
                contacts: action.payload,
                
                contactList: [...state.contactList, action.payload]
            }
        case "REMOVE_CONTACT": {
        const updatedArr = state.contactList.filter(contact => contact !== action.payload) 
        console.log(action.payload)
        console.log(updatedArr)
    
            return {
                ...state,
                contactList: updatedArr
            }
        }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

// ADD CONTACT
store.dispatch(addNewContact({name: "Jim Thorton", phone: "456-234-2303", email: "superjim@gsnail.com"}))
store.dispatch(addNewContact({name: "Emily Bay", phone: "456-434-3822", email: "baybay@gsnail.com"}))
store.dispatch(addNewContact({name: "Jamie Casel", phone: "717-334-2343", email: "jamiec@gsnail.com"}))
store.dispatch(addNewContact({name: "Leah Smith", phone: "234-234-2343", email: "smithyl@gsnail.com"}))

// DELETE CONTACT
store.dispatch(removeContact({name: "Jim Thorton", phone: "456-234-2303", email: "superjim@gsnail.com"}))
store.dispatch(removeContact({name: "Jamie Casel", phone: "717-334-2343", email: "jamiec@gsnail.com"}))