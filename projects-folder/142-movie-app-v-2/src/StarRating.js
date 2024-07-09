import { useState } from "react";

import PropTypes from 'prop-types' // 120-1 to use type checking (** comes in-built with CREATE-REACT-APP)

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
}; // 115

const starContainerStyle = {
  display: "flex",
  cursor: "pointer",
}; // 115 // 115 // commented on 119-1 to add it inside the star-rating component to add color prop

/* const textStyle = {
  lineHeight: 1,
  margin: 0,
} */ /* const starStyle = {
  width: "48px",
  height: "48px",
  display: "block",
  cursor: "pointer",
}; */ /* 119-1 commented to move it to STAR COMPONENT to add COLOR PROP */

/* 120-1 adding PROP TYPES */

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  defaultRatingValue: PropTypes.number
}

export default function StarRating({
  maxRating = 5 ,
  color = "#fcc419",
  fontSize = 48,
  className = "",
  defaultRatingValue = 0
}) /* 119-1 - color and fontSize prop is added so the component can be used in other projects */ {

 // 119-1 defaultRatingValue prop is addeed to specify what should be the DEFAULT VALUE befor the user put the rating.... we set it to 0.... in e-commerce website... it is 3 

  const [rating, setRating] = useState(defaultRatingValue); 
  /* 116 made to store rating value when you hover over the star */ 
  
  /* 119-1 zero replaced with defaultRatingValue prop  */

  const [hoverRating, setHoverRating] =
    useState(0); /* 117-1 used to TEMPORARILY STORE rating for displaying rating on HOVERING the star  */

  function handleRate(starValue) {
    setRating(starValue);
    setHoverRating(0); /* 117-1 used to implement hovering star */
  } // 116

  function handleHoverRate(starValue) {
    setHoverRating(starValue); /* 117-1 used to temporarily show the rating value text on hovering the star  */
  }

  function handleMouseLeave() {
    setHoverRating(0);
  } /* 117-1 used to set hover rating to zero when mouse is leaves the star-rating component and shows the ORIGINAL SET RATING */

  const textStyle = {
    lineHeight: 1,
    margin: 0,
    color: color,
    fontSize: `${fontSize/ 1.5}px` /* /1.5 is used for readability */
    /* 119-1 to change text color to yellow and change font size to 48px using props  */
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            fillStarFlag={i + 1 <= (hoverRating || rating)}
            onRate={() => handleRate(i + 1)}
            onHover={() => handleHoverRate(i + 1)}
            onMouseLeaveProp={handleMouseLeave}
            color={color}
            fontSize={fontSize}
            className= ''
            
          /> // 116 onRate and handleRate added.... fillStarFlag passes boolean such that the star gets filled of remains empty

          // 117-1 onHover prop passed to the star component to implement rating change on hovering the star

          //117-1 hoveringRating added to the conditional in fillStarFlag Prop

          // 119-1 color and fontSize props passed in to change the color of stars to yellow and width and height of stars to 48px

          // 119-1 className prop is added to add any style classes from css file if any

         
        ))}
      </div>
      {/* <p style={textStyle}>{rating || ""}</p> */}
      {/* 116 used the rating state  */}
      <p style={textStyle}>{hoverRating || rating || ""}</p>
    </div> /* 117-1 added hoverRating to the conditional expression to implement hover star effect  */
  );
} // 115

function Star({ onRate, fillStarFlag, onHover, onMouseLeaveProp, color, fontSize})  /* 119-1 color and size props passed to change color and size of stars */{
  const starStyle = {
    width: `${fontSize}px`, /* 119-1 */
    height: `${fontSize}px`, /* 119-1 */
    display: "block",
    cursor: "pointer",
    
  };
  return (
    <span role="button" style={starStyle} onClick={onRate} onMouseEnter={onHover} onMouseLeave={onMouseLeaveProp}>
      {fillStarFlag ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill= {color} stroke= {color}> {/* 119-1 color prop added */}
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={color}> {/* 119-1 color prop added */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span> // 116 span and svg added
  );
} // 116 make each star a component using SVG CODES and CSS codes from resources

/*
FULL STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="#000"
  stroke="#000"
>
  <path
    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
  />
</svg>


EMPTY STAR

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="#000"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="{2}"
    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
  />
</svg>

*/
