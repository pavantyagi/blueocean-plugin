import React, {Component, PropTypes} from 'react';

// TODO: Move styles to css
const fsStyles = {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0 ,
    zIndex: 75
};

export class FullScreen extends Component {
    constructor(props) {
        super(props);

        // If nothing set, default to true
        const isVisible = "isVisible" in props ? props.isVisible : true;

        this.state = {
            isVisible
        };
    }

    componentWillReceiveProps(newProps) {

        const {isVisible} = newProps;

        if (isVisible != this.props.isVisible) {
            this.setState({isVisible});
        }
    }

    render() {

        const {isVisible} = this.state;
        const {children, style} = this.props;

        if (!isVisible) {
            return null;
        }

        const mergedStyle = {...fsStyles, ...style};

        return (
            <div className="FullScreen" style={mergedStyle}>
                { children }
            </div>
        );
    }
}

FullScreen.propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.object,
};
