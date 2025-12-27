type ThemeState = { primary: string; background: string };
type Action = { type: string };

export default function themeReducer(state: ThemeState, action: Action) {
  switch (action.type) {
    // primary colors
    case "color-1":
    case "color-2":
    case "color-3":
    case "color-4":
    case "color-5":
    case "color-6":
      return { ...state, primary: action.type };

    // background colors
    case "bg-1":
    case "bg-2":
      return { ...state, background: action.type };

    default:
      return state; // חובה כדי לא לשבור
  }
}
