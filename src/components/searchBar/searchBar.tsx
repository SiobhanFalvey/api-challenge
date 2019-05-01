import * as React from "react";
import styles from "./SearchBar/SearchBar.module.scss";

export interface IProps {}

export interface IState {}

class SearchBar extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return <input className={styles.SearchBar} placeholder="search books" />;
  }
}

export default SearchBar;
