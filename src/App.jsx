import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import data from "./data"
function App() {

  const dataMap = data.map((datas) => {
    return (
      <Content
      key={datas.id}
      // object from data.js that was refactored in a spread operator to save space
      {...datas}
      />
    )})

  return (
    <div className="App">
      <Navbar />
      <div className='content-container'>
        {dataMap}
      </div>
      
    </div>
  )
}

export default App
