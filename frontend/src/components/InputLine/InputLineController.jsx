import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { sendRequest } from '../../requests/requestController'
import InputLineView from './InputLineView'

export default function InputLineController() {

    const [value, setValue] = useState("")

    const submit = () => {
        sendRequest('get', value);
    }

    useEffect(()=> {
        console.log(value);
    }, value)

    const updateInput = (updatedValue) => {
        // setValue(updatedValue)
        console.log("123")
    }

    
    function test(){
        console.log("321")
    }

    return (
        <InputLineView
            test={() => test()}
        />
    )
}
