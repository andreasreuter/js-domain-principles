import { IValidationDecorator } from "./IValidationDecorator"
import { IValidator } from "./IValidator"
import { Result } from "../domain"

class ValidationDecorator<T> implements IValidationDecorator<T> {
  private readonly validators: IValidator<T>[] = []

  add(validator: IValidator<T>): this {
    this.validators.push(validator)
    return (this)
  }

  validate(value: T): Result<T> {
    try {
      this.validators.forEach(validator => {
        const validationResult = validator.validate(value)

        if (validationResult.isFailure) {
          throw validationResult.error
        }
      })

      return (Result.ok<T>())
    } catch (error: unknown) {
      return (Result.fail<T>(error as Error))
    }
  }
}

export { ValidationDecorator }

