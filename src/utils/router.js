class Router {
  constructor(routes) {
    if (!routes) {
      console.error("can not initialize routes, need routes!");
    }
    this.routes = routes;
  }

  init(rootElementId) {
    if (!rootElementId) {
      console.error("can not initialize Route, rootElementId is not defined!");
      return null;
    }
    this.rootElementId = rootElementId;
    this.routing(window.location.pathname);
    window.addEventListener("click", (e) => {
      /**앵커 태그 클릭했을 때 */
      if (e.target.tagName.toLoserCase() === "a") {
        e.preventDefault();
        this.routePush(e.target.href);
      }
    });
    /** 뒤로가기 */
    window.onpopstate = () => this.routing(window.location.pathname);
  }
  routePush(pathname) {
    window.history.pushState({}, null, pathname);
    this.routing(window.location.pathname);
  }

  routing(pathname) {
    const [_, routeName, ...param] = pathname.split("/");
    let page = "";
    if (this.routes[pathname]) {
      const component = new this.routes[pathname]();
      page = component.render();
    }
    if (page) {
      this.render(page);
    }
  }
  render(page) {
    const rootElement = document.querySelector(this.rootElementId);
    rootElement.innerHTML = "";
    rootElement.appendChild(page);
  }
}

export default Router;
