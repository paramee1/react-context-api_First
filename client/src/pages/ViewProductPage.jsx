import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../App";
import { useContext } from "react";

function ViewProductPage() {
  const navigate = useNavigate();

  const username = useContext(UserDataContext);
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title</h2>
        <p>Content</p>
      </div>

      <div className="product-promotion-box">
        <h2>
          คุณคือสมาชิกในระดับ {username.level} ดังนั้นคุณได้สิทธิพิเศษลด 50%
        </h2>
        <button onClick={() => alert("🥳🥳🥳🥳")}>กดรับสิทธิ</button>
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
