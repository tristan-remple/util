export type ValidationResult = {
    result: string | null,
    error?: string
}

export function validatePhone(number?: string | number): ValidationResult
export function validateEmail(email?: string): ValidationResult
export function validateUrl(url?: string): ValidationResult
export function validateShortString(str?: string): ValidationResult
export function validateLongString(str?: string): ValidationResult