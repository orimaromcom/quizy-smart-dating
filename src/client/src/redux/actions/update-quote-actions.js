import actionTypes from "./constants";
import QuoteApiService from "../../services/quote-api-service";

export const updateQuote = (quote) => ({
  type: actionTypes.UPDATE_QUOTE,
  payload: quote,
});

export const updateQuoteAction = () => {
  return async (dispatch) => {
    try {
      const quote = await QuoteApiService.getRandomQuote();
      dispatch(updateQuote(quote));
    } catch (e) {
      console.log("Some nice quote about love was not loaded");
    }
  };
};
