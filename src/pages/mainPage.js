export default class MainPage {
  render() {
    const container = document.createElement("div");
    const element = document.createElement("h1");
    element.innerText = "홈페이지 입니다.";

    const anchor = document.createElement("a");
    anchor.href = "/test";
    anchor.innerText = "상세페이지 이동";

    container.appendChild(anchor);
    container.appendChild(element);

    return container;
  }
}
