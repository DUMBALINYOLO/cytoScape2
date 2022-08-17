// Modified code from: https://github.com/Legitcode/modal
import React, { useEffect, useState } from "react";
import styles from "./modalStyles";

// tslint:disable-next-line: variable-name
export const Modal = props => {
  const {
    closeOnOuterClick,
    show,
    onClose,
    containerClassName,
    style,
    className
  } = props;

  let opacity = 0;
  let display = "block";
  let visibility = "hidden";

  if (show) {
    opacity = 1;
    display = "block";
    visibility = "visible";
  }

  const [state, setState] = useState<any>({
    opacity,
    display,
    visibility,
    show: show
  });

  useEffect(() => {
    if (show === true) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [show]);

  const fadeIn = () => {
    setState({
      display: "block",
      visibility: "visible",
      show: true,
      opacity: 1
    });
  };

  const fadeOut = () => {
    setState({ opacity: 0, show: false });
  };

  const hideOnOuterClick = event => {
    if (closeOnOuterClick === false) {
      return;
    }
    if (event.target.dataset.modal && onClose instanceof Function) {
      onClose(event);
    }
  };

  if (!state.show) {
    return null;
  }
  let modalStyle, containerStyle;
  // completely overwrite if they use a class
  if (className) {
    modalStyle = style;
  } else {
    modalStyle = Object.assign({}, styles.modal, style);
    containerStyle = Object.assign({}, styles.container, containerStyle);
  }
  return (
    <div
      {..._filteredProps(props)}
      style={modalStyle}
      onClick={hideOnOuterClick}
      data-modal="true"
    >
      <div className={containerClassName} style={containerStyle}>
        {props.children}
      </div>
    </div>
  );
};

const _filteredProps = props => {
  const filtered = Object.assign({}, props);
  [
    "containerStyle",
    "containerClassName",
    "closeOnOuterClick",
    "show",
    "onClose"
  ].forEach(p => {
    delete filtered[p];
  });
  return filtered;
};
