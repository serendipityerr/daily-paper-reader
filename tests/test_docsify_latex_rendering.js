const assert = require('node:assert/strict');

function setupDocsifyPlugin() {
  delete global.window;
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
    beforeEach: (fn) => {
      global.window.__DPR_TEST_BEFORE_EACH__ = fn;
      window.__DPR_TEST_BEFORE_EACH__ = fn;
    },
    doneEach: noop,
  };
  const vm = {
    route: {
      file: '202606/02/test-paper.md',
      path: '/202606/02/test-paper',
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

function testMarkdownRendererNormalizesCommonLatexTypos() {
  setupDocsifyPlugin();

  const rendered = window.DPRMarkdown.renderMarkdownWithTables(
    '$$ \\mathcal{L} = \\lambda_w \\mathcal{L}{\\text{wire}} + \\lambda_b \\mathcal{L}_{\\text{bg}} $$\n' +
      '其中 $\\mathcal{L}{\\text{wire}} = \\frac{1}{\\sum_i m_i} \\sum_i m_i |\\hat{y}_i - y_i|_2^2，并设置\\lambda_w \\gg \\lambda_b$，强制模型关注导丝纹理。',
  );

  assert.match(rendered, /\\mathcal\{L\}_\{\\text\{wire\}\}/);
  assert.match(
    rendered,
    /\$\\mathcal\{L\}_\{\\text\{wire\}\} = \\frac\{1\}\{\\sum_i m_i\} \\sum_i m_i \\lVert\\hat\{y\}_i - y_i\\rVert_2\^2\$，并设置 \$\\lambda_w \\gg \\lambda_b\$/,
  );
}

function testDocsifyBeforeEachNormalizesPaperBodyLatex() {
  setupDocsifyPlugin();

  const rendered = window.__DPR_TEST_BEFORE_EACH__(
    [
      '---',
      'title: "IRBridge"',
      '---',
      '其状态可统一重参数化为：',
      '[ x^\\circ_i = f^\\circ_i x_0 + b^\\circ_i + \\sigma^\\circ_i \\epsilon_1,\\quad x^_j = f^_j x_0 + b^_j + \\sigma^_j \\epsilon_2 ]',
      '则状态 (x^\\circ_i)（恢复桥）与 (x^_j)（生成扩散）之间的转移可表达为：',
      '[ x^_j = \\alpha \\cdot x^\\circ_i + \\beta \\cdot x_0 + \\gamma + \\sigma \\epsilon,\\quad \\alpha = \\sqrt{\\frac{(\\sigma^_j)^2 - \\sigma^2}{(\\sigma^\\circ_i)^2}},; \\beta = f^_j - \\alpha f^\\circ_i,; \\gamma = b^*_j - \\alpha b^\\circ_i ]',
      '其中 (\\sigma) 是可控噪声系数。',
    ].join('\n'),
  );

  assert.match(rendered, /\\\[\s*x\^\\circ_i/);
  assert.match(rendered, /x\^\*_j = f\^\*_j x_0/);
  assert.match(rendered, /\\\(\s*x\^\\circ_i\s*\\\)/);
  assert.match(rendered, /\\\(\s*x\^\*_j\s*\\\)/);
  assert.match(rendered, /\\sigma\^\*_j/);
  assert.doesNotMatch(rendered, /(^|[^\\])\[\s*x\^/);
  assert.doesNotMatch(rendered, /\([^)]+x\^/);
  assert.doesNotMatch(rendered, /\^_/);
  assert.doesNotMatch(rendered, /,;/);
}

testRenderMathSupportsCommonLatexDelimiters();
testMarkdownRendererProtectsBackslashLatexDelimiters();
testMarkdownRendererNormalizesCommonLatexTypos();
testDocsifyBeforeEachNormalizesPaperBodyLatex();

console.log('docsify latex rendering tests passed');
