import { useState, useCallback, useEffect } from "react";

import ContactsContainer from "./ContactsContainer/ContactsContainer";

import deleteUserFromArray from "./NonReactJSFunctions/deleteUserFromArray";

import EditDisplay from "./EditDisplay/EditDisplay";

import AddContact from "./AddContact/AddContact";


function App() {

  // data is the variable/state where we are storing every contact detail

  const [data, setData] = useState([]);

  // When we click on the edit button on any contact, we need to toggle the showEditDisplay state in order to display the edit window

  const [showEditDisplay, setEditDisplay] = useState(false);

  // The data to be edited is received by dataToEdit state, which is forwarded to the EditDisplay.js component.

  const [dataToEdit, setDataToEdit] = useState({});

  // When we click on any contact row, the details for that is displayed right below the row. expandDetailsID is a state that stores the ID of the row clicked, to achieve the above objective.
  // NOTE: Go to line 130

  const [expandDetailsID, setexpandDetailsID] = useState(-1);

  // NOTE: To get data from the API

  const fetchContactDataFromAPI = useCallback(
    async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const result = await response.json();
        result.sort((a, b) => a.name < b.name ? -1 : 1);
        setData(result);
      } catch (e) {
        console.log(e);
      }
    }, []
  );

  useEffect(() => {
    fetchContactDataFromAPI()
  }, [fetchContactDataFromAPI]);


  // NOTE: To delete a row
  async function deleteUserHandler(id, e) {
    try {
      if (e) {
        e.stopPropagation();
      }
      const selectedData = data.filter(eachUser => eachUser.id === id);

      if (!window.confirm(`Are you sure you want to delete ${selectedData[0].name}'s details?`)) {
        return;
      }

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const updatedData = deleteUserFromArray(id, data);
      setData(updatedData);
      console.log(updatedData);

    } catch (e) {
      console.log(e);
    }
  };

  // NOTE: when we click on the edit button, we need to displau the edit window. The below function is for that

  const onClickEditHandler = (id, e) => {
    if (e) {
      e.stopPropagation();
    }
    const currState = showEditDisplay;
    setEditDisplay(!currState);

    if (currState) {
      return;
    }

    const selectedData = data.filter(eachUser => eachUser.id === id);
    setDataToEdit(selectedData[0]);
  }

  // When user edits some data, the below function is called 

  const submitHandler = (state, bool = false) => {

    if (bool || !window.confirm(`Are you sure you want to apply changes?`)) {
      onClickEditHandler();
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${state.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...state
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json()).then(result => {
        onClickEditHandler();
        let index = data.findIndex(eachUser => eachUser.id === result.id);
        let updatedData = [...data];
        updatedData[index] = result;

        updatedData.sort((a, b) => a.name < b.name ? -1 : 1);

        setData(updatedData);
      });
  }

  // NOTE: The below function loads extra detail for the target contact

  const onClickOnUserHandler = (id) => {
    if (expandDetailsID === id) {
      setexpandDetailsID(-1);
      return;
    }
    setexpandDetailsID(id);
  }

  // NOTE: When the user adds a new contact, the below function is called

  const submitAddUserHandler = (state) => {

    if (!window.confirm(`Are you sure you want to add '${state.name}' to the list?`)) {
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        ...state
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(result => {
        let maxID = data.reduce((max, obj) => (max.id > obj.id) ? max : obj);

        result.id = maxID.id + 1;

        let updatedData = [...data];
        updatedData.push(result);

        updatedData.sort((a, b) => a.name < b.name ? -1 : 1);

        setData(updatedData);
      });
  }

  return (
    <>
      {showEditDisplay && <EditDisplay user={dataToEdit} submit={submitHandler} />}
      <ContactsContainer data={data} onDelete={deleteUserHandler} onEdit={onClickEditHandler} onExpand={onClickOnUserHandler} expandFor={expandDetailsID} />
      <AddContact submit={submitAddUserHandler} />
    </>
  );
}

export default App;