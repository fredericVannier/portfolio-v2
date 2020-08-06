import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Name extends Component {
    render() {
        return (
            <div className="divName">
                <Link to="/">
                <p className="brandName">Frédéric
                    <br />Vannier
                </p>
                </Link>
            </div>
        )
    }
}

export default Name;
