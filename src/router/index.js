import HelloWorld from "../components/HelloWorld.vue";
import UserCard from "../components/UserCard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  },
  {
    path: "/user",
    name: "user",
    component: UserCard,
  },
];

export default routes;
