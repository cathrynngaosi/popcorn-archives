function Button({ children, handleClick, color }) {
  const btnStyle = `flex w-full justify-center rounded bg-${color} px-6 py-3 text-sm font-medium uppercase text-white shadow outline-none transition-all duration-100 hover:scale-105 focus:outline-none`;

  if (handleClick) {
    return (
      <button className={btnStyle} type="button" onClick={handleClick}>
        {children}
      </button>
    );
  } else {
    return (
      <button className={btnStyle} type="button">
        {children}
      </button>
    );
  }
}

export default Button;
