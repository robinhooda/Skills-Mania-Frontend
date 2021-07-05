import "./Category.css"
import CategoryHeroImage from "../../assets/images/Category.svg"
import { useData } from "../../contexts/DataContext";
import { Quiz } from "../../data/quiz.types";
import { Link } from "react-router-dom"
import { url } from "inspector";

type QUIZ_CARD = { quizItem: Quiz,index:Number };
function CategoryCard({ quizItem,index }: QUIZ_CARD) {
//     const categoryBackgroundMask={
//         backgroundImage: "url(" + quizItem.coverImageUrl + ")",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "100px 150px",
//    }
    return  (
        <Link to={`/quiz/${quizItem.id}`} className="links">
            <div className="category-card" 
            // style={categoryBackgroundMask}
            >
                {/* TO DO- ADD COVERIMAGE IN BACKGROUND */}
                {/* <img src={quizItem.coverImageUrl} alt="category-cover-image" className="category-cover-image"/> */}
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
