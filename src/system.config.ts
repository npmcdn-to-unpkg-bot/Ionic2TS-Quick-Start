const ngVer: string = '@2.0.0-rc.4';
const formsVer: string = '@0.2.0';

const map: any = {
  'app': 'app',
  '@angular': 'https://unpkg.com/@angular',
  '@angular/forms': `https://unpkg.com/@angular/forms${formsVer}`,
  'angular2-in-memory-web-api': 'https://unpkg.com/angular2-in-memory-web-api',
  'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.6',
  'typescript': 'https://unpkg.com/typescript@1.8.10/lib/typescript.js'
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
  map[`@angular/${pkgName}`] = `https://unpkg.com/@angular/${pkgName}${ngVer}`;
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

const config: any = {
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  meta: {
    'typescript': {
      'exports': 'ts'
    }
  },
  map: map,
  packages: packages
};

declare const System: any;

System.config(config);
