import React, {ReactNode, ReactElement, FunctionComponent} from 'react';
import PropTypes from 'prop-types';

interface Props {
    children?: ReactNode;
}

const Container: FunctionComponent<Props> = (props): ReactElement => (
    <>{props.children ? props.children : ''}</>
);

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.element,
    ]).isRequired,
};

export default Container;
