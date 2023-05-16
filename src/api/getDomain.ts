import { isProduction } from "./isProduction";

export function getDomain(): string {
    const devUrl = "http://localhost:8080";
    const prodUrl = "http://localhost:8080";

    return isProduction() ? prodUrl : devUrl;
}
