import { v4 as uuidv4 } from "uuid"

class EntityId {
  private readonly _value: unknown

  constructor(id?: unknown) {
    this._value = id ? id : uuidv4()
  }

  equals(id: EntityId): boolean {
    if (!(id instanceof EntityId)) {
      return (false)
    }

    return (id.value === this.value)
  }

  get value(): unknown {
    return (this._value)
  }

  get toString(): string {
    return (String(this._value))
  }
}

export { EntityId }
