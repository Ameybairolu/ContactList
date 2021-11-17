import ContactsRow from "./ContactsRow/ContactsRow";
import classes from "./ContactsContainer.module.css";
// import ContactsAlphabet from "./ContactsAlphabet/ContactsAlphabet";
const ContactsContainer = (props) => {
    const obtainEachRow = props.data.map((eachContact, index) => {
        const i = props.data.findIndex(x => x.name.charAt(0) === eachContact.name.charAt(0));
        // if (i === index) {
        //     console.log(true, eachContact.name);
        // }
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