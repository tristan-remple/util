//------ MODULE INFO
// A couple validation functions.

export const validatePhone = (number) => {

    // This function takes a string or number input and returns a valid phone number object if possible.
    // The valid format is 000-000-0000.
    // Formats 0000000000 and (000) 000-0000 are converted.
    // Other formats return an error.

    // check that string is defined
    if (!str) {
        return { 
            result: null, 
            error: "Text is empty." 
        }
    }

    // remove whitespace from start and end
    number = number.trim()

    // check if it's already valid
    if (number.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)) {
        return { result: number }
    }

    // check if it's a number in (000) 000-0000 format and convert it
    if (number.match(/\([0-9]{3}\) [0-9]{3}-[0-9]{4}/)) {
        const first = number.split(")")[0].substr(1, 3)
        const rest = number.split(" ")[1].split("-")
        const second = rest[0]
        const third = rest[1]
        return { result: `${first}-${second}-${third}` }
    }

    // check if it's in all-numeric format and convert it
    if (parseInt(number) > 1000000000 && parseInt(number) < 10000000000) {
        number = parseInt(number).toString()
        const first = number.substr(0, 3)
        const second = number.substr(3, 3)
        const third = number.substr(6, 4)
        return { result: `${first}-${second}-${third}` }
    }

    // otherwise, return an error
    return {
        result: null,
        error: `${number} is not a valid phone number.`
    }
}

export const validateEmail = (email) => {

    // check that string is defined
    if (!str) {
        return { 
            result: null, 
            error: "Text is empty." 
        }
    }

    // remove whitespace from start and end
    email = email.trim()

    // check if it matches email format
    if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        return { result: email }
    }

    // otherwise, return an error
    return {
        result: null,
        error: `${email} is not a valid email.`
    }
}

export const validateUrl = (url) => {

    // check that string is defined
    if (!str) {
        return { 
            result: null, 
            error: "Text is empty." 
        }
    }

    // remove whitespace from start and end
    url = url.trim()

    // check if it matched URL format.
    if (url.match(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)) {
        return { result: url }
    }

    // otherwise, return an error
    return {
        result: null,
        error: `${url} is not a valid URL.`
    }
}

export const validateShortText = (str) => {

    // check that string is defined
    if (!str) {
        return { 
            result: null, 
            error: "Text is empty." 
        }
    }

    // remove whitespace from start and end
    str = str.trim()

    // check string length
    if (str.length > 255) {
        return {
            result: null,
            error: "Text is too long."
        }
    } else if (str.length === 0) {
        return {
            result: null,
            error: "Text is empty."
        }
    }

    // check that all characters are on the whitelist
    if (str.match(/^[a-zA-Z0-9!@#$%^&*()_~'.,?:;=\/\s-]{1,255}$/)) {
        return { result: str }
    }

    // otherwise, return an error
    return {
        result: null,
        error: "Text contains invalid characters."
    }
}

export const validateLongText = (str) => {

    // check that string is defined
    if (!str) {
        return { 
            result: null, 
            error: "Text is empty." 
        }
    }

    // remove whitespace from start and end
    str = str.trim()

    // check string length
    if (str.length > 2048) {
        return {
            result: null,
            error: "Text is too long."
        }
    } else if (str.length === 0) {
        return {
            result: null,
            error: "Text is empty."
        }
    }

    // check that all characters are on the whitelist
    if (str.match(/^[a-zA-Z0-9!@#$%^&*()_~'.,?:;=\/\s-]{1,2048}$/)) {
        return { result: str }
    }

    // otherwise, return an error
    return {
        result: null,
        error: "Text contains invalid characters."
    }
}