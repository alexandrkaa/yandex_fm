const range = (start, stop, step) => {
  let _start, _stop, _step;
  const result = [];

  _start = start;
  _stop = stop;
  _step = step;

  if (!_stop) {
    _stop = _start;
    _start = 0;
  }

  if (!_step) {
    if (_start < 0) {
      _step = -1;
    } else {
      _step = 1;
    }
  }

  if (_start > _stop) {
    reverse = true;
  }

  // console.log(_start, _stop, _step);

  while (_start < _stop) {
    result.push(_start);
    _start += _step;
  }

  return result;
};
