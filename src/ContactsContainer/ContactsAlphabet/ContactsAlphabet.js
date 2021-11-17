import classes from './ContactsAlphabet.module.css';

const ContactsAlphabet = (props) => {

    return (
        <div className={classes.common}>
            {props.initials}
        </div>
    )
}

export default ContactsAlphabet;