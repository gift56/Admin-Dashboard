import React from "react";
import Images from "./Image";
import { FaCog, FaAward, FaUsers, FaLightbulb, FaTicketAlt, FaChartPie } from "react-icons/fa";

const sidebarContent = [
    {
        title: {
            image: Images.Adminicon,
            text: "Language  Acad"
        },
        navOne: [
            {
                text: "Charts",
                route: "chart",
                Icon: <FaChartPie />
            },
            {
                text: "Referrals",
                route: "referral",
                Icon: <FaTicketAlt />
            },
            {
                text: "Transcations",
                route: "transaction",
                Icon: <FaLightbulb />
            },
            {
                text: "Payouts",
                route: "payout",
                Icon: <FaUsers />
            }
        ],
        navTwo: [
            {
                text: "Settings",
                route: "/",
                Icon: <FaCog />
            },
            {
                text: "Home",
                route: "/",
                Icon: <FaAward />
            },
        ]
    }
]

export default sidebarContent