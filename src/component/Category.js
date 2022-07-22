import categorys from '../redux/dataCategory';
function Category() {
  return (
    <div className="col l-12 m-12 c-12">
      <div className="category-main">
        <div className="category-inner">
          <div className="category-header">DANH MỤC</div>
          <div className="category-list">
            {categorys.map((category, index) => (
              <div className="category-item" key={index}>
                <img src={category.src} className="category-image" alt="name" />
                <div className="category-name">
                  <h4>{category.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
