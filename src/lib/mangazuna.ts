export const NEXT_MANGAZUNA_APIURL = process.env.NEXT_MANGAZUNA_APIURL ??"http://localhost:3000/api/mangazuna";
export function getMangazunaBase() {
    return typeof window === "undefined" ? NEXT_MANGAZUNA_APIURL : "/api/mangazuna";
}
