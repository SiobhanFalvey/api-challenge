import * as React from "react";
import styles from "./books.module.scss";
import { IBooks } from "../../assests/bookData";

export interface IProps {
  books: IBooks;
}

export interface IState {}

class Books extends React.Component<IProps, IState> {
  public render() {
    return (
      <React.Fragment>
        <div className={styles.bookContainer}>
          <h4> {this.props.books.title}</h4>
          <div className={styles.bookContent}>
            <article className={styles.description}>
              {this.props.books.description}
            </article>
            <article className={styles.author}>
              {this.props.books.author}
            </article>
            <article className={styles.publication}>
              {this.props.books.pubDate}
            </article>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Books;
