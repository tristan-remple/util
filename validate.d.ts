export type ValidationResult = {
    result: string | null,
    error?: string
}

export function validatePhone(number: string | number): ValidationResult

export function validEmail(email: string): ValidationResult