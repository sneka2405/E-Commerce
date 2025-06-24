import React from 'react'
import{Routes,Route} from 'react-router-dom'
import { Categories } from './categories'
import { Boatpersonalization } from './boatpersonalization'
import { Giftwithboat } from './giftwithboat'
import { Corporateorder } from './corporateorder'
import { More } from './more'
import { Home } from './home'
export const Router = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/boatpersonalization" element={<Boatpersonalization/>}/>
        <Route path="/giftwithboat" element={<Giftwithboat/>}/>
        <Route path="/corporateorder" element={<Corporateorder/>}/>
        <Route path="/more"element={<More/>}/>
        </Routes>
    </div>
  )
}