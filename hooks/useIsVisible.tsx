import {useCallback, useEffect, useRef} from "react";
import {useState} from "react";

export function useIsVisible<T extends Element>(): [boolean, (node: T | null) => void] {
	const [isVisible, setIsVisible] = useState(false);
	const nodeRef = useRef<T | null>(null);

	const setNodeRef = useCallback((node: T | null) => {
		nodeRef.current = node;
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsVisible(entry.isIntersecting);
		});

		if (nodeRef.current) {
			observer.observe(nodeRef.current);
		}

		return () => {
			if (nodeRef.current) {
				observer.unobserve(nodeRef.current);
			}
		};
	}, []);

	return [isVisible, setNodeRef];
}
