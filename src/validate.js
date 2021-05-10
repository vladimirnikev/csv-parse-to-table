
export const validateAge = (age) => {
    return (Number.isInteger(Number(age)) && age > 21) || age === ''
}

export const validateExperience = (experience, age) => {

    let experienceNum = Number(experience)
    let ageNum = Number(age)

    return (experienceNum >= 0 && experienceNum < ageNum) || experience === ''
}

export const validateYearlyIncome = (value) => {

    return (Number(value) && value > 0) || value === ''
}

export const validateExpirationDate = (value) => {

    let regDateA = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/
    let regDateB = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/

    if (value === '') return true

    if (!regDateA.test(value) && !regDateB.test(value)) {

        return false
    } else {
        let todayDate = new Date()
        let valueDate = new Date(value)

        return +valueDate >= +todayDate
    }
}

export const validateHasChildren = (value) => {
    return typeof value === 'boolean' ? true : false
}

export const validateLicenseNumber = (value) => {
    let reg = /^[a-z0-9]{6}$/
    return reg.test(value) || value === ''
}
