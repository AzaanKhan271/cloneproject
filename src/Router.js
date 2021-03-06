import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import MainPage from "./MainPage";





const Routes = () => {
    return (
        <>
            <Router>
                <Route path="/" exact  component={MainPage} />
                
                 <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
                {/* <Route path="" component={} />
                <Route path="" component={} />
                <Route path="" component={} />
                <Route path="" component={} />
                <Route path="" component={} /> */}
                {/* </div> */}
            </Router>
        </>
    )
}
export default Routes