import { isProduction } from "./isProduction";

export function getDomain(): string {
    const devUrl = "http://localhost:3000";
    const prodUrl = "";

    return isProduction() ? prodUrl : devUrl;
}
