import { Entity } from "../src"

type ScoreProps = {
  score: number
}

class Score extends Entity<ScoreProps> {
  get score(): number {
    return (this.props.score)
  }
}

export { Score }
