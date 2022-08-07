import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Achievements from "../Achievements";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

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

describe("TodosList", () => {
  test("should render achievements correctly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Achievements achievements={achievements.categories} userId={achievements.userId} fetchAchievementsAction={() => achievements}/>
        </BrowserRouter>
      </Provider>
    );

    const percent = screen.getByText(`20% correct`);
    expect(percent).toBeInTheDocument();
    const outOf = screen.getByText(`(2 out of 10)`);
    expect(outOf).toBeInTheDocument();

  });
});
