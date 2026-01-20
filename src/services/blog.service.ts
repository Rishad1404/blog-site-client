import { env } from "@/env";

//* No Dynamic and No { cache: no-store } : SSG -> Static Page
//* { cache: no-store } : SSR -> Dynamic Page
//* next: { revalidate: 10 } : ISR -> Mix between static and dynamic

const API_URL = env.API_URL;
export const blogService = {
  getBlogPosts: async function () {
    try {
      const res = await fetch(`${API_URL}/posts`);
      const data = await res.json();

      // This is an example
      // if(data.success){
      // return
      // }

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};
