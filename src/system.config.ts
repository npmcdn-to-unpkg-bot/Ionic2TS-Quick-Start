const ngVer: string = '@2.0.0-rc.4';
const formsVer: string = '@0.2.0';

const map = {
  'app': 'app',
  '@angular': 'https://npmcdn.com/@angular',
  '@angular/forms': `https://npmcdn.com/@angular/forms${formsVer}`,
  'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api',
  'rxjs': 'https://npmcdn.com/rxjs@5.0.0-beta.6',
  'typescript': 'https://npmcdn.com/typescript@1.8.10/lib/typescript.js'
};

const packages: any = {
  'app': {
    main: 'main.ts',
    defaultExtension: 'ts'
  },
  'rxjs': {
    defaultExtension: 'js'
  },
  'angular2-in-memory-web-api': {
    main: 'index.js',
    defaultExtension: 'js'
  }
};

const ngPackageNames: string[] = [
  'common',
  'compiler',
  'core',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
  'upgrade'
];

ngPackageNames.forEach((pkgName: any) => {
  map[`@angular/${pkgName}`] = `https://npmcdn.com/@angular/${pkgName}${ngVer}`;
});

ngPackageNames.forEach((pkgName: any) => {
  packages[`@angular/${pkgName}`] = {
    main: `/bundles/${pkgName}.umd.js`,
    defaultExtension: 'js'
  };
});

packages['@angular/forms'] = {
  main: 'index.js',
  defaultExtension: 'js'
};

const config = {
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  map: map,
  packages: packages
};
