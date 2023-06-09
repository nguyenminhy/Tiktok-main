import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Popper.module.scss';

const cx = classNames.bind(style);

function PopperWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

PopperWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default PopperWrapper;
