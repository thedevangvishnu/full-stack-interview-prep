const PasswordOption = ({ id, checked, onChange, labelTitle }) => {
  return (
    <div className="option">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{labelTitle}</label>
    </div>
  );
};

export default PasswordOption;
