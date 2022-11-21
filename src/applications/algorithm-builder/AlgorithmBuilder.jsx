import AppBase from "../../components/AppBase";

import SplitPane from "react-split-pane";
import { useState } from "react";

export function AlgorithmBuilder (props) {
    
    
    return (
        <AppBase>
            

            <SplitPane split="vertical" minSize={150} defaultSize = {250} primary="first">
            <div className="d-flex">
                <h1 className="m-auto h5">Code Editor</h1>
                Count: {props.count}
            </div>

            <div className="d-flex">
                <h1 className="m-auto h5">Algorithm Environment</h1>
            </div>
            </SplitPane>
        </AppBase>
    );
  }