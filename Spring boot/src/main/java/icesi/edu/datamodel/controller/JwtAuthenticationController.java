package icesi.edu.datamodel.controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import icesi.edu.datamodel.config.JwtTokenUtil;
import icesi.edu.datamodel.persistence.model.JwtRequest;
import icesi.edu.datamodel.persistence.model.JwtResponse;
import io.jsonwebtoken.ExpiredJwtException;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private UserDetailsService jwtInMemoryUserDetailsService;

	@RequestMapping(value = "/auth", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest)
			throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = jwtInMemoryUserDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new JwtResponse(token));
	}

	private void authenticate(String username, String password) throws Exception {
		Objects.requireNonNull(username);
		Objects.requireNonNull(password);

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}

	@GetMapping("/verifyToken")
    public ResponseEntity<?> verifyToken(@RequestHeader("Authorization") String authorizationHeader) {
        // Aquí implementa la lógica para verificar el token
        // Puedes utilizar el servicio JwtTokenUtil o cualquier lógica de verificación que tengas en tu aplicación

        try {
            String token = authorizationHeader.substring(7); // Elimina el prefijo "Bearer " del encabezado
            jwtTokenUtil.validateToken(token, null); // Esta podría ser una lógica personalizada en tu JwtTokenUtil

            // Devuelve "Valid" si el token es válido
            return ResponseEntity.ok().header("Authentication-Status", "Valid").body("Token válido");
        } catch (ExpiredJwtException e) {
            // Devuelve "Invalid" si el token ha expirado
            return ResponseEntity.ok().header("Authentication-Status", "Invalid").body("Token expirado");
        } catch (Exception e) {
            // Manejo de otros posibles errores al verificar el token
            return ResponseEntity.ok().header("Authentication-Status", "Invalid").body("Error al verificar el token");
        }
    }

}