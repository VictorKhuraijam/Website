import {Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import HomePage from './pages/Home'


function App() {

  return (
    <>
      <ToastContainer />
			{/* <Cursor /> */}
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
    </>
  )
}

export default App
