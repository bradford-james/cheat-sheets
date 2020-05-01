const http = require('./https-common');

class SheetDataService {
  getSheet(cli) {
    return http.get(`/sheet?name=${cli}`);
  }
  getSheetsList() {
    return http.get('/sheets');
  }
}

module.exports = new SheetDataService();
