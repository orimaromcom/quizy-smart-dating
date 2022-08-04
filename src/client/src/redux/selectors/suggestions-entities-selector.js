const getSuggestionsEntities = (state) => state.suggestionsEntities;

export const getSuggestions = (state) => getSuggestionsEntities(state).suggestions;
export const getSuggestionsDistance = (state) => getSuggestionsEntities(state).suggestionDistance;
