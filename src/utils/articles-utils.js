import DOMPurify from 'dompurify';

export const sanitizeData = (data) => {
	return { __html: DOMPurify.sanitize(data) };
};
