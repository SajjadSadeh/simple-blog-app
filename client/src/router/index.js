// 1. Define route components.
// These can be imported from other files
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewBlog from "../views/NewBlog.vue";
import SingleBlog from "../views/SingleBlog.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/newBlog", component: NewBlog, name: "newBlog" },
  { path: "/single-blog/:id", component: SingleBlog, name: "SingleBlog" },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
