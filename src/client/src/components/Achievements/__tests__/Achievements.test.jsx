import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import Achievements from "../Achievements";

const achievements = {
  "userId": 2,
  "categories": {
      "Film": {
          "correct": 2,
          "answers": 10
      },
      "Sports": {
          "correct": 3,
          "answers": 10
      },
      "Computers": {
          "correct": 1,
          "answers": 10
      },
      "Celebrities": {
          "correct": 9,
          "answers": 10
      },
      "History": {
          "correct": 4,
          "answers": 10
      },
      "Music": {
          "correct": 8,
          "answers": 10
      }
  }
}

describe("Achievements", () => {
  test("should show achievements correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Achievements achievements={achievements.categories} userId={achievements.userId} fetchAchievementsAction={() => achievements}/>
        </BrowserRouter>
      </Provider>
    );

    Object.keys(achievements.categories).forEach(category => {
      const categorieName = screen.getByText(category);
      expect(categorieName).toBeInTheDocument();
      const score = achievements.categories[category];
      const outOf = screen.getByText(`(${score.correct} out of ${score.answers})`);
      expect(outOf).toBeInTheDocument();
      const percent = screen.getByText(`${Math.round((score.correct / score.answers) * 100) || 0}% correct`);
      expect(percent).toBeInTheDocument();
    });
  });
});
