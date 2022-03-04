// import React from "react";
// import { useTranslation } from "react-i18next";

// function Home() {
//   const { t } = useTranslation(["home"]);
//   return (
//     <div className="container mt-5">
//       <h1 className="text-center">{t("home")}</h1>
//       {/* <h1 className="text-center">home</h1> */}
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import data from "../data";
function Home() {
  const [title, setTitle] = useState(data);

  return (
    <>
      <div className="text-center text-dark">
        <h1>Home</h1>
      </div>
      {title.map((info) => {
        const { id, title, description } = info;
        return (
          <div key={id} className="container mt-5 col-9 col-md-6">
            <h1>{title}</h1>
            <p className="font">{description}</p>
          </div>
        );
      })}
    </>
  );
}

export default Home;
