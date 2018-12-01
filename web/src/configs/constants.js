/**
 * HTTP Status Codes normalmente utilizado para codificar respostas
 * 		OK:
 * 		Created:
 * 		NoContent:
 * 		BadRequest:
 * 		Unauthorized:
 * 		Forbidden:
 * 		NotFound:
 * 		Conflict:
 * 		InternalServerError:
 */
export class HTTPStatusCodes {  
	// RESPONSE ERROR CODES
	static get OK()						{ return 200 }
	static get Created()				{ return 201 }
	static get NoContent()				{ return 204 }
	static get BadRequest()				{ return 400 }
	static get Unauthorized()			{ return 401 }
	static get Forbiden()				{ return 403 }
	static get NotFound()				{ return 404 }
	static get Conflict()				{ return 409 }
	static get InternalServerError()	{ return 500 }
}