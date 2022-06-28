import Images from "./Image";

const sidebarContent = [
    {
        title: {
            image: Images.Adminicon,
            text: "Language  Acad"
        },
        navOne: [
            {
                image: Images.chartIcon,
                text: "Charts",
                route:"chart"
            },
            {
                image: Images.referralIcon,
                text: "Referrals",
                route:"referral"

            },
            {
                image: Images.transactionIcon,
                text: "Transcations",
                route:"transaction"
            },
            {
                image: Images.payoutIcon,
                text: "Payouts",
                route:"payout"
            }
        ],
        navTwo: [
            {
                image: Images.settingIcon,
                text: "Settings",
                route:"/"
            },
            {
                image: Images.homeIcon,
                text: "Home",
                route:"/"
            },
        ]
    }
]

export default sidebarContent