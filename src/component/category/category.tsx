import { useNavigate } from 'react-router-dom';
import categorys from '../../utils/dataCategory';
import './category.css';
function Category() {
  const navigate = useNavigate();
  return (
    <div className="category-main">
      <div className="bg-white">
        <div className="category-header">DANH MỤC</div>
        <div className="category-list">
          {categorys.map((category, index) => (
            <div className="flex flex-col flex-shrink-0 w-[10%] response-category" key={index}>
              {category.map((ele, index) => (
                <div className="category-item" key={index} onClick={() => navigate(`/categories/${ele.title}`)}>
                  <img src={ele.src} className="category-image" alt="name" />
                  <div className="category-name">
                    <h4>{ele.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Category;
