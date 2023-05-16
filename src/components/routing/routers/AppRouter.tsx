import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SampleView } from "../../views/SampleView";
import { SampleGuard } from "../routeProtectors/SampleGuard";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <SampleGuard>
                        <SampleView />
                    </SampleGuard>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
