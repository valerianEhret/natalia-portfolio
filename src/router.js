import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./pages/TheHome";
import MyProjects from "./pages/MyProjects";
import AboutMe from "./pages/AboutMe";
import MyPhoto from "./pages/MyPhoto";
import MyVideo from "./pages/MyVideo";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";
import ProjectFive from "./pages/ProjectFive";
import NotFound from "./pages/NotFound";
import DatenSchutz from "./pages/DatenSchutz";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/portfolio", redirect: "/home" },
    { path: "/home", component: TheHome },

    {
      path: "/projects",
      component: MyProjects,
      redirect: "/projects/photo",
      children: [
        {
          path: "/projects/photo",
          component: MyPhoto,
          children: [
            { path: "/projects/photo/project1", component: ProjectOne },
            { path: "/projects/photo/project2", component: ProjectTwo },
            { path: "/projects/photo/project3", component: ProjectThree },
          ],
        },
        {
          path: "/projects/video",
          component: MyVideo,
          children: [
            { path: "/projects/video/project4", component: ProjectFour },
            { path: "/projects/video/project5", component: ProjectFive },
          ],
        },
      ],
    },
    { path: "/about", component: AboutMe },
    { path: "/datenschutzerklaerung", component: DatenSchutz },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
