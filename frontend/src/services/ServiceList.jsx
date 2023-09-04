import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

const serviceData = [
    {
        imgUrl: "https://lh3.googleusercontent.com/gIYLAKX5iPgX_qaTZwKud6lI5HJpIvaIJdoUiiwLqG4kUAkdwDGaGwfjqDYt1bVdvD3CJM6kCUlV4lE22AzO9c6i0TwdKGdeGFRaXbLJ",
        title: "Adaptable Rentals",
        desc: "Most bookings are free to cancel or alter.",
    },

    {
        imgUrl: "https://lh3.googleusercontent.com/WjpqpChenxfR_RtvLapwTZxdOH9H3uaqXczSKcWYgtNm5PJ5eYIcTOvB_yC3XoDlQsynldIln-euopsMIyw9iYjg8NHckEqHsORgg3k",
        title: "No Extra Costs",
        desc: "Know exactly how much you're paying.",
    },

    {
        imgUrl: "https://lh3.googleusercontent.com/OZIV2TcUAK_6Mu0sIU4bR3P00qZHbHv27iR7Rv82pvwmqBQ4lLe2Ac04lO1vgDMgXCZLUjyYgngPjzuidK9bfgVuDKeDrbOrX6nNIakK",
        title: "Guaranteed Price Match",
        desc: "Have you found a better deal? We'll match the offer.",
    },
]

const ServiceList = () => {
    return <>
        {
            serviceData.map((item, index) => (
                <Col lg='4' key={index}>
                    <ServiceCard item={item}/>
                </Col>
            ))
        }
    </>
};

export default ServiceList;