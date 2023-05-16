import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SampleView } from "../../views/SampleView";
import { SampleGuard } from "../routeProtectors/SampleGuard";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SampleGuard/>}>
                    <Route path='/' element={<SampleView />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
