import React from 'react';

/**
 * Component Button có thể tái sử dụng.
 * @param {object} props - Props cho component.
 * @param {function} props.onClick - Hàm xử lý sự kiện khi click.
 * @param {React.ReactNode} props.children - Nội dung bên trong button (văn bản hoặc icon).
 * @param {string} [props.type='button'] - Loại của button (button, submit, reset).
 * @param {string} [props.className=''] - Các class CSS bổ sung để tùy chỉnh style.
 * @param {boolean} [props.disabled=false] - Trạng thái vô hiệu hóa của button.
 */
const Button = ({ children, onClick, type = 'button', className = '', disabled = false }) => {
  // Các class TailwindCSS cơ bản cho button
  const baseClasses =
    'px-4 py-2 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors duration-200';

  // Các class cho trạng thái mặc định, hover và focus
  const enabledClasses =
    'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500';

  // Các class khi button bị vô hiệu hóa
  const disabledClasses = 'bg-gray-400 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${disabled ? disabledClasses : enabledClasses}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;