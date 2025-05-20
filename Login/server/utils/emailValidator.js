import dns from "dns";
import validator from "validator";

export function validateEmailFormat(email) {
  return validator.isEmail(email);
}

export function validateEmailDomain(email) {
  const domain = email.split("@")[1];
  return new Promise(resolve => {
    dns.resolveMx(domain, (err, addresses) => {
      resolve(!err && addresses && addresses.length > 0);
    });
  });
}
