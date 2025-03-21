import {useState, useEffect} from "react";

const rules = [
	// if it says it's a webview, let's go with that
	"WebView",
	// iOS webview will be the same as safari but missing "Safari"
	"(iPhone|iPod|iPad)(?!.*Safari)",
	// Android Lollipop and Above: webview will be the same as native but it will contain "wv"
	// Android KitKat to Lollipop webview will put Version/X.X Chrome/{version}.0.0.0
	"Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})",
	// old chrome android webview agent
	"Linux; U; Android",
];

function useIsUIWebView() {
	const [isUIWebView, setIsUIWebView] = useState(false);

	useEffect(() => {
		const checkUIWebView = () => {
			const userAgent = navigator.userAgent;
			const webviewRegExp = new RegExp("(" + rules.join("|") + ")", "ig");
			setIsUIWebView(!!userAgent.match(webviewRegExp));
		};

		checkUIWebView();
	}, []);

	return isUIWebView;
}

export default useIsUIWebView;
