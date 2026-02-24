// src/lib/api.ts

// 🔥 Base URL (backend)
export const BASE_URL = "https://codingcloud.pythonanywhere.com";

// 🔥 All API endpoints
export const API = {
  CATEGORY: {
    LIST: `${BASE_URL}/category/`,
    DETAIL: (id: number | string) => `${BASE_URL}/category/${id}/`,

        TOTALS: `${BASE_URL}/category_totals/`,

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
    DELETE: (id: number | string) =>
      `${BASE_URL}/register_msg/${id}/`,
  },

  ARTICLES: {
    LIST: `${BASE_URL}/articles/`,
    DETAIL: (id: number | string) => `${BASE_URL}/articles/${id}/`,
  },
};
