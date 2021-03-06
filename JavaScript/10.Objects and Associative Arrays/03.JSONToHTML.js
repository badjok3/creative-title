function JSONToHTML(rows) {
    rows = JSON.parse(rows);
    let html = '<table>\n';
    html += '<tr>';
    let keys = [];
    for (let key of Object.keys(rows[0])) {
        html += `<th>${htmlEscape(key)}</th>`;
        keys.push(htmlEscape(key));
    }
    html += '</tr>\n';

    for (let obj of rows) {

        html += '<tr>';
        for (let i = 0; i < keys.length; i++) {
            html += `<td>${htmlEscape(obj[`${keys[i]}`])}</td>`;
        }
        html += '</tr>\n';
    }

    return html + '</table>';

    function htmlEscape(str) {
        return str.toString()
            .replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

console.log(JSONToHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));