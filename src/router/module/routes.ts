const Home = () => import("@/views/Home.vue");
const Resource = () => import("@/views/Resource.vue");

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/resource",
    name: "resource",
    component: Resource
  }
];
