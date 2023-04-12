import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
    onSubmit: null,
};
function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    // UseRef tạo ra một object và object này được giữ nguyên và không thay đổi giữa những lần render
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchTerm(value);

        if (!onSubmit) return;

        // nó clear cái timeout cũ cái lúc mình ngưng rồi nhập tiếp đến khi dừng hẳn 300s thì onSubmit
        //set -- 100s ---clear, set ---300s submit
        // set --- 300s -> Submit luôn
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };


        // Trong khi gõ thì nó chờ 300s mới submit
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);
        }, 300);
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
        </form>
    );
}

export default PostFiltersForm;
