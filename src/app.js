import MainPage from "./pages/mainPage";
import TestPage from "./pages/testPage";
import ResultPage from "./pages/resultPage";

import { Router } from "./utils/index";

export default class App {
  constructor(props) {
    this.props = props;
  }

  setup() {
    const { el } = this.props;

    const router = new Router({
      "/": MainPage,
      "/test": TestPage,
      "/result": ResultPage,
    });

    router.init(el);
  }
}
