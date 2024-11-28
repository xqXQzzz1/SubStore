const yaml = ProxyUtils.yaml.safeLoad($files[0]);

// 替换 URL 的函数
function replaceUrlKey(obj, oldUrl, newUrl) {
  for (let key in obj) {
    if (
      key === "url" &&
      typeof obj[key] === "string" &&
      obj[key].includes(oldUrl)
    ) {
      obj[key] = obj[key].replace(new RegExp(oldUrl, "g"), newUrl);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      replaceUrlKey(obj[key], oldUrl, newUrl);
    }
  }
}

const oldUrl = "oldurl";
const newUrl = "http://new.url";

replaceUrlKey(yaml, oldUrl, newUrl);

$content = ProxyUtils.yaml.dump(yaml);
