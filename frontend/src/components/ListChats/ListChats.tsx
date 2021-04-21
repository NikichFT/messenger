import React from 'react';
import Chat from '../Chat/Chat';
import './ListChats.scss';

function ListChats() {
  return (
    <section className="list-chats list-chats_opened">
        <div className="title-block">
            <div className="list-chats__title">CHATS</div>
            <div className="list-chats__number">25</div>
        </div>
        <ul className="list-chats__container">
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
        </ul>
        </section>
  );
}

export default ListChats;