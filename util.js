import { friendlyDate, adminDate, sqlDate } from "./dateHelper.js"
import { unCamel, capitalize } from "./string.js"
import { validateEmail, validatePhone, validateUrl, validateLongString, validateShortString } from "./validate.js"

class util {

    str = {
        title(string) {
            return capitalize(string)
        },
        unCamel(string) {
            return unCamel(string)
        }
    }
    
    date = {
        friendly(date) {
            return friendlyDate(date)
        },
        admin(date) {
            return adminDate(date)
        },
        sql(date) {
            return sqlDate(date)
        }
    }
    
    valid = {
        email(email) {
            return validateEmail(email)
        },
        phone(phone) {
            return validatePhone(phone)
        },
        url(url) {
            return validateUrl(url)
        },
        short(str) {
            return validateShortString(str)
        },
        long(str) {
            return validateLongString(str)
        }
    }
    
}

export default new util