import React, { useContext } from 'react'
import * as d3 from 'd3'
import { Context } from '../reducer'

const Button = () => {

    const { state, dispatch } = useContext(Context)

    let action = (e) => {
        let file = e.target.files[0]
        let reader = new FileReader();

        file && reader.readAsText(file)

        reader.onload = () => {
            dispatch({ type: 'UPLOAD_NEW_DATA', data: d3.csvParse(reader.result) })
        }
    }

    return (
        <input
            style={{
                margin: '20px 0 0 20px',
            }}
            type='file'
            onChange={action}
        />
    )
}

export default Button

