const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
  const invalidEmails = emails
    .replace(/,\s*$/, "")  // remove last comma in string  
    .split(',')
    .map(email => email.trim())
    .filter(email => emailRegex.test(email) === false)
    .join();

  if (invalidEmails.length) {
    return `These email(s) are invalid: ${invalidEmails} `;
  }

  return;
};