import classes from './ContactsRowAllDetails.module.css';
import { createRef, useEffect } from 'react';

const ContactsRowAllDetails = (props) => {

    const myRef = createRef();

    // The below function is required so that when we click on any user, the row shifts to the top of the view.

    useEffect(() => {
        const delay = setTimeout(() => {
            myRef.current.previousSibling.scrollIntoView({ behavior: "smooth" });
        }, 500)
        return delay;
    }, [myRef]);

    return (
        <div ref={myRef} className={classes.table_container}>
            <table className={classes.table}>
                <tbody>
                    <tr className={classes.heading}>
                        <td colSpan={2}>
                            Basic Details
                        </td>
                    </tr>
                    <tr>
                        <td>Username:</td>
                        <td>{props.data.username}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{props.data.email}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{props.data.phone}</td>
                    </tr>
                    <tr>
                        <td>Website:</td>
                        <td>{props.data.website}</td>
                    </tr>
                    <tr className={classes.heading}>
                        <td colSpan={2}>
                            Address
                        </td>
                    </tr>
                    <tr>
                        <td>Suite:</td>
                        <td>{props.data.address.suite}</td>
                    </tr>
                    <tr>
                        <td>Street:</td>
                        <td>{props.data.address.street}</td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>{props.data.address.city}</td>
                    </tr>
                    <tr>
                        <td>ZipCode:</td>
                        <td>{props.data.address.zipcode}</td>
                    </tr>
                    <tr className={classes.heading}>
                        <td colSpan={2}>
                            Company Details
                        </td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{props.data.company.name}</td>
                    </tr>
                    <tr>
                        <td>Catch-Phrase:</td>
                        <td>{props.data.company.catchPhrase}</td>
                    </tr>
                    <tr>
                        <td>BS:</td>
                        <td>{props.data.company.bs}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default ContactsRowAllDetails;