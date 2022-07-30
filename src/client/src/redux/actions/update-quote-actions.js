import actionTypes from "./constants";
import QuoteApiService from "../../services/quote-api-service";

const updateQuoteAction = (quote) => ({
  type: actionTypes.UPDATE_QUOTE,
  payload: quote,
});

export const updateQuote = () => {
    console.log("in action quote");
  return async (dispatch) => {
    try {
      const quote = await QuoteApiService.getRandomQuote();
   console.log(quote)
      dispatch(updateQuoteAction(quote));
    } catch (e) {}
  };
};
