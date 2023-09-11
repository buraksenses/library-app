import { useState } from "react";
import { StarsReview } from "./StarsReview";

export const LeaveAReview: React.FC<{ submitReview: any }> = (props) => {
  const [starInput, setStarInput] = useState(0);
  const [displayInput, setDisplayInput] = useState(false);
  const [reviewDescription, setReviewDescription] = useState("");

  function starValue(value: number) {
    setStarInput(value);
    setDisplayInput(true);
  }

  return (
    <div className="dropdown" style={{ cursor: "pointer" }}>
      <h5
        className="dropdown-toggle"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
      >
        Leave a review?
      </h5>
      <ul
        className="dropdown-menu"
        id="submitReviewRating"
        aria-labelledby="dropdownMenuButton1"
      >
        {Array.from({ length: 11 }, (_, index) => (
          <li key={index}>
            <button
              onClick={() => starValue(index / 2)}
              className="dropdown-item"
            >
              {index / 2} star
            </button>
          </li>
        ))}
      </ul>
      <StarsReview rating={starInput} size={32} />
      {displayInput && (
        <form method="POST" action="#">
          <hr />
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              id="submitReviewDescription"
              placeholder="Optional"
              rows={3}
              onChange={(e) => setReviewDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <button
              type="button"
              onClick={() => props.submitReview(starInput, reviewDescription)}
              className="btn btn-primary mt-3"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
