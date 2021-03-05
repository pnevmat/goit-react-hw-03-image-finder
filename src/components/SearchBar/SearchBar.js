import React, { Component } from 'react';

import styles from './SearchBar.module.css';

class SearchBar extends Component {
    state = {
        value: '',
    }

    onChange = (e) => {
        this.setState({value: e.target.value});
    };

    render() {
        const {onSubmit} = this.props;
        return (
            <header className={styles.Searchbar}>
                <form 
                    className={styles.SearchForm}
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit(this.state.value);
                        e.target.elements.query.value = '';
                    }}
                >
                    <button type="submit" className={styles.SearchForm_button}>
                        <span className={styles.SearchForm_button_label}>Search</span>
                    </button>
    
                    <input
                        className={styles.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="query"
                        onChange={e => {this.onChange(e)}}
                    />
                </form>
            </header>
        );
    };
};

export default SearchBar;