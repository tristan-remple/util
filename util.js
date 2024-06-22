import { friendlyDate, friendlyShortDate, adminDate, sqlDate } from "./dateHelper.js"
import { unCamel, capitalize } from "./string.js"
import { validateEmail, validatePhone, validateUrl, validateLongText, validateShortText } from "./validate.js"

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
        short(date) {
            return friendlyShortDate(date)
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
            return validateShortText(str)
        },
        long(str) {
            return validateLongText(str)
        }
    }
    
}

export default new util