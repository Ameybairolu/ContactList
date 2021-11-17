import classes from './AddContact.module.css';
import AddContactForm from './AddContactForm/AddContactForm'
import { useState } from 'react';

const AddContact = () => {

    const [addFormVisible, setFormVisible] = useState(true);

    return (
        <>
            <div className={classes.contact_button}>
                <p> <button>Add Contact ➕</button></p>
            </div>
            {addFormVisible && <AddContactForm />}
        </>
    );
}


export default AddContact;