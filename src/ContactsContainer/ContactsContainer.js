import ContactsRow from "./ContactsRow/ContactsRow";
import classes from "./ContactsContainer.module.css";

// This component displays all the contacts

const ContactsContainer = (props) => {

    //The below variable-cum-function is required to obtain each contact row through the ContactsRow component 

    const obtainEachRow = props.data.map((eachContact, index) => {
        const i = props.data.findIndex(x => x.name.charAt(0) === eachContact.name.charAt(0));
        return (
            <ContactsRow key={eachContact.id} data={eachContact} start={i === index} onDelete={props.onDelete} onEdit={props.onEdit} onExpand={props.onExpand} expandFor={props.expandFor} />
        );
    })



    return (
        <div className={classes.container}>
            {obtainEachRow}
        </div>
    )
}

export default ContactsContainer;