import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');


    // Nhận giá trị  của value khi nhập
    function handleValueChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        // nếu không nhập mà submit thì nó sẽ return
        if (!onSubmit) return;
        // không reload lại trang
        e.preventDefault();

        const formValues = {
            title: value,
        }

        // Khi submit thì nhận giá trị trong formValues
        onSubmit(formValues);

        // Sau khi submit xong dữ liệu còn trong ô input vì thế dùng setValue để ô input rỗng
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;