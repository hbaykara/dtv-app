import Header from '../components/Header/Header';
import Hero from "../components/Hero/Hero";

const Layout = ({children, search, setSearch}) => {
  
  return (
    <>
      <Header search={search} setSearch={setSearch}/>
      <Hero />
      <main>{children}</main>
    </>
  );
};

export default Layout;