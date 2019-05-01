import * as React from "react";
import Books from "../../components/books/books";
import books from "../../assests/bookData";
import styles from "./bookContainer.module.scss";
import { IBooks } from "../../assests/bookData";

export interface IProps {}

export interface IState {
  filterBooks: IBooks[];
}

class BookContainer extends React.Component<IProps, IState> {
  public state = { filterBooks: books };
  public render() {
    return (
      <section className={styles.books}>
        {this.state.filterBooks.map((books, index) => (
          <Books key={index} books={books} />
        ))}
      </section>
    );
  }
}

export default BookContainer;
