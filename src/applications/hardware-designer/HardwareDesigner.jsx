import AppBase from "../../components/AppBase";
import SplitPane from "react-split-pane";

export function HardwareDesigner () {
    return (
        <AppBase>
            <SplitPane split="vertical" minSize={150} defaultSize = {250} primary="first">
            <div className="d-flex">
                <h1 className="m-auto h5">Hardware Details</h1>
            </div>

            <div className="d-flex">
                <h1 className="m-auto h5">Hardware Environment</h1>
            </div>
            </SplitPane>
        </AppBase>
    );
  }