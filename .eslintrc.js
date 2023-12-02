module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
      jest: true,
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    extends: [
      'eslint:recommended', // Conjunto de regras recomendadas do ESLint
      'plugin:react/recommended', // Regras recomendadas para projetos React
    ],
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'semi': ['error', 'always'], // Ponto e vírgula ao final
      'quotes': ['error', 'single'], // Aspas simples
      // Outras regras personalizadas ou do mercado
    },
    settings: {
      react: {
        version: 'detect', // Define para detectar automaticamente a versão do React usada no projeto
      },
    },
  };
  