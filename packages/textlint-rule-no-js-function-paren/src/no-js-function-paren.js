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

const defaultOptions = {
    /**
     * A collection of allowed function name
     */
    allow: []
};
module.exports = function(context, options) {
    const {Syntax, RuleError, report, getSource} = context;
    const allow = options.allow || defaultOptions.allow;
    return {
        [Syntax.Code](node){
            const code = node.value || getSource(node);
            if (!isFunctionWithParenthesis(code)) {
                return;
            }
            const name = getFunctionName(code);
            if (allow.indexOf(name) !== -1) {
                return;
            }
            report(node, new RuleError(`\`${code}\` should be written \`${name}\`.`));
        }
    }
};