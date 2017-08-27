import React from 'react';
import './styles.css';

export default () => {
    return (
        <footer className="mdl-mega-footer">
            <div className="mdl-mega-footer--middle-section">
                <div className="mdl-mega-footer--drop-down-section">
                    <h1 className="mdl-mega-footer--heading">Features</h1>
                    <ul className="mdl-mega-footer--link-list">
                        <li><a href="/about">About</a></li>
                        <li><a href="/terms">Terms</a></li>
                        <li><a href="/partners">Partners</a></li>
                        <li><a href="/updates">Updates</a></li>
                    </ul>
                </div>
                <div className="mdl-mega-footer--drop-down-section">
                    <h1 className="mdl-mega-footer--heading">FAQ</h1>
                    <ul className="mdl-mega-footer--link-list">
                        <li><a href="/questions">Questions</a></li>
                        <li><a href="/answers">Answers</a></li>
                        <li><a href="/contact">Contact us</a></li>
                    </ul>
                </div>
            </div>
            <div className="mdl-mega-footer--bottom-section">
                <div className="mdl-logo">
                    {new Date().getFullYear() + ' \u2014 Spendlist'}
                </div>
            </div>
        </footer>
    )
}
