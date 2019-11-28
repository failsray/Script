var body = $response.body;
body = '\/*\n@supported 自己的QX设备ID\n*\/\n' + body;

$done(body);