// eslint-disable-next-line jest/no-mocks-import
import { RankingList, Score } from "../../__mocks__"

test("creates an aggregate root with props", async () => {
  const rankingList = new RankingList({
    allScores: [new Score({ score: 28 })]
  })

  expect(rankingList.allScores).toHaveLength(1)
})
