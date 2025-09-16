// src/action/fetchKomik.ts
// NOTE: this file is safe to import both on server and client.
// It chooses base URL depending on runtime (server = env, client = relative)

import axios from "axios";

const serverBase = (typeof process !== "undefined" && process.env && process.env.NEXT_MANGAZUNA_APIURL)
  ? process.env.NEXT_MANGAZUNA_APIURL
  : "http://localhost:3000/api/mangazuna";

// clientBase = relative => works in browser and avoids CORS/env issues
const clientBase = "/api/mangazuna";

const getBase = () => (typeof window === "undefined" ? serverBase : clientBase);

// Last updated (server or client safe)
export const fetchLastUpdated = async (page: number) => {
  const base = getBase();
  const res = await fetch(`${base}/lastupdated?page=${page || 1}`, { cache: "no-cache" });
  return res.json();
};

export const fetchMangaByAdvSearch = async (type: string, page: number) => {
  const base = getBase();
  const response = await axios.get(`${base}/advsearch`, { params: { page: page || 1, type } });
  return response.data;
};

export const fetchMangaAdvSearch = async (title: string) => {
  const base = getBase();
  const response = await axios.get(`${base}/advsearch`, { params: { title } });
  return response.data;
};

export const fetchDetail = async (id: string) => {
  const base = getBase();
  const res = await fetch(`${base}/details/${id}`, { cache: "no-cache" });
  return res.json();
};

export const fetchRead = async (id: string) => {
  const base = getBase();
  const res = await fetch(`${base}/read/${id}`, { cache: "no-cache" });
  return res.json();
};

export const fetchSearch = async (query: string) => {
  const base = getBase();
  const res = await fetch(`${base}/search?q=${encodeURIComponent(query)}`, { cache: "no-cache" });
  return res.json();
};
