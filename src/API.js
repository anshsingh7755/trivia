const server = "https://opentdb.com";
const category = "/api_category.php";
const questions = "/api.php";

//?amount=10&category=17&difficulty=hard&type=multiple

const getQuestonAPI = (
  questionAmount = 1,
  selectedCategory = false,
  difficulty = false
) => {
  return `${server}${questions}?amount=${questionAmount}${
    selectedCategory ? "&category=" + selectedCategory : ""
  }${difficulty ? "&difficulty=" + difficulty : ""}&type=multiple`;
};

export { server, category, getQuestonAPI };
