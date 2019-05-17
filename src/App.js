import React, { Component } from 'react';
import List from './List';
import {STORE} from './store';
import Messages from './Messages';
import './App.css';

class App extends Component {

  render() {
    const store = STORE;
    console.log('cardIDs', store.lists);
    console.log('allCards', store.allCards);
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => 
            {
              
              return  <List
                        key={list.id}
                        header={list.header}
                        cards={list.cardIds.map(id => store.allCards[id])}
                      />;
            }
          )}
        </div>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </main>
    );
  }
}

export default App;