import React from "react";
import MainNavbar from "../UI/MainNavbar";
import Header from "../UI/Header";

const DeliveryComplianceDashboard = () => {
    return (
        <>
            <MainNavbar />
            <Header />
            <iframe
                className="iframe"
                title="(Delivery compliance db)project performance"
                width="1140"
                height="541.25"
                src={`https://app.powerbi.com/reportEmbed?reportId=6188651a-239c-457f-a724-9824e62d64a4&autoAuth=true&ctid=cebfb7e7-c2b9-4fbf-ac29-061b9e868fcf`}
                frameBorder={0}
                allowFullScreen={true}
            >
            </iframe>
        </>
    )
}

export default DeliveryComplianceDashboard;