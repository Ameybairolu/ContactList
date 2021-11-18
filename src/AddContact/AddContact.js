import classes from './AddContact.module.css';
import AddContactForm from './AddContactForm/AddContactForm'
import { useState } from 'react';

const AddContact = props => {

    const [addFormVisible, setFormVisible] = useState(false);

    const showFormToggle = () => {
        const currentlyVisible = addFormVisible;
        setFormVisible(!currentlyVisible);
    }

    return (
        <>
            <div className={classes.contact_button}>
                <p> <button type="button" onClick={showFormToggle}>Add Contact ➕</button></p>
            </div>
            {addFormVisible && <AddContactForm onCancelForm={showFormToggle} submit={props.submit} />}
        </>
    );
}


export default AddContact;