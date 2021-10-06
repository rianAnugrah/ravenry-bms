import ArticleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={ArticleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id}/>
      ))}
    </div>
  );
};

export default ArticleList;
