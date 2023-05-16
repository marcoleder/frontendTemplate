import axios from "axios";
import { getDomain } from "./getDomain";

export const remote = axios.create({
    baseURL: getDomain(),
    headers: { "Content-Type": "application/json" },
});

export class RestApi {
    // SampleGetMapping
    async sampleGet() {
        const response = await remote.get("/url");
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else if (response.status === 409) {
            throw new Error("specificError");
        } else {
            throw new Error("genericError");
        }
    }

    // SamplePostMapping
    async samplePost(username: string, password: string) {
        const requestBody = JSON.stringify({ username, password });
        const response = await remote.post("/url", requestBody);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else if (response.status === 409) {
            throw new Error("specificError");
        } else {
            throw new Error("genericError");
        }
    }

    // SamplePutMapping
    async samplePut(Id: number) {
        const requestBody = Id;
        const response = await remote.put(`/url/${Id}`, requestBody);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else if (response.status === 409) {
            throw new Error("specificError");
        } else {
            throw new Error("genericError");
        }
    }
}