export interface HttpHeader {
	ContentType?: string;
	"Content-Type"?: string;
	Authorization?: string;
	Accept?: string;
}

export interface PostRequestInterface {
	url: string;
	headers?: HttpHeader;
	payload?: {};
}
