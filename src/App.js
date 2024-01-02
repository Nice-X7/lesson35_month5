// Imports from App
import { Header } from "./components/Header"
import { Content } from "./components/Content"


// App
export const App = ({ database, setDatabace }) => {

  return (
    <div className="app">
      <Header data={database} setData={setDatabace} />
      <Content data={database} setData={setDatabace} />
    </div>
  )
}

