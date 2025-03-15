import {LoopsClient} from "loops";

export const loops = process.env.LOOPS_API_KEY
	? new LoopsClient(process.env.LOOPS_API_KEY)
	: null;
