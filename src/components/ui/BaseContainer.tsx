import { Content } from "antd/lib/layout/layout";
import { FCC } from "../@def";

export const BaseContainer: FCC<{}> = ({children}) => {
    return <Content>{children}</Content>;
};

export default BaseContainer;
