import { Box } from "@chakra-ui/react";
import Carousal from "../components/carousal/carousal";
import Categories from "../components/categories/categories";
import TopSelling from "../components/top-selling/top-selling";

const Home = ({cartCount, setCartCount}) => {

    return(
        <Box>
            <Carousal/>
            <Categories/>
            <TopSelling cartCount={cartCount} setCartCount={setCartCount}/>
        </Box>
    ) 
}

export default Home;