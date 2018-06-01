import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MySuperCoolComponent extends Component {
    handleClick () {
        console.log('Click!');
    };

    render () {
        const { color, children } = this.props;
        return (
            <button onClick={this.handleClick} style={{ color }}>
                {children}
            </button>
        );
    }
}

MySuperCoolComponent.propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default MySuperCoolComponent;
