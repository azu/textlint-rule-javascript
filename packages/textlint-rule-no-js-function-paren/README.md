# textlint-rule-no-js-function-paren

Not to use `fn()` style in inline `Code`.

OK:

    `fn` function
    `object#method`メソッド

NG:

    `fn()`
    `object#method()`
    `object.method()`


## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-no-js-function-paren

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "no-js-function-paren": true
    }
}
```

Via CLI

```
textlint --rule no-js-function-paren README.md
```


## Options

- `allow`: `string[]`
    - A collection of allow function/method name

Allow to use `Symbol()`

```json
{
    "rules": {
        "no-js-function-paren": {
            "allow": ["Symbol"]
        }
    }
}
```

## Changelog

See [Releases page](https://github.com/azu/textlint-rule-no-js-function-paren/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/textlint-rule-no-js-function-paren/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
