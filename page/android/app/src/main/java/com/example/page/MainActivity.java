package com.example.page;

import android.webkit.WebSettings;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    protected void load() {
        super.load();
        // WebView에서 HTTP API 요청 허용 (mixed content)
        if (getBridge() != null && getBridge().getWebView() != null) {
            getBridge().getWebView().getSettings()
                .setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }
    }
}
