const isFieldError = (message) => message.hasOwnProperty('field')
const isGlobalError = (message) => !isFieldError(message)
const toError = (error) => error.message


const mapping = (messages) => {

    const fieldErrors = messages
        .filter(isFieldError)
        .reduce((objectErrors, error) => {
            const {field, message} = error

            console.log(`FIELD: ${field}, MESSAGE: ${message}`)

            const key = `${field}Errors`

            console.log(`KEY: ${key}`)

            if (!objectErrors.hasOwnProperty(key)) {
                objectErrors[key] = []
            }

            objectErrors[key].push(message)

            return objectErrors
        }, {})

    const globalErrors = messages
        .filter(isGlobalError)
        .map(toError)

    const result =  {...fieldErrors, globalErrors}

    console.log(result)

    return result
}

export {mapping};