import { AggregateRoot } from "../src"
import { Score } from "./Score.mock"

type RankingListProps = {
  allScores: Score[]
}

class RankingList extends AggregateRoot<RankingListProps> {
  get allScores(): Score[] {
    return (this.props.allScores)
  }
}

export { RankingList }
