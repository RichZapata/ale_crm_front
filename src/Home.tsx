import { useEffect } from "react";
import { useHeaderTitle } from "./hooks/useHeaderTitle";

const Home = () => {
  const { setTitle } = useHeaderTitle(); 

  useEffect(() => {
    setTitle("Home"); 
  }, []); 
	return <div>Home</div>;
};

export default Home;
