import {getURL} from "@/lib/utils";
import {MetadataRoute} from "next";
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: getURL("/sitemap.xml"),
	};
}
