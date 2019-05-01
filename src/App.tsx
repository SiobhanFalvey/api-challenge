import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Books from "./components/books/books";
import books from "./assests/bookData";
import BookContainer from "./containers/books/bookContainer";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App-content">
          <main className="App-main-content">
            <div>
              {books.map((books, index) => (
                <Books key={index} books={books} />
              ))}
            </div>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
