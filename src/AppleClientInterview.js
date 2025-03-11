import React, { useState, useReducer, useContext } from "react";

//import "./Messages.css";

const MessagesContext = React.createContext({});

const messageReducers = {
//   "send-message": (state, message) =>  ({
//     ...state, // Create a new copy of the state
//     messages: [...state.messages, message] // Append the new message correctly
//   }),

  "send-message": (state, message) =>  {
    return{
        ...state, // Create a new copy of the state
        messages: [...state.messages, message] // Append the new message correctly
    }
  },
  "delete-message": (state, index) => {
    // TODO: How do we delete a message from the state?
    const copyState = {
        ...state,
        messages:state.messages.filter((item,i)=>i!==index)
    }
    return copyState;
  },
};


const messageReducer = (state, { name, payload }) => ({
  ...messageReducers[name](state, payload),
});


const MessageListItem = ({ message, index }) => {

    const {deleteMessage} = useContext(MessagesContext)
  // TODO: Make the delete button functional
  return (
    <li className="messages_list_item">
      {message}
      <button onClick={()=>deleteMessage(index)} type="button" className="button">delete</button>
    </li>
  );
};

const MessageList = ({ messages }) => (
  <ul className="messages__list">
    {
      // TODO: Use MessageListItem to get messages to show up here
      // console.log(messages)
      messages.map((item, index)=>(
       <MessageListItem message={item} index={index}/>
      ))

    }
  </ul>
);


const MessageSender = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([])

  const { sendMessage } = useContext(MessagesContext);

  //console.log(useContext(MessagesContext), "MessagesContext")

  const handleMessageChange = (event) => setMessage(event.target.value);

  // TODO: How do we make the form functional so that it adds a new message to the list and clears the input?

  const handleSendMessage = (e) => {
    e.preventDefault()
    //setData([...data, message])
    //setMessage([...data, message])
    // dispatch({
    //   type: "send-message",
    //   payload: data
    // })

    sendMessage(message);
    setMessage('')
  }

  //console.log(data, "data")

  return (

    <form className="messages__sender" onSubmit={handleSendMessage}>
      <input
        type="text"
        placeholder="Enter a message..."
        value={message}
        onChange={handleMessageChange}
      />
      <button type="sumbit" className="button button--primary">
        Send
      </button>
    </form>
  );
};

const AppleClientInterview = () => {
  const [state, dispatch] = useReducer(messageReducer, { messages: [] });

  return (
    <MessagesContext.Provider
      value={{
        sendMessage: (message) =>
          dispatch({ name: "send-message", payload: message }),
        deleteMessage: (index) =>
          dispatch({ name: "delete-message", payload: index }),
      }}
    >
      <div className="messages">
        <h1>Dummy Chat</h1>
        <MessageSender />
        <MessageList messages={state.messages} />
      </div>
    </MessagesContext.Provider>
  );
};

export default AppleClientInterview