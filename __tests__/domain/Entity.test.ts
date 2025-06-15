// eslint-disable-next-line jest/no-mocks-import
import { Score } from "../../__mocks__"

test("creates an entity with props", async () => {
  const score = new Score({ score: 28 })
  expect(score.score).toBe(28)
})
