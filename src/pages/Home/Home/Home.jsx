import Banner from "../Banner/Banner";
import TrendingCollection from "../TrendingCollection/TrendingCollection";
import TopCreators from "../TopCreators/TopCreators";
import BrowseCategory from "../BrowseCategory/BrowseCategory";
import HowItWorks from "../HowItWorks/HowItWorks";
import DiscoverMoreNFTs from "../DiscoverMoreNFTs/DiscoverMoreNFTs";
import WeeklyDigest from "./WeeklyDigest/WeeklyDigest";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TrendingCollection></TrendingCollection>
           <TopCreators></TopCreators>
           <BrowseCategory></BrowseCategory>
           <DiscoverMoreNFTs></DiscoverMoreNFTs>
           <HowItWorks></HowItWorks>
           <WeeklyDigest></WeeklyDigest>
        </div>
    );
};

export default Home;