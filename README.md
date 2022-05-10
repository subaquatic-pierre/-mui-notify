# React Material UI Notify

[![NPM](https://img.shields.io/npm/v/react-mui-notify.svg)](https://www.npmjs.com/package/react-mui-notify)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://github.com/subaquatic-pierre/postmanager/blob/main/LICENSE)
[![Tests](https://github.com/subaquatic-pierre/react-mui-notify/actions/workflows/2_tests.yml/badge.svg)](https://github.com/subaquatic-pierre/react-mui-notify/actions/workflows/2_tests.yml)
[![Linting](https://github.com/subaquatic-pierre/react-mui-notify/actions/workflows/1_linting.yml/badge.svg)](https://github.com/subaquatic-pierre/react-mui-notify/actions/workflows/1_linting.yml)
[![Codecov](https://codecov.io/gh/subaquatic-pierre/react-mui-notify/branch/main/graph/badge.svg?token=dpSUNajYjd)](https://codecov.io/gh/subaquatic-pierre/react-mui-notify)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb_typescript-brightgreen.svg)](https://airbnb.io/javascript/react/)

Simple notification package using React and Material UI. An example can be found within with `demo` directory of this repo.

## Install

```bash
npm install --save react-mui-notify
```

## Configuration

Config object have the following attributes:

| Name | Type | Description   |
|----   |---- |--             |
| `duration` | Number | Set number of milliseconds to display notification before timeout |
| `anchorOrigin.vertical` | String | Position of vertical alignment |
| `anchorOrigin.horizontal` | String | Position of horizontal alignment |

The default config object is below.

```tsx
  const config = {
    duration: 5000,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
  };
```

A global configuration object can be passed to the `NotificationProvider` as such

```tsx
<NotificationProvider config={config}>
  {children}
</NotificationProvider>
```

or configuration options set per notification basis. If no config parameter is passed to the `setNotification` call the global config settings are used, eg. the config option passed to the `NotificationProvider` or default config if not object was passed as a prop on the `NotificationProvider`

```tsx
const handleClick = () => {
    setNotification({
      ...
      ...
      config: config
    });
  };
```

## Usage

```tsx
import React from 'react';

import { NotificationProvider } from 'react-mui-notify';
import Button from '@mui/material/Button';
import { useNotify } from 'react-mui-notify';

const NotifyButton = () => {
  const { setNotification } = useNotify();

  const handleClick = () => {
    setNotification({
      message: 'This is a notification',
      type: 'success',
    });
  };

  return (
    <Button onClick={handleClick} variant="contained" color="success">
      Demo Notify
    </Button>
  );
};

function App() {
  return (
    <NotificationProvider>
      <NotifyButton />
    </NotificationProvider>
  );
}

export default App;
```

## Notes

* In order to use theming the `NotificationProvider` will have to be within the `ThemeProvider` eg.

```tsx
<ThemeProvider theme={theme}>
  <NotificationProvider>
    {children}
  </NotificationProvider>
</ThemeProvider>
```

## License

MIT © [subaquatic-pierre](https://github.com/subaquatic-pierre)
