// LICENSE : MIT
"use strict";

const functionWithParenthesisRegExp = /^(.+)\(\)$/;
const isFunctionWithParenthesis = (code) => {
    return functionWithParenthesisRegExp.test(code);
};
const getFunctionName = (code) => {
    const [all, name] = code.match(functionWithParenthesisRegExp);
    return name;
};
module.exports = function(context) {
    const {Syntax, RuleError, report, getSource} = context;
    return {
        [Syntax.Code](node){
            const code = node.value || getSource(node);
            if (!isFunctionWithParenthesis(code)) {
                return;
            }
            const name = getFunctionName(code);
            report(node, new RuleError(`\`${code}\` should be written \`${name}\`.`));
        }
    }
};