import "../styles/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./main/Form/Form";
import Preview from "./main/Preview";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  // const [userSurname, setUserSurname] = useState("");

  const handleChangeValues = (value) => {
    setUserName(value);
    // console.log("escucho el input");
  };

  return (
    <>
      <Header />
      <main>
        <Form onChangeValues={handleChangeValues} />
        <Preview name={userName} />
      </main>
      <Footer />
    </>
  );
}

export default App;
