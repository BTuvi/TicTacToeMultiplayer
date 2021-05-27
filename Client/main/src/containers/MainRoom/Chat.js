import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useHistory } from "react-router-dom";

import TextContainer from "../../components/TextContainer/TextContainer";
import MessagesContainer from "../../components/Messages/Messages";
import InfoBar from "../../components/InfoBar/InfoBar";
import Input from "../../components/Input/Input";
import Popup from "../../components/Popup";
import Navbar from "../../components/Navbar";

import { v4 as uuidv4 } from "uuid";

import "./Chat.css";

const ENDPOINT = "https://onlinetictactoe.azurewebsites.net:4000/";
const LOCAL_HOST = "http://localhost:4000/"

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room] = useState("main");
  const [privateRoom, setPrivateRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const history = useHistory();

  let test = "";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(LOCAL_HOST ); //Change when is in Azure to ENDPOINT

    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
        history.push("/");
      }
    });
  }, [LOCAL_HOST, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    socket.on("reciveInvite", (room) => {
      setPrivateRoom(room);
      setOpenDialog(true);
    });

    socket.on("goToGameRoom", ({ user, room }) => {
      history.push(`/game?name=${user}&room=${privateRoom}`);
    });


  }, [openDialog, privateRoom]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, name, () => setMessage(""));
    }
  };

  async function setPrivteRoomFunction() {
    let roomId = uuidv4();
    test = roomId;
    return await setPrivateRoom(test);
  }

  const sendInviteGame = (event, selectedUser) => {
    event.preventDefault();

    setPrivteRoomFunction();

    socket.emit(
      "sendInviteGame",
      { name, privateRoom: test, selectedUser },
      (error) => {
        if (error) {
          alert(error);
          window.location.reload(false);
        }
      }
    );
  };

  const handleAccepet = (event) => {
    event.preventDefault();

    socket.emit("accepetInvite", { name, privateRoom }, (error) => {
      console.log("accepet");

      setName(name);
      console.log(name, privateRoom);

      if (error) {
        alert(error);
        window.location.reload(false);
      }
    });
  };

  const handleDecline = (event) => {
    event.preventDefault();
    window.location.reload(false);
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <Navbar name={name} room={room}/>
        <InfoBar room={room} />
        <MessagesContainer messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <Popup
        openDialog={openDialog}
        handleAccepet={handleAccepet}
        handleDecline={handleDecline}
      />
      <TextContainer users={users} sendInviteGame={sendInviteGame} />
    </div>
  );
};

export default Chat;
