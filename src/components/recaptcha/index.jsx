import React, { Component } from 'react';
import PropTypes from 'prop-types';

const isReady = () => (
    typeof window !== 'undefined' &&
    typeof window.grecaptcha !== 'undefined'
);

export default class Recaptcha extends Component {
    static propTypes = {
        className: PropTypes.string,
        onloadCallbackName: PropTypes.string,
        elementID: PropTypes.string,
        onloadCallback: PropTypes.func,
        verifyCallback: PropTypes.func,
        expiredCallback: PropTypes.func,
        render: PropTypes.string,
        siteKey: PropTypes.string,
        theme: PropTypes.string,
        type: PropTypes.string,
        verifyCallbackName: PropTypes.string,
        expiredCallbackName: PropTypes.string,
        size: PropTypes.string,
        tabindex: PropTypes.string,
        hl: PropTypes.string,
        badge: PropTypes.string,
    };

    static defaultProps = {
        elementID: 'g-recaptcha',
        onloadCallback: undefined,
        onloadCallbackName: 'onloadCallback',
        verifyCallback: undefined,
        verifyCallbackName: 'verifyCallback',
        expiredCallback: undefined,
        expiredCallbackName: 'expiredCallback',
        render: 'onload',
        theme: 'light',
        type: 'image',
        siteKey: process.env.RECAPTCHA_KEY,
        size: 'normal',
        tabindex: '0',
        hl: 'en',
        badge: 'bottomright',
    };

    constructor(props) {
        super(props);

        this.state = {
            ready: isReady(),
            widget: null,
        };

        if (!this.state.ready) {
            this.readyCheck = setInterval(this.updateReadyState.bind(this), 1000);
        }
    }

    componentDidMount() {
        if (this.state.ready) {
            this.renderGrecaptcha();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { render, onloadCallback } = this.props;

        if (render === 'explicit' && onloadCallback && this.state.ready && !prevState.ready) {
            this.renderGrecaptcha();
        }
    }

    componentWillUnmount() {
        clearInterval(this.readyCheck);
    }

    reset = () => {
        const { ready, widget } = this.state;
        if (ready && widget !== null) {
            window.grecaptcha.reset(widget);
        }
    }

    updateReadyState() {
        if (isReady()) {
            this.setState({
                ready: true,
            });

            clearInterval(this.readyCheck);
        }
    }

    renderGrecaptcha = () => {
        this.setState({
            widget: window.grecaptcha.render(this.props.elementID, {
                siteKey: this.props.siteKey,
                callback: (this.props.verifyCallback) ?
                    this.props.verifyCallback : undefined,
                theme: this.props.theme,
                type: this.props.type,
                size: this.props.size,
                tabindex: this.props.tabindex,
                hl: this.props.hl,
                badge: this.props.badge,
                'expired-callback': (this.props.expiredCallback) ?
                    this.props.expiredCallback : undefined,
            })
        });

        if (this.props.onloadCallback) {
            this.props.onloadCallback();
        }
    }

    render() {
        if (this.props.render === 'explicit' && this.props.onloadCallback) {
            return (
                <div id={this.props.elementID}
                    data-onloadcallbackname={this.props.onloadCallbackName}
                    data-verifycallbackname={this.props.verifyCallbackName}
                />
            );
        }

        return (
            <div id={this.props.elementID}
                className="g-recaptcha"
                data-sitekey={this.props.siteKey}
                data-theme={this.props.theme}
                data-type={this.props.type}
                data-size={this.props.size}
                data-badge={this.props.badge}
                data-tabindex={this.props.tabindex}
            />
        );
    }
}
