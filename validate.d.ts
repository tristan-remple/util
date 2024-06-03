export type ValidationResult = {
    result: string | null,
    error?: string
}

export function validatePhone(number?: string | number): ValidationResult
export function validateEmail(email?: string): ValidationResult
export function validateUrl(url?: string): ValidationResult
export function validateShortText(str?: string): ValidationResult
export function validateLongText(str?: string): ValidationResult