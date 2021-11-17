import { useReducer, useState } from 'react';

import classes from './EditDisplay.module.css';


const EditDisplay = (props) => {

    const [addressVisible, addressVisibleChange] = useState(false);

    const initialState = {
        ...props.user
    }

    function reducer(state, action) {
        if (action.type === 'name') {
            const updatedData = { ...state };
            updatedData.name = action.item;
            return updatedData;
        }
        if (action.type === 'email') {
            const updatedData = { ...state };
            updatedData.email = action.item;
            return updatedData;
        }
        if (action.type === 'phone') {
            const updatedData = { ...state };
            updatedData.phone = action.item;
            return updatedData;
        }
        if (action.type === 'company') {
            const updatedData = { ...state };
            updatedData.company.name = action.item;
            return updatedData;
        }
        if (action.type === 'city') {
            const updatedData = { ...state };
            updatedData.address.city = action.item;
            return updatedData;
        }
        if (action.type === 'street') {
            const updatedData = { ...state };
            updatedData.address.street = action.item;
            return updatedData;
        }
        if (action.type === 'zipcode') {
            const updatedData = { ...state };
            updatedData.address.zipcode = action.item;
            return updatedData;
        }

        return initialState;

    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function uponMakingChanges(changed, event) {
        dispatch({
            type: changed,
            item: event.target.value
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        props.submit(state);
    }

    function discardChangesHandler(bool, event) {
        event.preventDefault();
        props.submit(state, bool);
    }

    function clickOnAddressHandler() {
        const bool = addressVisible;
        addressVisibleChange(!bool);
    }

    return (
        <div className={classes.edit_container}>
            <div className={classes.modal}>
                <br />
                <form className={classes.form} onSubmit={submitHandler}>
                    <h5>Name:</h5>
                    <input type="text" defaultValue={state.name} onChange={uponMakingChanges.bind(this, "name")} />
                    <h5>Email:</h5>
                    <input type="text" defaultValue={state.email} onChange={uponMakingChanges.bind(this, "email")} />
                    <h5>Phone:</h5>
                    <input type="text" defaultValue={state.phone} onChange={uponMakingChanges.bind(this, "phone")} />
                    <h5>Company:</h5>
                    <input type="text" defaultValue={state.company.name} onChange={uponMakingChanges.bind(this, "company")} />
                    <h5 className={classes.title} onClick={clickOnAddressHandler}>Address {addressVisible ? '🔼' : '🔽'}</h5>
                    {addressVisible && <div>
                        <h5>City:</h5>
                        <input type="text" defaultValue={state.address.city} onChange={uponMakingChanges.bind(this, "city")} />
                        <h5>Street:</h5>
                        <input type="text" defaultValue={state.address.street} onChange={uponMakingChanges.bind(this, "street")} />
                        <h5>ZipCode:</h5>
                        <input type="text" defaultValue={state.address.zipcode} onChange={uponMakingChanges.bind(this, "zipcode")} />
                    </div>}
                    <p className={classes.submit}><button type="submit" >Edit Changes</button></p>
                    <p className={classes.submit}><button onClick={discardChangesHandler.bind(this, true)} className={classes.discard}>Discard Changes</button></p>
                </form>
            </div>
        </div>
    )
}

export default EditDisplay;