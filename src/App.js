import './App.css';
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App =()=> {

  const [progress,setProgress] = useState(0)
  const [query, setQuery]=useState('');

    return (
        <>
        <Router>
        <LoadingBar
          height= {3}
          color='#f11946'
          progress={progress}
        />
        <NavBar handleSearch = {query => setQuery(query)} />
          <Routes>
            <Route exact path='/NewsDaily/search' element={<News setProgress={setProgress} key={query} category="" query={query} />}/>
            <Route exact path='/NewsDaily/' element={<News setProgress={setProgress} key="general" category="top-headlines"  />}/>
            <Route exact path='/NewsDaily/Business'element={<News setProgress={setProgress} key="business" category='business'  />}/>
            <Route exact path='/NewsDaily/Entertainment'element={<News setProgress={setProgress} key="entertainment" category="entertainment"  />}/>
            <Route exact path='/NewsDaily/Health'element={<News setProgress={setProgress} key="health" category="health"  />}/>
            <Route exact path='/NewsDaily/Sports'element={<News setProgress={setProgress} key="sports" category="sports" />}/>
            <Route exact path='/NewsDaily/Technology'element={<News setProgress={setProgress} key="Technology" category="technology"  />}/>
            <Route exact path='/NewsDaily/Science'element={<News setProgress={setProgress} key="Science" category="science" />}/>
          </Routes>
        </Router>
        </>     
    )
  }
  
  export default App;