//------ MODULE INFO
// A couple date handling functions.

const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

// This function takes a date in any JS-readable format and returns a date that is easy for humans to read.
export function friendlyDate(dateString) {
    let date
    if (dateString === "" || dateString === null) {
        date = new Date()
    } else {
        date = new Date(dateString)
    }
    if (date == "Invalid Date") { return null }
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    return `${day} ${month}, ${year}`
}

// This function takes a date in any JS-readable format and returns a date that is formatted the way administrative staff are used to.
export function adminDate(dateString) {
    let date
    if (dateString === "" || dateString === null) {
        date = new Date()
    } else {
        date = new Date(dateString)
    }
    if (date == "Invalid Date") { return null }
    const day = date.getDate().toString()
    const month = (date.getMonth() + 1).toString()
    const year = date.getFullYear()
    return `${ year }-${ month.padStart(2, "0") }-${ day.padStart(2, "0") }`
}

// This function takes a date in any JS-readable format and formats it for SQL.
export function sqlDate(dateString) {
    let date
    if (dateString === "" || dateString === null) {
        date = new Date()
    } else {
        date = new Date(dateString)
    }
    if (date == "Invalid Date") { return null }
    const stringDate = date.toLocaleDateString()
    const stringTime = date.toTimeString().split(" ")[0]
    return `${stringDate} ${stringTime}`
}