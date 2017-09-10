function getTimeStamp () {
  var date = new Date();
  var pad = function (time) { return (time.length === 2 ? time : ("0" + time)); };
  return ((pad(date.getHours().toString())) + ":" + (pad(
    date.getMinutes().toString()
  )) + ":" + (pad(date.getSeconds().toString())) + ":" + (pad(date.getMilliseconds())))
}

function reactSetStateInfo (React) {
  var setState = React.Component.prototype.setState;
  React.Component.prototype.setState = function (nextState) {
    console.group(getTimeStamp(), this.constructor.name);
    console.log('props', this.props);
    console.log('state', this.state);
    console.log(
      'nextState',
      typeof nextState === 'function' ? nextState(this.state) : nextState
    );
    console.trace();
    console.groupEnd(this.constructor.name);
    return setState.apply(this, arguments)
  };
}

export default reactSetStateInfo;
