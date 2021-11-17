import classes from './ShowContacts.module.css';

const ShowContacts = (props) => {
    return (
        <div className={classes.button} onClick={props.onDisplay}>
            Show Contacts
        </div>
    );
}

export default ShowContacts;