export var pdfConfig = {
    required: () => {
        //pdfConfig.loadFile('//mozilla.github.io/pdf.js/build/pdf.js');
        pdfConfig.loadFile(process.env.REACT_APP_PDF_JS_FILE);
    },
    loadFile: (src:any) => {
        var script = document.createElement('script');
        script.type = 'text/javascript';        
        script.src = src;
        script.defer = true; 
        document.getElementsByTagName('head')[0].appendChild(script);
        script.onload = () => { }
    },

}

