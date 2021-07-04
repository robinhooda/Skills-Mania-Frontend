import "./Category.css"
import CategoryHeroImage from "../../assets/images/Category.svg"
import { useData } from "../../contexts/DataContext";
import { Quiz } from "../../data/quiz.types";
import { Link } from "react-router-dom"

type QUIZ_CARD = { quizItem: Quiz,index:Number };
function CategoryCard({ quizItem,index }: QUIZ_CARD) {
    return  (
        <Link to={`/quiz/${quizItem.id}`} className="links">
            <div className="category-card">
                <h3>Category {index}</h3>
                <h2>{quizItem.name}</h2>
            </div>
        </Link>
    )
}

function Category() {
    const { state: { allQuizzes } } = useData();

    console.log({allQuizzes})
    return (
        <div className="Category">
            <h5 className="path">Home <i className="fas fa-chevron-right"></i> Category</h5>
            <img src={CategoryHeroImage} alt="category-hero-pic" className="category-hero--image" />
            <div className="category-list">
            {allQuizzes?.map((quizItem,index) => (
                <CategoryCard quizItem={quizItem} index={index+1} />
            ))}
            </div>
        </div>
    )
}

export default Category
