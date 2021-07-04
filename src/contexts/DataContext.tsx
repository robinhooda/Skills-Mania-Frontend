import {
    createContext,
    FunctionComponent,
    useEffect,
    useContext,
    useReducer,
  } from "react";
  import { quizReducer, quizInitialState } from "../reducers/quiz.reducer";
  import { getAllQuizzes } from "../services/quiz";
  import { DATA_CONTEXT } from "./DataContext.types";
  
  const DataContext = createContext<DATA_CONTEXT>({
    state: quizInitialState,
    dispatch: () => null,
  });
  
  export const useData = () => useContext(DataContext);
  
  export const DataProvider: FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer(quizReducer, quizInitialState);
  
    const initAllQuizzes = async () => {
      const allQuizzes = await getAllQuizzes();
      console.log("aya",allQuizzes)
      allQuizzes &&
        dispatch({
          type: "INITIALIZE_ALL_QUIZZES",
          payload: { allQuizzes },
        });
    };
  
    useEffect(() => {
      initAllQuizzes();
    }, []);
  
    return (
      <DataContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };
  