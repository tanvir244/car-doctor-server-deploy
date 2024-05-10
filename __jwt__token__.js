/**
 * ----------------------
 *     Make API Secure 
 * ----------------------
 * The person who should have 
 * 
 * concept:
 * 1. assign two tokens for each person (access token refresh token)
 * 2. access token contains: user identification (email, etc.). And token is valid for a shorter duration.
 * 3. refresh token is used: to recreate an access token that was expired.
 * if refreash token is invalid than automatically logout the user 
 */


/**
 * 1. jwt - json web token
 * 2. generate a token by using jwt.sing
 * 3. create api and the token set to cookie [httpOnly, secure, sameSite]
 * 4. from client side: axios withCredentials: true
 * 5. cors setup origin and credentials: true
 */

/**
 * 1. for secure api calls
 * 2. on server side: install cookie parser and use it as a middleware
 * 3. req.cookies
 * 4. on client side: make api call using axios withCredentials: true (or credentials: 'include' while using fetch)
 *  
 */