// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// PostFiltersForm.propTypes = {
//     onSubmit: PropTypes.string,
// };
// PostFiltersForm.defaultProps = {
//     onSubmit: '',
// }
// function PostFiltersForm(props) {
//     const { onSubmit } = props;
//     const { value, setValue } = useState('');

//     function handleFiltersChange(e) {
//         console.log(e.target.value);
//     }
//     return (
//         <form onSubmit={onSubmit}>
//             <input type="text" value={value} onChange={handleFiltersChange} />
//         </form>
//     );
// }

// export default PostFiltersForm;