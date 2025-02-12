This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

> # Getting Started
>
> **--Before you get startet, make these changes--**

- `android/build.gradle` and replace followint:

```
ext {
        buildToolsVersion = "34.0.0" // Use the latest valid version
        minSdkVersion = 24
        compileSdkVersion = 34 // Align with targetSdkVersion
        targetSdkVersion = 34
        ndkVersion = "26.1.10909125"
        kotlinVersion = "1.9.10" // Ensure this version exists
    }
```

- recheck proper code in `android/app/src/main/java/com/<app_name>/MainActivity.kt`

```
package com.personfinder

import android.os.Bundle;
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen;
```

- In `android/gradle.properties` add following lines

```
android.enableJetifier=true
```
