# Personal Website

## Edit the files
Edit only the files in the `src` directory.

## Serve using simple python server
`cd` into the `build` directory and then start up the simple python server:

```
python -m SimpleHTTPServer 8000
```

## Build assets
Make sure that `npm` is installed. And do:

```
npm install
```

To build all the assets, just do:

```
gulp
```

## Deploy to DreamHost
```
scp -r build/* laurenzou@laurenzou.com:/home/laurenzou/laurenzou.com
```
