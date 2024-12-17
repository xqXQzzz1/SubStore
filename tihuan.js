$content = ProxyUtils.yaml.dump(yaml);

$content = $content.replace(
  `
  Airport_01:
    type: http
    interval: 86400
    health-check:
      enable: true
      url: https://www.gstatic.com/generate_204
      interval: 43200
    proxy: 🟢 直连
    url: "oldurl"
`,
  `
  Airport_01:
    type: http
    interval: 86400
    health-check:
      enable: true
      url: https://www.gstatic.com/generate_204
      interval: 43200
    proxy: 🟢 直连
    url: "http://192.168.0.2:3001/CKg3abstVnOeRpm1aB4G/download/collection/aa?target=ClashMeta"
`
);

// const yaml = ProxyUtils.yaml.safeLoad($files[0]);

// // 替换 URL 的函数
// function replaceUrlKey(obj, oldUrl, newUrl) {
//   for (let key in obj) {
//     if (
//       key === "url" &&
//       typeof obj[key] === "string" &&
//       obj[key].includes(oldUrl)
//     ) {
//       obj[key] = obj[key].replace(new RegExp(oldUrl, "g"), newUrl);
//     } else if (typeof obj[key] === "object" && obj[key] !== null) {
//       replaceUrlKey(obj[key], oldUrl, newUrl);
//     }
//   }
// }

// const oldUrl = "oldurl";
// const newUrl = "http://192.168.0.2:3001/CKg3abstVnOeRpm1aB4G/download/collection/aa?target=ClashMeta";

// replaceUrlKey(yaml, oldUrl, newUrl);

// $content = ProxyUtils.yaml.dump(yaml);
