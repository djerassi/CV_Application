import { useState } from "react";
import "../styles/App.css";

function InputComponent({ label, inputType, placeholderText = "", inputSetting = "normal" }) {
    const [text, setText] = useState(placeholderText);
    const [isActive, setIsActive] = useState(false);

    const style = {
        isActive: {
            all: "unset",
            overflowX:"show"
        },
        isInactive: {
            border: "none",
            backgroundImage: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
        }
    }

    const styleHeading = {
        isActive: {
            all: "unset",
            fontSize: "xx-large",
            color:"grey"
        },
        isInactive: {
            border: "none",
            backgroundImage: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
        }
    }
    function handleChange(e) {
        setText(e.target.value);
    }

    function handleEnter(e) {
        if (e.key === "Enter" || e.key === "Tab") {
            setIsActive(true);
        }
    }
    return (
        <div>
            <label onKeyDown={handleEnter} style={isActive ? { display: "none" } : style.isActive}>
                {label}
                {' '}
            </label>
            <input
                value={text}
                type={inputType}
                onChange={handleChange}
                onKeyDown={handleEnter}
                onClick={() => setIsActive(false)}
                style={inputSetting === "normal" 
                    ? (isActive ? style.isActive : style.isInactive)
                    : (isActive ? styleHeading.isActive : styleHeading.isInactive)
                }
            />
        </div>
    );
}

export default InputComponent;