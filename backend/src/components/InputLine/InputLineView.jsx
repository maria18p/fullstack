import React from 'react'
import { MainContainer, SubmitButton } from './InlutLineStyle.style'

export default function InputLineView(props) {
    const handleChange = () => {
        // console.log(props.updateInput())
        // console.log(change);
        props.test()
    }

    return (
        <MainContainer>
            <label>Info:</label>
            <input
                // onChange={(e) => handleChange(e.target.value)}
                // value={props.value}
            ></input>
            <SubmitButton
            onClick={() => handleChange()}>
                Submit
            </SubmitButton>
        </MainContainer>
    )
}
