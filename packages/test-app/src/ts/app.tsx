import * as React from "react";
import "./app.less";
import { mult, pow } from "../utils";
import axios from "axios";
import VConsole from "vconsole";

import HelloWorld from '../../../components/src/test/hello-world'

const vConsole = new VConsole();

// 需要放 index.d.ts 文件到根目录并在 tsconfig
// includes 里引入才能解决 vscode 报错
import { useRef, useState } from "react";

// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault();
// }, {
//   passive: false
// });

enum PageState {
  Normal = 0,
  ShouldRefreshAfterEnd = 1,
  shouldGotoNextAfterEnd = 2,
}
class App extends React.Component {

  render() {
    return (
      <div className="container">
        <HelloWorld/>
      </div>
    );
  }
}

export default App;
