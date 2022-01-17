function App() {
    var args = process.argv.slice(2);
    this.process = { }
    args.forEach((name_) => {
        let name = name_.replace(/\.js$/i,'');
        this.process[name] = new utils.Process({
            spaces: [ process.execPath, name ],
			tabs: name,
            // TODO: replace logger - need max size for files
            logger: new utils.Logger({ 
				tabsfilename: __dirname + '/logs/' + name + '.log',
                spaceslogFilesCount: 14
            })
        });
        this.process[name].run();
    })
}

global.app = new App();