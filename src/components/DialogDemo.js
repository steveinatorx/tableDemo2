import 'rc-dialog/assets/index.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog';

export const DialogDemo = React.createClass({
  getInitialState() {
    return {
      visible: false,
      width: 400,
      destroyOnClose: true,
      center: true,
    };
  },

  onClick(e) {
    this.setState({
      mousePosition: {
        x: e.pageX,
        y: e.pageY,
      },
      visible: true,
    });
  },

  onClose(e) {
    // console.log(e);
    this.setState({
      visible: false,
    });
  },

  onDestroyOnCloseChange(e) {
    this.setState({
      destroyOnClose: e.target.checked,
    });
  },

  changeWidth() {
    this.setState({
      width: this.state.width === 600 ? 800 : 600,
    });
  },

  center(e) {
    this.setState({
      center: e.target.checked,
    });
  },

  render() {
    let dialog;
    if (this.state.visible || !this.state.destroyOnClose) {
      const style = {
        width: this.state.width,
      };
      let wrapClassName = '';
      if (this.state.center) {
        wrapClassName = 'center';
      }
      dialog = (
        <Dialog
          visible={this.state.visible}
          wrapClassName={wrapClassName}
          animation="zoom"
          maskAnimation="fade"
          onClose={this.onClose}
          style={style}
          mousePosition={this.state.mousePosition}
        >
          <input />
          <p>basic modal</p>
          <button onClick={this.changeWidth}>change width</button>
          <div style={{ height: 200 }}></div>
        </Dialog>
      );
    }
    return (
      <div style={{ width: '90%', margin: '0 auto' }}>
        <style>
          {
            `
            .center {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            `
          }
        </style>
        <p>
          <button
            className="btn btn-primary"
            onClick={this.onClick}
          >
            show dialog
          </button>

          &nbsp;
          <label>destroy on close:
            <input
              type="checkbox"
              checked={this.state.destroyOnClose}
              onChange={this.onDestroyOnCloseChange}
            />
          </label>

          &nbsp;
          <label>center
            <input
              type="checkbox"
              checked={this.state.center}
              onChange={this.center}
            />
          </label>
        </p>
        {dialog}
      </div>
    );
  }
});
