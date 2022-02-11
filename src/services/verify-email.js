// eslint-disable-next-line
const PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const verifyEmail = (email) => PATTERN.test(email);

export default verifyEmail;

/*
SOURCES:
https://www.w3resource.com/javascript/form/email-validation.php
https://tools.ietf.org/html/rfc3696#page-5
*/
