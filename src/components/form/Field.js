import React from 'react';
import PropTypes from 'prop-types';

const Field = (props) => {
    let field = null;


    if (props.tag === "input") {
        if (props.type === "text") {
            field = (
                <div className="form__group">
                    <input
                        className={props.className}
                        type={props.type}
                        placeholder={props.placeholder}
                        onChange={props.changeHandler}
                    />
                </div>
            );
        } else {
            field = (
                <div className="form__group">
                    <input
                        className={props.className}
                        type={props.type}
                        placeholder={props.placeholder}
                        onChange={props.changeHandler}
                    />
                </div>
            );
        }
    } else {
        field = (
            <div className="form__group">
                <select className={props.className} onChange={props.changeHandler}>{props.children}</select>
            </div>
        )
    }

    return field;
}

Field.propTypes = {
    tag: PropTypes.string,
    type: PropTypes.string,
}
export default Field;