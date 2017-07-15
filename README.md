# MagicMirror² Module: MMM-Text
'MMM-Text' is a module for displaying a simple text from an url. 

## Installation

Remote to your MM2-box with your terminal software and go to your MagicMirror's Module folder:
````bash
cd ~/MagicMirror/modules
````

Clone the repository:
````bash
git clone https://github.com/SkogDev/MMM-Text.git
````

Go to the modules folder:
````bash
cd MMM-Text
````

Add the module to the modules array in the `config/config.js` file by adding the following section. You may change this configuration later:
```
{
    module: 'MMM-Text',
    position: 'lower_third',
    config: {
        url: 'your url here'
    }
},
```

# Configuration options

The module expects the following response: 
```
{
    result: {
        currentText: 'this is the text'
    }
},
```


