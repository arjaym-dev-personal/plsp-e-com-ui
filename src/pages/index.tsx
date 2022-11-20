import { Outlet } from "react-router-dom";
import Layout from "layout/Layout";

const LandingPage = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

export default LandingPage;
