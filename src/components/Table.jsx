import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { validateAge, validateExperience, validateExpirationDate, validateHasChildren, validateLicenseNumber, validateYearlyIncome } from '../validate';
import ErrorMessage from './ErrorMessage';



const Table = ({ data, isRequiredParams }) => {
    const columns = [
        {
            dataField: 'id',
            text: 'ID'
        },
        {
            dataField: 'Full Name',
            text: 'Full Name',
        },
        {
            dataField: 'Phone',
            text: 'Phone'
        },
        {
            dataField: 'Email',
            text: 'Email'
        },
        {
            dataField: 'Age',
            text: 'Age',
            style: (cell) => {
                if (!validateAge(cell)) {
                    return { backgroundColor: '#ffbaba' }
                }
            }
        },
        {
            dataField: 'Experience',
            text: 'Experience',
            style: (cell, row) => {
                if (!validateExperience(cell, row['Age'])) {
                    return { backgroundColor: '#ffbaba' }
                }
            }
        },
        {
            dataField: 'Yearly Income',
            text: 'Yearly Income',
            style: (cell) => {
                if (!validateYearlyIncome(cell)) {
                    return { backgroundColor: '#ffbaba' }
                }
            }
        },
        {
            dataField: 'Has children',
            text: 'Has children',
            style: (cell) => {
                if (!validateHasChildren(cell)) {
                    return { backgroundColor: '#ffbaba' }
                }
            }
        },
        {
            dataField: 'License states',
            text: 'License states'
        },
        {
            dataField: 'Expiration date',
            text: 'Expiration date',
            style: (cell) => {
                if (!validateExpirationDate(cell)) {
                    return { backgroundColor: '#ffbaba' }
                }
            }
        },
        {
            dataField: 'License number',
            text: 'License number',
            style: (cell) => {
                if (!validateLicenseNumber(cell)) {
                    return { backgroundColor: '#ffbaba' }
                }
            }
        },
        {
            dataField: 'duplicateId',
            text: 'Duplicate with'
        }
    ]

    return (
        <div style={{ marginTop: '20px' }}>
            {isRequiredParams ? <BootstrapTable data={data} keyField='id' columns={columns} /> : <ErrorMessage />}
        </div>
    )
}

export default Table