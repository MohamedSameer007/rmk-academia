
import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import PageLayout from './layouts/PageLayout'
import Home from './pages/Home'
import ThirdYearLayout from './layouts/ThirdYearLayout'
import ItThird from './years/3year/ItThird'
import CseThird from './years/3year/CseThird'
import AidsThird from './years/3year/AidsThird'
import EceThird from './years/3year/EceThird'
import FirstYearLayout from './layouts/FirstYearLayout'
import CseFirst from './years/1year/CseFirst'
import AidsFirst from './years/1year/AidsFirst'
import EceFirst from './years/1year/EceFirst'
import ItLayout from './UserLayout/1year/ItLayout'
import ItOne from './Users/1year/Itone'
import { singleuserloader, userloader } from './utils/one/ItUser'
import ItOneInfo from './info/oneInfo/ItOneInfo'
import SecondYearLayout from './layouts/SecondYearLayout'
import ItSecond from './years/2year/ItSecond'
import CseSecond from './years/2year/CseSecond'
import AidsSecond from './years/2year/AidsSecond'
import EceSecond from './years/2year/EceSecond'
import FourthYearLayout from './layouts/FourthYearLayout'
import ItFourth from './years/4year/ItFourth'
import CseFourth from './years/4year/CseFourth'
import AidsFourth from './years/4year/AidsFourth'
import EceFourth from './years/4year/EceFourth'


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<PageLayout />}>
      <Route index element={<Home />} />

      <Route path='first' element={<FirstYearLayout />}>
        <Route path='itfirst' element={<ItLayout />}>
          <Route index element={<ItOne />} loader={userloader} />
          <Route path=":id" element={<ItOneInfo />} loader={singleuserloader} />
        </Route>
        <Route path='csefirst' element={<CseFirst />} />
        <Route path='aidsfirst' element={<AidsFirst />} />
        <Route path='ecefirst' element={<EceFirst />} />
      </Route>

      <Route path='second' element={<SecondYearLayout />}>
        <Route path='itsecond' element={<ItSecond />} />
        <Route path='csesecond' element={<CseSecond />} />
        <Route path='aidssecond' element={<AidsSecond />} />
        <Route path='ecesecond' element={<EceSecond />} />
      </Route>

      <Route path='third' element={<ThirdYearLayout />}>
        <Route path='itthird' element={<ItThird />} />
        <Route path='csethird' element={<CseThird />} />
        <Route path='aidsthird' element={<AidsThird />} />
        <Route path='ecethird' element={<EceThird />} />
      </Route>

      <Route path='fourth' element={<FourthYearLayout />}>
        <Route path='itfourth' element={<ItFourth />} />
        <Route path='csefourth' element={<CseFourth />} />
        <Route path='aidsfourth' element={<AidsFourth />} />
        <Route path='ecefourth' element={<EceFourth />} />
      </Route>
    </Route>
  ),
  {
    basename: '/rmk-academia' // ✅ ADD THIS LINE
  })
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
