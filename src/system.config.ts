const ngVer = '@2.0.0-rc.4';

const  map = {
  'app':                        'app',
  'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
  'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api'
};

const packages = {
  'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
  'rxjs':                       { defaultExtension: 'js' },
  'angular2-in-memory-web-api': { defaultExtension: 'js' },
};

const packageNames = [
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/upgrade'
];

packageNames.forEach(function(pkgName) {
  map[pkgName] = 'https://npmcdn.com/' + pkgName + ngVer;
});

packageNames.forEach(function(pkgName) {
  packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
});

const config = {
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  map: map,
  packages: packages
}
