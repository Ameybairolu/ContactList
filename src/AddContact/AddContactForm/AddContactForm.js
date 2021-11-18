import { useReducer, useState, useRef } from 'react';

import classes from './AddContactForm.module.css';

const initialState = {
    address: {
        city: null,
        geo: {
            lat: "40.783386",
            lng: "-74.04485",

        },
        street: "Longview Avenue",
        suite: "Suite 879",
        zipcode: "10004",
    },
    company: {
        bs: "synergize scalable supply-chains",
        catchPhrase: "Proactive didactic contingency",
        name: "Sounds of Soul Records & Tapes",
    },
    email: "MildredLGarcia@dayrep.com",
    id: null,
    name: null,
    phone: "718-569-8769",
    username: "Frethe",
    website: "quiiri.com"
}

const nameReducer = (_, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: !(action.val === null || action.val.length === 0)
        }
    }
    return { value: '', isValid: false };
}

const cityReducer = (_, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val !== null || action.val.length !== 0
        }
    }
    return { value: '', isValid: false };
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
    if (action.type === 'username') {
        const updatedData = { ...state };
        updatedData.username = action.item;
        return updatedData;
    }
    if (action.type === 'web') {
        const updatedData = { ...state };
        updatedData.website = action.item;
        return updatedData;
    }
    if (action.type === 'company') {
        const updatedData = { ...state };
        updatedData.company.name = action.item;
        return updatedData;
    }
    if (action.type === 'bs') {
        const updatedData = { ...state };
        updatedData.company.bs = action.item;
        return updatedData;
    }
    if (action.type === 'catch') {
        const updatedData = { ...state };
        updatedData.company.catchPhrase = action.item;
        return updatedData;
    }
    if (action.type === 'city') {
        const updatedData = { ...state };
        updatedData.address.city = action.item;
        return updatedData;
    }
    if (action.type === 'lat') {
        const updatedData = { ...state };
        updatedData.address.geo.lat = action.item;
        return updatedData;
    }
    if (action.type === 'lng') {
        const updatedData = { ...state };
        updatedData.address.geo.lng = action.item;
        return updatedData;
    }
    if (action.type === 'street') {
        const updatedData = { ...state };
        updatedData.address.street = action.item;
        return updatedData;
    }
    if (action.type === 'suite') {
        const updatedData = { ...state };
        updatedData.address.suite = action.item;
        return updatedData;
    }
    if (action.type === 'zipcode') {
        const updatedData = { ...state };
        updatedData.address.zipcode = action.item;
        return updatedData;
    }


    return initialState;

}



const AddContactForm = (props) => {

    const [addressVisible, addressVisibleChange] = useState(false);
    const [companyVisible, companyVisibleChange] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialState);

    const nameInputRef = useRef();
    const cityInputRef = useRef();

    const [nameState, dispatchName] = useReducer(nameReducer, { value: '', isValid: null });

    const [cityState, dispatchCity] = useReducer(cityReducer, { value: '', isValid: null });


    function uponMakingChanges(changed, event) {
        if (changed === 'name') {
            dispatchName({
                type: 'USER_INPUT', val: event.target.value,
            });
        }

        if (changed === 'city') {
            dispatchCity({
                type: 'USER_INPUT', val: event.target.city,
            });
        }

        dispatch({
            type: changed,
            item: event.target.value
        });
    }

    function submitHandler(event) {
        event.preventDefault();

        if (nameState.isValid && cityState.isValid) {
            props.onCancelForm();
            props.submit(state);
        } else if (!nameState.isValid) {
            nameInputRef.current.focus();
        } else {
            addressVisibleChange(true);
            setTimeout(() => {
                cityInputRef.current.focus();
            }, 1000);
        }

    }

    function clickOnAddressHandler() {
        const bool = addressVisible;
        addressVisibleChange(!bool);
    }

    function clickOnCompanyHandler() {
        const bool = companyVisible;
        companyVisibleChange(!bool);
    }

    return (
        <div className={classes.edit_container}>
            <div className={classes.modal}>
                <br />
                <form className={classes.form} onSubmit={submitHandler}>
                    <h5>Name:</h5>
                    <input ref={nameInputRef} type="text" placeholder="Your Name" defaultValue={state.name} onChange={uponMakingChanges.bind(this, "name")} />
                    <h5>Username:</h5>
                    <input type="text" placeholder="Select Username" defaultValue={state.username} onChange={uponMakingChanges.bind(this, "username")} />
                    <h5>Email:</h5>
                    <input type="text" placeholder="Email" defaultValue={state.email} onChange={uponMakingChanges.bind(this, "email")} />
                    <h5>Website:</h5>
                    <input type="text" placeholder="Website" defaultValue={state.website} onChange={uponMakingChanges.bind(this, "web")} />
                    <h5>Phone:</h5>
                    <input type="text" placeholder="Enter Phone Number" defaultValue={state.phone} onChange={uponMakingChanges.bind(this, "phone")} />
                    <h5 className={classes.title} onClick={clickOnAddressHandler}>Address {addressVisible ? '🔼' : '🔽'}</h5>
                    {addressVisible && <div>
                        <h5>Suite:</h5>
                        <input type="text" placeholder="Enter Suite" defaultValue={state.address.suite} onChange={uponMakingChanges.bind(this, "suite")} />
                        <h5>Street:</h5>
                        <input type="text" placeholder="Enter Street" defaultValue={state.address.street} onChange={uponMakingChanges.bind(this, "street")} />
                        <h5>City:</h5>
                        <input ref={cityInputRef} type="text" placeholder="Enter City" defaultValue={state.address.city} onChange={uponMakingChanges.bind(this, "city")} required />
                        <h5>ZipCode:</h5>
                        <input type="text" placeholder="Enter ZipCode" defaultValue={state.address.zipcode} onChange={uponMakingChanges.bind(this, "zipcode")} />
                        <h5>Lat:</h5>
                        <input type="text" placeholder="Enter coordinates" defaultValue={state.address.geo.lat} onChange={uponMakingChanges.bind(this, "lat")} />
                        <h5>Long:</h5>
                        <input type="text" placeholder="Enter coordinates" defaultValue={state.address.geo.lng} onChange={uponMakingChanges.bind(this, "lng")} />
                    </div>}

                    <h5 className={classes.title} onClick={clickOnCompanyHandler}>Company {companyVisible ? '🔼' : '🔽'}</h5>
                    {companyVisible && <div>
                        <h5>Name:</h5>
                        <input type="text" placeholder="Enter company name" defaultValue={state.company.name} onChange={uponMakingChanges.bind(this, "company")} />
                        <h5>CatchPhrase:</h5>
                        <input type="text" placeholder="Enter CatchPhrase" defaultValue={state.company.catchPhrase} onChange={uponMakingChanges.bind(this, "catch")} />
                        <h5>BS:</h5>
                        <input type="text" placeholder="Enter BS" defaultValue={state.company.bs} onChange={uponMakingChanges.bind(this, "bs")} />
                    </div>}

                    <p className={classes.submit}><button type="submit" >Add Contact</button></p>
                    <p className={classes.submit}><button type="button" onClick={props.onCancelForm} className={classes.discard}>Discard Changes</button></p>
                </form>
            </div>
        </div>
    )
}

export default AddContactForm;