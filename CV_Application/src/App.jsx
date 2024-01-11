import { useState } from 'react'
import './styles/App.css'
import { InputComponent, ProfDiv } from './components/inputsComp';
import Section from './components/section';

function App() {
  return (
    <>
      <Section>
        <InputComponent label="" type="text" placeholderText="Your Name" inputSetting="heading"/>
        <div style={{display:"flex", flexDirection:"row"}}>
          <InputComponent label="Adress1" type="text" placeholderText='Adress Line 1'/>
          <InputComponent label="Adress2" type="text" placeholderText="Adress Line 2"/>
          <InputComponent label="Phone" type="phone" placeholderText="99 9999 9999"/>
          <InputComponent label="Email" type="email" placeholderText="myemail@email.com"/>
        </div>
      </Section>
      <Section id="Professional-Section">
        <InputComponent label="" type="text" placeholderText="Professional Experience" inputSetting="heading"/>
        <ProfDiv/>
      </Section>
      <Section id="Education-Section">
        <InputComponent label="" type="text" placeholderText="Education" inputSetting="heading"/>
        <ProfDiv sectionType="Edu"/>
      </Section>
    </>
  )
}

export default App
