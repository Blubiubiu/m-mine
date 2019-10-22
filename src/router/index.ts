import Vue from "vue";
import Router from "vue-router";
import Routes from "./module/routes";

Vue.use(Router);
let router: any;

router = new Router({
  routes: Routes,
  mode: "history"
});


router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
