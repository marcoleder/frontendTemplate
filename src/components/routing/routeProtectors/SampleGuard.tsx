import PropTypes from "prop-types";
import { redirect } from "react-router-dom";

export const SampleGuard = (props: any) => {
    if (sessionStorage.getItem("sample")) {
        return redirect("/");
    }
    return props.children;
};

SampleGuard.propTypes = {
    children: PropTypes.node,
};