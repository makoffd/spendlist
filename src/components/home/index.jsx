import React from 'react';

import Section from '../section';

import './styles.css';

export default (props) => (
    <div className="mdl-layout__tab-panel" id="overview">
        <Section>
            <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
                <i className="material-icons">play_circle_filled</i>
            </header>
            <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                <div className="mdl-card__supporting-text">
                    <h4>Features</h4>
                    Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse.
                </div>
                <div className="mdl-card__actions">
                    <a href="/" className="mdl-button">Read our features</a>
                </div>
            </div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
                <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlFor="btn1">
                <li className="mdl-menu__item">Lorem</li>
                <li className="mdl-menu__item" disabled>Ipsum</li>
                <li className="mdl-menu__item">Dolor</li>
            </ul>
        </Section>
        <Section>
            <div className="mdl-card mdl-cell mdl-cell--12-col">
                <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                    <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                        <div className="section__circle-container__circle mdl-color--primary"></div>
                    </div>
                    <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                        <h4>Be aware</h4>
                        <h6>Track your expenses and know for what and how much you spend.</h6>
                    </div>
                    <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                        <div className="section__circle-container__circle mdl-color--primary"></div>
                    </div>
                    <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                        <h4>Share</h4>
                        <h6>Add your family members to manage family budget.</h6>
                    </div>
                    <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                        <div className="section__circle-container__circle mdl-color--primary"></div>
                    </div>
                    <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                        <h4>See the big picture</h4>
                        <h6>Get the regular analytics reports.</h6>
                    </div>
                    <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                        <div className="section__circle-container__circle mdl-color--primary"></div>
                    </div>
                    <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                        <h4>Predict</h4>
                        <h6>Make plans considering your expenses and savings.</h6>
                    </div>
                </div>
                <div className="mdl-card__actions">
                    <a href="/" className="mdl-button">Read our features</a>
                </div>
            </div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn2">
                <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlFor="btn2">
                <li className="mdl-menu__item">Lorem</li>
                <li className="mdl-menu__item" disabled>Ipsum</li>
                <li className="mdl-menu__item">Dolor</li>
            </ul>
        </Section>
        <Section>
            <div className="mdl-card mdl-cell mdl-cell--12-col">
                <div className="mdl-card__supporting-text">
                    <h4>Technology</h4>
                    Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse. Pariatur occaecat nisi laboris tempor laboris eiusmod qui id Lorem esse commodo in. Exercitation aute dolore deserunt culpa consequat elit labore incididunt elit anim.
                </div>
                <div className="mdl-card__actions">
                    <a href="/" className="mdl-button">Read our features</a>
                </div>
            </div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn3">
                <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlFor="btn3">
                <li className="mdl-menu__item">Lorem</li>
                <li className="mdl-menu__item" disabled>Ipsum</li>
                <li className="mdl-menu__item">Dolor</li>
            </ul>
        </Section>
    </div>
);
