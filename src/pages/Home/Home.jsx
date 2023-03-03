import React from 'react'
import { Chat } from '../../components/Chat';
import { Sidebar } from '../../components/Sidebar';
import "../../utils/style.scss";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}
