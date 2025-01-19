import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

function Userlayout() {
    return (
        <div>

            <div className="mainmainuser">
                <div className="headermains">
                    <Header />
                </div>
                <div className="portion">
                    <Outlet/>

                </div>
                <div className="footermains">
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default Userlayout
