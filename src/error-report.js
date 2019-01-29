
function jsReport(err) {

};

window.onerror = (msg, url, lineNo, columnNo, error) => {
  const string = msg.toLowerCase();
  const substring = 'script error';
  if (string.indexOf(substring) > -1) {
    console.error('Script Error: See Browser Console for Detail');
  } else {
    // const message = {
    //   Message: msg,
    //   URL: url,
    //   Line: lineNo,
    //   Column: columnNo,
    //   'Error object': error,
    // };
    jsReport({
      value: msg,
      position: [
        'Message: ' + msg,
        'URL: ' + url,
        'Line: ' + lineNo,
        'Column: ' + columnNo,
        'Error object: ' + JSON.stringify(error),
      ],
    });
  }
  return false;
};

export default jsReport;
