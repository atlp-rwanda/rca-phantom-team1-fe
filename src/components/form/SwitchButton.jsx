const SwitchButton = ({ label, active, className }) => {
    const buttonStyle = active
      ? "text-white underline"
      : "text-gray-500 underline hover:text-gray-700";
    return <button className={`${buttonStyle} ${className}`}>{label}</button>;
};

export default SwitchButton;