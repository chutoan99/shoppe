import { useSelector } from 'react-redux';
import './loading.css';
function Loading() {
  const { loading } = useSelector((state) => state);
  return (
    <>
      {loading ? (
        <div className="loading">
          <span className="loader"></span>;
        </div>
      ) : null}
    </>
  );
}
export default Loading;
