import React, { Component } from 'react';
class Footer extends Component {
    state = {}
    render() {
        return (
            <footer className="footer text-center bg-dark text-white">
                <div className="container p-5">
                    <p>Created by: Luis Alves</p>
                    <p>Contact information: <a href="mailto:5.fashion@gmail.com">
                        5.fashion@gmail.com</a>.</p>
                </div>
            </footer >
        )
    }
}

export default Footer;