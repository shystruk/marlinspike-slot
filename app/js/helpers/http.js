export const http = (url, callback, data, x) => {
    try {
        x = new(window.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
        x.open(data ? 'POST' : 'GET', url, 1);
        x.onreadystatechange = () => {
            x.readyState > 3 && callback && callback(x.responseText, x);
        };
        x.send(data);
    } catch (e) {
        window.console && console.log(e);
    }
};
