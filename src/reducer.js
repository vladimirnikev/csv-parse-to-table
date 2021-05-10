import { index } from 'd3-array'
import React from 'react'

export const Context = React.createContext()

export const initialState = {
    isRequiredParams: true,
    data: [],
}

export const appReducer = (state, action) => {
    switch (action.type) {

        case 'UPLOAD_NEW_DATA':
            let dataArray = action.data.slice()

            let correctPhoneNumber = (number) => {
                // console.log((/\d/).test(number))
                if (Number(number) && number.length >= 10 && number.length <= 12) {
                    // (/\d/).test(number)
                    if (number.length === 10) {
                        return number = `+1${number}`
                    } else if (number.length === 11 && number[0] === '1') {
                        return number = `+${number}`
                    } else if (number.length === 12 && number[0] === '+' && number[1] === '1') {
                        return number
                    }
                    return number
                } else {
                    return number
                }
            }

            let correctYearlyIncomeValue = (value) => {
                return value = Number(value) ? Math.round(value * 100) / 100 : value
            }

            let correctHasChildrenBoolean = (value) => {
                value = value.toLowerCase()
                switch (value) {
                    case 'true':
                        return true
                    case 'false':
                        return false
                    case '':
                        return false
                    default:
                        return value
                }
            }

            let isRequiredParams = dataArray.every(e =>
                e['Full Name'].length
                && e['Phone'].length
                && e['Email'].length
                !== 0)

            let dataArrayWithCorrectValues = dataArray.map((e, currentIndex, arr) => {
                let el = e;

                // Logic for "Duplicate ID"
                for (let i = 0; i < arr.length; i++) {

                    if (typeof el.duplicateId === 'number') break;

                    el = {
                        ...e,
                        duplicateId: i !== currentIndex &&
                            ((correctPhoneNumber(e['Phone']) === correctPhoneNumber(arr[i]['Phone']))
                                || (e['Email'].toLowerCase() === arr[i]['Email'].toLowerCase()))
                            ? i + 1
                            : null
                    }
                }

                return {
                    ...el,
                    'Phone': correctPhoneNumber(el['Phone']),
                    'Yearly Income': correctYearlyIncomeValue(el['Yearly Income']),
                    'Has children': correctHasChildrenBoolean(el['Has children'])
                }

            })

            return {
                ...state,
                data: dataArrayWithCorrectValues
                    .map((e, i) => ({ id: i + 1, ...e })),
                isRequiredParams: isRequiredParams
            }
        default:
            return state
    }
}