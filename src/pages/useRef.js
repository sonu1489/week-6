import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  }, []);
  return (
    <>
      <form className="container mt-5 col-9 col-md-6" onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="text" ref={refContainer} />

          <button type="submit">submit</button>
        </div>
        <div className="mt-2" ref={divContainer}>
          <h5>hello world</h5>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
