import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Settings from '../settings/Settings'
import Home from '../settings/Settings'
import Transaction from '../transaction/Transaction'
import Referral from '../referral/Referral'
import Chart from '../chart/Chart'
import Payout from '../payout/Payout'


const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Settings />} />
            <Route path='/' element={<Home />} />
            <Route path='transaction' element={<Transaction />} />
            <Route path='referral' element={<Referral />} />
            <Route path='chart' element={<Chart />} />
            <Route path='payout' element={<Payout />} />
        </Routes>
    )
}

export default Pages
