import React, {Component} from 'react';
import styles from './header.module.css'
class Header extends Component {
    render() {
        return(
            <header>
                <h1 className={styles.heading}>header</h1>
            </header>
        )
    }
}
export default Header;