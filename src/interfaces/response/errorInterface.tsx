import {HttpHeader} from "../dataSource";

export interface ErrorConfigInterface {
	data?: {};
	headers?: HttpHeader;
	method?: string;
	url?: string;
	xsrfCookieName?: string;
	xsrfHeaderName?: string;
}

export interface ErrorHeaderInterface {
	"cache-control"?: string;
	connection?: string;
	"content-encoding"?: string;
	"content-type"?: string;
	date?: string;
	host?: string;
	"transfer-encoding"?: string;
	vary?: string;
	"x-powered-by"?: string;
}

export interface ResponseInterface {
	data: any;
	status: number;
	message: string;
	headers?: ErrorHeaderInterface;
	config?: ErrorConfigInterface;
}

export const initialResponse: ResponseInterface = {
	data: {},
	status: 0,
	message: "",
};
