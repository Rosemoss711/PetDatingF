import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Login from "../components/header/Login";

const HeaderPage = () => {
  const [rs, setRs] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/login", {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    })
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        setRs(res);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(rs);
  return (
    <div>
      {/* {rs.map((item) => (
        <Header key={item} item={item} />
      ))} */}
      <Header key={rs} item={rs} />
    </div>
  );
};

export default HeaderPage;
