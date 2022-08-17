import * as React from "react";
import "./messagePopupStyle.scss";
import Parser from "html-react-parser";

interface IShow {
  show: boolean;
  msg: string;
  handleOnClick: any;
}

export class MessagePopup extends React.Component<IShow> {
  public state: IShow = {
    show: false,
    msg: "",
    handleOnClick: () => {
      alert("lilly");
    }
  };

  public render(): JSX.Element | null {
    return !this.props.show ? null : (
      <>
        <div className="modal-background" />
        <div className="modal">
          <div className="modal-body">
            <div className="modal-Title">
              <div className="centerAlign">
                <div>
                  <h3>Message</h3>
                </div>
                <div className="rightAlign" onClick={this.props.handleOnClick}>
                  <div id="mdiv">
                    <div className="mdiv">
                      <div className="md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modelButtonClass">{Parser(this.props.msg)}</div>
            <div className="modelButtonClass">
              <button type="button" onClick={this.props.handleOnClick}>
                OK
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
