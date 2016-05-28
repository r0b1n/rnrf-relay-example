# rnrf-relay-example
Example of using react-native-router-flux and relay

## How to run

### 1. Install `react-native`
[See](https://facebook.github.io/react-native/docs/getting-started.html).


### 2. Clone repos
You need two repos: [rnrf-relay-example](https://github.com/r0b1n/rnrf-relay-example)(this repo) and [relay-starter-kit](https://github.com/relayjs/relay-starter-kit)!

`relay-starter-kit` will work as `graphql` backend for our example.


```bash
git clone https://github.com/r0b1n/rnrf-relay-example
git clone https://github.com/relayjs/relay-starter-kit
```

### 3. Perform `npm install` in both repos.
```bash
cd rnrf-relay-example && npm i
cd ../relay-starter-kit && npm i
```

### 4. Run backend
In separate terminal run `relay-starter-kit` by executing:
```bash
npm start
```

### 5. Run mobile application.

Run example `react-native` app by executing in `rnrf-relay-example` folder:
```bash
cd rnrf-relay-example # move to folder (if needed)
# then
react-native run-ios 
# or 
react-native run-android
```
