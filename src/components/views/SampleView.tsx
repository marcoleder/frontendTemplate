import { useEffect } from "react";
import BaseContainer from "../ui/BaseContainer";

export const SampleView = () => {

    useEffect(() => {
       console.log("mounted");
    }, []);
    
    return (
        <BaseContainer>
            <p>Welcome</p>
        </BaseContainer>
    );
};