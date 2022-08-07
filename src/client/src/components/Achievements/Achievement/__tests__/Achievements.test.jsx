import renderer from "react-test-renderer";
import Achievement from "../Achievement";

const achievement = { title: "Film", score: {correct: 8, answers: 10}}

test('renders achievement correctly', () => {
  const tree = renderer.create(
    <Achievement title={achievement.title} score={achievement.score} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
