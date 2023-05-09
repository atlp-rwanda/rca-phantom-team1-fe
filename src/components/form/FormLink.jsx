const FormLink = ({label, className = ''}) => {
    return (
      <a href="/forgot-password" className= {`text-sm text-white hover:text-blue-300 ${className}`}>
        {label}
      </a>
    );
};

export default FormLink;