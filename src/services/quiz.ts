import axios from "axios";

export const getAllQuizzes = async () => {
  try {
    const response = await axios.get(
        "https://skills-mania-rest-api.herokuapp.com/quiz"
    );
    if (response.data.success) {
      return response.data.allQuizzes;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
