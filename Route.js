// const Router= {
//     init : ()=>{
//         document.getElementById('create-task',(e)=>{
//             e.preventDefault()
//             // update the router 
//         })
//     },
//     nav : ()=>{

//     }
// }

// function handleRoute() {
//   const path = location.pathname;

//   if (path === "/create") 
//     {

//     createModalBtnEle.classList.remove('hide')
//     editModalBtnEle.classList.add('hide')
//     deleteModalBtnEle.classList.add('hide')

//     modalEle.classList.add('show');

//   } 
//   else 
//     {
//         modalEle.classList.remove('show')
//     }

//   // Edit route example
//   if (path.startsWith("/edit/")) {
//     const id = path.split("/")[2];
//     modal.classList.remove("hidden");

//     console.log("Editing ID:", id);
//   }
// }

// function openRoute(path)
// {
//     history.pushState({},'',path)
//     handleRoute()
// }


// function closeRoute()
// {
//     history.pushState({},'','/')
//     handleRoute()
// }

// // export default Router
// export {openRoute,closeRoute}


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