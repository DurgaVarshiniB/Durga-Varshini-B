# Running Namma-Kathey on Android

To run this application in Android Studio, you can use a **WebView**. This allows you to wrap the web application in a native Android container.

## 1. Create a New Project
- Open Android Studio.
- File > New > New Project.
- Select **Empty Views Activity**.
- Name: **Namma Kathey**
- Language: **Kotlin**

## 2. Update AndroidManifest.xml
Add the internet permission above the `<application>` tag:
```xml
<uses-permission android:name="android.permission.INTERNET" />
```

## 3. Update activity_main.xml
Replace the contents of `res/layout/activity_main.xml` with:
```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <WebView
        android:id="@+id/webView"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

## 4. Update MainActivity.kt
Replace the contents of your `MainActivity.kt` with the following code. 
**Note:** Replace `YOUR_APP_URL` with your actual shared app URL.

```kotlin
package com.example.nammakathey

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)
        
        // Configure WebView
        val webSettings: WebSettings = webView.settings
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webSettings.loadWithOverviewMode = true
        webSettings.useWideViewPort = true
        
        webView.webViewClient = WebViewClient()

        // Load the App URL
        // Replace this with your actual Shared App URL from AI Studio
        webView.loadUrl("https://ais-pre-tbtm3qklgio43cx7whqbgq-548322644481.asia-east1.run.app")
    }

    // Handle back button navigation in WebView
    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
```

## Recommended Approach: Capacitor
For a production-ready mobile app, we recommend using **Capacitor**. It provides native bridge capabilities and a better development workflow for React apps.

To use Capacitor:
1. `npm install @capacitor/core @capacitor/cli`
2. `npx cap init`
3. `npm run build`
4. `npm install @capacitor/android`
5. `npx cap add android`
6. `npx cap open android`
