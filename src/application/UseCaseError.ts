import { IUseCaseError } from "./IUseCaseError"

abstract class UseCaseError implements IUseCaseError {
  public readonly message: string

  constructor(message: string) {
    this.message = message
  }
}

export { UseCaseError }
