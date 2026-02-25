// app/api/endpoints/route.ts

import { BASE_URL } from "@/lib/api";
import { NextResponse } from "next/server";

// 🔥 Base URL

// 🔥 Correct endpoints (NO /api/)
export const API = {
  CATEGORY: {
    LIST: `${BASE_URL}/category/`,
    DETAIL: (id: number | string) => `${BASE_URL}/category/${id}/`,
  },

  COURSES: {
    LIST: `${BASE_URL}/course/`,
    DETAIL: (id: number | string) => `${BASE_URL}/course/${id}/`,
  },

  FAQS: {
    LIST: `${BASE_URL}/faqs/`,
    DETAIL: (id: number | string) => `${BASE_URL}/faqs/${id}/`,
  },

  MODULES: {
    LIST: `${BASE_URL}/modules/`,
    DETAIL: (id: number | string) => `${BASE_URL}/modules/${id}/`,
  },

  TOPICS: {
    LIST: `${BASE_URL}/topics/`,
    DETAIL: (id: number | string) => `${BASE_URL}/topics/${id}/`,
  },

  BANNERS: {
    LIST: `${BASE_URL}/banners/`,
    DETAIL: (id: number | string) => `${BASE_URL}/banners/${id}/`,
  },

  TESTIMONIALS: {
    LIST: `${BASE_URL}/testimonials/`,
    DETAIL: (id: number | string) => `${BASE_URL}/testimonials/${id}/`,
  },

  REGISTER_MSG: {
    LIST: `${BASE_URL}/register_msg/`,
    DELETE: (id: number | string) => `${BASE_URL}/register_msg/${id}/`,
  },

  ARTICLES: {
    LIST: `${BASE_URL}/articles/`,
    DETAIL: (id: number | string) => `${BASE_URL}/articles/${id}/`,
  },
};

// 🔥 API Route handler
export async function GET() {
  try {
    return NextResponse.json(API);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load endpoints" },
      { status: 500 }
    );
  }
}
