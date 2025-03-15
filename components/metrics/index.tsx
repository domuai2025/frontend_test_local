import GoogleAnalytics from "./GoogleAnalytics";
import {MetaPixel} from "./MetaPixel";
import MicrosoftClarity from "./MicrosoftClarity";
import PromoteKit from "./PromoteKit";

const Metrics = () => (
	<>
		<PromoteKit />
		<GoogleAnalytics />
		<MicrosoftClarity />
		<MetaPixel />
	</>
);

export default Metrics;
