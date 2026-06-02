function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = e.parameter || {};

    var createdAt = safeValue(data.createdAt) || new Date().toISOString();
    var name = safeValue(data.name);
    var email = safeValue(data.email);
    var message = safeValue(data.message);
    var pageUrl = safeValue(data.pageUrl);
    var userAgent = safeValue(data.userAgent);

    sheet.appendRow([
      createdAt,
      name,
      email,
      message,
      pageUrl,
      userAgent
    ]);

    return jsonResponse({
      ok: true,
      message: 'Message saved successfully.'
    });
  } catch (error) {
    return jsonResponse({
      ok: false,
      message: 'Could not save message.',
      error: error && error.message ? error.message : String(error)
    });
  }
}

function safeValue(value) {
  return value ? String(value).trim() : '';
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
