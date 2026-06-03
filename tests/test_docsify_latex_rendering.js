const assert = require('node:assert/strict');

function setupDocsifyPlugin() {
  global.location = {
    hash: '',
    hostname: 'localhost',
    pathname: '/',
  };

  const noop = () => {};
  global.document = {
    body: {
      classList: {
        add: noop,
        remove: noop,
        contains: () => false,
      },
    },
    documentElement: {
      clientWidth: 1280,
    },
    head: {
      appendChild: noop,
    },
    addEventListener: noop,
    dispatchEvent: noop,
    createElement: () => ({
      classList: {
        add: noop,
        remove: noop,
        contains: () => false,
      },
      dataset: {},
      setAttribute: noop,
      appendChild: noop,
      remove: noop,
    }),
    querySelector: () => null,
    querySelectorAll: () => [],
  };

  global.window = {
    addEventListener: noop,
    innerWidth: 1280,
    marked: {
      getDefaults: () => ({}),
      setOptions: noop,
      parse: (text) => `<p>${text}</p>`,
      parseInline: (text) => text,
    },
  };

  const pluginPath = require.resolve('../app/docsify-plugin.js');
  delete require.cache[pluginPath];
  require(pluginPath);

  const hook = {
    beforeEach: noop,
    doneEach: noop,
  };
  const vm = {
    route: {
      file: 'README.md',
      path: '/',
    },
  };
  window.$docsify.plugins[0](hook, vm);
}

function testRenderMathSupportsCommonLatexDelimiters() {
  setupDocsifyPlugin();

  let receivedOptions = null;
  window.renderMathInElement = (el, options) => {
    receivedOptions = options;
  };

  window.DPRMarkdown.renderMathInEl({});

  assert.deepEqual(receivedOptions.delimiters, [
    { left: '$$', right: '$$', display: true },
    { left: '\\[', right: '\\]', display: true },
    { left: '$', right: '$', display: false },
    { left: '\\(', right: '\\)', display: false },
  ]);
}

function testMarkdownRendererProtectsBackslashLatexDelimiters() {
  setupDocsifyPlugin();

  const rendered = window.DPRMarkdown.renderMarkdownWithTables(
    'Inline \\(p_s\\) and display:\n\\[\nZ = \\sum_i x_i\n\\]',
  );

  assert.match(rendered, /\\\(p_s\\\)/);
  assert.match(rendered, /\\\[\nZ = \\sum_i x_i\n\\\]/);
  assert.doesNotMatch(rendered, /%%LATEX_/);
}

testRenderMathSupportsCommonLatexDelimiters();
testMarkdownRendererProtectsBackslashLatexDelimiters();

console.log('docsify latex rendering tests passed');
