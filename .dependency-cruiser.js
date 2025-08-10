export default {
  forbidden: [
    {
      name: 'no-unreachable-from-root',
      severity: 'error',
      from: {
        path: 'src/.*\\.tsx?$',
      },
      to: {
        path: 'src',
        reachable: false,
      },
    },
  ],
  options: {
    tsConfig: {},
    tsPreCompilationDeps: true,
    doNotFollow: {
      path: 'node_modules',
    },
  },
};
