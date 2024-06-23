// Suppose we want to log a message with current time and an action. This can be used in production-code when a particular action (such as feature enhancement, or a bug fix is done).

function log(date, action, message) {
  console.log(`
    Time: ${date.getHours()}:${date.getMinutes()}
    Action: ${action.toUpperCase()}
    Message: ${message}
  `);
}

log(new Date(), "debug", "solve it instantly");

// Currying can be helpful to create a more dynamic log function and better utility
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
  };
}

const curriedLog = curry(log);
curriedLog(new Date(), "enhancement", "create a collapsable sidebar");
curriedLog(new Date())("docs", "add info about local setup");
curriedLog(new Date())("feature")("hide the navbar on scroll");
// we can call curriedLog() function with any date, action or message in normal, partial or full currying syle

// can we can create helper wrappers that can serve different pupose. Like logNow() which logs the provided action and message for the current time.
const logNow = curriedLog(new Date());
logNow("add test", "use jest to write e2e test");

// another helper function could be debugNow() that logs the provided message for "debugging" actions only.
const debugNow = logNow("debug");
debugNow("Add a type checking for the parameters in log()");
debugNow("API test is failing with all inputs");

// we can create helper for printing a given message for testing action only.
const testNow = logNow("add test");
testNow("For collapsable sidebar");
