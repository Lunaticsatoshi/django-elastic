import riot from "riot";
import "riot-hot-reload";
import './tags/hello.tag';

document.addEventListener("DOMContentLoaded", () => {
  riot.mount("app", {});
});
