import { RestApi } from "../api/restApi";

const _api = new RestApi();

export const useApi = () => {
    return _api;
};