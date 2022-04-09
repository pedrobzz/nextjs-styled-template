import { useContext } from "react";
import { Title } from "../common/components/Title";
import AppContext from "../common/context/appContext";
import HomeLayout from "../common/layouts/HomeLayout";

const Home = (): JSX.Element => {
  const ctx = useContext(AppContext);
  return (
    <HomeLayout>
      <Title>My page</Title>
      <h3>Context Name: {ctx.name}</h3>
    </HomeLayout>
  );
};

export default Home;
