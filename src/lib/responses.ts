import { OutgoingHttpHeaders } from 'http'

export class HttpResponse {

    statusCode: number
    body: any
    headers: OutgoingHttpHeaders

    constructor(statusCode: number, body: any, headers: OutgoingHttpHeaders) {
        this.statusCode = statusCode
        this.body = body
        this.headers = headers
    }

}

export class UncachedHttpResponse extends HttpResponse {
    constructor(statusCode: number, body: any, headers: OutgoingHttpHeaders) {
        super(statusCode, body, headers)
        this.headers = Object.assign({}, headers, { 'cache-control': 'private, no-store, no-cache '})
    }
}