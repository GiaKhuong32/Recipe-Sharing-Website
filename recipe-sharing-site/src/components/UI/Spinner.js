import React from 'react';

/**
 * Component Spinner để hiển thị trạng thái đang tải.
 * @param {object} props - Props cho component.
 * @param {string} [props.className=''] - Các class CSS bổ sung.
 */
const Spinner = ({ className = '' }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
