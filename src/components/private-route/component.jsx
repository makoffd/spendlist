import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends React.Component {
    renderComponent = props => {
        const { component: Component , ...rest } = this.props;

        if (rest.user) {
            return <Component {...props}/>
        }

        return (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        );
    }

    render() {
        const { component: Component , ...rest } = this.props;

        return(
            <Route {...rest} render={this.renderComponent} />
        );
    }
}
