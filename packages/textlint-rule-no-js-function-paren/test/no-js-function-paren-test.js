const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const noFunctionParen = require("../src/no-js-function-paren");
// ruleName, rule, { valid, invalid }
tester.run("no-js-function-paren", noFunctionParen, {
    valid: [
        "()",
        "関数",
        "`fn`関数",
        "`fn` function",
        "`fn` function",
        "`fn` method",
        "`fn(name);`", // example like code is ok1
        "`var x = fn();", // example like code is ok1
        // allow
        {
            text: "`Symbol()`",
            options: {
                allow: ["Symbol"]
            }
        },
        // allow method
        {
            text: "`fn.method()`",
            options: {
                allow: ["fn.method"]
            }
        }
    ],
    invalid: [
        {
            text: "`fn()` is bad",
            errors: [
                {
                    message: "`fn()` should be written `fn`.",
                    line: 1,
                    column: 1
                }
            ]
        },
        {
            text: "`関数()` is bad",
            errors: [
                {
                    message: "`関数()` should be written `関数`.",
                    line: 1,
                    column: 1
                }
            ]
        },
        // multiple match in multiple lines
        {
            text: "`fn()`\n\nThis is `obj.method()`",
            errors: [
                {
                    message: "`fn()` should be written `fn`.",
                    line: 1,
                    column: 1
                },
                {
                    message: "`obj.method()` should be written `obj.method`.",
                    line: 3,
                    column: 9
                }
            ]
        }
    ]
});