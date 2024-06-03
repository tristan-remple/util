//------ MODULE INFO
// This helper function takes an all-lowercase string and capitalizes it like a title.

export const capitalize = (str) => {

    if (typeof str === "number") {
        str = str.toString()
    }

    if (typeof str !== "string") {
        return null
    }

    // check if it's blank (loose equality intentional)
    if (str == "" || str == null || str == undefined) {
        return ""
    }

    // split string into words, initialize new string
    let wordArr = str.split(" ")
    let newStr = ""

    // capitalize the first letter of each word and add it to the new string
    for (let i = 0; i < wordArr.length; i++) {
        let firstLetter = wordArr[i][0].toUpperCase()
        let rest = wordArr[i].slice(1).toLowerCase()
        let word = firstLetter + rest
        newStr += word + " "
    }

    // remove trailing space from the string and return it
    newStr = newStr.slice(0, newStr.length - 1)
    return newStr
}

export const unCamel = (str) => {
    return str
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
}