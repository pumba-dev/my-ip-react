import Header from "./components/header";
import MainContainer from "./components/main-container";
import UserDataContainer from "./components/user-data-container";

export default function App() {
  return (
    <>
      <Header></Header>
      <MainContainer>
        <UserDataContainer></UserDataContainer>
      </MainContainer>
    </>
  );
}
