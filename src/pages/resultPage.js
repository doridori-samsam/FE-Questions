export default class ResultPage {
  render() {
    const container = document.createElement("div");
    const element = document.createElement("h1");
    element.innerText = "결과 페이지 입니다.";

    const anchor = document.createElement("a");
    anchor.href = "/";
    anchor.innerText = "메인 페이지로 이동";

    container.appendChild(anchor);
    container.appendChild(element);

    return container;
  }
}
