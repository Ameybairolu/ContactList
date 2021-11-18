
import classes from './ContactsRow.module.css';
import ContactsAlphabet from '../ContactsAlphabet/ContactsAlphabet';
import ContactsRowAllDetails from './ContactsRowAllDetails';
import TextLoop from "react-text-loop"; //eslint-disable-line


const ContactsRow = (props) => {
    let ini = props.data.name.split(" ").reduce((prev, curr) => {
        return prev + curr.charAt(0);
    }, "");


    return (
        <>
            {props.start && <ContactsAlphabet initials={props.data.name.charAt(0)} />}
            <div id={`user${props.data.id}`} className={`${classes.common} ${props.expandFor === props.data.id ? classes.selected : ''}`} onClick={props.onExpand.bind(this, props.data.id)}>
                <div className={classes.circle}><span>{ini}</span></div>
                <div className={classes.names}>
                    <h3>{props.data.name}</h3>
                    <TextLoop>
                        <h6>{props.data.email}</h6>
                        <h6>{props.data.username}</h6>
                        <h6>{props.data.phone}</h6>
                        <h6>{props.data.website}</h6>
                    </TextLoop>
                </div>
                <p className={classes.actionspace}><span><i className="fas fa-edit" onClick={props.onEdit.bind(this, props.data.id)}></i></span><span > &nbsp;&nbsp; <i className="fas fa-trash-alt" onClick={props.onDelete.bind(this, props.data.id)}></i></span></p>
            </div>
            {props.expandFor === props.data.id && <ContactsRowAllDetails data={props.data} />}
        </>
    );
};
// onClick={props.onClickEdit.bind(this, props.id)}
// onClick={props.onDeleteUser.bind(this, props.id)}
export default ContactsRow;