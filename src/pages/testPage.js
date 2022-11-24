export default class TestPage {
  render() {
    const container = document.createElement("div");
    const element = document.createElement("h1");
    element.innerText = "테스트 페이지 입니다.";

    const anchor = document.createElement("a");
    anchor.href = "/result";
    anchor.innerText = "결과 페이지로 이동";

    container.appendChild(anchor);
    container.appendChild(element);

    return container;
  }
}
