import { useState, useCallback, useEffect } from "react";

import ContactsContainer from "./ContactsContainer/ContactsContainer";

import deleteUserFromArray from "./NonReactJSFunctions/deleteUserFromArray";

import EditDisplay from "./EditDisplay/EditDisplay";

import AddContact from "./AddContact/AddContact";


function App() {

  const [data, setData] = useState([]);

  const [showEditDisplay, setEditDisplay] = useState(false);

  const [dataToEdit, setDataToEdit] = useState({});

  const [expandDetailsID, setexpandDetailsID] = useState(-1);

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


  // Delte Data function
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


  const onClickOnUserHandler = (id) => {
    if (expandDetailsID === id) {
      setexpandDetailsID(-1);
      return;
    }
    setexpandDetailsID(id);
  }

  return (
    <>
      {showEditDisplay && <EditDisplay user={dataToEdit} submit={submitHandler} />}
      <ContactsContainer data={data} onDelete={deleteUserHandler} onEdit={onClickEditHandler} onExpand={onClickOnUserHandler} expandFor={expandDetailsID} />
      <AddContact />
    </>
  );
}

export default App;