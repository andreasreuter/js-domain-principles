class Result<T> {
  public isSuccess: boolean = false
  public isFailure: boolean = false
  public value: T | undefined
  public error: Error | undefined

  private constructor(isSuccess: boolean, value?: T, error?: Error) {
    this.isSuccess = isSuccess
    this.isFailure = !isSuccess
    this.value = value
    this.error = error

    Object.freeze(this)
  }

  public static ok<T>(value?: T): Result<T> {
    if (value && Result.isError<T>(value)) {
      throw new Error("Result.ok<T> cannot be created with an Error.")
    }

    return (new Result<T>(true, value))
  }

  public static fail<T>(error: Error): Result<T> {
    return (new Result<T>(false, undefined, error))
  }

  private static isError<T>(value: T): boolean {
    return (value instanceof Error)
  }
}

export { Result }
