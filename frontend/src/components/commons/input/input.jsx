import "./input.css";

const Input = ({value, setValue, placeholder}) => {
    return (
        <input  className="input"
                type="text"
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                }}
                placeholder={placeholder}
        />
    );
}
export default Input;