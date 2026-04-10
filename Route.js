const Router = {
  routes: {},

  init() {
    window.onpopstate = this.handleRoute.bind(this);
    this.handleRoute();
  },

  register(path, callback) {
    this.routes[path] = callback;
  },

  navigate(path) {
    history.pushState({}, "", path);
    this.handleRoute();
  },

  handleRoute() {
    const path = location.pathname;

    // exact match
    if (this.routes[path]) {
      this.routes[path]();
      return;
    }

    // dynamic route: /edit/:id
    if (path.startsWith("/edit/")) {
      const id = path.split("/")[2];
      if (this.routes["/edit/:id"]) {
        this.routes["/edit/:id"](id);
      }
      return;
    }

    // default route
    if (this.routes["/"]) {
      this.routes["/"]();
    }
  }
};

export default Router;