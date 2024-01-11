import { useState } from "react";
import "../styles/App.css";

const labels = {
    "Prof" : {
        "firstLabel":"Job Title",
        "secondLabel":"Company",
        "thirdLabel":"Date"
    },
    "Edu" : {
        "firstLabel":"Degree",
        "secondLabel":"University",
        "thirdLabel":"Date"
    }
}

function InputComponent({ label, inputType, placeholderText = "", inputSetting = "normal" }) {
    const [text, setText] = useState(placeholderText);
    const [isActive, setIsActive] = useState(false);

    const style = {
        isActive: {
            all: "unset",
            overflowX:"show",
            font:"Arial, Helvetica, sans-serif"
        },
        isInactive: {
            border: "none",
            backgroundImage: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
            font:"Arial, Helvetica, sans-serif"
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

function InputProfessional( {labelSet} ) {
        return(
            <div style={{display:"flex", flexDirection:"row"}}>
                <InputComponent label={labelSet.firstLabel} inputType="text" placeholderText='Associate'/>
                <InputComponent label={labelSet.secondLabel} inputType="text" placeholderText="React Inc."/>
                <InputComponent label={labelSet.thirdLabel} inputType="date" placeholderText="2022-08-08"/>
            </div>
        ); 
}

function EntryButton({text, handleAlterEntries, buttonVisibility}) {
    return(
        <button onClick={handleAlterEntries} className={buttonVisibility?"visible-btns":"invisible-btns"}>{text}</button>
    );
}

function ProfDiv({sectionType="Prof"}) {
    const [inputProfElem, setInputProfElem] = useState([0])
    const [buttonVisibility, setButtonVisibility] = useState(true);

    function handleAddProfButton() {
        setInputProfElem([...inputProfElem, Math.max(...inputProfElem)+1])
    }
    function handleDeleteProfButton(inputKey) {
        const newInputProfElem = inputProfElem.filter((entry) => entry!==inputKey)
        setInputProfElem(newInputProfElem)
    }
    return(
        inputProfElem.map((inputKey, index) => {
            if (index+1 < inputProfElem.length) {
                return (
                    <div key={`${inputKey}_${sectionType}_container`}>
                        <div key={`${inputKey}_${sectionType}`} style={{"display":"flex", "flexDirection":"row"}}>
                            <InputProfessional key={`${inputKey}_${sectionType}`} labelSet={labels[sectionType]}/>
                        </div>
                        <EntryButton text="Add Entry" handleAlterEntries = {handleAddProfButton} key={`${inputKey}_${sectionType}_AddBtn`} buttonVisibility={buttonVisibility}/>
                        <EntryButton text={"Delete Entry"} handleAlterEntries = {() => {handleDeleteProfButton(inputKey)}} key={`${inputKey}_${sectionType}_DeleteBtn`} buttonVisibility={buttonVisibility}/>
                        <ToggleButtonVisibility sectionType={sectionType} buttonVisibility={buttonVisibility} setButtonVisibility={setButtonVisibility}/>
                    </div>
                )
            } else {
                return (
                    <div key={`${inputKey}_${sectionType}_container`}>
                        <div key={`${inputKey}_${sectionType}`} style={{"display":"flex", "flexDirection":"row"}}>
                            <InputProfessional key={`${inputKey}_${sectionType}`} labelSet={labels[sectionType]}/>
                        </div>
                        <EntryButton text="Add Entry" handleAlterEntries = {handleAddProfButton} key={`${inputKey}_${sectionType}_AddBtn`} buttonVisibility={buttonVisibility}/>
                        <EntryButton text={"Delete Entry"} handleAlterEntries = {() => {handleDeleteProfButton(inputKey)}} key={`${inputKey}_${sectionType}_DeleteBtn`} buttonVisibility={buttonVisibility}/>
                        <ToggleButtonVisibility sectionType={sectionType} buttonVisibility={buttonVisibility} setButtonVisibility={setButtonVisibility}/>
                    </div>

                )               
            }

        }
        ))
}

function ToggleButtonVisibility( {sectionType, buttonVisibility, setButtonVisibility} ) {
    function handleToggleVisibility() {
        const newBtnVis = buttonVisibility?false:true;
        setButtonVisibility(newBtnVis);
    }
    return(
        <button onClick={handleToggleVisibility} key={`${sectionType}_ToggleVisibility`} className={buttonVisibility?"visible-btns":"invisible-btns"}>Toggle Button Visibility</button>
    )
}

export { 
    InputProfessional as InputProfessional, 
    InputComponent as InputComponent, 
    EntryButton as EntryButton,
    ProfDiv as ProfDiv
};