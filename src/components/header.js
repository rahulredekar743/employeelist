import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router";

class Header extends Component {
    renderLink() {
        if (this.props.authenticated) {
            return [
                <li className={`nav-item`} key={3}>
                    <Link className={`nav-link`}>
                        Dashboard
                    </Link>
                </li>,
                <li className={`nav-item`} key={4}>
                    <Link className={`nav-link`}>
                        Sign Out
                    </Link>
                </li>
            ]
        } else {
            return [
                <li className={`nav-item`} key={1}>
                    <Link to={'/'} className={`navbar-brand`}>
                        Login
                    </Link>
                </li>,
                <li className={`nav-item`} key={2}>
                    <Link className={`nav-link`} to={`/signin`}>
                        Sign In
                    </Link>
                </li>
            ]
        }
    }

    render() {
        return (
            <div>
                <nav className={`navbar navbar-light`}>
                    <ul className={`nav navbar-nav`}>
                        {this.renderLink()}
                    </ul>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);